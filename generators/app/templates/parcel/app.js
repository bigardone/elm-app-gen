import { Elm } from "../Main.elm";

if (process.env.NODE_ENV === 'development') {
  const ElmDebugger = require("elm-debug-transformer");
  // Only runs in development and will be stripped from production build.
  // See https://parceljs.org/production.html
  ElmDebugger.register();
}

Elm.Main.init({
  node: document.getElementById("app")
});
