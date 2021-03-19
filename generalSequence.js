// Время: 15:46.97

console.log(generalSequence('aababba', 'abbaabcd'));
console.log(generalSequence('aababba', 'ab'));
function generalSequence(word, otherWord) {
  let lessWord = '';
  let bigWord = '';
  let seq = '';

  if (word.length < otherWord.length) {
    lessWord = word;
    bigWord = otherWord;
  } else {
    lessWord = otherWord
    bigWord = word;
  }

  for (let i = 0; i < lessWord.length; i++) {
    let csq = '';
    if (bigWord.includes(csq + lessWord[i])) {
      csq += lessWord[i];
      for (let j = i+1; j < lessWord.length; j++) {
        if (bigWord.includes(csq + lessWord[j])) {
          csq += lessWord[j];
          continue;
        }
      }
    }
    if (csq.length >= seq.length) {
      seq = csq;
    }
  }
  return seq;
}