// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
    /* eslint-disable no-undef */
    var globalObject =
        typeof globalThis !== 'undefined'
            ? globalThis
            : typeof self !== 'undefined'
                ? self
                : typeof window !== 'undefined'
                    ? window
                    : typeof global !== 'undefined'
                        ? global
                        : {};
    /* eslint-enable no-undef */

    // Save the require from previous bundle to this closure if any
    var previousRequire =
        typeof globalObject[parcelRequireName] === 'function' &&
        globalObject[parcelRequireName];

    var cache = previousRequire.cache || {};
    // Do not use `require` to prevent Webpack from trying to bundle this call
    var nodeRequire =
        typeof module !== 'undefined' &&
        typeof module.require === 'function' &&
        module.require.bind(module);

    function newRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                // if we cannot find the module within our internal map or
                // cache jump to the current global require ie. the last bundle
                // that was added to the page.
                var currentRequire =
                    typeof globalObject[parcelRequireName] === 'function' &&
                    globalObject[parcelRequireName];
                if (!jumped && currentRequire) {
                    return currentRequire(name, true);
                }

                // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.
                if (previousRequire) {
                    return previousRequire(name, true);
                }

                // Try the node require function if it exists.
                if (nodeRequire && typeof name === 'string') {
                    return nodeRequire(name);
                }

                var err = new Error("Cannot find module '" + name + "'");
                err.code = 'MODULE_NOT_FOUND';
                throw err;
            }

            localRequire.resolve = resolve;
            localRequire.cache = {};

            var module = (cache[name] = new newRequire.Module(name));

            modules[name][0].call(
                module.exports,
                localRequire,
                module,
                module.exports,
                this
            );
        }

        return cache[name].exports;

        function localRequire(x) {
            var res = localRequire.resolve(x);
            return res === false ? {} : newRequire(res);
        }

        function resolve(x) {
            var id = modules[name][1][x];
            return id != null ? id : x;
        }
    }

    function Module(moduleName) {
        this.id = moduleName;
        this.bundle = newRequire;
        this.exports = {};
    }

    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function (id, exports) {
        modules[id] = [
            function (require, module) {
                module.exports = exports;
            },
            {},
        ];
    };

    Object.defineProperty(newRequire, 'root', {
        get: function () {
            return globalObject[parcelRequireName];
        },
    });

    globalObject[parcelRequireName] = newRequire;

    for (var i = 0; i < entry.length; i++) {
        newRequire(entry[i]);
    }

    if (mainEntry) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(mainEntry);

        // CommonJS
        if (typeof exports === 'object' && typeof module !== 'undefined') {
            module.exports = mainExports;

            // RequireJS
        } else if (typeof define === 'function' && define.amd) {
            define(function () {
                return mainExports;
            });

            // <script>
        } else if (globalName) {
            this[globalName] = mainExports;
        }
    }
})({
    "7Aums": [function (require, module, exports) {
        var global = arguments[3];
        var HMR_HOST = null;
        var HMR_PORT = null;
        var HMR_SECURE = false;
        var HMR_ENV_HASH = "d6ea1d42532a7575";
        module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
        "use strict";
  /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
  import type {
    HMRAsset,
    HMRMessage,
  } from '@parcel/reporter-dev-server/src/HMRServer.js';
  interface ParcelRequire {
    (string): mixed;
    cache: {|[string]: ParcelModule|};
    hotData: mixed;
    Module: any;
    parent: ?ParcelRequire;
    isParcelRequire: true;
    modules: {|[string]: [Function, {|[string]: string|}]|};
    HMR_BUNDLE_ID: string;
    root: ParcelRequire;
  }
  interface ParcelModule {
    hot: {|
      data: mixed,
      accept(cb: (Function) => void): void,
      dispose(cb: (mixed) => void): void,
      // accept(deps: Array<string> | string, cb: (Function) => void): void,
      // decline(): void,
      _acceptCallbacks: Array<(Function) => void>,
      _disposeCallbacks: Array<(mixed) => void>,
    |};
  }
  interface ExtensionContext {
    runtime: {|
      reload(): void,
      getURL(url: string): string;
      getManifest(): {manifest_version: number, ...};
    |};
  }
  declare var module: {bundle: ParcelRequire, ...};
  declare var HMR_HOST: string;
  declare var HMR_PORT: string;
  declare var HMR_ENV_HASH: string;
  declare var HMR_SECURE: boolean;
  declare var chrome: ExtensionContext;
  declare var browser: ExtensionContext;
  declare var __parcel__import__: (string) => Promise<void>;
  declare var __parcel__importScripts__: (string) => Promise<void>;
  declare var globalThis: typeof self;
  declare var ServiceWorkerGlobalScope: Object;
  */ var OVERLAY_ID = "__parcel__error__overlay__";
        var OldModule = module.bundle.Module;
        function Module(moduleName) {
            OldModule.call(this, moduleName);
            this.hot = {
                data: module.bundle.hotData,
                _acceptCallbacks: [],
                _disposeCallbacks: [],
                accept: function (fn) {
                    this._acceptCallbacks.push(fn || function () { });
                },
                dispose: function (fn) {
                    this._disposeCallbacks.push(fn);
                }
            };
            module.bundle.hotData = undefined;
        }
        module.bundle.Module = Module;
        var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */;
        function getHostname() {
            return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
        }
        function getPort() {
            return HMR_PORT || location.port;
        } // eslint-disable-next-line no-redeclare
        var parent = module.bundle.parent;
        if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
            var hostname = getHostname();
            var port = getPort();
            var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
            var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
            var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
            // eval may also be disabled via CSP, so do a quick check.
            var supportsSourceURL = false;
            try {
                (0, eval)('throw new Error("test"); //# sourceURL=test.js');
            } catch (err) {
                supportsSourceURL = err.stack.includes("test.js");
            } // $FlowFixMe
            ws.onmessage = async function (event) {
                checkedAssets = {} /*: {|[string]: boolean|} */;
                acceptedAssets = {} /*: {|[string]: boolean|} */;
                assetsToAccept = [];
                var data = JSON.parse(event.data);
                if (data.type === "update") {
                    // Remove error overlay if there is one
                    if (typeof document !== "undefined") removeErrorOverlay();
                    let assets = data.assets.filter((asset) => asset.envHash === HMR_ENV_HASH); // Handle HMR Update
                    let handled = assets.every((asset) => {
                        return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                    });
                    if (handled) {
                        console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                        if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                        await hmrApplyUpdates(assets);
                        for (var i = 0; i < assetsToAccept.length; i++) {
                            var id = assetsToAccept[i][1];
                            if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                        }
                    } else fullReload();
                }
                if (data.type === "error") {
                    // Log parcel errors to console
                    for (let ansiDiagnostic of data.diagnostics.ansi) {
                        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                        console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
                    }
                    if (typeof document !== "undefined") {
                        // Render the fancy html overlay
                        removeErrorOverlay();
                        var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                        document.body.appendChild(overlay);
                    }
                }
            };
            ws.onerror = function (e) {
                console.error(e.message);
            };
            ws.onclose = function () {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
        function removeErrorOverlay() {
            var overlay = document.getElementById(OVERLAY_ID);
            if (overlay) {
                overlay.remove();
                console.log("[parcel] ✨ Error resolved");
            }
        }
        function createErrorOverlay(diagnostics) {
            var overlay = document.createElement("div");
            overlay.id = OVERLAY_ID;
            let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
            for (let diagnostic of diagnostics) {
                let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame) => {
                    return `${p}
  <a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
  ${frame.code}`;
                }, "") : diagnostic.stack;
                errorHTML += `
        <div>
          <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
            🚨 ${diagnostic.message}
          </div>
          <pre>${stack}</pre>
          <div>
            ${diagnostic.hints.map((hint) => "<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
          </div>
          ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
        </div>
      `;
            }
            errorHTML += "</div>";
            overlay.innerHTML = errorHTML;
            return overlay;
        }
        function fullReload() {
            if ("reload" in location) location.reload();
            else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
        }
        function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
            var modules = bundle.modules;
            if (!modules) return [];
            var parents = [];
            var k, d, dep;
            for (k in modules) for (d in modules[k][1]) {
                dep = modules[k][1][d];
                if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
                    bundle,
                    k
                ]);
            }
            if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
            return parents;
        }
        function updateLink(link) {
            var newLink = link.cloneNode();
            newLink.onload = function () {
                if (link.parentNode !== null) // $FlowFixMe
                    link.parentNode.removeChild(link);
            };
            newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
            link.parentNode.insertBefore(newLink, link.nextSibling);
        }
        var cssTimeout = null;
        function reloadCSS() {
            if (cssTimeout) return;
            cssTimeout = setTimeout(function () {
                var links = document.querySelectorAll('link[rel="stylesheet"]');
                for (var i = 0; i < links.length; i++) {
                    // $FlowFixMe[incompatible-type]
                    var href = links[i].getAttribute("href");
                    var hostname = getHostname();
                    var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
                    var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
                    if (!absolute) updateLink(links[i]);
                }
                cssTimeout = null;
            }, 50);
        }
        function hmrDownload(asset) {
            if (asset.type === "js") {
                if (typeof document !== "undefined") {
                    let script = document.createElement("script");
                    script.src = asset.url + "?t=" + Date.now();
                    if (asset.outputFormat === "esmodule") script.type = "module";
                    return new Promise((resolve, reject) => {
                        var _document$head;
                        script.onload = () => resolve(script);
                        script.onerror = reject;
                        (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                    });
                } else if (typeof importScripts === "function") {
                    // Worker scripts
                    if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
                    else return new Promise((resolve, reject) => {
                        try {
                            importScripts(asset.url + "?t=" + Date.now());
                            resolve();
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            }
        }
        async function hmrApplyUpdates(assets) {
            global.parcelHotUpdate = Object.create(null);
            let scriptsToRemove;
            try {
                // If sourceURL comments aren't supported in eval, we need to load
                // the update from the dev server over HTTP so that stack traces
                // are correct in errors/logs. This is much slower than eval, so
                // we only do it if needed (currently just Safari).
                // https://bugs.webkit.org/show_bug.cgi?id=137297
                // This path is also taken if a CSP disallows eval.
                if (!supportsSourceURL) {
                    let promises = assets.map((asset) => {
                        var _hmrDownload;
                        return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err) => {
                            // Web extension bugfix for Chromium
                            // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                            if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                                if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                                    extCtx.runtime.reload();
                                    return;
                                }
                                asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                                return hmrDownload(asset);
                            }
                            throw err;
                        });
                    });
                    scriptsToRemove = await Promise.all(promises);
                }
                assets.forEach(function (asset) {
                    hmrApply(module.bundle.root, asset);
                });
            } finally {
                delete global.parcelHotUpdate;
                if (scriptsToRemove) scriptsToRemove.forEach((script) => {
                    if (script) {
                        var _document$head2;
                        (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
                    }
                });
            }
        }
        function hmrApply(bundle, asset) {
            var modules = bundle.modules;
            if (!modules) return;
            if (asset.type === "css") reloadCSS();
            else if (asset.type === "js") {
                let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
                if (deps) {
                    if (modules[asset.id]) {
                        // Remove dependencies that are removed and will become orphaned.
                        // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                        let oldDeps = modules[asset.id][1];
                        for (let dep in oldDeps) if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                            let id = oldDeps[dep];
                            let parents = getParents(module.bundle.root, id);
                            if (parents.length === 1) hmrDelete(module.bundle.root, id);
                        }
                    }
                    if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
                        // support for source maps is better with eval.
                        (0, eval)(asset.output);
                    // $FlowFixMe
                    let fn = global.parcelHotUpdate[asset.id];
                    modules[asset.id] = [
                        fn,
                        deps
                    ];
                } else if (bundle.parent) hmrApply(bundle.parent, asset);
            }
        }
        function hmrDelete(bundle, id) {
            let modules = bundle.modules;
            if (!modules) return;
            if (modules[id]) {
                // Collect dependencies that will become orphaned when this module is deleted.
                let deps = modules[id][1];
                let orphans = [];
                for (let dep in deps) {
                    let parents = getParents(module.bundle.root, deps[dep]);
                    if (parents.length === 1) orphans.push(deps[dep]);
                } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
                delete modules[id];
                delete bundle.cache[id]; // Now delete the orphans.
                orphans.forEach((id) => {
                    hmrDelete(module.bundle.root, id);
                });
            } else if (bundle.parent) hmrDelete(bundle.parent, id);
        }
        function hmrAcceptCheck(bundle, id, depsByBundle) {
            if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
            // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
            let parents = getParents(module.bundle.root, id);
            let accepted = false;
            while (parents.length > 0) {
                let v = parents.shift();
                let a = hmrAcceptCheckOne(v[0], v[1], null);
                if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
                    accepted = true;
                else {
                    // Otherwise, queue the parents in the next level upward.
                    let p = getParents(module.bundle.root, v[1]);
                    if (p.length === 0) {
                        // If there are no parents, then we've reached an entry without accepting. Reload.
                        accepted = false;
                        break;
                    }
                    parents.push(...p);
                }
            }
            return accepted;
        }
        function hmrAcceptCheckOne(bundle, id, depsByBundle) {
            var modules = bundle.modules;
            if (!modules) return;
            if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
                // If we reached the root bundle without finding where the asset should go,
                // there's nothing to do. Mark as "accepted" so we don't reload the page.
                if (!bundle.parent) return true;
                return hmrAcceptCheck(bundle.parent, id, depsByBundle);
            }
            if (checkedAssets[id]) return true;
            checkedAssets[id] = true;
            var cached = bundle.cache[id];
            assetsToAccept.push([
                bundle,
                id
            ]);
            if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
        }
        function hmrAcceptRun(bundle, id) {
            var cached = bundle.cache[id];
            bundle.hotData = {};
            if (cached && cached.hot) cached.hot.data = bundle.hotData;
            if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function (cb) {
                cb(bundle.hotData);
            });
            delete bundle.cache[id];
            bundle(id);
            cached = bundle.cache[id];
            if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function (cb) {
                var assetsToAlsoAccept = cb(function () {
                    return getParents(module.bundle.root, id);
                });
                if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
                    assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
            });
            acceptedAssets[id] = true;
        }

    }, {}], "bNKaB": [function (require, module, exports) {
        var _colorConvert = require("color-convert");
        var _notyf = require("notyf");
        var _notyfMinCss = require("notyf/notyf.min.css");
        var _color = require("./modules/Color");
        var _utils = require("./modules/utils");
        // Instancier Notyf
        const notyf = new (0, _notyf.Notyf)();
        // Cherche l'élément <form> dans le DOM
        const formElement = document.querySelector("form");
        // Cherche l'élément <main> des couleurs dans le DOM
        const colorContainer = document.querySelector("main");
        const handleForm = (e) => {
            try {
                // Empêche le refresh lors de la soumission du formulaire
                e.preventDefault();
                // Cherche la valeur de l'élément <input>
                const inputValue = e.target.firstElementChild.value;
                // Vérifie que la valeur soit bien un code hexadécimal
                if (!(0, _utils.isHexColor)(inputValue)) // Si ce n'est pas le cas, balancer l'erreur
                    throw new Error(`${inputValue} is not a valid Hexadecimal color`);
                // Crée la palette à partir du code hexadécimal
                const palette = (0, _utils.generatePalette)(inputValue);
                displayColors(inputValue, palette);
            } catch (err) {
                // Attrape les erreurs du block try et les affiche dans une notification.
                notyf.error(err.message);
            }
        };
        const handleClick = async (e) => {
            // Cherche l'élément avec la classe "color" le plus proche de la cible du
            // click et récupère son data-color.
            const color = e.target.closest(".color").dataset.color;
            // Copie de façon asynchrone la couleur dans le presse-papier
            await navigator.clipboard.writeText(color);
            // Affiche un message de succès dans une notification
            notyf.success(`copied ${color} to clipboard`);
        };
        const displayColors = (input, palette) => {
            // Efface tout le contenu de l'élément <main>
            colorContainer.innerHTML = "";
            // Cherche l'élément header dans le DOM
            const header = document.querySelector("header");
            // Ajoute la classe "minimized" au header
            header.classList.add("minimized");
            // Reçoit l'input du formulaire, et modifie la variable css "--shadow-color"
            // avec ce qui sort de la fonction hexToCSSHSL.
            document.documentElement.style.setProperty("--shadow-color", (0, _utils.hexToCSSHSL)(input));
            // Crée un tableau avec les index de la palette que nous souhaitons
            // transformer en hex pour le dégradé. On le map ensuite de telle sorte
            // à recevoir en retour les valeur hex pour chaque couleur de la palette
            // à l'index du tableau de départ. On ajoute également un "#" au début
            // des chaînes de caractère.
            const gradientColors = [
                0,
                Math.round(palette.length / 2),
                palette.length - 1
            ].map((index) => `#${_colorConvert.hsl.hex(palette[index])}`);
            // Utilise les valeurs du tableau gradientColors pour modifier le dégradé.
            document.body.style.background = `linear-gradient(-45deg, ${gradientColors.join(",")}`;
            // Redéfinis background-size.
            document.body.style.backgroundSize = `400% 400%`;
            // Prend chaque élément dans le tableau palette, instancie une classe avec
            // ses données et appelle la méthode display() dessus.
            palette.map((c) => new (0, _color.Color)(c).display(colorContainer));
        };
        formElement.addEventListener("submit", handleForm);
        colorContainer.addEventListener("click", handleClick);

    }, { "color-convert": "bvUlS", "./modules/Color": "fxdfr", "./modules/utils": "hA2Bv", "notyf": "2LIPM", "notyf/notyf.min.css": "bpCRw" }], "bvUlS": [function (require, module, exports) {
        const conversions = require("ff408f2f2f65a5d9");
        const route = require("aadd536469104906");
        const convert = {};
        const models = Object.keys(conversions);
        function wrapRaw(fn) {
            const wrappedFn = function (...args) {
                const arg0 = args[0];
                if (arg0 === undefined || arg0 === null) return arg0;
                if (arg0.length > 1) args = arg0;
                return fn(args);
            };
            // Preserve .conversion property if there is one
            if ("conversion" in fn) wrappedFn.conversion = fn.conversion;
            return wrappedFn;
        }
        function wrapRounded(fn) {
            const wrappedFn = function (...args) {
                const arg0 = args[0];
                if (arg0 === undefined || arg0 === null) return arg0;
                if (arg0.length > 1) args = arg0;
                const result = fn(args);
                // We're assuming the result is an array here.
                // see notice in conversions.js; don't use box types
                // in conversion functions.
                if (typeof result === "object") for (let len = result.length, i = 0; i < len; i++)result[i] = Math.round(result[i]);
                return result;
            };
            // Preserve .conversion property if there is one
            if ("conversion" in fn) wrappedFn.conversion = fn.conversion;
            return wrappedFn;
        }
        models.forEach((fromModel) => {
            convert[fromModel] = {};
            Object.defineProperty(convert[fromModel], "channels", {
                value: conversions[fromModel].channels
            });
            Object.defineProperty(convert[fromModel], "labels", {
                value: conversions[fromModel].labels
            });
            const routes = route(fromModel);
            const routeModels = Object.keys(routes);
            routeModels.forEach((toModel) => {
                const fn = routes[toModel];
                convert[fromModel][toModel] = wrapRounded(fn);
                convert[fromModel][toModel].raw = wrapRaw(fn);
            });
        });
        module.exports = convert;

    }, { "ff408f2f2f65a5d9": "C4O54", "aadd536469104906": "iJmBL" }], "C4O54": [function (require, module, exports) {
  /* MIT license */ /* eslint-disable no-mixed-operators */ const cssKeywords = require("5a9acc0b7c02c736");
        // NOTE: conversions should only return primitive values (i.e. arrays, or
        //       values that give correct `typeof` results).
        //       do not use box values types (i.e. Number(), String(), etc.)
        const reverseKeywords = {};
        for (const key of Object.keys(cssKeywords)) reverseKeywords[cssKeywords[key]] = key;
        const convert = {
            rgb: {
                channels: 3,
                labels: "rgb"
            },
            hsl: {
                channels: 3,
                labels: "hsl"
            },
            hsv: {
                channels: 3,
                labels: "hsv"
            },
            hwb: {
                channels: 3,
                labels: "hwb"
            },
            cmyk: {
                channels: 4,
                labels: "cmyk"
            },
            xyz: {
                channels: 3,
                labels: "xyz"
            },
            lab: {
                channels: 3,
                labels: "lab"
            },
            lch: {
                channels: 3,
                labels: "lch"
            },
            hex: {
                channels: 1,
                labels: [
                    "hex"
                ]
            },
            keyword: {
                channels: 1,
                labels: [
                    "keyword"
                ]
            },
            ansi16: {
                channels: 1,
                labels: [
                    "ansi16"
                ]
            },
            ansi256: {
                channels: 1,
                labels: [
                    "ansi256"
                ]
            },
            hcg: {
                channels: 3,
                labels: [
                    "h",
                    "c",
                    "g"
                ]
            },
            apple: {
                channels: 3,
                labels: [
                    "r16",
                    "g16",
                    "b16"
                ]
            },
            gray: {
                channels: 1,
                labels: [
                    "gray"
                ]
            }
        };
        module.exports = convert;
        // Hide .channels and .labels properties
        for (const model of Object.keys(convert)) {
            if (!("channels" in convert[model])) throw new Error("missing channels property: " + model);
            if (!("labels" in convert[model])) throw new Error("missing channel labels property: " + model);
            if (convert[model].labels.length !== convert[model].channels) throw new Error("channel and label counts mismatch: " + model);
            const { channels, labels } = convert[model];
            delete convert[model].channels;
            delete convert[model].labels;
            Object.defineProperty(convert[model], "channels", {
                value: channels
            });
            Object.defineProperty(convert[model], "labels", {
                value: labels
            });
        }
        convert.rgb.hsl = function (rgb) {
            const r = rgb[0] / 255;
            const g = rgb[1] / 255;
            const b = rgb[2] / 255;
            const min = Math.min(r, g, b);
            const max = Math.max(r, g, b);
            const delta = max - min;
            let h;
            let s;
            if (max === min) h = 0;
            else if (r === max) h = (g - b) / delta;
            else if (g === max) h = 2 + (b - r) / delta;
            else if (b === max) h = 4 + (r - g) / delta;
            h = Math.min(h * 60, 360);
            if (h < 0) h += 360;
            const l = (min + max) / 2;
            if (max === min) s = 0;
            else if (l <= 0.5) s = delta / (max + min);
            else s = delta / (2 - max - min);
            return [
                h,
                s * 100,
                l * 100
            ];
        };
        convert.rgb.hsv = function (rgb) {
            let rdif;
            let gdif;
            let bdif;
            let h;
            let s;
            const r = rgb[0] / 255;
            const g = rgb[1] / 255;
            const b = rgb[2] / 255;
            const v = Math.max(r, g, b);
            const diff = v - Math.min(r, g, b);
            const diffc = function (c) {
                return (v - c) / 6 / diff + 0.5;
            };
            if (diff === 0) {
                h = 0;
                s = 0;
            } else {
                s = diff / v;
                rdif = diffc(r);
                gdif = diffc(g);
                bdif = diffc(b);
                if (r === v) h = bdif - gdif;
                else if (g === v) h = 1 / 3 + rdif - bdif;
                else if (b === v) h = 2 / 3 + gdif - rdif;
                if (h < 0) h += 1;
                else if (h > 1) h -= 1;
            }
            return [
                h * 360,
                s * 100,
                v * 100
            ];
        };
        convert.rgb.hwb = function (rgb) {
            const r = rgb[0];
            const g = rgb[1];
            let b = rgb[2];
            const h = convert.rgb.hsl(rgb)[0];
            const w = 1 / 255 * Math.min(r, Math.min(g, b));
            b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
            return [
                h,
                w * 100,
                b * 100
            ];
        };
        convert.rgb.cmyk = function (rgb) {
            const r = rgb[0] / 255;
            const g = rgb[1] / 255;
            const b = rgb[2] / 255;
            const k = Math.min(1 - r, 1 - g, 1 - b);
            const c = (1 - r - k) / (1 - k) || 0;
            const m = (1 - g - k) / (1 - k) || 0;
            const y = (1 - b - k) / (1 - k) || 0;
            return [
                c * 100,
                m * 100,
                y * 100,
                k * 100
            ];
        };
        function comparativeDistance(x, y) {
      /*
          See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
      */ return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
        }
        convert.rgb.keyword = function (rgb) {
            const reversed = reverseKeywords[rgb];
            if (reversed) return reversed;
            let currentClosestDistance = Infinity;
            let currentClosestKeyword;
            for (const keyword of Object.keys(cssKeywords)) {
                const value = cssKeywords[keyword];
                // Compute comparative distance
                const distance = comparativeDistance(rgb, value);
                // Check if its less, if so set as closest
                if (distance < currentClosestDistance) {
                    currentClosestDistance = distance;
                    currentClosestKeyword = keyword;
                }
            }
            return currentClosestKeyword;
        };
        convert.keyword.rgb = function (keyword) {
            return cssKeywords[keyword];
        };
        convert.rgb.xyz = function (rgb) {
            let r = rgb[0] / 255;
            let g = rgb[1] / 255;
            let b = rgb[2] / 255;
            // Assume sRGB
            r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
            g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
            b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
            const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
            const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
            const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
            return [
                x * 100,
                y * 100,
                z * 100
            ];
        };
        convert.rgb.lab = function (rgb) {
            const xyz = convert.rgb.xyz(rgb);
            let x = xyz[0];
            let y = xyz[1];
            let z = xyz[2];
            x /= 95.047;
            y /= 100;
            z /= 108.883;
            x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
            y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
            z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
            const l = 116 * y - 16;
            const a = 500 * (x - y);
            const b = 200 * (y - z);
            return [
                l,
                a,
                b
            ];
        };
        convert.hsl.rgb = function (hsl) {
            const h = hsl[0] / 360;
            const s = hsl[1] / 100;
            const l = hsl[2] / 100;
            let t2;
            let t3;
            let val;
            if (s === 0) {
                val = l * 255;
                return [
                    val,
                    val,
                    val
                ];
            }
            if (l < 0.5) t2 = l * (1 + s);
            else t2 = l + s - l * s;
            const t1 = 2 * l - t2;
            const rgb = [
                0,
                0,
                0
            ];
            for (let i = 0; i < 3; i++) {
                t3 = h + 1 / 3 * -(i - 1);
                if (t3 < 0) t3++;
                if (t3 > 1) t3--;
                if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;
                else if (2 * t3 < 1) val = t2;
                else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
                else val = t1;
                rgb[i] = val * 255;
            }
            return rgb;
        };
        convert.hsl.hsv = function (hsl) {
            const h = hsl[0];
            let s = hsl[1] / 100;
            let l = hsl[2] / 100;
            let smin = s;
            const lmin = Math.max(l, 0.01);
            l *= 2;
            s *= l <= 1 ? l : 2 - l;
            smin *= lmin <= 1 ? lmin : 2 - lmin;
            const v = (l + s) / 2;
            const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
            return [
                h,
                sv * 100,
                v * 100
            ];
        };
        convert.hsv.rgb = function (hsv) {
            const h = hsv[0] / 60;
            const s = hsv[1] / 100;
            let v = hsv[2] / 100;
            const hi = Math.floor(h) % 6;
            const f = h - Math.floor(h);
            const p = 255 * v * (1 - s);
            const q = 255 * v * (1 - s * f);
            const t = 255 * v * (1 - s * (1 - f));
            v *= 255;
            switch (hi) {
                case 0:
                    return [
                        v,
                        t,
                        p
                    ];
                case 1:
                    return [
                        q,
                        v,
                        p
                    ];
                case 2:
                    return [
                        p,
                        v,
                        t
                    ];
                case 3:
                    return [
                        p,
                        q,
                        v
                    ];
                case 4:
                    return [
                        t,
                        p,
                        v
                    ];
                case 5:
                    return [
                        v,
                        p,
                        q
                    ];
            }
        };
        convert.hsv.hsl = function (hsv) {
            const h = hsv[0];
            const s = hsv[1] / 100;
            const v = hsv[2] / 100;
            const vmin = Math.max(v, 0.01);
            let sl;
            let l;
            l = (2 - s) * v;
            const lmin = (2 - s) * vmin;
            sl = s * vmin;
            sl /= lmin <= 1 ? lmin : 2 - lmin;
            sl = sl || 0;
            l /= 2;
            return [
                h,
                sl * 100,
                l * 100
            ];
        };
        // http://dev.w3.org/csswg/css-color/#hwb-to-rgb
        convert.hwb.rgb = function (hwb) {
            const h = hwb[0] / 360;
            let wh = hwb[1] / 100;
            let bl = hwb[2] / 100;
            const ratio = wh + bl;
            let f;
            // Wh + bl cant be > 1
            if (ratio > 1) {
                wh /= ratio;
                bl /= ratio;
            }
            const i = Math.floor(6 * h);
            const v = 1 - bl;
            f = 6 * h - i;
            if ((i & 0x01) !== 0) f = 1 - f;
            const n = wh + f * (v - wh); // Linear interpolation
            let r;
            let g;
            let b;
      /* eslint-disable max-statements-per-line,no-multi-spaces */ switch (i) {
                default:
                case 6:
                case 0:
                    r = v;
                    g = n;
                    b = wh;
                    break;
                case 1:
                    r = n;
                    g = v;
                    b = wh;
                    break;
                case 2:
                    r = wh;
                    g = v;
                    b = n;
                    break;
                case 3:
                    r = wh;
                    g = n;
                    b = v;
                    break;
                case 4:
                    r = n;
                    g = wh;
                    b = v;
                    break;
                case 5:
                    r = v;
                    g = wh;
                    b = n;
                    break;
            }
      /* eslint-enable max-statements-per-line,no-multi-spaces */ return [
                r * 255,
                g * 255,
                b * 255
            ];
        };
        convert.cmyk.rgb = function (cmyk) {
            const c = cmyk[0] / 100;
            const m = cmyk[1] / 100;
            const y = cmyk[2] / 100;
            const k = cmyk[3] / 100;
            const r = 1 - Math.min(1, c * (1 - k) + k);
            const g = 1 - Math.min(1, m * (1 - k) + k);
            const b = 1 - Math.min(1, y * (1 - k) + k);
            return [
                r * 255,
                g * 255,
                b * 255
            ];
        };
        convert.xyz.rgb = function (xyz) {
            const x = xyz[0] / 100;
            const y = xyz[1] / 100;
            const z = xyz[2] / 100;
            let r;
            let g;
            let b;
            r = x * 3.2406 + y * -1.5372 + z * -0.4986;
            g = x * -0.9689 + y * 1.8758 + z * 0.0415;
            b = x * 0.0557 + y * -0.204 + z * 1.0570;
            // Assume sRGB
            r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
            g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
            b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
            r = Math.min(Math.max(0, r), 1);
            g = Math.min(Math.max(0, g), 1);
            b = Math.min(Math.max(0, b), 1);
            return [
                r * 255,
                g * 255,
                b * 255
            ];
        };
        convert.xyz.lab = function (xyz) {
            let x = xyz[0];
            let y = xyz[1];
            let z = xyz[2];
            x /= 95.047;
            y /= 100;
            z /= 108.883;
            x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
            y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
            z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
            const l = 116 * y - 16;
            const a = 500 * (x - y);
            const b = 200 * (y - z);
            return [
                l,
                a,
                b
            ];
        };
        convert.lab.xyz = function (lab) {
            const l = lab[0];
            const a = lab[1];
            const b = lab[2];
            let x;
            let y;
            let z;
            y = (l + 16) / 116;
            x = a / 500 + y;
            z = y - b / 200;
            const y2 = y ** 3;
            const x2 = x ** 3;
            const z2 = z ** 3;
            y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
            x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
            z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
            x *= 95.047;
            y *= 100;
            z *= 108.883;
            return [
                x,
                y,
                z
            ];
        };
        convert.lab.lch = function (lab) {
            const l = lab[0];
            const a = lab[1];
            const b = lab[2];
            let h;
            const hr = Math.atan2(b, a);
            h = hr * 360 / 2 / Math.PI;
            if (h < 0) h += 360;
            const c = Math.sqrt(a * a + b * b);
            return [
                l,
                c,
                h
            ];
        };
        convert.lch.lab = function (lch) {
            const l = lch[0];
            const c = lch[1];
            const h = lch[2];
            const hr = h / 360 * 2 * Math.PI;
            const a = c * Math.cos(hr);
            const b = c * Math.sin(hr);
            return [
                l,
                a,
                b
            ];
        };
        convert.rgb.ansi16 = function (args, saturation = null) {
            const [r, g, b] = args;
            let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization
            value = Math.round(value / 50);
            if (value === 0) return 30;
            let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
            if (value === 2) ansi += 60;
            return ansi;
        };
        convert.hsv.ansi16 = function (args) {
            // Optimization here; we already know the value and don't need to get
            // it converted for us.
            return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
        };
        convert.rgb.ansi256 = function (args) {
            const r = args[0];
            const g = args[1];
            const b = args[2];
            // We use the extended greyscale palette here, with the exception of
            // black and white. normal palette only has 4 greyscale shades.
            if (r === g && g === b) {
                if (r < 8) return 16;
                if (r > 248) return 231;
                return Math.round((r - 8) / 247 * 24) + 232;
            }
            const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
            return ansi;
        };
        convert.ansi16.rgb = function (args) {
            let color = args % 10;
            // Handle greyscale
            if (color === 0 || color === 7) {
                if (args > 50) color += 3.5;
                color = color / 10.5 * 255;
                return [
                    color,
                    color,
                    color
                ];
            }
            const mult = (~~(args > 50) + 1) * 0.5;
            const r = (color & 1) * mult * 255;
            const g = (color >> 1 & 1) * mult * 255;
            const b = (color >> 2 & 1) * mult * 255;
            return [
                r,
                g,
                b
            ];
        };
        convert.ansi256.rgb = function (args) {
            // Handle greyscale
            if (args >= 232) {
                const c = (args - 232) * 10 + 8;
                return [
                    c,
                    c,
                    c
                ];
            }
            args -= 16;
            let rem;
            const r = Math.floor(args / 36) / 5 * 255;
            const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
            const b = rem % 6 / 5 * 255;
            return [
                r,
                g,
                b
            ];
        };
        convert.rgb.hex = function (args) {
            const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
            const string = integer.toString(16).toUpperCase();
            return "000000".substring(string.length) + string;
        };
        convert.hex.rgb = function (args) {
            const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!match) return [
                0,
                0,
                0
            ];
            let colorString = match[0];
            if (match[0].length === 3) colorString = colorString.split("").map((char) => {
                return char + char;
            }).join("");
            const integer = parseInt(colorString, 16);
            const r = integer >> 16 & 0xFF;
            const g = integer >> 8 & 0xFF;
            const b = integer & 0xFF;
            return [
                r,
                g,
                b
            ];
        };
        convert.rgb.hcg = function (rgb) {
            const r = rgb[0] / 255;
            const g = rgb[1] / 255;
            const b = rgb[2] / 255;
            const max = Math.max(Math.max(r, g), b);
            const min = Math.min(Math.min(r, g), b);
            const chroma = max - min;
            let grayscale;
            let hue;
            if (chroma < 1) grayscale = min / (1 - chroma);
            else grayscale = 0;
            if (chroma <= 0) hue = 0;
            else if (max === r) hue = (g - b) / chroma % 6;
            else if (max === g) hue = 2 + (b - r) / chroma;
            else hue = 4 + (r - g) / chroma;
            hue /= 6;
            hue %= 1;
            return [
                hue * 360,
                chroma * 100,
                grayscale * 100
            ];
        };
        convert.hsl.hcg = function (hsl) {
            const s = hsl[1] / 100;
            const l = hsl[2] / 100;
            const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
            let f = 0;
            if (c < 1.0) f = (l - 0.5 * c) / (1.0 - c);
            return [
                hsl[0],
                c * 100,
                f * 100
            ];
        };
        convert.hsv.hcg = function (hsv) {
            const s = hsv[1] / 100;
            const v = hsv[2] / 100;
            const c = s * v;
            let f = 0;
            if (c < 1.0) f = (v - c) / (1 - c);
            return [
                hsv[0],
                c * 100,
                f * 100
            ];
        };
        convert.hcg.rgb = function (hcg) {
            const h = hcg[0] / 360;
            const c = hcg[1] / 100;
            const g = hcg[2] / 100;
            if (c === 0.0) return [
                g * 255,
                g * 255,
                g * 255
            ];
            const pure = [
                0,
                0,
                0
            ];
            const hi = h % 1 * 6;
            const v = hi % 1;
            const w = 1 - v;
            let mg = 0;
      /* eslint-disable max-statements-per-line */ switch (Math.floor(hi)) {
                case 0:
                    pure[0] = 1;
                    pure[1] = v;
                    pure[2] = 0;
                    break;
                case 1:
                    pure[0] = w;
                    pure[1] = 1;
                    pure[2] = 0;
                    break;
                case 2:
                    pure[0] = 0;
                    pure[1] = 1;
                    pure[2] = v;
                    break;
                case 3:
                    pure[0] = 0;
                    pure[1] = w;
                    pure[2] = 1;
                    break;
                case 4:
                    pure[0] = v;
                    pure[1] = 0;
                    pure[2] = 1;
                    break;
                default:
                    pure[0] = 1;
                    pure[1] = 0;
                    pure[2] = w;
            }
      /* eslint-enable max-statements-per-line */ mg = (1.0 - c) * g;
            return [
                (c * pure[0] + mg) * 255,
                (c * pure[1] + mg) * 255,
                (c * pure[2] + mg) * 255
            ];
        };
        convert.hcg.hsv = function (hcg) {
            const c = hcg[1] / 100;
            const g = hcg[2] / 100;
            const v = c + g * (1.0 - c);
            let f = 0;
            if (v > 0.0) f = c / v;
            return [
                hcg[0],
                f * 100,
                v * 100
            ];
        };
        convert.hcg.hsl = function (hcg) {
            const c = hcg[1] / 100;
            const g = hcg[2] / 100;
            const l = g * (1.0 - c) + 0.5 * c;
            let s = 0;
            if (l > 0.0 && l < 0.5) s = c / (2 * l);
            else if (l >= 0.5 && l < 1.0) s = c / (2 * (1 - l));
            return [
                hcg[0],
                s * 100,
                l * 100
            ];
        };
        convert.hcg.hwb = function (hcg) {
            const c = hcg[1] / 100;
            const g = hcg[2] / 100;
            const v = c + g * (1.0 - c);
            return [
                hcg[0],
                (v - c) * 100,
                (1 - v) * 100
            ];
        };
        convert.hwb.hcg = function (hwb) {
            const w = hwb[1] / 100;
            const b = hwb[2] / 100;
            const v = 1 - b;
            const c = v - w;
            let g = 0;
            if (c < 1) g = (v - c) / (1 - c);
            return [
                hwb[0],
                c * 100,
                g * 100
            ];
        };
        convert.apple.rgb = function (apple) {
            return [
                apple[0] / 65535 * 255,
                apple[1] / 65535 * 255,
                apple[2] / 65535 * 255
            ];
        };
        convert.rgb.apple = function (rgb) {
            return [
                rgb[0] / 255 * 65535,
                rgb[1] / 255 * 65535,
                rgb[2] / 255 * 65535
            ];
        };
        convert.gray.rgb = function (args) {
            return [
                args[0] / 100 * 255,
                args[0] / 100 * 255,
                args[0] / 100 * 255
            ];
        };
        convert.gray.hsl = function (args) {
            return [
                0,
                0,
                args[0]
            ];
        };
        convert.gray.hsv = convert.gray.hsl;
        convert.gray.hwb = function (gray) {
            return [
                0,
                100,
                gray[0]
            ];
        };
        convert.gray.cmyk = function (gray) {
            return [
                0,
                0,
                0,
                gray[0]
            ];
        };
        convert.gray.lab = function (gray) {
            return [
                gray[0],
                0,
                0
            ];
        };
        convert.gray.hex = function (gray) {
            const val = Math.round(gray[0] / 100 * 255) & 0xFF;
            const integer = (val << 16) + (val << 8) + val;
            const string = integer.toString(16).toUpperCase();
            return "000000".substring(string.length) + string;
        };
        convert.rgb.gray = function (rgb) {
            const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
            return [
                val / 255 * 100
            ];
        };

    }, { "5a9acc0b7c02c736": "8NNt4" }], "8NNt4": [function (require, module, exports) {
        "use strict";
        module.exports = {
            "aliceblue": [
                240,
                248,
                255
            ],
            "antiquewhite": [
                250,
                235,
                215
            ],
            "aqua": [
                0,
                255,
                255
            ],
            "aquamarine": [
                127,
                255,
                212
            ],
            "azure": [
                240,
                255,
                255
            ],
            "beige": [
                245,
                245,
                220
            ],
            "bisque": [
                255,
                228,
                196
            ],
            "black": [
                0,
                0,
                0
            ],
            "blanchedalmond": [
                255,
                235,
                205
            ],
            "blue": [
                0,
                0,
                255
            ],
            "blueviolet": [
                138,
                43,
                226
            ],
            "brown": [
                165,
                42,
                42
            ],
            "burlywood": [
                222,
                184,
                135
            ],
            "cadetblue": [
                95,
                158,
                160
            ],
            "chartreuse": [
                127,
                255,
                0
            ],
            "chocolate": [
                210,
                105,
                30
            ],
            "coral": [
                255,
                127,
                80
            ],
            "cornflowerblue": [
                100,
                149,
                237
            ],
            "cornsilk": [
                255,
                248,
                220
            ],
            "crimson": [
                220,
                20,
                60
            ],
            "cyan": [
                0,
                255,
                255
            ],
            "darkblue": [
                0,
                0,
                139
            ],
            "darkcyan": [
                0,
                139,
                139
            ],
            "darkgoldenrod": [
                184,
                134,
                11
            ],
            "darkgray": [
                169,
                169,
                169
            ],
            "darkgreen": [
                0,
                100,
                0
            ],
            "darkgrey": [
                169,
                169,
                169
            ],
            "darkkhaki": [
                189,
                183,
                107
            ],
            "darkmagenta": [
                139,
                0,
                139
            ],
            "darkolivegreen": [
                85,
                107,
                47
            ],
            "darkorange": [
                255,
                140,
                0
            ],
            "darkorchid": [
                153,
                50,
                204
            ],
            "darkred": [
                139,
                0,
                0
            ],
            "darksalmon": [
                233,
                150,
                122
            ],
            "darkseagreen": [
                143,
                188,
                143
            ],
            "darkslateblue": [
                72,
                61,
                139
            ],
            "darkslategray": [
                47,
                79,
                79
            ],
            "darkslategrey": [
                47,
                79,
                79
            ],
            "darkturquoise": [
                0,
                206,
                209
            ],
            "darkviolet": [
                148,
                0,
                211
            ],
            "deeppink": [
                255,
                20,
                147
            ],
            "deepskyblue": [
                0,
                191,
                255
            ],
            "dimgray": [
                105,
                105,
                105
            ],
            "dimgrey": [
                105,
                105,
                105
            ],
            "dodgerblue": [
                30,
                144,
                255
            ],
            "firebrick": [
                178,
                34,
                34
            ],
            "floralwhite": [
                255,
                250,
                240
            ],
            "forestgreen": [
                34,
                139,
                34
            ],
            "fuchsia": [
                255,
                0,
                255
            ],
            "gainsboro": [
                220,
                220,
                220
            ],
            "ghostwhite": [
                248,
                248,
                255
            ],
            "gold": [
                255,
                215,
                0
            ],
            "goldenrod": [
                218,
                165,
                32
            ],
            "gray": [
                128,
                128,
                128
            ],
            "green": [
                0,
                128,
                0
            ],
            "greenyellow": [
                173,
                255,
                47
            ],
            "grey": [
                128,
                128,
                128
            ],
            "honeydew": [
                240,
                255,
                240
            ],
            "hotpink": [
                255,
                105,
                180
            ],
            "indianred": [
                205,
                92,
                92
            ],
            "indigo": [
                75,
                0,
                130
            ],
            "ivory": [
                255,
                255,
                240
            ],
            "khaki": [
                240,
                230,
                140
            ],
            "lavender": [
                230,
                230,
                250
            ],
            "lavenderblush": [
                255,
                240,
                245
            ],
            "lawngreen": [
                124,
                252,
                0
            ],
            "lemonchiffon": [
                255,
                250,
                205
            ],
            "lightblue": [
                173,
                216,
                230
            ],
            "lightcoral": [
                240,
                128,
                128
            ],
            "lightcyan": [
                224,
                255,
                255
            ],
            "lightgoldenrodyellow": [
                250,
                250,
                210
            ],
            "lightgray": [
                211,
                211,
                211
            ],
            "lightgreen": [
                144,
                238,
                144
            ],
            "lightgrey": [
                211,
                211,
                211
            ],
            "lightpink": [
                255,
                182,
                193
            ],
            "lightsalmon": [
                255,
                160,
                122
            ],
            "lightseagreen": [
                32,
                178,
                170
            ],
            "lightskyblue": [
                135,
                206,
                250
            ],
            "lightslategray": [
                119,
                136,
                153
            ],
            "lightslategrey": [
                119,
                136,
                153
            ],
            "lightsteelblue": [
                176,
                196,
                222
            ],
            "lightyellow": [
                255,
                255,
                224
            ],
            "lime": [
                0,
                255,
                0
            ],
            "limegreen": [
                50,
                205,
                50
            ],
            "linen": [
                250,
                240,
                230
            ],
            "magenta": [
                255,
                0,
                255
            ],
            "maroon": [
                128,
                0,
                0
            ],
            "mediumaquamarine": [
                102,
                205,
                170
            ],
            "mediumblue": [
                0,
                0,
                205
            ],
            "mediumorchid": [
                186,
                85,
                211
            ],
            "mediumpurple": [
                147,
                112,
                219
            ],
            "mediumseagreen": [
                60,
                179,
                113
            ],
            "mediumslateblue": [
                123,
                104,
                238
            ],
            "mediumspringgreen": [
                0,
                250,
                154
            ],
            "mediumturquoise": [
                72,
                209,
                204
            ],
            "mediumvioletred": [
                199,
                21,
                133
            ],
            "midnightblue": [
                25,
                25,
                112
            ],
            "mintcream": [
                245,
                255,
                250
            ],
            "mistyrose": [
                255,
                228,
                225
            ],
            "moccasin": [
                255,
                228,
                181
            ],
            "navajowhite": [
                255,
                222,
                173
            ],
            "navy": [
                0,
                0,
                128
            ],
            "oldlace": [
                253,
                245,
                230
            ],
            "olive": [
                128,
                128,
                0
            ],
            "olivedrab": [
                107,
                142,
                35
            ],
            "orange": [
                255,
                165,
                0
            ],
            "orangered": [
                255,
                69,
                0
            ],
            "orchid": [
                218,
                112,
                214
            ],
            "palegoldenrod": [
                238,
                232,
                170
            ],
            "palegreen": [
                152,
                251,
                152
            ],
            "paleturquoise": [
                175,
                238,
                238
            ],
            "palevioletred": [
                219,
                112,
                147
            ],
            "papayawhip": [
                255,
                239,
                213
            ],
            "peachpuff": [
                255,
                218,
                185
            ],
            "peru": [
                205,
                133,
                63
            ],
            "pink": [
                255,
                192,
                203
            ],
            "plum": [
                221,
                160,
                221
            ],
            "powderblue": [
                176,
                224,
                230
            ],
            "purple": [
                128,
                0,
                128
            ],
            "rebeccapurple": [
                102,
                51,
                153
            ],
            "red": [
                255,
                0,
                0
            ],
            "rosybrown": [
                188,
                143,
                143
            ],
            "royalblue": [
                65,
                105,
                225
            ],
            "saddlebrown": [
                139,
                69,
                19
            ],
            "salmon": [
                250,
                128,
                114
            ],
            "sandybrown": [
                244,
                164,
                96
            ],
            "seagreen": [
                46,
                139,
                87
            ],
            "seashell": [
                255,
                245,
                238
            ],
            "sienna": [
                160,
                82,
                45
            ],
            "silver": [
                192,
                192,
                192
            ],
            "skyblue": [
                135,
                206,
                235
            ],
            "slateblue": [
                106,
                90,
                205
            ],
            "slategray": [
                112,
                128,
                144
            ],
            "slategrey": [
                112,
                128,
                144
            ],
            "snow": [
                255,
                250,
                250
            ],
            "springgreen": [
                0,
                255,
                127
            ],
            "steelblue": [
                70,
                130,
                180
            ],
            "tan": [
                210,
                180,
                140
            ],
            "teal": [
                0,
                128,
                128
            ],
            "thistle": [
                216,
                191,
                216
            ],
            "tomato": [
                255,
                99,
                71
            ],
            "turquoise": [
                64,
                224,
                208
            ],
            "violet": [
                238,
                130,
                238
            ],
            "wheat": [
                245,
                222,
                179
            ],
            "white": [
                255,
                255,
                255
            ],
            "whitesmoke": [
                245,
                245,
                245
            ],
            "yellow": [
                255,
                255,
                0
            ],
            "yellowgreen": [
                154,
                205,
                50
            ]
        };

    }, {}], "iJmBL": [function (require, module, exports) {
        const conversions = require("d707b58146008327");
  /*
      This function routes a model to all other models.

      all functions that are routed have a property `.conversion` attached
      to the returned synthetic function. This property is an array
      of strings, each with the steps in between the 'from' and 'to'
      color models (inclusive).

      conversions that are not possible simply are not included.
  */ function buildGraph() {
            const graph = {};
            // https://jsperf.com/object-keys-vs-for-in-with-closure/3
            const models = Object.keys(conversions);
            for (let len = models.length, i = 0; i < len; i++)graph[models[i]] = {
                // http://jsperf.com/1-vs-infinity
                // micro-opt, but this is simple.
                distance: -1,
                parent: null
            };
            return graph;
        }
        // https://en.wikipedia.org/wiki/Breadth-first_search
        function deriveBFS(fromModel) {
            const graph = buildGraph();
            const queue = [
                fromModel
            ]; // Unshift -> queue -> pop
            graph[fromModel].distance = 0;
            while (queue.length) {
                const current = queue.pop();
                const adjacents = Object.keys(conversions[current]);
                for (let len = adjacents.length, i = 0; i < len; i++) {
                    const adjacent = adjacents[i];
                    const node = graph[adjacent];
                    if (node.distance === -1) {
                        node.distance = graph[current].distance + 1;
                        node.parent = current;
                        queue.unshift(adjacent);
                    }
                }
            }
            return graph;
        }
        function link(from, to) {
            return function (args) {
                return to(from(args));
            };
        }
        function wrapConversion(toModel, graph) {
            const path = [
                graph[toModel].parent,
                toModel
            ];
            let fn = conversions[graph[toModel].parent][toModel];
            let cur = graph[toModel].parent;
            while (graph[cur].parent) {
                path.unshift(graph[cur].parent);
                fn = link(conversions[graph[cur].parent][cur], fn);
                cur = graph[cur].parent;
            }
            fn.conversion = path;
            return fn;
        }
        module.exports = function (fromModel) {
            const graph = deriveBFS(fromModel);
            const conversion = {};
            const models = Object.keys(graph);
            for (let len = models.length, i = 0; i < len; i++) {
                const toModel = models[i];
                const node = graph[toModel];
                if (node.parent === null) continue;
                conversion[toModel] = wrapConversion(toModel, graph);
            }
            return conversion;
        };

    }, { "d707b58146008327": "C4O54" }], "fxdfr": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "Color", () => Color);
        var _colorConvert = require("color-convert");
        class Color {
            // Crée un champ privé #hsl
            #hsl;
            // Crée un champ privé #hex
            #hex;
            // Crée un champ privé #element
            #element;
            constructor(hsl) {
                this.#hsl = hsl;
                // Converti la valeur hsl en hexadécimal
                this.#hex = `#${_colorConvert.hsl.hex(hsl)}`;
                // Crée l'élément
                this.#element = this.#generateElement();
            }
            #generateElement() {
                // Crée un élément <div>
                const colorElement = document.createElement("div");
                // Lui ajoute une class "color"
                colorElement.classList.add("color");
                // Ajoute l'attribut de donnée "data-color"
                colorElement.dataset.color = this.#hex;
                // Change la couleur de fond de l'élément
                colorElement.style.backgroundColor = this.#hex;
                //Crée un élément <p>
                const textElement = document.createElement("p");
                // Lui ajoute comme texte la valeur hexadécimale
                textElement.textContent = this.#hex;
                // Change la couleur du texte selon la luminosité de la couleur de fond
                textElement.style.color = this.#hsl[2] < 60 ? "#ffffff" : "#000000";
                // Ajoute l'élément <p> comme enfant du <div>
                colorElement.appendChild(textElement);
                // Retourne le <div>
                return colorElement;
            }
            display(parentElement) {
                // Ajoute this.#element comme enfant d'un élément parent passé en argument.
                parentElement.appendChild(this.#element);
            }
        }

    }, { "color-convert": "bvUlS", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "gkKU3": [function (require, module, exports) {
        exports.interopDefault = function (a) {
            return a && a.__esModule ? a : {
                default: a
            };
        };
        exports.defineInteropFlag = function (a) {
            Object.defineProperty(a, "__esModule", {
                value: true
            });
        };
        exports.exportAll = function (source, dest) {
            Object.keys(source).forEach(function (key) {
                if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
                Object.defineProperty(dest, key, {
                    enumerable: true,
                    get: function () {
                        return source[key];
                    }
                });
            });
            return dest;
        };
        exports.export = function (dest, destName, get) {
            Object.defineProperty(dest, destName, {
                enumerable: true,
                get: get
            });
        };

    }, {}], "hA2Bv": [function (require, module, exports) {
        var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "generatePalette", () => generatePalette);
        parcelHelpers.export(exports, "hexToCSSHSL", () => hexToCSSHSL);
        parcelHelpers.export(exports, "isHexColor", () => isHexColor);
        var _colorConvert = require("color-convert");
        var _notyf = require("notyf");
        var _notyfMinCss = require("notyf/notyf.min.css");
        const notyf = new (0, _notyf.Notyf)();
        const generatePalette = (hex) => {
            // crée un tableau vide.
            const colors = [];
            // converti le hex d'entrée en tableau hsl. Ne récupérer que les
            // deux premières valeurs.
            const [h, s] = _colorConvert.hex.hsl(hex);
            // Itère entre 0 et 100 par intervalle de 10
            for (let i = 0; i <= 100; i += 10)// À chaque itération, pousse un nouveau tableau dans colors contenant
                // la teinte (fixe), la saturation (fixe) et la luminosité déterminée par
                // l'index de la boucle.
                colors.push([
                    h,
                    s,
                    i
                ]);
            // Retourne le tableau.
            return colors;
        };
        const hexToCSSHSL = (hex) => {
            // tranforme le hex d'entrée en HSL.
            const hsl = _colorConvert.hex.hsl(hex);
            // Retourne une chaîne de caractère au format css.
            return `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;
        };
        const isHexColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

    }, { "color-convert": "bvUlS", "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3", "notyf": "2LIPM", "notyf/notyf.min.css": "bpCRw" }], "2LIPM": [function (require, module, exports) {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
        parcelHelpers.defineInteropFlag(exports);
        parcelHelpers.export(exports, "DEFAULT_OPTIONS", () => DEFAULT_OPTIONS);
        parcelHelpers.export(exports, "Notyf", () => Notyf);
        parcelHelpers.export(exports, "NotyfArray", () => NotyfArray);
        parcelHelpers.export(exports, "NotyfArrayEvent", () => NotyfArrayEvent);
        parcelHelpers.export(exports, "NotyfEvent", () => NotyfEvent);
        parcelHelpers.export(exports, "NotyfNotification", () => NotyfNotification);
        parcelHelpers.export(exports, "NotyfView", () => NotyfView);
        var __assign = function () {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        var NotyfNotification = /** @class */ function () {
            function NotyfNotification(options) {
                this.options = options;
                this.listeners = {};
            }
            NotyfNotification.prototype.on = function (eventType, cb) {
                var callbacks = this.listeners[eventType] || [];
                this.listeners[eventType] = callbacks.concat([
                    cb
                ]);
            };
            NotyfNotification.prototype.triggerEvent = function (eventType, event) {
                var _this = this;
                var callbacks = this.listeners[eventType] || [];
                callbacks.forEach(function (cb) {
                    return cb({
                        target: _this,
                        event: event
                    });
                });
            };
            return NotyfNotification;
        }();
        var NotyfArrayEvent;
        (function (NotyfArrayEvent) {
            NotyfArrayEvent[NotyfArrayEvent["Add"] = 0] = "Add";
            NotyfArrayEvent[NotyfArrayEvent["Remove"] = 1] = "Remove";
        })(NotyfArrayEvent || (NotyfArrayEvent = {}));
        var NotyfArray = /** @class */ function () {
            function NotyfArray() {
                this.notifications = [];
            }
            NotyfArray.prototype.push = function (elem) {
                this.notifications.push(elem);
                this.updateFn(elem, NotyfArrayEvent.Add, this.notifications);
            };
            NotyfArray.prototype.splice = function (index, num) {
                var elem = this.notifications.splice(index, num)[0];
                this.updateFn(elem, NotyfArrayEvent.Remove, this.notifications);
                return elem;
            };
            NotyfArray.prototype.indexOf = function (elem) {
                return this.notifications.indexOf(elem);
            };
            NotyfArray.prototype.onUpdate = function (fn) {
                this.updateFn = fn;
            };
            return NotyfArray;
        }();
        var NotyfEvent;
        (function (NotyfEvent) {
            NotyfEvent["Dismiss"] = "dismiss";
            NotyfEvent["Click"] = "click";
        })(NotyfEvent || (NotyfEvent = {}));
        var DEFAULT_OPTIONS = {
            types: [
                {
                    type: "success",
                    className: "notyf__toast--success",
                    backgroundColor: "#3dc763",
                    icon: {
                        className: "notyf__icon--success",
                        tagName: "i"
                    }
                },
                {
                    type: "error",
                    className: "notyf__toast--error",
                    backgroundColor: "#ed3d3d",
                    icon: {
                        className: "notyf__icon--error",
                        tagName: "i"
                    }
                }
            ],
            duration: 2000,
            ripple: true,
            position: {
                x: "right",
                y: "bottom"
            },
            dismissible: false
        };
        var NotyfView = /** @class */ function () {
            function NotyfView() {
                this.notifications = [];
                this.events = {};
                this.X_POSITION_FLEX_MAP = {
                    left: "flex-start",
                    center: "center",
                    right: "flex-end"
                };
                this.Y_POSITION_FLEX_MAP = {
                    top: "flex-start",
                    center: "center",
                    bottom: "flex-end"
                };
                // Creates the main notifications container
                var docFrag = document.createDocumentFragment();
                var notyfContainer = this._createHTMLElement({
                    tagName: "div",
                    className: "notyf"
                });
                docFrag.appendChild(notyfContainer);
                document.body.appendChild(docFrag);
                this.container = notyfContainer;
                // Identifies the main animation end event
                this.animationEndEventName = this._getAnimationEndEventName();
                this._createA11yContainer();
            }
            NotyfView.prototype.on = function (event, cb) {
                var _a;
                this.events = __assign(__assign({}, this.events), (_a = {}, _a[event] = cb, _a));
            };
            NotyfView.prototype.update = function (notification, type) {
                if (type === NotyfArrayEvent.Add) this.addNotification(notification);
                else if (type === NotyfArrayEvent.Remove) this.removeNotification(notification);
            };
            NotyfView.prototype.removeNotification = function (notification) {
                var _this = this;
                var renderedNotification = this._popRenderedNotification(notification);
                var node;
                if (!renderedNotification) return;
                node = renderedNotification.node;
                node.classList.add("notyf__toast--disappear");
                var handleEvent;
                node.addEventListener(this.animationEndEventName, handleEvent = function (event) {
                    if (event.target === node) {
                        node.removeEventListener(_this.animationEndEventName, handleEvent);
                        _this.container.removeChild(node);
                    }
                });
            };
            NotyfView.prototype.addNotification = function (notification) {
                var node = this._renderNotification(notification);
                this.notifications.push({
                    notification: notification,
                    node: node
                });
                // For a11y purposes, we still want to announce that there's a notification in the screen
                // even if it comes with no message.
                this._announce(notification.options.message || "Notification");
            };
            NotyfView.prototype._renderNotification = function (notification) {
                var _a;
                var card = this._buildNotificationCard(notification);
                var className = notification.options.className;
                if (className) (_a = card.classList).add.apply(_a, className.split(" "));
                this.container.appendChild(card);
                return card;
            };
            NotyfView.prototype._popRenderedNotification = function (notification) {
                var idx = -1;
                for (var i = 0; i < this.notifications.length && idx < 0; i++)if (this.notifications[i].notification === notification) idx = i;
                if (idx !== -1) return this.notifications.splice(idx, 1)[0];
                return;
            };
            NotyfView.prototype.getXPosition = function (options) {
                var _a;
                return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.x) || "right";
            };
            NotyfView.prototype.getYPosition = function (options) {
                var _a;
                return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.y) || "bottom";
            };
            NotyfView.prototype.adjustContainerAlignment = function (options) {
                var align = this.X_POSITION_FLEX_MAP[this.getXPosition(options)];
                var justify = this.Y_POSITION_FLEX_MAP[this.getYPosition(options)];
                var style = this.container.style;
                style.setProperty("justify-content", justify);
                style.setProperty("align-items", align);
            };
            NotyfView.prototype._buildNotificationCard = function (notification) {
                var _this = this;
                var options = notification.options;
                var iconOpts = options.icon;
                // Adjust container according to position (e.g. top-left, bottom-center, etc)
                this.adjustContainerAlignment(options);
                // Create elements
                var notificationElem = this._createHTMLElement({
                    tagName: "div",
                    className: "notyf__toast"
                });
                var ripple = this._createHTMLElement({
                    tagName: "div",
                    className: "notyf__ripple"
                });
                var wrapper = this._createHTMLElement({
                    tagName: "div",
                    className: "notyf__wrapper"
                });
                var message = this._createHTMLElement({
                    tagName: "div",
                    className: "notyf__message"
                });
                message.innerHTML = options.message || "";
                var mainColor = options.background || options.backgroundColor;
                // Build the icon and append it to the card
                if (iconOpts) {
                    var iconContainer = this._createHTMLElement({
                        tagName: "div",
                        className: "notyf__icon"
                    });
                    if (typeof iconOpts === "string" || iconOpts instanceof String) iconContainer.innerHTML = new String(iconOpts).valueOf();
                    if (typeof iconOpts === "object") {
                        var _a = iconOpts.tagName, tagName = _a === void 0 ? "i" : _a, className_1 = iconOpts.className, text = iconOpts.text, _b = iconOpts.color, color = _b === void 0 ? mainColor : _b;
                        var iconElement = this._createHTMLElement({
                            tagName: tagName,
                            className: className_1,
                            text: text
                        });
                        if (color) iconElement.style.color = color;
                        iconContainer.appendChild(iconElement);
                    }
                    wrapper.appendChild(iconContainer);
                }
                wrapper.appendChild(message);
                notificationElem.appendChild(wrapper);
                // Add ripple if applicable, else just paint the full toast
                if (mainColor) {
                    if (options.ripple) {
                        ripple.style.background = mainColor;
                        notificationElem.appendChild(ripple);
                    } else notificationElem.style.background = mainColor;
                }
                // Add dismiss button
                if (options.dismissible) {
                    var dismissWrapper = this._createHTMLElement({
                        tagName: "div",
                        className: "notyf__dismiss"
                    });
                    var dismissButton = this._createHTMLElement({
                        tagName: "button",
                        className: "notyf__dismiss-btn"
                    });
                    dismissWrapper.appendChild(dismissButton);
                    wrapper.appendChild(dismissWrapper);
                    notificationElem.classList.add("notyf__toast--dismissible");
                    dismissButton.addEventListener("click", function (event) {
                        var _a, _b;
                        (_b = (_a = _this.events)[NotyfEvent.Dismiss]) === null || _b === void 0 || _b.call(_a, {
                            target: notification,
                            event: event
                        });
                        event.stopPropagation();
                    });
                }
                notificationElem.addEventListener("click", function (event) {
                    var _a, _b;
                    return (_b = (_a = _this.events)[NotyfEvent.Click]) === null || _b === void 0 ? void 0 : _b.call(_a, {
                        target: notification,
                        event: event
                    });
                });
                // Adjust margins depending on whether its an upper or lower notification
                var className = this.getYPosition(options) === "top" ? "upper" : "lower";
                notificationElem.classList.add("notyf__toast--" + className);
                return notificationElem;
            };
            NotyfView.prototype._createHTMLElement = function (_a) {
                var tagName = _a.tagName, className = _a.className, text = _a.text;
                var elem = document.createElement(tagName);
                if (className) elem.className = className;
                elem.textContent = text || null;
                return elem;
            };
      /**
       * Creates an invisible container which will announce the notyfs to
       * screen readers
       */ NotyfView.prototype._createA11yContainer = function () {
                var a11yContainer = this._createHTMLElement({
                    tagName: "div",
                    className: "notyf-announcer"
                });
                a11yContainer.setAttribute("aria-atomic", "true");
                a11yContainer.setAttribute("aria-live", "polite");
                // Set the a11y container to be visible hidden. Can't use display: none as
                // screen readers won't read it.
                a11yContainer.style.border = "0";
                a11yContainer.style.clip = "rect(0 0 0 0)";
                a11yContainer.style.height = "1px";
                a11yContainer.style.margin = "-1px";
                a11yContainer.style.overflow = "hidden";
                a11yContainer.style.padding = "0";
                a11yContainer.style.position = "absolute";
                a11yContainer.style.width = "1px";
                a11yContainer.style.outline = "0";
                document.body.appendChild(a11yContainer);
                this.a11yContainer = a11yContainer;
            };
      /**
       * Announces a message to screenreaders.
       */ NotyfView.prototype._announce = function (message) {
                var _this = this;
                this.a11yContainer.textContent = "";
                // This 100ms timeout is necessary for some browser + screen-reader combinations:
                // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
                // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
                //   second time without clearing and then using a non-zero delay.
                // (using JAWS 17 at time of this writing).
                // https://github.com/angular/material2/blob/master/src/cdk/a11y/live-announcer/live-announcer.ts
                setTimeout(function () {
                    _this.a11yContainer.textContent = message;
                }, 100);
            };
      /**
       * Determine which animationend event is supported
       */ NotyfView.prototype._getAnimationEndEventName = function () {
                var el = document.createElement("_fake");
                var transitions = {
                    MozTransition: "animationend",
                    OTransition: "oAnimationEnd",
                    WebkitTransition: "webkitAnimationEnd",
                    transition: "animationend"
                };
                var t;
                for (t in transitions) {
                    if (el.style[t] !== undefined) return transitions[t];
                }
                // No supported animation end event. Using "animationend" as a fallback
                return "animationend";
            };
            return NotyfView;
        }();
  /**
   * Main controller class. Defines the main Notyf API.
   */ var Notyf = /** @class */ function () {
            function Notyf(opts) {
                var _this = this;
                this.dismiss = this._removeNotification;
                this.notifications = new NotyfArray();
                this.view = new NotyfView();
                var types = this.registerTypes(opts);
                this.options = __assign(__assign({}, DEFAULT_OPTIONS), opts);
                this.options.types = types;
                this.notifications.onUpdate(function (elem, type) {
                    return _this.view.update(elem, type);
                });
                this.view.on(NotyfEvent.Dismiss, function (_a) {
                    var target = _a.target, event = _a.event;
                    _this._removeNotification(target);
                    // tslint:disable-next-line: no-string-literal
                    target["triggerEvent"](NotyfEvent.Dismiss, event);
                });
                // tslint:disable-next-line: no-string-literal
                this.view.on(NotyfEvent.Click, function (_a) {
                    var target = _a.target, event = _a.event;
                    return target["triggerEvent"](NotyfEvent.Click, event);
                });
            }
            Notyf.prototype.error = function (payload) {
                var options = this.normalizeOptions("error", payload);
                return this.open(options);
            };
            Notyf.prototype.success = function (payload) {
                var options = this.normalizeOptions("success", payload);
                return this.open(options);
            };
            Notyf.prototype.open = function (options) {
                var defaultOpts = this.options.types.find(function (_a) {
                    var type = _a.type;
                    return type === options.type;
                }) || {};
                var config = __assign(__assign({}, defaultOpts), options);
                this.assignProps([
                    "ripple",
                    "position",
                    "dismissible"
                ], config);
                var notification = new NotyfNotification(config);
                this._pushNotification(notification);
                return notification;
            };
            Notyf.prototype.dismissAll = function () {
                while (this.notifications.splice(0, 1));
            };
      /**
       * Assigns properties to a config object based on two rules:
       * 1. If the config object already sets that prop, leave it as so
       * 2. Otherwise, use the default prop from the global options
       *
       * It's intended to build the final config object to open a notification. e.g. if
       * 'dismissible' is not set, then use the value from the global config.
       *
       * @param props - properties to be assigned to the config object
       * @param config - object whose properties need to be set
       */ Notyf.prototype.assignProps = function (props, config) {
                var _this = this;
                props.forEach(function (prop) {
                    // intentional double equality to check for both null and undefined
                    config[prop] = config[prop] == null ? _this.options[prop] : config[prop];
                });
            };
            Notyf.prototype._pushNotification = function (notification) {
                var _this = this;
                this.notifications.push(notification);
                var duration = notification.options.duration !== undefined ? notification.options.duration : this.options.duration;
                if (duration) setTimeout(function () {
                    return _this._removeNotification(notification);
                }, duration);
            };
            Notyf.prototype._removeNotification = function (notification) {
                var index = this.notifications.indexOf(notification);
                if (index !== -1) this.notifications.splice(index, 1);
            };
            Notyf.prototype.normalizeOptions = function (type, payload) {
                var options = {
                    type: type
                };
                if (typeof payload === "string") options.message = payload;
                else if (typeof payload === "object") options = __assign(__assign({}, options), payload);
                return options;
            };
            Notyf.prototype.registerTypes = function (opts) {
                var incomingTypes = (opts && opts.types || []).slice();
                var finalDefaultTypes = DEFAULT_OPTIONS.types.map(function (defaultType) {
                    // find if there's a default type within the user input's types, if so, it means the user
                    // wants to change some of the default settings
                    var userTypeIdx = -1;
                    incomingTypes.forEach(function (t, idx) {
                        if (t.type === defaultType.type) userTypeIdx = idx;
                    });
                    var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};
                    return __assign(__assign({}, defaultType), userType);
                });
                return finalDefaultTypes.concat(incomingTypes);
            };
            return Notyf;
        }();

    }, { "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3" }], "bpCRw": [function () { }, {}], "bpCRw": [function () { }, {}]
}, ["7Aums", "bNKaB"], "bNKaB", "parcelRequire87f4")

  //# sourceMappingURL=index.0641b553.js.map
