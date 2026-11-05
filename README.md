# ABDULLAH-MD Web Pairing — Real Pairing Fix

This build uses the official `@whiskeysockets/baileys` v7.0.0-rc14 package and requests the real WhatsApp pairing code after the initial WhatsApp handshake/QR event.

- Fixed web name: ABDULLAH-MD
- 50 server slots
- No Telegram
- No bot-name/session-name selector
- Real `requestPairingCode()` — no fake/static code
- Pairing code request is guarded so it happens once per fresh session
- Uses `Browsers.macOS('Chrome')` for the pairing socket
- Existing commands and multi-session storage preserved

## Railway
`npm install` then `npm start`.

This environment cannot perform a live WhatsApp account-linking test, so the final verification must be done after deployment.
