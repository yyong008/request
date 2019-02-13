postData('http://www.baidu.com', {answer: 42}).then(data => console.log(data)).catch(error => console.error(error))

function postData(url, data) {
  return fetch(url, {
    body: JSON.stringify(data),
    // default, no-cache, reload, force-cache, only-if-cached
    cache: 'no-cache',
    // include, sama-origin, *omit
    credentials: 'same-origin',
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST',
    // no-cors, cors, *same-origin
    mode: 'cors',
    // manual, *follow, error
    redirect: 'follow',
    // client, no-referrer
    referrer: 'no-referrer'
  }).then(response => response.json()) // parses response to JSON
}