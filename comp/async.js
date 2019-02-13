try {
  let response = await fetch(url)
  let data = response.json()
  console.log(data)
} catch(e) {
  console.log("Oops, error", e)
}