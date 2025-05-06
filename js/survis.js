// survis.js

// SurVis 类
class SurVis {
  constructor(config) {
    this.container = config.container; // 渲染容器的 CSS 选择器
    this.dataUrl = config.dataUrl;     // 数据文件 URL
    this.data = null;                  // 存储加载的数据
  }

  // 加载数据
  async loadData() {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  // 渲染文献列表
  render() {
    const container = document.querySelector(this.container);
    if (!container) {
      console.error('Container not found');
      return;
    }
    container.innerHTML = ''; // 清空容器

    if (!this.data || this.data.length === 0) {
      container.innerHTML = '<p>No data available</p>';
      return;
    }

    // 创建文献列表
    const ul = document.createElement('ul');
    this.data.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${item.title}</h3>
        <p>Authors: ${item.authors}</p>
        <p>Year: ${item.year}</p>
        <p>DOI: <a href="https://doi.org/${item.doi}" target="_blank">${item.doi}</a></p>
        <p>Abstract: ${item.abstract}</p>
        <img src="${item.image}" alt="${item.title}" style="max-width: 200px;">
      `;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }

  // 初始化
  async init() {
    await this.loadData();
    this.render();
  }
}

// 导出 SurVis 类
window.SurVis = SurVis;
