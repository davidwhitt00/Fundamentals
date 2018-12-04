// Boolean declaration
var amIGood = false;

// Promise
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: "hasMattelbro",
                item: "Turbo-Man action figure"
            };
        resolve(gift);//fulfilled
    } else {
        var naughty = "You've made Santa's naughty list; enjoy your coal!";
        reject(naughty); //rejected
    }
    }
);