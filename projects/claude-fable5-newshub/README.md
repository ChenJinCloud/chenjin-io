# Claude Fable 5 Newshub

Static single-page site for `claude-fable5.chenjin.io`.

Current Cloudflare Pages project:

- Project: `claude-fable5-newshub`
- Latest Pages URL: `https://51f4c507.claude-fable5-newshub.pages.dev`
- Custom domain: `https://claude-fable5.chenjin.io`

Cloudflare DNS record:

| Type | Name | Target |
| --- | --- | --- |
| CNAME | `claude-fable5` | `claude-fable5-newshub.pages.dev` |

Status as of 2026-07-03: DNS record is created and the custom domain returns HTTP 200. Latest deployed source hash: `c835b4e4f4f656d0fe6f7153b90582a21ba9cde0d008d4bb4b5544d936e2b064`.

Deploy with Cloudflare Pages:

```bash
pnpm exec wrangler pages deploy . --project-name claude-fable5-newshub --branch production
```
