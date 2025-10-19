# ECNOVA Landing

Simple GitHub Pages site (vizitka) for **ECNOVA**.

## Structure
```
/assets         # images, logo, icons
/audio          # music/sfx (keep each file < 100 MB)
/docs           # future whitepaper etc.
index.html      # landing page
CNAME           # custom domain
```
## Publish
1. Create a public repo on GitHub (e.g. `ecnova-site`).
2. Upload all files from this folder.
3. In **Settings → Pages**: Source = Deploy from a branch, Branch = `main` `/root`.
4. Add DNS A records for root and CNAME for `www` to point at GitHub Pages.
5. SSL will be issued automatically.

_© ECNOVA, 2025_
