import { html, css, LitElement } from 'lit-element';

export class AxSelect extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--ax-select-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      label: { type: String },
      options: { type: Array },
      formUpdate: { type: Function },
      name: { type: String },
      value: { type: String },
    };
  }

  onChange(event) {
    this.formUpdate([ this.name, event.target.value]);
  }

  render() {
    return html`
      <label for="pet-select">${this.label}</label>

      <select name=${this.name} id="pet-select" @change="${this.onChange}">
        <option value="">--Please choose an option--</option>
        ${this.options.map(
          option => html`<option value=${option.value}>${option.label}</option>`
        )}
      </select>
    `;
  }
}
