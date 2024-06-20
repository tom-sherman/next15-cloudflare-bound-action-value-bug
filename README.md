# Next.js 15 Cloudflare Pages Bound Action Value Bug

## Steps to reproduce

1. `pnpm i`
2. `pnpm next-on-pages`
3. `pnpm wrangler pages dev .vercel/output/static --compatibility-flag=nodejs_compat`
4. Visit the page
5. Press submit

## Expected behavior

Console on the server should log "action! ..."

## Actual behavior

Error is shown, form is not submitted.

```
Application error: a server-side exception has occurred (see the server logs for more information).
Digest: 2045022522
```
