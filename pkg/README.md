# Sixphere Polaris - Bar Chart Web Component


[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]

[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

------------------------------------------------------------------

Injectable chart based on [@sixphere/chartjs](https://www.npmjs.com/package/@sixphere/chartjs) bar chart.

## Install
```bash
npm install '@sixphere-polaris/bar-chart' --save
```


## HTML API

### Attributes

| Attribute | Values                                                 | Description                                                      |
|-----------|--------------------------------------------------------|------------------------------------------------------------------|
| width     | [Optional] Number - default: 0                         | Chart width                                                      |
| height    | [Optional] Number - default: 0                         | Chart height                                                     |
| data      | [Optional] Object - default: {}                        | Chart data (see [Chart.js reference](https://www.chartjs.org/docs/latest/))                              |
| options   | [Optional] Object - default: {}                        | Chart options (see [Chart.js reference](https://www.chartjs.org/docs/latest/))                           |


## How to use?

### Register as a custom element
```javascript
import { PolarisBarChart } from '@sixphere-polaris/bar-chart'

customElements.define(PolarisBarChart.is, PolarisBarChart)
```

### Inject a service using DIWrapper
`PolarisBarChart` implements the API proposed by [DIWrapper](https://www.npmjs.com/package/@sixphere/diwrapper) library. You can use DIWrapper to inject a service which implements asynchronous `getData` and `getOptions` methods. This methods must returns an object with the following structure:
```js
// getData() response
{
    data: <Object>
}
```
> **Important**: You must provide an object which implements the data object structure of Chart.js.

```js
// getOptions() response
{
    options: <Object>
}
```

> **Important**: You must provide an object which implements the options object structure of Chart.js.

Injection example:
```javascript
customElements.define(
    PolarisBarChart.is, 
    DIWrapper.for(PolarisBarChart).bind([
        {
            constructor: MyService,
            args: []
        }
    ])
)
```

### HTML element

#### Display a title

```html
<polaris-numeric-display title="MyDisplay"></polaris-numeric-display>
```

# Author

[Sixphere](http://www.sixphere.com "Sixphere") is not only a group of experienced professionals, that keep a huge amount of knowledge, take care about what and how they do their job. They solve their partner problems in an agile way and are aware of their customer needs through emotional intelligence connections.

Sixphere is a simpler way of understanding IT services, based on a strong and well balanced mix-ture of principles.


# License
[MIT License][mit-license-url] © 2019 Sixphere


<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[java-url]: https://www.java.com/en/download
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[vscode-url]: https://code.visualstudio.com
[vscode-lit-html-url]: https://github.com/mjbvz/vscode-lit-html
[web-component-tester-url]: https://github.com/Polymer/tools/tree/master/packages/web-component-tester
[lit-element-url]: https://github.com/Polymer/lit-element

<!-- Badges -->
<!-- [follow-me-badge]: https://flat.badgen.net/twitter/follow/Fernando Jiménez?icon=twitter -->

[version-badge]: https://flat.badgen.net/npm/v/@sixphere-polaris/bar-chart?icon=npm
[lit-element-version-badge]: https://flat.badgen.net/npm/v/lit-element/latest?icon=npm&label=lit-element
[node-version-badge]: https://flat.badgen.net/npm/node/@sixphere-polaris/bar-chart
[mit-license-badge]: https://flat.badgen.net/npm/license/@sixphere-polaris/bar-chart

[downloads-badge]: https://flat.badgen.net/npm/dm/@sixphere-polaris/bar-chart
[total-downloads-badge]: https://flat.badgen.net/npm/dt/@sixphere-polaris/bar-chart?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/@sixphere-polaris/bar-chart
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/@sixphere-polaris/bar-chart

<!-- Links -->
<!-- [follow-me-url]: https://twitter.com/Fernando Jiménez?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=diwrapper -->

[version-url]: https://www.npmjs.com/package/@sixphere-polaris/bar-chart
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: /LICENSE

[downloads-url]: https://www.npmtrends.com/@sixphere-polaris/bar-chart
[packagephobia-url]: https://packagephobia.now.sh/result?p=@sixphere-polaris/bar-chart
[bundlephobia-url]: https://bundlephobia.com/result?p=@sixphere-polaris/bar-chart

[circleci-url]: https://circleci.com/gh//diwrapper/tree/master
[daviddm-url]: https://david-dm.org//diwrapper

[codebeat-url]: https://codebeat.co/projects/<codebeat_path>
[codacy-url]: https://www.codacy.com/app/<codacy_path>
[lgtm-url]: https://lgtm.com/projects/g/<lgtm_path>