import React from 'react'
import { ReactMic } from 'react-mic';
import { CardFlex } from '../../styles'
import { compose, graphql } from 'react-apollo'
import {GET_RECORDS_QUERY, ADD_RECORD_MUTATION} from '../../queries'

class Voice extends React.Component {

	state = {
    recordstatus:this.props.status || false,
    blob: '',
    speech: ''
	}

  onData = (recordedBlob)=> {
		//console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop = (recordedBlob)=> {
    //console.log(this.props.textSpeech.join(' '));
    this.setState({blob: recordedBlob, recordstatus: false})
		this.props.ADD_RECORD_MUTATION({
      variables: {
        name:this.props.label || '',
        startTime: String(recordedBlob.startTime),
        stopTime: String(recordedBlob.stopTime),
        blob: recordedBlob.blobURL,
        speech: this.props.textSpeech.join(' ')
      }
    })
  }

  render() {
    return (
      <CardFlex column noshadow>
        <ReactMic
          record={this.props.status}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FFF" />
				<audio id="audio" controls src={this.state.blob.blobURL}></audio>
      </CardFlex>
    );
  }
}

export default compose(
  graphql(GET_RECORDS_QUERY, {name: 'GET_RECORDS_QUERY'}),
  graphql(ADD_RECORD_MUTATION, {name: 'ADD_RECORD_MUTATION'})
)(Voice)