import React, { Component } from "react";
const ReactHighcharts = require('react-highcharts');

class TopicsWidget extends Component {

    constructor() {
        super();
        this.topicsCovered = [];
    }

    shouldComponentUpdate(newProps) {
        const newTopics = newProps.topics;
        const newSentence = newProps.sentence;

        if (newTopics.length && this.sentence !== newSentence) {
			const series = this.topicsChart.chart.series[0];
			let point;
			newTopics.forEach(topic => {
				point = series.points.find(point => point.name === topic);
				if (point) {
					point.update({y: point.y + 1});
				}
				else {
                    this.topicsCovered.push(topic);
					series.addPoint({
						name: topic,
						y: 1
					});
				}
			});
			
        }

        return false;
    }

    getTopicsCovered = () => {
        return this.topicsCovered;
    }

    render() {
        let config = {
            chart: {
				height: 300,
				type: 'pie'
            },

            colors: ['#00cee6','#9b9bd7','#6EDA55','#fc7570','#fbb755','#218A8C'],

            legend: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            title: {
                text: 'Topics Distribution'
            },

            plotOptions: {
                pie: {
                    dataLabels: {
                        style: {
                            fontSize: '24px',
                            fontFamily: 'sans-serif',
                            fontWeight: 400
                        }
                    }
                }
            },
        
            series: [{
                name: 'topics',
                data: []
            }]
        };

        return (
			<ReactHighcharts config={config} ref={(topicsChart) => this.topicsChart = topicsChart}></ReactHighcharts>
	    )
    }
}
export default TopicsWidget;
