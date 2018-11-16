import React,{ Component } from 'react'
import { compose, graphql } from 'react-apollo'
import { Button, Card } from '../../styles'
import { GET_RECORDS_QUERY } from '../../queries'
import { Responsive, WidthProvider } from 'react-grid-layout'
import CallWidget from '../CallWidget'
import TopicsWidget from '../TopicsWidget'
import { ToastContainer, toast } from 'react-toastify';
import Gauge from 'react-svg-gauge';
import 'react-toastify/dist/ReactToastify.css';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './style.scss'
import nlp  from 'compromise'
import Sentiment from 'sentiment';
import SatisfactionChart from '../SatisfactionChart';
import nlpSisensePlugin from '../../utils/nlpSisensePlugin'
import ScriptWidget from '../ScriptWidget'
import WelcomeWidget from '../WelcomeWidget'
import TodoWidget from '../TodoWidget'
import ResourcesWidget from '../ResourcesWidget'
import HoldWidget from '../HoldWidget'
import StatusWidget from '../StatusWidget'
import Overlay from '../Overlay';

const sentencesSentiment = new Sentiment();

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'en-US';

nlp.plugin(nlpSisensePlugin);

const ResponsiveGridLayout = WidthProvider(Responsive);
// var synth = window.speechSynthesis;
// const voices = synth.getVoices();
// var utterThis = new SpeechSynthesisUtterance('Did you try to configure your ssl?');
// utterThis.voice = voices[10];
// synth.speak(utterThis);
class Journey extends Component {

  constructor() {
    super();

    this.layout = [
      {i: 'welcome', x: 0, y: 0, w: 3, h: 2, static: true},
      {i: 'todo', x: 3, y: 0, w: 3, h: 2},
      {i: 'call', x: 0, y: 2, w: 3, h: 2, minW: 2, maxW: 6},
      {i: 'status', x: 3, y: 2, w: 3, h: 2, minW: 2, maxW: 6},
      {i: 'topics', x: 6, y: 0, w: 3, h: 2},
      {i: 'satisfaction', x: 0, y: 3, w: 6, h: 2},
      {i: 'scripts', x: 6, y: 4, w: 3, h: 4},
      {i: 'hold', x: 10, y: 0, w: 3, h: 2},
      {i: 'resources', x: 10, y: 1, w: 3, h: 4, static: true},
    ];

    this.state =  {
      score: 0,
      sentence: '',
      features: [],
			isRecording: false,
			isStop: false,
			sentenceTime: undefined,
			activeName:'madonna',
      tasks: [
        {
            title: "Finish RFP",
            status: "Pending"
        },
        {
            title: "First Demo",
            status: "Done"
        },
        {
            title: "Security Approval",
            status: "Open"
        },
      ]
    };
  }

  onRecognitionStart = () => {
    this.holdClocks.startIdelSession();
    recognition.start();
	}

	notify = () => {
		toast.warn("Don't talk too much!", {
			position: toast.POSITION.BOTTOM_RIGHT
		});
	}

  onRecognitionResult = (e) => {
		this.holdClocks.stopIdleSession();
    const tran = Array.from(e.results)
    .map(result=> result[0])
    .map(result=> result.transcript)
    .join('');
    if(e.results[0].isFinal){
      
      let doc = nlp(tran)
      const features = doc.match('#Feature').data().map(topic => topic.normal);
      const score = sentencesSentiment.analyze(tran).score;

			if (tran.split(' ').length > 15) {
				this.notify();
			}
      // console.log(`Customer talked about ${features}, satisfaction score: ${score}`);

      doc.verbs().slice(0, 50).out('frequency')

      if (tran.toLowerCase().includes('we have to')) {
        const actions = tran.toLowerCase().split('we have to');
        this.setState((state) => {
            state.tasks.push({title: actions[1], status: "Open", isNew: true});
            return state;
        })
      }

      if (tran.toLowerCase().includes("let's talk tomorrow")) {
        this.setState((state) => {
            state.tasks.push({title: "Schedule a meeting for tomorrow", status: "Open", isNew: true});
            return state;
        })
			}

			if(tran.toLowerCase().includes("leo")){
				this.setState((state) => {
					state.activeName = 'lio';
					return state;
			})
			}

			if(tran.toLowerCase().includes("thomas")){
				this.setState((state) => {
					state.activeName = 'thomas';
					return state;
			})
			}

			if(tran.toLowerCase().includes("shirley")){
				this.setState((state) => {
					state.activeName = 'shirley';
					return state;
			})
			}

			if(tran.toLowerCase().includes("yotam")){
				this.setState((state) => {
					state.activeName = 'yotam';
					return state;
			})
			}

			if(tran.toLowerCase().includes("madonna")){
				this.setState((state) => {
					state.activeName = 'madonna';
					return state;
			})
			}
			if(tran.toLowerCase().includes("eminem")){
				this.setState((state) => {
					state.activeName = 'eminem';
					return state;
			})
			}

      this.setState({
        score,
        features,
        sentence: tran,
        sentenceTime: new Date(),
      })
    }
  }

	onRecordingStart = () => {
		if (!this.state.isRecording) {
			this.onRecognitionStart();
			recognition.addEventListener('result', this.onRecognitionResult);
      recognition.addEventListener('end', this.onRecognitionStart);

      this.setState({isRecording: true});
		}
	}

	stopRecord = () => {
		if (this.state.isRecording) {
			recognition.removeEventListener('end', this.onRecognitionStart);
			recognition.removeEventListener('result', this.onRecognitionResult);
			recognition.abort();
      recognition.stop();

      this.setState({
				isRecording: false,
				isStop: true
      });
		}
	}
	handleClick = ()=> {
		this.setState({
			isStop: false
		});
	}
  render () {
    const { score, features, sentence, sentenceTime, isRecording, tasks, isStop, activeName } = this.state;
		const satisScore = (this.satis && this.satis.getSatisfaction()) || 0;
		let satisImage;
		
		satisImage = satisScore < -10 ? 'angry' : (satisScore > 10 ? 'loove' : 'normal');
		const guageValue = (this.holdClocks && this.holdClocks.getGuageValue()) || 0;
		const color = (guageValue > 75 ? '#fc7570' : guageValue > 40 ? '#fbb755' : '#6EDA55');

		const topicsCovered = (this.topicsComponent && this.topicsComponent.getTopicsCovered()) || [];
		
    return (
      <Card>
        <ResponsiveGridLayout className="layout" layouts={{lg:this.layout}}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
          <div className={'card'} key="welcome">
						<WelcomeWidget/>
					</div>
          <div className={'card'} key="todo">
						<TodoWidget tasks={tasks}/>
					</div>
          <div className={'card'} key="status">
						<StatusWidget/>
					</div>
          <div className={'card'} key="call">
						<CallWidget activeName={activeName}/>
					</div>
          <div className={'card'} key="topics">
						<TopicsWidget topics={features} sentence={sentence} ref={(topicsComponent) => this.topicsComponent = topicsComponent} />
					</div>
          <div className={'card'} key="satisfaction">
						<SatisfactionChart score={score} sentence={sentence} ref={(satis) => this.satis = satis} />
					</div>
					<div className={'card'} key="scripts">
						<ScriptWidget sentence={sentence} sentenceTime={sentenceTime} />
					</div>
					<div className={'card'} key="hold">
						<HoldWidget isRecording={isRecording} ref={(holdClocks) => this.holdClocks = holdClocks} />
					</div>
					<div className={'card'} key="resources">
						<ResourcesWidget topics={features}/>
					</div>
        </ResponsiveGridLayout>
				<ToastContainer autoClose={4000}/>
				<Button onClick={this.onRecordingStart}>Record</Button>
				<Button onClick={this.stopRecord}>Stop</Button>
				<Overlay status={isStop} handleClick={this.handleClick}>
					<div className={'summary'}>
						<div className={'summary-header'}>Summary</div>
						<div className={'summary-content'}>
							<div className={'summary-row'}>
								<img src={`${activeName}.jpg`}/>
								<div className={'sumarry-contacts'}>
									<div className={'summary-user'}>Sisense: Sales Department</div>
									<div className={'summary-user'}>Customer: {activeName}</div>
								</div>
							</div>
							<div className={'summary-row summary-row2'}>
								<div className={'summary-satisfaction'}>
									<div> Customer Satisfaction: </div>
									<img src={`${satisImage}.png`}/>
								</div>
								<div className={'summary-idlePercentTime'}>
										<div> Idle percentage time: </div>
										<Gauge value={guageValue || 0} width={80} height={50} label={''} color={color} />
								</div>
							</div>
							<div className={'summary-row'}>
								<div className={'summary-topics'}>
									<div className={'summary-topics-title'}> Topics Covered: </div> 
									{topicsCovered.map(item => (
										<div className={'summary-topic'}> {item} </div>
									))}
								</div>
							</div>
						</div>
					</div>
				</Overlay>
      </Card>
    );
  }
}
export default compose(
  graphql(GET_RECORDS_QUERY, {name: 'GET_RECORDS_QUERY'}),
)(Journey)