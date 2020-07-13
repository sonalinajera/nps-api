const apiKey = 'ddHtrKRwQjLVxiJ2edFBpMZich5hvob42be21Fpc';

function watchForm() {
  $('form').submit(event => { 
    event.preventDefault();
    let resultMax = $('#resultMax').val();
    let state = $('select').val();
    getParks(state, resultMax);
  });
}


function getParks(state, resultMax) {
  //formats url
  let formattedURL = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&limit=${resultMax}&api_key=${apiKey}`;
  //fetches
  fetch(formattedURL)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson.data));
}

function displayResults(arr) {
    $('ul').empty();
  arr.forEach(result => $('ul').append(`<li><h2>${result.fullName}</h2><p><a href=" ${result.url}" target="_blank">Park home page</a></p><p>Description:${result.description}</p></li>`));
}

$(watchForm);