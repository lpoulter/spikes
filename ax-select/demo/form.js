import { html, css, LitElement } from 'lit-element';
import '../ax-select.js';

export class AxForm extends LitElement {
  static get styles() {
    return css`
      span {
        color: red;
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
      { label: 'French Bulldog', value: 'FB' },
      { label: 'German Shepherd', value: 'GS' },
      { label: 'Retrievers', value: 'Golden Retriever' },
    ];
    this.data = { dog: 'Dachshund' };
    this.addEventListener('form-updated', this.formUpdated);
  }

  formUpdated({ detail }) {
    const { name, value } = detail;
    this.data[name] = value;
    this.requestUpdate();
  }

  render() {
    return html` <form>
      <ul>
        <li>Takes a list of options</li>
        <li>calls a callback when option selected with option selected.</li>
        <li>Initialize with a default item</li>
      </ul>

      <pre>${JSON.stringify(this.data)}</pre>
      <ax-select
        label="pick one"
        name="dog"
        initialValue="Jack Russell Terrier"
        .options=${this.options}
      />
    </form>`;
  }
}

window.customElements.define('ax-form', AxForm);
