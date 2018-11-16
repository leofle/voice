import React, { Component } from "react";
import Gauge from 'react-svg-gauge';
import './style.scss';

class HoldWidget extends Component {

    constructor() {
		super();

        this.state = {
			startCallTime: undefined,
			callSeconds: 0,
			idleSecondsCounter: 0
		};
	}
	
	componentDidUpdate() {
		const { isRecording } = this.props;

		if (isRecording && !this.callTimeInterval) {
			this.callTimeInterval = setInterval(() => {
				const { callSeconds, idleSecondsCounter } = this.state;
				const isInIdleSession = this.isInIdleSession;

				let stateToSet = {
					callSeconds: callSeconds + 1
				};
				if (isInIdleSession && this.debounceCounter < 2) {
					this.debounceCounter++;
				}
				else {
					stateToSet.idleSecondsCounter = idleSecondsCounter + (isInIdleSession ? 1 : 0);
				}

				this.setState(stateToSet);
			}, 1000);
		}

		if (!isRecording && this.callTimeInterval) {
			clearInterval(this.callTimeInterval);
		}
	}

	startIdelSession = () => {
		if (!this.isInIdleSession) {
			this.isInIdleSession = true;
			this.debounceCounter = 0;
		}
	}

	stopIdleSession = () => {
		this.isInIdleSession = false;
	}

	getGuageValue = () => {
		return this.savedGduageValue || 0;
	}

    render() {
		const { callSeconds, idleSecondsCounter } = this.state;
		
		let callMinutesFinal = Math.floor(callSeconds / 60);
		callMinutesFinal = callMinutesFinal < 10 ? `0${callMinutesFinal}` : callMinutesFinal;
		let callSecondsfinal = callSeconds % 60;
		callSecondsfinal = callSecondsfinal < 10 ? `0${callSecondsfinal}` : callSecondsfinal;

		let callIdleMinutesFinal = Math.floor(idleSecondsCounter / 60);
		callIdleMinutesFinal = callIdleMinutesFinal < 10 ? `0${callIdleMinutesFinal}` : callIdleMinutesFinal;
		let idleSecondsCounterfinal = idleSecondsCounter % 60;
		idleSecondsCounterfinal = idleSecondsCounterfinal < 10 ? `0${idleSecondsCounterfinal}` : idleSecondsCounterfinal;

		const guageValue = Math.round(idleSecondsCounter / callSeconds * 100);
		const color = (guageValue > 75 ? '#fc7570' : guageValue > 40 ? '#fbb755' : '#6EDA55')

		this.savedGduageValue = guageValue;

		return (
			<div className={'hold-container'}>
				<div className={'hold-clocks'}> 
					<div className={'hold-clock'}>
						<div className={'hold-clockTitle'}> Call Duration </div>
						<div className={'hold-clockDigital'}> {`00:${callMinutesFinal}:${callSecondsfinal}`} </div>
					</div>
					<div className={'hold-clock'}>
						<div className={'hold-clockTitle'}> Idle Time </div>
						<div className={'hold-clockDigital'}> {`00:${callIdleMinutesFinal}:${idleSecondsCounterfinal}`} </div>
					</div>
				</div>
				<div className={'hold-holdPercent'}>
					{<Gauge value={guageValue || 0} width={100} height={150} label={''} color={color} />}
				</div>
			</div>
		);
    }
}
export default HoldWidget;