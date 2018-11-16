import React, { Component } from "react";
import './style.scss';

class ScriptWidget extends Component {

    constructor() {
		super();
        this.history = [];
    }

    shouldComponentUpdate(newProps) {
		if (!newProps.sentenceTime) {
			return false;
		}

        const newSentenceTime = newProps.sentenceTime.getTime();
        const newSentence = newProps.sentence;

		if (newSentenceTime !== this.sentenceTime) {
			this.sentenceTime = newSentenceTime;
			this.history.push(newSentence);
			return true;
		}

        return false;
	}
	
	componentDidUpdate() {
		if (this.chat) {
			this.chat.scrollTop = 1000000000;
		}
	}

    render() {
		return (
			<div className={'script-container'}>
				<div className={'script-title'}> Chat </div>
				<div className={'script-content'} ref={(chat) => this.chat = chat}>
					{this.history.map((item, index) => (
						<div className={'script-item'} key={index}>{item}</div>
					))}
				</div>
			</div>
		);
    }
}
export default ScriptWidget;
