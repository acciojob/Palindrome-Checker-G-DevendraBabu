// complete the given function

function palindrome(str)
{
	const len = str.length;

    
    for (let i = 0; i < len / 2; i++) {

       
        if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
            console.log("false");
			return 0;
        }
    }
	console.log("true");
}
module.exports = palindrome
