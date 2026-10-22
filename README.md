# Nova — Puter.js AI Chat

A responsive single-page AI chat app powered by Puter.js.

## Run locally
Puter.js requires an HTTP server (not `file://`).

1. Unzip the project.
2. Open a terminal in this folder.
3. Run `python -m http.server 8000`
4. Visit `http://localhost:8000` in your browser.

Or upload `index.html` to a static web host / Puter hosting.

## Features
- Puter.js AI chat with selectable model IDs
- Conversation history saved in browser localStorage
- New/delete chats, export current chat as JSON
- Custom system prompt, creativity and token settings
- Responsive mobile layout, light/dark toggle
- File attachment UI, text file extraction, image attachment metadata
- Optional Puter sign-in
- No app-owned API key or server required

## Notes
- The selected model must be available to your Puter account. If a model is unavailable, choose another one.
- Puter.js uses its user-pays model; the end user's Puter account/usage may be involved.
- This is a front-end starter, not a production-secure multi-user app. Chat history stays in this browser's local storage.
- Image file content is not yet passed as native multimodal image input; image attachments are recorded by filename. Add a provider-compatible image message implementation to enable vision.
- The chat uses a non-streaming response for broad compatibility. Streaming can be added with the `stream: true` option.
