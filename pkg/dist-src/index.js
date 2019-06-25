import { ChartBar, ChartLine } from '@sixphere/chartjs';
import { SixphereLitElement, html } from '@sixphere/lit-element';
customElements.define(ChartBar.is, ChartBar);
customElements.define(ChartLine.is, ChartLine);

class PolarisBarChart extends SixphereLitElement {
  constructor() {
    super();
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

  static get is() {
    return 'polaris-bar-chart';
  }

  async onUpdateComplete() {
    await this.getData();
    await this.getOptions();
    await this.requestUpdate();
  }

  async getData() {
    try {
      let response = await this.service.getData();
      this.data = response.data;
    } catch (error) {
      this.data = {};
    }
  }

  async getOptions() {
    try {
      let response = await this.service.getOptions();
      this.options = response.options;
    } catch (error) {
      this.options = {};
    }
  }

  render() {
    return html`
            <chartjs-bar .data="${this.data}" .options="${this.options}" .width="${300}" .height="${300}"></chartjs-bar>
        `;
  }

}

export default PolarisBarChart;