import React, {Component, Fragment} from 'react'
import Form from '../Form'
import Voice from '../Voice'
import { compose, graphql } from 'react-apollo'
import {getRecordsQuery, addRecordMutation} from '../../queries'
import { Card, CardFlex, Button, Speech } from '../../styles'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'en-US';

class Home extends Component {
  state = {
    recordstatus: false,
    count:0,
    label: '',
    transArray:[]
  }
  onRecordingStart = ()=>{
    let {transArray} = this.state;
    recognition.start();
    recognition.addEventListener("result", (e)=> {
      const tran = Array.from(e.results)
      .map(result=> result[0])
      .map(result=> result.transcript)
      .join('');

      if(e.results[0].isFinal){
        console.log('isFinal', this.state.transArray)
        this.setState({
          transArray: this.state.transArray.concat([tran])
        }
        )
      }
      // else {
      //   this.setState({
      //     transArray: this.state.transArray.concat([tran])
      //   })
      // }
    })
    recognition.addEventListener("end", recognition.start);
    this.setState({
      recordstatus: true,
      count: this.state.count +1
    })
  }
  onRecordingStops = ()=>{
    recognition.stop();
    this.setState({
      recordstatus: false
    })
  }
  addLabel = (label)=> {
    this.setState({
      label
    })
  }
  handleForm = (e)=> {
    console.log(e)
  }

  render(){
    let formProps = {
      addLabel: this.addLabel,
      label: this.state.label,
      hadleSubmit: (event)=> {this.handleForm(event)}
    }
    return (
      <Fragment>
      <Voice 
        status={this.state.recordstatus} 
        label={this.state.label}
      />
      <CardFlex>
        <Button onClick={this.onRecordingStart}>
        <svg viewBox="0 0 24 24" 
          width="25"
          fill="#fff">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
        </svg>
        </Button>
        <Button bcolor="#be47ff" onClick={this.onRecordingStops} 
          disabled={!this.state.recordstatus}>
          stop record
        </Button>
      </CardFlex>
      <Card>
      <Speech>
        {this.state.transArray.map((trans, index)=>{
          return <p key={index}>{trans}</p>
        })}
      </Speech>
      </Card>
      <Form {...formProps}/>
      <Card>
        <p>Recorded times: {this.state.count}</p>
        <p>Record name: {this.state.label}</p>
        <p>Record status: {this.state.recordstatus? 'recording':'stopped'}</p>
      </Card>
    </Fragment>
    )
  } 
  
}

export default compose(
  graphql(getRecordsQuery, {name: 'getRecordsQuery'}),
  graphql(addRecordMutation, {name: 'addRecordMutation'})
)(Home)