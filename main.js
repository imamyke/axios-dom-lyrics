// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://webdev.alphacamp.io/api/lyrics/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

for(let i = 0; i < 11; i++) {
  let track = `${album.tracks[i]}`;
  let newItem = document.createElement("li");
  newItem.setAttribute("class","list-item");
  newItem.innerHTML = `
    <a class="list-link" href="#!">${track}</a>
  `;
  songList.appendChild(newItem);
}

const showLyrics = (i) => {
  let url = `${BASE_URL}${album.artist}/${i.target.innerText}.json`
  axios.get(url)
    .then((res) => {
        lyricsPanel.innerHTML = 
          `
          <h1 class="lyrics-title">${i.target.innerText}</h1>
          <pre class="lyrics-content">${res.data.lyrics}</pre>
          `            
          const listLink = document.querySelectorAll('.list-item .list-link')
          listLink.forEach((e) => {
            e.classList.remove('active')
          })
          i.target.classList.add('active');            
      }) 
    .catch((err) => {
        console.log(err);
    })
}

songList.addEventListener('click', (i) => showLyrics(i))
