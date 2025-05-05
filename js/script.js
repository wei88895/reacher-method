fetch('data/papers.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('paper-list');
    data.forEach(paper => {
      const paperDiv = document.createElement('div');
      paperDiv.className = 'paper-item';
      paperDiv.innerHTML = `
        <h3>${paper.title} (${paper.year})</h3>
        <p><strong>作者：</strong>${paper.authors}</p>
        <p><strong>分类：</strong>${paper.category}</p>
        <p><strong>摘要：</strong>${paper.abstract}</p>
        <a href="${paper.link}" target="_blank">查看全文</a>
      `;
      container.appendChild(paperDiv);
    });
  });
