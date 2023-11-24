// complete the given function

function palindrome(str){
// Remove non-alphanumeric characters and convert to lowercase
    var cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the clean string with its reverse
    var reversedString = cleanString.split('').reverse().join('');

    return cleanString === reversedString;
}
module.exports = palindrome
