<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Literature Review - SurVis</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div id="survis-container"></div>

  <script src="js/survis.js"></script>
  <script>
    // 加载文献数据并初始化SurVis
    fetch('literature.json')
      .then(response => response.json())
      .then(data => {
        // 初始化SurVis
        const survis = new SurVis({
          container: '#survis-container', // 渲染容器
          data: data,                    // 你的文献数据
          categories: ['category', 'subcategory'], // 分类字段
          titleField: 'title',           // 标题字段
          authorsField: 'authors',       // 作者字段
          yearField: 'year',             // 年份字段
          abstractField: 'abstract',     // 摘要字段
          doiField: 'doi',               // DOI字段
          pdfField: 'pdf_url',           // PDF链接字段
          imageField: 'image'            // 图片字段
        });
        survis.init(); // 初始化可视化
      })
      .catch(error => console.error('Error loading data:', error));
  </script>
</body>
</html>
