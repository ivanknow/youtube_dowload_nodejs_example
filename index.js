const ytdl = require('ytdl-core');
const fs = require('fs');
// or
//const ytdl = require('youtube-dl-exec');

const videoUrl = 'https://www.youtube.com/watch?v=5rNk7m_zlAg';

ytdl(videoUrl)
  .on('error', (error) => {
    console.error('Error:', error);
  })
  .on('end', () => {
    console.log('Finished downloading video.');
  })
  .pipe(fs.createWriteStream('alura_js_5.mp4'));
  
