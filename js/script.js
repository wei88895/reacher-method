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
        const papers = [
            {
                title: "Visualization for departures from symmetry with the power-divergence-type measure in two-way contingency tables",
                authors: "Wataru Urasaki, Tomoyuki Nakagawa, Jun Tsuchida, Kouji Tahata",
                year: 2023,
                doi: "arxiv:2410.00300",
                link: "https://arxiv.org/pdf/2410.00300",
                category: "统计分析与可视化",
                subcategory: "统计方法与可视化",
                image: "images/paper1.jpg"
            },
            {
                title: "A Data Augmentation Strategy Combining a Modified pix2pix Model and the Copy-Paste Operator for Solid Waste Detection With Remote Sensing Images",
                authors: "Xiong Xu, Beibei Zhao, Xiaohua Tong et al.",
                year: 2022,
                doi: "10.1109/JSTARS.2022.3209967",
                link: "https://ieeexplore.ieee.org/document/9904838",
                category: "船舶目标检测",
                subcategory: "数据增强与生成模型",
                image: "images/paper2.jpg"
            },
            {
                title: "JOINED: Prior Guided Multi-task Learning for Joint Optic Disc/Cup Segmentation and Fovea Detection",
                authors: "Huaqing He, Li Lin, Zhiyuan Cai, Xiaoying Tang",
                year: 2023,
                doi: "10.3390/pr13010249",
                link: "https://proceedings.mlr.press/v172/he22a/he22a.pdf",
                category: "医学图像分析",
                subcategory: "多任务学习",
                image: "images/paper3.jpg"
            },
            {
                title: "Multi-Type Ship Target Detection in Complex Marine Background Based on YOLOv11",
                authors: "Yao Wang, Weigui Zeng et al.",
                year: 2023,
                doi: "10.3390/pr13010249",
                link: "https://www.researchgate.net/publication/388071531_Multi-Type_Ship_Target_Detection_in_Complex_Marine_Background_Based_on_YOLOv11",
                category: "船舶目标检测",
                subcategory: "深度学习与目标检测",
                image: "images/paper4.jpg"
            },
            {
                title: "Research on Detection Methods for Dynamic Ship Targets in Complex Marine Environment From Visible Light Images",
                authors: "Yao Wang, Yi Jiang et al.",
                year: 2023,
                doi: "Not provided",
                link: "https://www.mdpi.com/2072-4292/14/27/12/pdf",
                category: "船舶目标检测",
                subcategory: "动态目标检测",
                image: "images/paper5.jpg"
            },
            {
                title: "Deep Learning for SAR Ship Detection: Past, Present and Future",
                authors: "Jianwei Li, Congan Xu et al.",
                year: 2022,
                doi: "10.3390/rs14112712",
                link: "https://www.researchgate.net/publication/390636025_Research_on_Detection_Methods_for_Dynamic_Ship_Targets_in_Complex_Marine_Environment_From_Visible_Light_lmages",
                category: "船舶目标检测",
                subcategory: "综述与评估",
                image: "images/paper6.jpg"
            },
            {
                title: "A new CNN-based semantic object segmentation for autonomous vehicles in urban traffic scenes",
                authors: "Gurkan Dogan, Burhan Ergen",
                year: 2023,
                doi: "10.1007/s13735-023-00313-5",
                link: "https://link.springer.com/content/pdf/10.1007/s13735-023-00313-5.pdf",
                category: "自动驾驶与交通场景",
                subcategory: "语义分割",
                image: "images/paper7.jpg"
            },
            {
                title: "Multi-task learning and joint refinement between camera localization and object detection",
                authors: "Junyi Wang, Yue Qi",
                year: 2022,
                doi: "10.1007/s41095-022-0319-z",
                link: "https://link.springer.com/article/10.1007/s41095-022-0319-z",
                category: "自动驾驶与交通场景",
                subcategory: "多任务学习",
                image: "images/paper8.jpg"
            },
            {
                title: "Expert teacher based on foundation image segmentation model for object detection in aerial images",
                authors: "Yinhui Yu, Xu Sun, Qing Cheng",
                year: 2023,
                doi: "10.1038/s41598-023-49448-9",
                link: "https://github.com/cq100/ET-FSM",
                category: "遥感图像分析",
                subcategory: "小目标检测",
                image: "images/paper9.jpg"
            },
            {
                title: "Semantic segmentation feature fusion network based on transformer",
                authors: "Tianping Li, Zhaotong Cui, Hua Zhang",
                year: 2023,
                doi: "10.1038/s41598-025-90518-x",
                link: "https://link.springer.com/content/pdf/10.1038/s41598-025-90518-x.pdf",
                category: "遥感图像分析",
                subcategory: "特征融合",
                image: "images/paper10.jpg"
            }
        ];

        const container = document.getElementById('paper-list');

        papers.forEach(paper => {
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
    </script>
</body>
</html>
