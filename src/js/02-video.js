import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
const player = new Player(iframe);

//localStorage.clear();

const starTimePlay = localStorage.getItem('videoplayer-current-time');
if (starTimePlay) {
  console.log(Number(starTimePlay));
  player.setCurrentTime(starTimePlay);
}

const onPlay = function (data) {
  // data is an object containing properties specific to that event
  console.log('played the video!');
  //console.log(data);
  //localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
};

player.on('timeupdate', onPlay);

// player.on('play', function () {
//   console.log('played the video!');
// });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});