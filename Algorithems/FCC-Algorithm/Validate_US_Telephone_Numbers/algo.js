function phoneNumbers(number) {
    var regEx =/(\(?\d{3}[)-\s]((\s\d{3}[-\s]\d{4})|(\d{3})[-\s]\d{4}))|(\d{10})|(\d\s\d{3}\s\d{3}\s\d{4})/;
    console.log(regEx.test(number));
    return regEx.test(number)
  
}

phoneNumbers('555-555-5555');