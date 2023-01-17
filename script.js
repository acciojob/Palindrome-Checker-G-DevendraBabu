// complete the given function

function palindrome(str)
{
	const len = str.length;

    
    for (let i = 0; i < len / 2; i++) {

       
        if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
            // console.log("false");
			return false;
        }
    }
	// console.log("true");
	return true;
}
module.exports = palindrome
