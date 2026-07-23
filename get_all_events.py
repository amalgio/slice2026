import urllib.request
import ssl
import re

def get_page_text(url):
    try:
        context = ssl._create_unverified_context()
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        )
        with urllib.request.urlopen(req, timeout=15, context=context) as response:
            return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        return f"Error: {e}"

def clean_html(html):
    html = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', html, flags=re.I)
    html = re.sub(r'<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>', '', html, flags=re.I)
    text = re.sub(r'<[^>]+>', ' ', html)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def parse_event(html, event_id):
    if html.startswith("Error:"):
        return None
    
    # Extract Title
    title_match = re.search(r'<title>(.*?)<\/title>', html, re.I)
    title = title_match.group(1).strip() if title_match else f"Event {event_id}"
    
    # Extract Header h1 and tagline
    h1_match = re.search(r'<div class="header">\s*<h1>(.*?)<\/h1>\s*<p>(.*?)<\/p>', html, re.I | re.S)
    tagline = ""
    if h1_match:
        title = h1_match.group(1).strip()
        tagline = h1_match.group(2).strip()
        
    # Extract Description
    desc_match = re.search(r'<h2 class="content-title">Description<\/h2>\s*<div class="content-body">(.*?)<\/div>', html, re.I | re.S)
    description = ""
    rounds_info = ""
    if desc_match:
        body = desc_match.group(1)
        # Find description paragraph (usually first <p>)
        p_match = re.search(r'<p>(.*?)<\/p>', body, re.I | re.S)
        if p_match:
            description = clean_html(p_match.group(1))
            
        # Find rounds description
        rounds_desc_match = re.search(r'<h2 class="content-title">Flow of Event<\/h2>(.*)$', body, re.I | re.S)
        if not rounds_desc_match:
            rounds_desc_match = re.search(r'Flow of Event<\/h2>(.*)$', body, re.I | re.S)
        if rounds_desc_match:
            rounds_info = clean_html(rounds_desc_match.group(1))
        else:
            # Fallback if "Flow of Event" header is different
            rounds_info = clean_html(body)
            
    # Extract Contacts and Coordinators
    # Find contacts in feature-item
    contacts = []
    # Contact numbers: match +91 or typical phone patterns
    phone_matches = re.findall(r'(\+91\s*\d{10}|\d{10}|\d{5}\s*\d{5})', html)
    for p in phone_matches:
        if p not in contacts:
            contacts.append(p)
            
    # Coordinators
    coordinators_match = re.search(r'Event Coordinators<\/div>\s*<div class="feature-desc">(.*?)<\/div>', html, re.I | re.S)
    coordinators = ""
    if coordinators_match:
        coordinators = clean_html(coordinators_match.group(1)).replace("<br>", ", ").replace("<br/>", ", ")
        
    # Registration Link
    reg_match = re.search(r'href="(https:\/\/docs\.google\.com\/forms\/.*?)"', html, re.I)
    reg_link = reg_match.group(1) if reg_match else ""
    
    return {
        "id": f"event{event_id}",
        "title": title,
        "tagline": tagline,
        "description": description,
        "rounds_info": rounds_info,
        "contacts": ", ".join(contacts),
        "coordinators": coordinators,
        "reg_link": reg_link
    }

events_summary = []
print("Starting event scraping...")
for i in range(1, 11):
    url = f"https://slice2025.in/events/event{i}.html"
    print(f"Fetching event {i}...")
    html = get_page_text(url)
    evt = parse_event(html, i)
    if evt:
        events_summary.append(evt)
        print(f"Successfully scraped: {evt['title']}")
    else:
        print(f"Failed or missing event {i}")

# Write to markdown summary file
with open("previous_year_events.md", "w", encoding="utf-8") as f:
    f.write("# SLICE 2025 Previous Year Events Summary\n\n")
    for e in events_summary:
        f.write(f"## {e['title']}\n")
        if e['tagline']:
            f.write(f"*{e['tagline']}*\n\n")
        f.write(f"**Description:** {e['description']}\n\n")
        f.write(f"**Flow of Event:** {e['rounds_info']}\n\n")
        f.write(f"**Coordinators:** {e['coordinators']}\n\n")
        f.write(f"**Contacts:** {e['contacts']}\n\n")
        f.write(f"**Registration Link:** {e['reg_link']}\n\n")
        f.write("---\n\n")

print(f"Completed! Scraped {len(events_summary)} events and saved to previous_year_events.md")
