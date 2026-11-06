# EconovaChain · ECNOVA

Static, multilingual public website for ECNOVA Wallet, TimeLayer verifiable digital receipts and Scalp, a social network for traders. The three products are presented as in development. The 6 November 2026 glass design uses a real HTML/SVG product scene with cyan and violet edges, a two-layer orbit and CSS reflections. The hero and product illustrations are code-native; poster artwork is reserved for social previews.

- Published branch: `token-site-20260927` in `ECNOVA/-ecnova-site-`.
- Domain: `ecnova.io`, configured in `CNAME`.
- Current mint: `FpCidwpKM2DP65eVyTkeqQ3R82w75foejx5wZV8dirQ2`.
- Initial issuance: 1,000,000,000 ECNOVA, 9 decimals, Solana mainnet-beta.
- Mint and freeze authorities were permanently revoked on 4 November 2026. The owner retains metadata-update authority.
- English is the default. `?lang=en`, `?lang=ru` and `?lang=it` are supported; an existing `ecnova_lang` preference is retained.
- No build dependencies, wallet connection, transaction signing, analytics or third-party JavaScript.
- Current frontend: `index.html`, `assets/glass-20261106.css` and `assets/glass-20261106.js`.
- Social preview: `assets/glass-social-20261106.png`. Token logos use the unchanged official icon. Earlier assets remain in the repository for compatibility.
- TimeLayer links in the hero and detailed section both open the official network site directly; RU uses `/ru/`, EN and IT use the root.
- Community links recovered from the original site archives: ECNOVA X/Telegram/email, plus separately labelled TimeLayer Telegram/X/Instagram/TikTok/Reddit/GitHub/Hacker News/email. Reddit may block automated access and TikTok may require sign-in.
- Public positioning explicitly includes people and AI agent systems. The wallet section describes agent configuration, operating limits and owner-controlled signing as development direction; it does not claim live delegated execution or cryptographic agent binding. TimeLayer covers independently verifiable records, while Scalp remains a social network for traders. The agent workflow link uses `#agents`; `#roadmap` remains available.
- Legacy anchors retained: `#about`, `#network`, `#token`, `#role`, `#receipts`, `#roadmap`, `#participate`, `#faq`, `#whitepaper`, `#contacts`.
- Decorative SVG orbits do not intercept pointer events. All content is visible without JavaScript; reduced-motion preferences are respected.

## Preserved token assets

| Path | SHA-256 |
| --- | --- |
| `token/releases/2026-11-01-v2/metadata.json` | `512a1915004457a9ea817bdcc591835fe3ae05a25a1d5ff196a368a4ebe6ea84` |
| `token/releases/2026-11-01-v2/icon.jpg` | `92b1f348c3e06e99e84e8ae8c95bd5c624be3add162f5aaedf486087b56e537e` |

Open `index.html` directly or serve this directory with a static HTTP server. No package installation or build step is required. Before publication, check desktop/mobile layouts, all three languages, address copying, outbound links and the asset hashes. The canonical URL and social preview metadata use `https://ecnova.io/`.
