# IMOSTA Group · China Desk — china.imosta.pl

Single-page landing for Chinese entrepreneurs, importers and wholesalers in Poland (Warsaw, Wólka Kosowska / GD Poland).
Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Lucide icons.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Structure

- `src/app/page.tsx` — page composition + JSON-LD (`AccountingService`)
- `src/components/` — one component per section: `navbar`, `hero`, `solutions`, `import-vat`, `pricing`, `workflow`, `contact`, `footer`; `wechat` holds the WeChat modal, QR and ID
- `src/lib/site.ts` — contacts, registry numbers, links, navigation
- `src/app/globals.css` — palette (`night`, `crimson`) and the Chinese font fallback stack

## Before launch

- [ ] `CONTACT.wechatId` in `src/lib/site.ts` — Victoria's WeChat ID (empty = "待补充" placeholder)
- [ ] Real QR code: add `public/wechat-qr.png` and render it in `WeChatQr` (`src/components/wechat.tsx`)
- [ ] Chinese review of all copy by a native speaker; tax wording checked by the Head of Accounting
- [ ] PL / EN versions (language toggle is a placeholder)
- [ ] Vercel: import the repo, add the domain `china.imosta.pl`
