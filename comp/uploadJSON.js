var url = 'https://example.com/profile'
var data = { username: 'example' }

fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Header({
    'Content-Type': 'application/json'
  })
})
  .then(res => res.json())
  .catch(error => console.log('Error', error))
  .then(response => console.log('Success:', response))
