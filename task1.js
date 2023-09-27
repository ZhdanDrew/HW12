const sol1 = function (str1, str2) {
    if (str1.length > str2.length) {
      return str1;
    } else {
      return str2;
    }
  };
  
  
  const longerString = sol1("Це перший рядок", "Це другий рядок");
  console.log(longerString);

