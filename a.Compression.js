// basic string compression using run-length encoding:
export function compressString(str) {
  if (!str || str.length <= 1) {
    return str;
  }

  let result = "";
  let count = 1;
  let currentChar = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      result += currentChar + count;
      currentChar = str[i];
      count = 1;
    }
  }

  // Add the last character and its count
  result += currentChar + count;

  return result;
}

// second compressor
function optimizeCompression(str) {
  if (!str || str.length <= 1) {
    return str;
  }

  let result = "";
  let i = 0;

  while (i < str.length) {
    const char = str[i];
    i++;

    // Check if the next character is a digit
    let countStr = "";
    while (i < str.length && /\d/.test(str[i])) {
      countStr += str[i];
      i++;
    }

    const count = parseInt(countStr, 10);

    // If count is 1, just add the character
    if (count === 1) {
      result += char;
    } else {
      result += char + count;
    }
  }

  return result;
}

// decompressor
function decompress(str) {
  if (!str || str.length <= 1) {
    return str;
  }

  let result = "";
  let i = 0;

  while (i < str.length) {
    const char = str[i];
    i++;

    // Check if the next character is a digit
    let countStr = "";
    while (i < str.length && /\d/.test(str[i])) {
      countStr += str[i];
      i++;
    }

    // If no count is specified, assume 1
    const count = countStr ? parseInt(countStr, 10) : 1;

    // Repeat the character 'count' times
    result += char.repeat(count);
  }

  return result;
}

// Test cases
const testCases = [
  "aabcccccaaa",
  "a",
  "aa",
  "aabbcc",
  "a" + "2".repeat(20) + "b" + "2".repeat(20) + "c1a4",
];

testCases.forEach((test) => {
  const compressed = compressString(test);
  const optimized = optimizeCompression(compressed);
  const decompressed = decompress(optimized);

  console.log(`Original: ${test}`);
  console.log(`Compressed: ${compressed}`);
  console.log(`Optimized: ${optimized}`);
  console.log(`Decompressed: ${decompressed}`);
  console.log(`Roundtrip successful: ${test === decompressed}`);
  console.log("---");
});
