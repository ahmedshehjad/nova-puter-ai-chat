# Nova AI Chat

A responsive single-page AI chat app powered by Puter.js, with installable Progressive Web App (PWA) support.

## Features
- Puter.js AI chat with selectable model IDs
- Conversation history saved in browser localStorage
- New/delete chats and export current chat as JSON
- Custom system prompt, creativity and token settings
- Responsive mobile layout and light/dark toggle
- Text-file and image attachment interface
- Optional Puter sign-in
- Web app manifest, app icon and service worker for offline app-shell loading
- No app-owned API key or server required

## Run locally
Puter.js requires an HTTP server (not `file://`).

1. Clone or download this repository.
2. Run `python -m http.server 8000` from the project folder.
3. Visit `http://localhost:8000`.

## Deploy and install
Deploy the repository root to any static host that serves HTTPS (for example GitHub Pages). The `manifest.webmanifest`, `sw.js`, and `icons/icon.svg` files must remain at the paths shown in the repository. Open the deployed URL in a supported browser and use its Install app / Add to Home screen option.

## Notes
- The selected model must be available to your Puter account. If a model is unavailable, choose another one.
- Puter.js may involve the user's Puter account and usage.
- Chat history and settings are stored locally in the current browser.
- The service worker caches the app shell only. AI responses still require an internet connection.
- Image attachments are currently recorded by filename/metadata; provider-native vision input is not implemented yet.
- This is a front-end starter, not a production-secure multi-user service.
