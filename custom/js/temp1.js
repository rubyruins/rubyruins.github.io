function makeActivityChart() {
	var activityChart = new Chart(document.getElementById('activityChart'), {
		type: 'line',
		data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: 'Hours per day',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'transparent'
				],
				borderColor: [
					getComputedStyle(document.body).getPropertyValue('--color-one')
				],
				borderWidth: 2.5
			}]
		},
		options: {
			hover: {
				mode: 'point',
				intersect: true
			},
			title: {
				display: true,
				text: 'Coding activity this week',
				fontStyle: 'normal'
			},
			legend: {
				display: false,
			}
		}
	});
}