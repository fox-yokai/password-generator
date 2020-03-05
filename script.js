// generate random password



var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var num = '0123456789'
var symbol = '!@#$%&*~'


var generate = document.getElementById("generate")
var password = document.getElementById("output")


// user clicks button to generate password

generate.addEventListener("click", function(){

// user will be presented with a series of prompts for password criteria
    // user will be prompted for length of at least 8 characters and no more than 128

    var char = prompt("Enter the number of characters in the password (Number between 8 - 128");

        // turns char into a number
    char = char * 1;

        // check to see if characters are between 8 and 128
    if (char < 8 || char > 128) {
        alert("Number of characters is too low or high!")
    }
        // user will be prompted to include lowercase    
    else useLowerCase = confirm("Should the password contain lowercase letters? Press OK to confirm.");

        // user will be prompted to include uppercase
    useUpperCase = confirm("Should the password contain uppercase letters? Press OK to confirm.");    

        // user will be prompted to include numeric
    useNum = confirm("Should the password contain numbers? Press OK to confirm.");

        // user will be prompted to include special character
    useSpecial = confirm("Should the password contain special characters? Press OK to confirm.")

        // check to see if a password can be generated
    if (!useLowerCase && !useUpperCase && !useNum && !useSpecial) {
        alert("No character types choosen. Please try again");
    }

        // these will be the characters the password will contain
    else var characters = "";
    if (useLowerCase === true) {
        characters = characters.concat(lowerCase);
    }
    if (useUpperCase === true ) {
        characters = characters.concat(upperCase);
    }
    if (useNum === true) {
        characters = characters.concat(num);
    }
    if (useSpecial === true) {
        characters = characters.concat(symbol);
    }

    // when the password is generated it will eiter be displayed in on the page
    
    document.getElementById(output).textContent = genPassword(char, characters);

    // console.log(genPassword(char, characters))

})
    // when all prompts are answered then a password is generated that matches the selected criteria

    // function to generate the password using char as the length and characters

function genPassword(l, characters){
    var pass = "";
    for (var i = 0; i < l; i++) {
        pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pass;

}




