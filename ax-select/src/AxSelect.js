/* eslint-disable lit-a11y/no-invalid-change-handler */
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
      initialValue: { type: String },
    };
  }

  firstUpdated() {
    this.renderRoot.querySelector('#pet-select').value = this.initialValue;
  }

  onChange(event) {
    // composed need for the event to pass the shadow boundary
    const formUpdated = new CustomEvent('form-updated', {
      bubbles: true,
      composed: true,
      detail: { name: this.name, value: event.target.value },
    });
    this.dispatchEvent(formUpdated);
  }

  render() {
    return html`
      <label for="pet-select">${this.label}</label>
      <select
        name=${this.name}
        id="pet-select"
        @change="${this.onChange}"
        value="Dachshund"
      >
        <option value="">--Please choose an option--</option>
        ${this.options.map(
          option => html`<option value=${option.value}>${option.label}</option>`
        )}
      </select>
    `;
  }
}
