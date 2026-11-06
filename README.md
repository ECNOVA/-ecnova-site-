# EconovaChain · ECNOVA

Static, multilingual public website for ECNOVA Wallet, TimeLayer verifiable digital receipts and Scalp, a social network for traders. The three products are presented as in development. The 6 November 2026 design uses dark navy, cyan and violet glass artwork.

- Published branch: `token-site-20260927` in `ECNOVA/-ecnova-site-`.
- Domain: `ecnova.io`, configured in `CNAME`.
- Current mint: `FpCidwpKM2DP65eVyTkeqQ3R82w75foejx5wZV8dirQ2`.
- Initial issuance: 1,000,000,000 ECNOVA, 9 decimals, Solana mainnet-beta.
- Mint and freeze authorities were permanently revoked on 4 November 2026. The owner retains metadata-update authority.
- English is the default. `?lang=en`, `?lang=ru` and `?lang=it` are supported; an existing `ecnova_lang` preference is retained.
- No build dependencies, wallet connection, transaction signing, analytics or third-party JavaScript.
- Current frontend: `index.html`, `assets/site-20261106.css` and `assets/site-20261106.js`.
- Public images: `assets/hero-ecosystem.png`, `assets/timelayer-card.png`, `assets/social-preview.png`.

## Preserved token assets

| Path | SHA-256 |
| --- | --- |
| `token/releases/2026-11-01-v2/metadata.json` | `512a1915004457a9ea817bdcc591835fe3ae05a25a1d5ff196a368a4ebe6ea84` |
| `token/releases/2026-11-01-v2/icon.jpg` | `92b1f348c3e06e99e84e8ae8c95bd5c624be3add162f5aaedf486087b56e537e` |

Open `index.html` directly or serve this directory with a static HTTP server. No package installation or build step is required. Before publication, check desktop/mobile layouts, all three languages, address copying, outbound links and the asset hashes. The canonical URL and social preview metadata use `https://ecnova.io/`.
