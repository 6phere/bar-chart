import { ChartBar, ChartLine } from '@sixphere/chartjs';
import { SixphereLitElement, html } from '@sixphere/lit-element';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n            <chartjs-bar .data=\"", "\" .options=\"", "\" .width=\"", "\" .height=\"", "\"></chartjs-bar>\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
customElements.define(ChartBar.is, ChartBar);
customElements.define(ChartLine.is, ChartLine);

class PolarisBarChart extends SixphereLitElement {
  constructor() {
    super();
    this.width = 0;
    this.height = 0;
    this.data = {};
    this.options = {};
    this.updateComplete.then(this.onUpdateComplete.bind(this));
  }
  /**
   * Services injection method using by Sixphere Dependency Injection Wrapper library.
   * 
   * @see https://www.npmjs.com/package/@sixphere/diwrapper
   * 
   * @param {Service} service Data service. Must implement a getData async method.
   */


  __inject(service) {
    this.service = service;
  }

  static get properties() {
    return {
      width: {
        type: Number
      },
      height: {
        type: Number
      }
    };
  }

  static get is() {
    return 'polaris-bar-chart';
  }

  onUpdateComplete() {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield _this.getData();
      yield _this.getOptions();
      yield _this.requestUpdate();
    })();
  }

  getData() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        let response = yield _this2.service.getData();
        _this2.data = response.data;
      } catch (error) {
        _this2.data = {};
      }
    })();
  }

  getOptions() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      try {
        let response = yield _this3.service.getOptions();
        _this3.options = response.options;
      } catch (error) {
        _this3.options = {};
      }
    })();
  }

  render() {
    return html(_templateObject(), this.data, this.options, this.width, this.height);
  }

}

export default PolarisBarChart;
