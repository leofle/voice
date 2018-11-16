import React, { Component } from "react";
const ReactHighcharts = require('react-highcharts');

class SatisfactionChart extends Component {

    constructor() {
        super();
        this.initTime = (new Date()).getTime();
        this.sentence = '';
        this.totalScore = 0;
        this.history = [];
    }

    shouldComponentUpdate(newProps) {
        const newScore = newProps.score;
        const newSentence = newProps.sentence;

        if (this.sentence !== newSentence) {
            let newTotalScore = this.totalScore + newScore;
            this.totalScore = Math.max(Math.min(20, newTotalScore), -20);
            const time = (new Date()).getTime() - this.initTime;
            this.satChart.chart.series[0].addPoint({x: time, y: this.totalScore});
        }

        this.score = newScore;
        this.sentence = newSentence;

        return false;
    }

    getSatisfaction = () => {
        return this.totalScore || 0;
    }

    render() {
        let config = {
            chart: {
                height: 300,
                type: 'spline'
            },

            colors: ['#00cee6','#9b9bd7','#6EDA55','#fc7570','#fbb755','#218A8C'],

            legend: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            title: {
                text: ''
            },

            tooltip: {
                enabled: false
            },

            yAxis: {
                title: {
                    text: 'Satisfaction'
                },
                min: -20,
                max: 20,
                labels: {
                    formatter: function(label) {
                        switch(label.value) {
                            case 0:
                                return '';
                            case 10:
                                return '<span class="emoji">😉</span>';
                            case 20:
                                return '<span class="emoji">🥰</span>';
                            case -10:
                                return '<span class="emoji">🙁</span>';
                            case -20:
                                return '<span class="emoji">😢</span>';
                        }
                    },
                    useHTML: true
                }
            },

            xAxis: {
                title: {
                    text: 'Time'
                },
                type: 'datetime',
                labels: {
                    formatter: function(label) {
                        let hours = Math.floor(label.value / 1000 / 360);
                        hours = hours < 10 ? `0${hours}` : hours;
                        let minutes = Math.floor(label.value / 1000 / 60);
                        minutes = minutes < 10 ? `0${minutes}` : minutes;
                        let seconds = (label.value / 1000) % 60;
                        seconds = seconds < 10 ? `0${seconds}` : seconds;
                        return `${hours}:${minutes}:${seconds}`;
                    }
                }
            },
        
            series: [{
                name: 'xc',
                data: [{x: 0, y: 0}]
            }]
        };

        return (
			<ReactHighcharts config={config} ref={(satChart) => this.satChart = satChart}></ReactHighcharts>
	    )
    }
}
export default SatisfactionChart;