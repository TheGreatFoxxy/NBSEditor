# NBSEditor

![Minecraft Note Block Image](https://static.wikia.nocookie.net/minecraft/images/9/9b/Note_Block.png/revision/latest?cb=20190921170620)



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

```git
# Clone the repository
git clone https://github.com/TheGreatFoxxy/NBSEditor.git
```

### Installing dependencies

```bash
# Install dependencies - You MUST run this first!!!
$ npm install
```

### Compile for development

```bash
# Starts a development server with live reloads and debugging features enabled. Requires Dependencies installed ($ npm install).
$ npm run serve
```

### Compile for production

```bash
# Creates a minimized build for production. Requires dependencies installed (npm install).
$ npm run build
```
