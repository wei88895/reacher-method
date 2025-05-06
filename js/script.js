<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SurVis Page</title>
    <style>
        .paper-item {
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 5px;
            background-color: #f9f9f9;
        }
        .paper-item h3 {
            color: #333;
        }
        .paper-item p {
            margin: 8px 0;
        }
        .paper-item img {
            max-width: 200px;
            height: auto;
            border-radius: 4px;
        }
        .paper-item a {
            display: inline-block;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div id="paper-list"></div>

    <script>
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
                        <p><strong>DOI：</strong><a href="https://doi.org/${paper.doi}" target="_blank">${paper.doi}</a></p>
                        <img src="${paper.image}" alt="Paper Image">
                        <a href="${paper.link}" target="_blank">查看全文</a>
                    `;
                    container.appendChild(paperDiv);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    </script>
</body>
</html>
