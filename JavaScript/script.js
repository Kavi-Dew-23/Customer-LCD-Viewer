// Check the validation of hexadecimal string input
// check wheher the input characters only contains '0-9',a-f, and 'A-F'
// Check whether there is any white space
function validateHexString(hex) {
    return /^[0-9a-fA-F]+$/.test(hex.trim());
  }
  
  // function to convert hexadecimal number into binary
  function hexToBinary(hex) {
    return BigInt('0x' + hex).toString(2).padStart(4 * hex.length, '0'); 
  }
  
  // Update the svg 
  function updateSVG(binaryString) {
    const paths = Array.from(document.querySelectorAll("path")); 
    //sort path elements alphabetically by id
    paths.sort((a, b) => a.id.localeCompare(b.id))
    paths.forEach((path, index) => {
      
      if (index < binaryString.length) {
        path.style.fill = binaryString[index] === '1' ? 'black' : 'white'
      } else {
          path.style.fill = 'none';
      }
    });
  }
  
  //handles the input events such as display or hides the errir message based on the validity of the input string
  function handleHexInput() {
    const hexInput = document.getElementById("hex-input").value.trim();
    const errorMessage = document.getElementById("error-message");
    const binaryNumber = document.getElementById("binary-number");
  
    if (validateHexString(hexInput)) {
      errorMessage.style.display = 'none';
      const binaryString = hexToBinary(hexInput);
  
      binaryNumber.textContent = "Binary representation of the hexadecimal string is " + binaryString;
      updateSVG(binaryString);
  
    } else {
      errorMessage.style.display = "block";
      updateSVG("");
    }
  
  
  }
  document.getElementById("hex-input").oninput = handleHexInput;
  