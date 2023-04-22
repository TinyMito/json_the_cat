const request = require('request')
const breedName = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  console.log(typeof body)

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

})
