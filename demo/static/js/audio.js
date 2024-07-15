

function playRandomSong() {
    var playlist = document.getElementById('playlist');
    var audioPlayer = document.getElementById('audioPlayer');
  
    // Obtener elementos <li> (canciones) de la lista de reproducción
    var songs = playlist.getElementsByTagName('li');
  
    // Obtener un índice aleatorio
    var randomIndex = Math.floor(Math.random() * songs.length);
  
    // Obtener el src de la canción aleatoria
    var randomSongSrc = songs[randomIndex].getAttribute('data-src');
  
    // Actualizar el src del elemento <source> dentro de <audio>
    var audioSource = document.getElementById('audioSource');
    audioSource.src = randomSongSrc;
  
    // Cargar y reproducir la nueva canción
    audioPlayer.load();
    audioPlayer.play();
  }
  