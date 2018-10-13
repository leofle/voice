import React from 'react'
import { ReactMic } from 'react-mic';
import store from '../../store';
import { CardFlex } from '../../styles'

export class Voice extends React.Component {

	state = {
		blob:''
	}

  onData = (recordedBlob)=> {
		console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop = (recordedBlob)=> {
		console.log('recordedBlob is: ', recordedBlob);
		this.props.saverecord(recordedBlob)
		this.setState({blob: recordedBlob})
  }

  render() {
    return (
      <CardFlex column noshadow>
        <ReactMic
          record={store.getState().records.recordstatus}
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