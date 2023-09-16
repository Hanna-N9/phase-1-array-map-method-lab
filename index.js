const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// refered to https://medium.com/@ruixdsgn/using-array-map-method-to-capitalize-every-first-letter-of-a-word-in-an-array-of-sentences-5cdbf76a2dca

// seperate the sentence string into an array of strings - split(" ")
//Use charAt() to return a character at a specific position in the string, so hence first letter of a string and combining it with . toUpperCase to capitalize the first letter. map() is used to capitlize each letter of each sentence
//Use the join() to return the modified array into sentences "using a blank space as a separator between them"
const titleCased = () => {
  return tutorials.map(sentence => {
    const splitSentences = sentence.split(" ");
    const toCapitalizeSplitSentencest = splitSentences.map(
      splitSentences =>
        splitSentences.charAt(0).toUpperCase() + splitSentences.slice(1),
    );
    const toJoinCapitalizedSplitSentences =
      toCapitalizeSplitSentencest.join(" ");
    return toJoinCapitalizedSplitSentences;
  });
};
