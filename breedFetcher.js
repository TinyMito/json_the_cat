const request = require('request')
const breedName = process.argv.slice(2);

if (breedName.length === 0) {
  console.log('Please enter a breed name!')
  return;
}

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(error)
    return;
  }
  if (response) {
    //console.log(response)
  }
  
  if (body.length <= 2) {
    console.log('Breed is not found!')
    return;
  }

  //console.log(body.length)
  //console.log(typeof body)
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

})
