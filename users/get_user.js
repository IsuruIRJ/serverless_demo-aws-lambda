'use strict';
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) =>{

	const params = {
		TableName: process.env.DYNAMODB_TABLE,
		Key:{
			id: event.pathParameters.id,
		},
	};

	dynamoDb.get(params, (error, result) => {
		if(error){
			console.error(error);
			callback(new Error('Coludn\'t fetch the user.'));
			return;
		}

		const response = {
			statusCode:200,
			body: JSON.stringify(result.Item),
		};
		callback(null, response);
	});
};