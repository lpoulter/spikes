import { html, css, LitElement } from 'lit-element';
import '../ax-select.js';

export class AxForm extends LitElement {
  static get styles() {
    return css`
      p {
        color: blue;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.options = [
      { label: 'sausage', value: 'Dachshund' },
      { label: 'Jack Russell', value: 'Jack Russell Terrier' },
    ];
    this.data = { dog: 'Dachshund' };
    this.formUpdate = this.formUpdate.bind(this);
  }

  formUpdate(newValue) {
    const [name, value] = newValue;
    this.data[name] = value;
    this.requestUpdate();
  }

  render() {
    return html` <pre>${JSON.stringify(this.data)}</pre>
      <form>
        <ax-select
          label="pick one"
          name="dog"
          .options=${this.options}
          .formUpdate=${this.formUpdate}
        />
      </form>`;
  }
}

window.customElements.define('ax-form', AxForm);
