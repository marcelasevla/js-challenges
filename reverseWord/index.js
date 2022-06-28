const reverseWord = (words) => {
  let word = '';
  for (let i = words.length - 1; i >= 0; i -= 1) {
    word += words[i];
  }
  return word;
};
