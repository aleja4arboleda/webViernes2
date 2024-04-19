// Function to fetch photos from JSONPlaceholder API
async function fetchPhotos() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let photos = await response.json();
    return photos;
  }
  
  // Function to display photos in the gallery
  async function displayPhotos() {
    let gallery = document.getElementById('gallery');
    let photos = await fetchPhotos();
  
    photos.slice(0, 15).forEach(photo => {
      let photoElement = document.createElement('div');
      photoElement.classList.add('photo');
      photoElement.innerHTML = `
        <img src="${photo.url}" alt="${photo.title}">
        <p>${photo.title}</p>
      `;
      gallery.appendChild(photoElement);
    });
  }
  
  // Call the displayPhotos function when the page loads
  displayPhotos();