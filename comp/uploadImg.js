var formData = new FormData()
var photos = document.querySelector("input[type='file'][multiple]")

formatData.append('title', 'My Vegas Vacation')
formatData.append('photos', photos.files)

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData
})
  .then( response => response.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error: ', error))