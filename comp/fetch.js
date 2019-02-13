var url = 'http://www.baidu.com'

fetch(url).then(function(response) {
  return response.json()
}).then(
  function (data) {
    console.log(data)
  }
).catch(function (e) {
  console.log("Oops, error")
})

// 使用 arror-function

fetch(url).then(response => response.json()).then(data => console.log(data)).catch(e => console.log("Oops, error", e))