// Only for Index Page
// Get favicon from CSS
document.addEventListener('DOMContentLoaded', () => {
  const elem = document.querySelector('.favicon-data');
  const bg = getComputedStyle(elem).backgroundImage;
  const url = bg.replace(/^url\(["']|["']\)$/g, '');
  document.getElementById('favicon').href = url;
});

// Search Option
const input = document.getElementById('search-input');
const baiduBtn = document.querySelector('.baidu');
const bingBtn = document.querySelector('.bing');
const googleBtn = document.querySelector('.google');

function searchEngine(urlBase) {
  const query = input.value.trim();
  if(query) window.open(urlBase + encodeURIComponent(query), '_blank', 'noopener,noreferrer');
}

baiduBtn.addEventListener('click', () => searchEngine('https://www.baidu.com/s?wd='));
bingBtn.addEventListener('click', () => searchEngine('https://www.bing.com/search?q='));
googleBtn.addEventListener('click', () => searchEngine('https://www.google.com/search?q='));

// Clear Button
const clearButton = document.getElementById('clear-button');

input.addEventListener('input', () => {
  if (input.value.trim() !== '') {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
});

clearButton.addEventListener('click', () => {
  input.value = '';
  input.focus();
  clearButton.style.display = 'none';
});
