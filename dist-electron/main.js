process.env.APP_ROOT = path.join(__dirname, "..");
const o = path.join(process.env.APP_ROOT, "dist-electron"), p = path.join(process.env.APP_ROOT, ".output/public");
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, "public") : p;
let e;
function n() {
  e = new BrowserWindow({
    webPreferences: {
      preload: path.join(o, "preload.js")
    }
  }), process.env.VITE_DEV_SERVER_URL ? (e.loadURL(process.env.VITE_DEV_SERVER_URL), e.webContents.openDevTools()) : e.loadFile(path.join(process.env.VITE_PUBLIC, "index.html"));
}
function t() {
  ipcMain.handle("app-start-time", () => (/* @__PURE__ */ new Date()).toLocaleString());
}
app.on("window-all-closed", () => {
  process.platform !== "darwin" && (app.quit(), e = null);
});
app.on("activate", () => {
  BrowserWindow.getAllWindows().length === 0 && n();
});
app.whenReady().then(() => {
  t(), n();
});
export {
  o as MAIN_DIST,
  p as RENDERER_DIST
};
