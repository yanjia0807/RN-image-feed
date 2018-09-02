export function getImageFromId(id) {
  return `https://picsum.photos/600/600?image=${id}`;
}

export function fetchImages() {
  return fetch("https://picsum.photos/list")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json;
    });
}
