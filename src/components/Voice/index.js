import React from 'react'
import { ReactMic } from 'react-mic';
import { CardFlex } from '../../styles'
import { compose, graphql } from 'react-apollo'
import {getRecordsQuery, addRecordMutation} from '../../queries'

class Voice extends React.Component {

	state = {
    recordstatus:this.props.status || false,
		blob:''
	}

  onData = (recordedBlob)=> {
		//console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop = (recordedBlob)=> {
    //console.log('recordedBlob is: ', recordedBlob);
    this.setState({blob: recordedBlob, recordstatus: false})
		this.props.addRecordMutation({
      variables: {
        name:this.props.label || '',
        startTime: String(recordedBlob.startTime),
        stopTime: String(recordedBlob.stopTime),
        blob: recordedBlob.blobURL
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
  graphql(getRecordsQuery, {name: 'getRecordsQuery'}),
  graphql(addRecordMutation, {name: 'addRecordMutation'})
)(Voice)