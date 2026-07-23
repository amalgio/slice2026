import urllib.request
import ssl

def get_page_text(url):
    try:
        # Create unverified SSL context to bypass SSL errors
        context = ssl._create_unverified_context()
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        )
        with urllib.request.urlopen(req, timeout=30, context=context) as response:
            html = response.read().decode('utf-8', errors='ignore')
            return html
    except Exception as e:
        return f"Error: {e}"

html_content = get_page_text("https://slice2025.in/events/event1.html")
print(f"Total HTML length: {len(html_content)}")
if not html_content.startswith("Error:"):
    with open("event1_test.html", "w", encoding="utf-8") as f:
        f.write(html_content)
    print("Saved to event1_test.html")
else:
    print(html_content)
