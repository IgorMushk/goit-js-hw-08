import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const KEY_STORAGE = 'videoplayer-current-time';
const player = new Player(iframe);

const starTimePlay = localStorage.getItem(KEY_STORAGE);
if (starTimePlay) {
  player.setCurrentTime(starTimePlay);
}

const onPlay = function (data) {
  localStorage.setItem(KEY_STORAGE, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
