/**
 * @检查请求是否成功
 */
fetch('flowers.jpg').then(function(response){
  if(response.ok) {
    return response.blob()
  }
  throw new Error('Network response was not ok')
})
  .then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob)
    myImage.src = objectURL
  })
  .catch(function (error) {
    console.log('There has been a problem with your fetch operation: ', error.message)
  })