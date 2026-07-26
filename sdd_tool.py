import sys
import os
import re
import subprocess

def get_git_root():
    try:
        out = subprocess.check_output(["git", "rev-parse", "--show-toplevel"], encoding="utf-8")
        return out.strip()
    except Exception as e:
        # Fallback to current directory
        return os.getcwd()

def ensure_sdd_dir():
    root = get_git_root()
    sdd_dir = os.path.join(root, ".superpowers", "sdd")
    os.makedirs(sdd_dir, exist_ok=True)
    
    # Write .gitignore if not present
    gitignore_path = os.path.join(sdd_dir, ".gitignore")
    if not os.path.exists(gitignore_path):
        with open(gitignore_path, "w") as f:
            f.write("*\n")
            
    return sdd_dir

def task_brief(plan_path, task_num):
    if not os.path.exists(plan_path):
        print(f"Error: plan file not found at {plan_path}", file=sys.stderr)
        sys.exit(2)
        
    sdd_dir = ensure_sdd_dir()
    out_path = os.path.join(sdd_dir, f"task-{task_num}-brief.md")
    
    with open(plan_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Split content by markdown headers (### Task X:)
    # We want to find "### Task <task_num>:" up to the next "### Task <next>:" or end of file
    lines = content.splitlines()
    task_lines = []
    in_task = False
    
    # Standard format: "### Task X:"
    header_pattern = re.compile(rf"^#+\s+Task\s+{task_num}(?:\D|$)", re.I)
    next_task_pattern = re.compile(r"^#+\s+Task\s+\d+", re.I)
    
    for line in lines:
        if header_pattern.match(line):
            in_task = True
            task_lines.append(line)
            continue
        elif in_task and next_task_pattern.match(line):
            # Hit next task, stop
            break
        
        if in_task:
            task_lines.append(line)
            
    if not task_lines:
        print(f"Error: task {task_num} not found in plan", file=sys.stderr)
        sys.exit(3)
        
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(task_lines) + "\n")
        
    print(out_path)

def get_short_sha(rev):
    try:
        out = subprocess.check_output(["git", "rev-parse", "--short", rev], encoding="utf-8")
        return out.strip()
    except Exception as e:
        return rev[:7]

def review_package(base, head):
    # Verify refs
    try:
        subprocess.check_call(["git", "rev-parse", "--verify", "--quiet", base], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except Exception:
        print(f"Error: bad BASE: {base}", file=sys.stderr)
        sys.exit(2)
        
    try:
        subprocess.check_call(["git", "rev-parse", "--verify", "--quiet", head], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except Exception:
        print(f"Error: bad HEAD: {head}", file=sys.stderr)
        sys.exit(2)
        
    sdd_dir = ensure_sdd_dir()
    base_short = get_short_sha(base)
    head_short = get_short_sha(head)
    
    out_path = os.path.join(sdd_dir, f"review-{base_short}..{head_short}.diff")
    
    try:
        commits = subprocess.check_output(["git", "log", "--oneline", f"{base}..{head}"], encoding="utf-8")
        stat = subprocess.check_output(["git", "diff", "--stat", f"{base}..{head}"], encoding="utf-8")
        diff = subprocess.check_output(["git", "diff", "-U10", f"{base}..{head}"], encoding="utf-8")
    except Exception as e:
        print(f"Error executing git: {e}", file=sys.stderr)
        sys.exit(3)
        
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(f"# Review package: {base}..{head}\n\n")
        f.write("## Commits\n")
        f.write(commits + "\n")
        f.write("## Files changed\n")
        f.write(stat + "\n")
        f.write("## Diff\n")
        f.write(diff + "\n")
        
    print(out_path)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python sdd_tool.py task-brief PLAN_FILE TASK_NUM")
        print("   or: python sdd_tool.py review-package BASE HEAD")
        sys.exit(1)
        
    cmd = sys.argv[1]
    if cmd == "task-brief":
        task_brief(sys.argv[2], sys.argv[3])
    elif cmd == "review-package":
        review_package(sys.argv[2], sys.argv[3])
    else:
        print(f"Unknown command: {cmd}", file=sys.stderr)
        sys.exit(1)
