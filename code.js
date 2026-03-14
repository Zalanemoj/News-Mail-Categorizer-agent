const titles = $json.title || [];
const descriptions = $json.description || [];

let html = `
<h2>📰 Today's News</h2>
<hr>
`;

for (let i = 0; i < titles.length; i++) {

  html += `
  <p>
  <b>${i+1}. ${titles[i]}</b><br>
  ${descriptions[i] || ""}
  </p>
  `;
}

return [
  {
    json: {
      message: html
    }
  }
];
