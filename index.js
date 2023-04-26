const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  name: String,
  type: String,
  weakness: String
});

const pokemonModel = dynamoose.model('Pokemon', schema);

exports.handler = async (event) => {
  // TODO implement
  console.log(event.body);
  let requestBody = null;
  if (event.body) {
    requestBody = JSON.parse(event.body);
  }

  const pokemonValues = await pokemonModel.create(requestBody);

  const response = {
    statusCode: 200,
    body: JSON.stringify(pokemonValues),
  };
  return response;
};