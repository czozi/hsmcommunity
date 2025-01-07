const bread = document.querySelector('.bread');
const maindesc = document.querySelector('.maindesc')

let animationCompleted = false;

bread.addEventListener('mouseenter', () => {
  if (animationCompleted) return;

  bread.classList.add('animate');
  maindesc.classList.add('animate');

  bread.addEventListener('animationend', () => {
    animationCompleted = true;
  });
});

bread.addEventListener('animationiteration', () => {
  animationCompleted = false;
});

function highlightWords() {
  const paragraphs = document.querySelectorAll('p, h1, h4');
  const wordsToHighlight = ['npm', 'module'];

  paragraphs.forEach(paragraph => {
    let text = paragraph.innerHTML;

    wordsToHighlight.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      text = text.replace(regex, `<span class="highlight">${word}</span>`);
    });

    paragraph.innerHTML = text;
  });
}

document.addEventListener('DOMContentLoaded', highlightWords);