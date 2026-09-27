# EconovaChain · ECNOVA — local public-copy edition

Version: 2026.09.27-local.1. Prepared 28 September 2026 (Europe/Rome).

Based on the existing published repository ECNOVA/-ecnova-site-, branch token-site-20260927, commit 47db634966d7f292104d63c1760142e56687ec64. No new repository or branch selection is needed. Publication is authorized by the owner on 28 September 2026. Confirm the deployed commit and live file hashes before treating a release as published.

Open index.html locally. Main visitor routes: index.html, buy.html (six observed pools), airdrop.html (contribution terms), coming-soon.html (product information). RU/EN/IT share one language choice and retain it across routes. For a local HTTP preview use Python's http.server bound to 127.0.0.1 against this directory. No build dependencies.

The published design, logo and token directory are preserved. Do not replace token/metadata.json, its recovery file, the PNG or signing assets when applying this content-only update. The older signing pages are inherited public files, not part of the visitor path and not an instruction to sign again.

Apply only the paths in SITE-DELTA.json from evidence/TOKEN-SITE-CURRENT-20260927 as the approved content-only change. Before publication compare the remote head and the live metadata with the saved source; preserve intervening changes. Rollback restores only these changed paths from that source, without reverting later metadata or token operations. Verify Pages against the resulting commit and open the three visitor routes.

По-русски: откройте index.html; страницы «Пулы и обмен» и «Участие» доступны из меню. Это выбранная редакция сайта. Владелец поручил публикацию28.09 в существующей ветке token-site-20260927; подтверждение результата хранится в журнале проекта. Прежняя опубликованная версия сохранена рядом с отчётом; содержимое token/ не менялось.
