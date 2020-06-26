# NBSEditor

 ![Minecraft Note Block Image](https://gamepedia.cursecdn.com/minecraft_gamepedia/9/9b/Note_Block.png)



[Minecraft Note Block Studio](https://www.stuffbydavid.com/mcnbs) as a website.

NBSEditor is a Vue app using vue-cli. The entry point is src/main.js.

NBSEditor has a MIT License. For info, read LICENSE.md

NBSEditor can load your ``` .nbs ``` Minecraft Note Block Songs, edit them, and save the updated song files back to your PC. songs can only have the default instruments. Any custom instruments are not supported. Be sure there is no error message that shows when a ``` .nbs ``` file that has custom intruments, or instruments not supported by NBSEditor.

## Controls
 
 add block : ``` left click ```
 delete block : ``` right click ```
 scroll left/right : ``` click then drag the scroll bar at bottom ```
## Project Setup

### Cloning

```bash
git clone https://github.com/pressstartgaming/NBSEditor
```

### Installing dependencies

```bash
# Install dependencies - Requires installed Node.js, and a network connection
npm install
```

### Compile for development

```bash
# Starts a development server with live reloads and debugging features enabled. Requires network connection, and Dependencies installed (npm install).
npm run serve
```

### Compile for production

```bash
# Creates a minimized build for production. Requires installed Node.js, and dependencies installed (npm install).
npm run build
```
