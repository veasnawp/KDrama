// sample fetch json url function
function getPlaylist(url, key, postName) {
  if (url) url = url
  else url = `https://rawcdn.githack.com/veasnawp/KDrama/${key}/archive/datas/${postName}`

  return fetch(url, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
  }).then(response => response.json())
    .then(response => {
      data = response
      //console.log(data)
      return data
    })
}
