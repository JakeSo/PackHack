document.addEventListener("DOMContentLoaded", function(event) { 
    
    // Falling binary effect
    // ** Adapted from matrix rain animation courtesy of thecodeplayer
    // ** Link: http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //binary characters - taken from the unicode charset
    var binary = "10010100011110100101010011101000101010";
    //converting the string into an array of single characters
    binary = binary.split("");

    var font_size = 10;
    var columns = c.width/font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++)
        drops[x] = 1; 

    //drawing the characters
    function draw()
    {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(204, 0, 3, 0.08)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "rgba(255, 255, 255, .6)"; //white, semi-transparent text
        ctx.font = font_size + "px arial";
        //looping over drops
        for(var i = 0; i < drops.length; i++)
        {
            //a random binary character to print
            var text = binary[Math.floor(Math.random()*binary.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 33);
});