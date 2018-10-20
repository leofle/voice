import { gql } from 'apollo-boost'

const getRecordsQuery = gql`
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

const addRecordMutation = gql`
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

const delRecordMutation = gql`
mutation($id:String) {
  delRecord(id:$id){
    name
    id
  }
}
`;

export {getRecordsQuery, addRecordMutation, delRecordMutation};