const _ = el => document.querySelector(el);
const __ = el => document.querySelectorAll(el);

const playlist = [
  {
    title: 'Guided-Meditation-1',
    src: '../assets/audios/meditation-audios/Guided-Meditation-1.mp3',
    poster: '../assets/images/5uwq.gif',
  },

  {
    title: 'Guided-Meditation-1',
    src: '../assets/audios/meditation-audios/Guided-Meditation-2.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Guided-Meditation-1',
    src: '../assets/audios/meditation-audios/Guided-Meditation-3.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Guided-Meditation-1',
    src: '../assets/audios/meditation-audios/Guided-Meditation-4.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Guided-Meditation-1',
    src: '../assets/audios/meditation-audios/Guided-Meditation-5.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Guided-Meditation-1',
    src: '../assets/audios/meditation-audios/Guided-Meditation-6.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Guided-Meditation-1',
    src: '../assets/audios/meditation-audios/Guided-Meditation-7.mp3',
    poster: '../assets/images/5uwq.gif',
  },
  {
    title: 'Guided-Meditation-1',
    src: '../assets/audios/meditation-audios/Guided-Meditation-8.mp3',
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

  Array.from(__('.mp_body ol li a')).forEach(item => {
    item.className = '';
  });

  evt.className = 'active';
  audio.src = src;
  audio.play();
  audio.onerror = () => {
    evt.className = 'error';
    evt.textContent = 'Error on load this song!';
  };

  _('.mp_head_poster figcaption').innerHTML = title;
  _('.mp_head_poster img').src = poster;
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
_('.mp_head_poster img').src = playlist[0].poster;
_('.mp_body ol').innerHTML = html;
_('.mp_footer').appendChild(audio);
