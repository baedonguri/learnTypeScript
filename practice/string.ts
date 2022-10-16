const word: string = "helloLemonAPI";

console.log(word.toLowerCase()); // 전체 소문자로 출력
console.log(word.toUpperCase()); // 전체 대문자로 출력
console.log(word.substring(1)); // 시작부터 n개 자르고 출력하게

console.log(word[0].toUpperCase() + word.substring(1));
