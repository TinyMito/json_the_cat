const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    // Return if no breed entered or blank or api error
    console.log('Error fetch details:', error);
  } else {
    // Output the breed data
    console.log(desc);
  }
});