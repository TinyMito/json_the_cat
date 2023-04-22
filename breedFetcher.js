const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  if (breedName.length === 0) {
    // If the user forgot to enter the breed name
    return callback('Please enter a breed name!');
  }
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    if (response) {
      //return callback(response);
    }
    
    if (body.length <= 2) {
      return callback('Breed is not found!');
    }

    const data = JSON.parse(body);
    
    // No error set as null and output the search data
    return callback(null, data);
  });
};

module.exports = { fetchBreedDescription };