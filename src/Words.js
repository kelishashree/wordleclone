export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;

  try {
    // 1. Fetch the random 5-letter word
    const response = await fetch("https://random-word-api.herokuapp.com/word?length=5");
    const result = await response.json();

    // The API returns an array like ["apple"], so we take the first element
    todaysWord = result[0].toUpperCase();

    // 2. Optional: Create a wordSet for validation
    // Note: Since this API only gives one word at a time, we put it in the set 
    // so the "Word not found" logic in App.js doesn't block the correct answer.
    wordSet = new Set([todaysWord]);

    /* PRO TIP: If you want players to be able to type ANY valid word, 
       you would usually fetch a full list of words here. 
       But for now, we include the target word so the game is playable.
    */
  } catch (error) {
    console.error("Fetch error:", error);
    // Fallback if the API is down
    todaysWord = "RIGHT";
    wordSet = new Set(["RIGHT"]);
  }

  return { wordSet, todaysWord };
};