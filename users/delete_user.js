'use strict'
const AWS = require('aws-sdk');
const dynamoDb = nw AWS.DynamoDB.DocumentClient();

module.exports.delete = (event, context, callback) =>{
	const paramss = {
		TableName: process.env.DYNAMODB_TABLE,
		Key:{
			id: event.pathParameters.id,
		},
	};

	dynamoDb.delete(params, (error) => {
		if(error){
			console.error(error);
			callback(new Error('Couldn\'t Delete the users.'));
			return;
		}

		const response = {
			statusCode:200,
			body:JSON.stringify({}),
		};
		callback(null, response);
	});
};