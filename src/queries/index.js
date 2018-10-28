import { gql } from 'apollo-boost'

const GET_RECORDS_QUERY = gql`
  {
    records {
      id
      name
      startTime
      stopTime
      blobUrl
    }
  }
`;

const ADD_RECORD_MUTATION = gql`
mutation($name:String,$startTime: String,$stopTime:String,$blob:String) {
  addRecord(name: $name, startTime: $startTime,stopTime:$stopTime, blobUrl: $blob){
    name
    id
    startTime
    stopTime
    blobUrl
  }
}
`;

const DEL_RECORD_MUTATION = gql`
mutation($id:String) {
  delRecord(id:$id){
    name
    id
  }
}
`;

const GET_RECORD_STATUS = gql`
  query {
    recordStatus @client {
      isRecording
    }
  }
`;

const CHANGE_RECORD_STATUS_MUTATION = gql`
  mutation($isRecording: Boolean) {
    updateRecordStatus(isRecording: $isRecording) @client
  }
`;

export {
  GET_RECORDS_QUERY,
  ADD_RECORD_MUTATION, 
  DEL_RECORD_MUTATION,
  GET_RECORD_STATUS,
  CHANGE_RECORD_STATUS_MUTATION
};