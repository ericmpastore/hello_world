from playwright.sync_api import sync_playwright
import pathlib, sys

html = pathlib.Path(__file__).parent / "shutdownOS_card.html"
out  = pathlib.Path(__file__).parent / "shutdownOS.png"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1040, "height": 900})
    page.goto(html.as_uri())
    page.wait_for_timeout(1500)          # let Google Fonts load
    card = page.query_selector(".card")
    card.screenshot(path=str(out), type="png")
    browser.close()

print(f"Saved → {out}")
