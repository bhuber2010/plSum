// var pl = [];

function pnlMax() {
  "use strict";
  //var output = document.getElementById("largest");
  var pl = document.getElementById("phoneList").value.split(", ");
  console.log(pl);
  var plLen = [];
  for (var i = 0; i < pl.length; i++) {
    var num = pl[i].split("");
    var sum = 0;
    for (var d = 0; d < num.length; d++) {
      sum += (parseInt(num[d]) || 0);
    }
    plLen.push(sum);
  }
    var phoneMax = Math.max.apply(Math, plLen);
    var maxLoc = plLen.lastIndexOf(phoneMax);
    //return pl[maxLoc];
    //output.innerHTML = "The largest phone number is: " + pl[maxLoc];
    document.getElementById("largest").innerHTML = "The phone number with the largest sum is: " + pl[maxLoc] + " with a sum of " + plLen[maxLoc];
    console.log(pl[maxLoc]);
}

//console.log(pnlMax(pl));

/* I first thought of what various pieces needed to be done: We need to perform some operations on a single phone number to get our sum, store that sum in a way that we can correctly associate it with its phone number, and repeat those operations for each phone number. From there we need to identify which sum is the largest, make sure its the last one if there is multiple of the largest sum, and return the phone number that matches up with that sum. Each of these I tackled individually and when it made sense, tied pieces together.

To note, I first did some javascript lessons on Codecademy, I had recently done a few Python lessons which helped as well. As I went, I started to work on this challenge, often diving off into Google to further understand and figure out how I modified something I learned that may not have worked and how to get it working.

Once I started working on the challenge, my first thought was I need to get each phone number broken out into individual digits and remove the dashes or isolate the integers in order to be able to correctly sum them. I was attempting to figure out how to remove anything that's not an integer and create a new array of the phone numbers with pure integers. After going down this road for a bit and not coming up with anything too great, I decided it was likely not the best way to approach it (eg: having a new array of the phone numbers with integers only).

So I decided to not worry about the dashes (or parentheses if present) for the moment and work on creating a simple loop giving me the length of each phone number. Granted each one would always be 12 characters long, I formatted the phone numbers differently either with only integers or using parentheses on the area code to test my loop; it worked. Before my loop I created a variable, plLen and set it equal to an empty array. This was where I would use the push method to store the results of the loop.

Next I needed to figure out the largest sum in this plLen array I now had. I discovered the Math object, but I needed to use it with a stored array, not a list of values. So I figured out how to use the prototype to apply math to an array. Now I had the phone number with the most characters and needed to figure out which index it correlated with. I found the methods indexOf and then lastIndexOf, which of course the later one is what we need in order to return the last largest if there are multiple equaling the same. I now had a variable that contained the index of the longest phone number. Given the array of phone numbers and my new array of lengths are the same length and directly correlate to one another, I looked up the max length's index on the phone number array to return the longest number. Now all I needed to do is figure out how to modify the code in my loop to sum the integers instead of just count. And what to do with anything thats not an integer.

I needed to split out each phone number into it's individual digits. I messed around with slice and split, and eventually figuring out to split a given phone number on character using quotes right next to one another. I stored this new array of single digits as a variable. I also created a variable for the sum of the digits and set it equal to zero to start. From here I figured I needed to basically do the same type of loop as I did with the list of phone numbers, but nested within it so it was looping this new single digit array for a given phone number. This was now the tricky part again, how do I deal with actually summing the digits and accounting for dashes or possible other characters? I learned how I could use '+=' to continue to add to our variable of sum while looping and also use parseInt(), but had trouble on figuring out how to prevent NaN due to the none integer characters. I finally discovered through research and came up with a much simpler fix than I had expected, of using 'or' for when its not an integer. Tested just this new piece by itself and it was working, sweet!

To finish it off, I replaced the one line of code for the first loop that gave us the length of a phone number with this new piece that gave us the sum. I tested it several times to ensure it output the correct phone number each time and we were good. Now time to see if it can be cleaned up any and/or added to, to prompt for the phone numbers to fill the initial array. */
