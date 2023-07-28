export default function Head() {
  return /*html*/`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Enhance with htmx</title>
      <script type="module" src="/_public/bundles/htmx.mjs"></script>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 78ch;
          padding: 3rem 1rem;
          margin: auto;
          font-size: 18px;
          line-height: 1.5;
          font-family: system-ui, sans-serif;
          background: #00011A;
          color: #CCC;
        }
        a { color: gold; }
        code { font-family: ui-monospace, monospace; }
      </style>
    </head>
  `
}
