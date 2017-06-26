/**
 * Function used to generate the "spiral index" that is used for calculation
 * 
 * Algorithm is based off of this:
 * https://www.reddit.com/r/dailyprogrammer/comments/6i60lr/20170619_challenge_320_easy_spiral_ascension/dj3reur/
 * 
 */
function spiralIndex(x, y) {
    var p;
    if (y * y >= x * x) {
        p = 4 * y * y - y - x;
        if (y < x)
            p -= 2 * (y - x);
    } else {
        p = 4 * x * x - y - x;
        if (y < x)
            p += 2 *(y - x);
    }
    return p;
}

/**
 * Returns a spiral cube as a single string. 
 * 
 * Algorithm is based off of this:
 * https://www.reddit.com/r/dailyprogrammer/comments/6i60lr/20170619_challenge_320_easy_spiral_ascension/dj3reur/
 * 
 * @param {number} n 
 * @return {string}
 */
exports.generate = (n) => {
    var spiral = ""
    
    var sx = n % 2 ? ~~(n / 2) : ~~((1 - n) / 2);
    var ex = n % 2 ? ~~((1 - n) / 2 - 1) : ~~(n / 2 + 1);
    var dx = n % 2 ? -1 : 1;
    var sy = n % 2 ? ~~((1 - n) / 2) : ~~(n / 2);
    var ey = n % 2 ? ~~(n / 2 + 1) : ~~((1 - n) / 2 - 1);
    var dy = n % 2 ? 1 : -1;

    var maxDigits = Math.pow(n, 2).toString().length;

    for (var y = sy; y !== ey; y += dy) {
        for (var x = sx; x !== ex; x += dx) {
            var nextChar = (n * n - spiralIndex(x, y)).toString();
             
            
            while (nextChar.length < maxDigits) {
                nextChar = " " + nextChar;
            }

            spiral += " " + nextChar;
        }
        spiral += "\n";
    }

    return spiral
}
