export const defaults = {
	recordStatus: {
		__typename: "recordStatus",
		isRecording: false
	}
}

export const resolvers =   {
	Query: {},
	Mutation: {
		updateRecordStatus: (_, { isRecording }, { cache }) => {
			cache.writeData({
				data: {
					recordStatus: {
						__typename: "recordStatus",
						isRecording
					}
				}
			});
			return null;
		}
	}
}
