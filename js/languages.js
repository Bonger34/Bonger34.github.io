let chartDom = document.getElementById('languagesPieChart');
fetch('https://api.github.com/repos/Bonger34/Bonger34.github.io/languages')
	.then(response => response.json())
	.then(data => {
		let seriesData = Object.entries(data).map(([lang, size]) => ({
			name: lang,
			value: size
		}));
		let languagesPieChart = echarts.init(chartDom);
		let option = {
			title: {
				text: '仓库编程语言分布',
				left: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b} : {c} ({d}%)'
			},
			legend: {
				orient: 'horizontal',
				bottom: 'bottom',
				data: seriesData.map(item => item.name)
			},
			series: [{
				name: '语言分布',
				type: 'pie',
				data: seriesData
			}]
		};
		languagesPieChart.setOption(option);
	})
	.catch(error => console.error('Error:', error));