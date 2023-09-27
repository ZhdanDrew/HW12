const sol2 = function (name) {
    if (name && typeof name === 'string') {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    } else {
      return '';
    }
  };
  

  const result = sol2("igor");
  console.log(result); 
  