export default function HtmxClicker({ html }) {
  return html`
    <style>
      :host { display: block; }
      a { cursor: pointer; }
    </style>

    <a hx-post="/now" hx-target=".now">Get server time!</a>
    <br>
    <code class="now"></code>
  `
}
