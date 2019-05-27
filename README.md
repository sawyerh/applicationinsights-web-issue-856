Recreation of https://github.com/microsoft/ApplicationInsights-JS/issues/856

```
npm install
```

```
npm run build
```

Error outputted:

```sh
[!] Error: 'LoggingSeverity' is not exported by node_modules/@microsoft/applicationinsights-core-js/browser/applicationinsights-core-js.min.js
https://rollupjs.org/guide/en#error-name-is-not-exported-by-module-
node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/DataSanitizer.js (3:9)
1: // Copyright (c) Microsoft Corporation. All rights reserved.
2: // Licensed under the MIT License.
3: import { LoggingSeverity, _InternalMessageId } from '@microsoft/applicationinsights-core-js';
            ^
4: var DataSanitizer = /** @class */ (function () {
5:     function DataSanitizer() {
Error: 'LoggingSeverity' is not exported by node_modules/@microsoft/applicationinsights-core-js/browser/applicationinsights-core-js.min.js
    at error (/Users/sawyer/Dev/Misc/appinsights-rollup/node_modules/rollup/dist/rollup.js:9236:30)
    at Module.error (/Users/sawyer/Dev/Misc/appinsights-rollup/node_modules/rollup/dist/rollup.js:12909:9)
    at handleMissingExport (/Users/sawyer/Dev/Misc/appinsights-rollup/node_modules/rollup/dist/rollup.js:12832:21)
    at Module.traceVariable (/Users/sawyer/Dev/Misc/appinsights-rollup/node_modules/rollup/dist/rollup.js:13180:17)
    at ModuleScope.findVariable (/Users/sawyer/Dev/Misc/appinsights-rollup/node_modules/rollup/dist/rollup.js:11953:39)
    at FunctionScope.findVariable (/Users/sawyer/Dev/Misc/appinsights-rollup/node_modules/rollup/dist/rollup.js:2815:67)
    at ChildScope.findVariable (/Users/sawyer/Dev/Misc/appinsights-rollup/node_modules/rollup/dist/rollup.js:2815:67)
    at FunctionScope.findVariable (/Users/sawyer/Dev/Misc/appinsights-rollup/node_modules/rollup/dist/rollup.js:2815:67)
    at ChildScope.findVariable (/Users/sawyer/Dev/Misc/appinsights-rollup/node_modules/rollup/dist/rollup.js:2815:67)
    at BlockScope.findVariable (/Users/sawyer/Dev/Misc/appinsights-rollup/node_modules/rollup/dist/rollup.js:2815:67)
```