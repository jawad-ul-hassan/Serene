const _ = el => document.querySelector(el);
const __ = el => document.querySelectorAll(el);

const playlist = [
  {
    title: 'Ambient Sleep Music',
    src: '../assets/audios/sleep-audios/Ambient Sleep Music.mp3',
    poster: '../assets/images/5uwq.gif',
  },

  {
    title: 'Binaural Beats Deep Sleep Music',
    src: '../assets/audios/sleep-audios/Binaural Beats Deep Sleep Music.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Binaural Waves Sleep Music',
    src: '../assets/audios/sleep-audios/Binaural Waves Sleep Music.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Deep Sleep Music',
    src: '../assets/audios/sleep-audios/Deep Sleep Music.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Nature Sleep Music',
    src: '../assets/audios/sleep-audios/Nature Sleep Music.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Relaxing Rain Music',
    src: '../assets/audios/sleep-audios/Relaxing Rain Music.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Relaxing Sleep Music',
    src: '../assets/audios/sleep-audios/Relaxing Sleep Music.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Sleep Music With Binaural Beats.mp3',
    src: '../assets/audios/sleep-audios/Sleep Music With Binaural Beats.mp3',
    poster: '../assets/images/5uwq.gif',
  },
];

let audio = document.createElement('audio');
audio.src = playlist[0].src;
audio.preload = 'auto';
audio.controls = true;

const playSong = evt => {
  let title = evt.textContent;
  let src = evt.getAttribute('data-src');
  let poster = evt.getAttribute('data-poster');

  Array.from(__('.mp_body-sleep ol li a')).forEach(item => {
    item.className = '';
  });

  evt.className = 'active';
  audio.src = src;
  audio.play();
  audio.onerror = () => {
    evt.className = 'error';
    evt.textContent = 'Error on load this song!';
  };

  //   _('.mp_head_poster-sleep figcaption').innerHTML = title;
  _('.mp_head_poster-sleep img').src = poster;
  return false;
};

let html = '';
Array.from(playlist).forEach((item, k) => {
  k = k + 1;
  if (k === 1) {
    html += `<li><a class="active" onclick="playSong(this)" href="javascript:void(0)" data-poster="${item.poster}" data-src="${item.src}"><b>${k} </b> ${item.title}</a></li>`;
  } else {
    html += `<li><a onclick="playSong(this)" href="javascript:void(0)" data-poster="${item.poster}" data-src="${item.src}"><b>${k} </b> ${item.title}</a></li>`;
  }
});

// _('.mp_head_poster figcaption').innerHTML = playlist[0].title;
_('.mp_head_poster-sleep img').src = playlist[0].poster;
_('.mp_body-sleep ol').innerHTML = html;
_('.mp_footer-sleep').appendChild(audio);
