var formData = new FormData()
var fileFiled = document.querySelector("input[type='file']")

formatData.append('username', 'abc')
formatData.append('avatar', fileFiled.files[0])

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
  .then(response => response.json())
  .catch(error => console.log('Error:', error))
  .then(response => console.log('Success: ', response))