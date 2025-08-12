"use client";

export default function Home() {

  function checkIsPalindrome(input: string, resultElement: HTMLElement | null) {
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
    if (resultElement) {
      resultElement.textContent = isPalindrome ? "Yes, it's a palindrome!" : "No, it's not a palindrome.";
    }
  }

  function handleSubmit() {
    const input = document.getElementById("inputString") as HTMLInputElement;
    const inputValue = input.value.trim();
    const resultElement = document.getElementById("result");
    if (inputValue) {
      checkIsPalindrome(inputValue, resultElement);
    } else {
      if (resultElement) {
        resultElement.textContent = "Input cannot be empty.";
      }
    }
  }
  
  return (
    <main>
      <h1>Welcome to the Palindrome Checker App</h1>
      <p>Enter a string to check if it's a palindrome:</p>
      <input type="text" id="inputString" />
      <button onClick={handleSubmit}>Check</button>
      <p id="result"></p>
    </main>
  );
}
