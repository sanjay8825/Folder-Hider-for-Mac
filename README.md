# Folder Lock website (free download + Buy me a coffee)

What is in here
- index.html  the whole site (search-friendly, works on phones)
- netlify/functions/stats.mjs  live visitor and download counters
- assets/upi-qr.png  your UPI QR shown in the coffee popup
- robots.txt, sitemap.xml, llms.txt, favicon.svg, og-image.png  search and sharing files

## 1. Downloads (Google Drive, already set up)
Your two Google Drive files are already wired into CONFIG in index.html:
- "Folder Lock Silicon Chip.dmg"  -> Apple Silicon button
- "Folder Lock Intel Chip.dmg"    -> Intel button
Keep both files shared as "Anyone with the link". To release a new version, right-click the file in Drive ->
Manage versions -> Upload new version, so the link stays the same.
Heads-up: Google can temporarily block a file that many people download in a short time ("Too many users have viewed or
downloaded this file recently", up to about 24 hours), and the limit is not published. If that ever happens, move the
files to GitHub Releases or Cloudflare R2 and paste the new links into CONFIG.downloads.

## 2. Publish on Netlify (needs a Git deploy so the counters work)
1. Put this whole folder in a GitHub repository (can be the same one).
2. Netlify -> Add new site -> Import from Git -> pick the repository -> Deploy.
3. Optional: Site settings -> Environment variables -> add STATS_KEY = any secret word.
   Then open  https://YOUR-SITE/api/stats?key=YOUR_SECRET_WORD  to see visitors, downloads, and Apple Silicon vs Intel.
4. Domain: Netlify -> Domain management -> add shop.sanjaysudhakaran.in and add the DNS record Netlify shows.

## Live counters
- Visitors: counted once per browser per day. Downloads: counted each time someone clicks a Download button.
  Search-engine bots are ignored. Numbers are close, not audited.
- They start at 0. If you have REAL earlier visitors or downloads, put those numbers in CONFIG.base. Do not add made-up numbers.

## Enquiry form
Uses your existing Formspree form (the same one as your portfolio), so enquiries arrive at the email on that Formspree account.
Each email has the subject "Folder Lock website enquiry" so you can tell it apart. Turn on spam protection in the Formspree dashboard.

## Buy me a coffee
The footer button opens a popup with your QR. On phones it also shows "Open UPI app". Change the UPI ID in CONFIG if needed.
Tips go straight to your UPI account. Nothing is tracked or verified by the site.

## SEO
The site assumes https://shop.sanjaysudhakaran.in . If you use another address, find and replace it in index.html, robots.txt, sitemap.xml and llms.txt.
After it is live, add the site in Google Search Console and submit sitemap.xml.
# Folder-Hider-for-Mac
