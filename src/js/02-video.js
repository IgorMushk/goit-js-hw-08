import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
const player = new Player(iframe);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
  console.log('played the video!');
  console.log(data);
};

player.on('timeupdate', onPlay);

// player.on('play', function () {
//   console.log('played the video!');
// });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
