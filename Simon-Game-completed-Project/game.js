var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];


var started=false;
var level=0;
$(document).keydown(
    function()
    {
        if(!false)
        $("#level-title").text("Level " + level);
        nextSequence();
        started=true;
    }
);




function newSequence()
{
    var randomNumber= Math.floor((Math.random()*4));
    var randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    // animatePress("."+ randomChosenColor);
}

var userClickedPattern=[];

$(".btn").on("click", function handler()
{
    var userChosenColor=this.attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColour);

    animatePress(userChosenColour);
});

function playSound(name)
{
    var sounds=new Audio("sounds/"+ name + ".mp3");
    sounds.play();
}



function animatePress(currentColor)
{
    $("#" + currentColor).addClass("pressed");
    setTimeout(function()
    {
        $("#" + currentColor).removeClass("pressed");
    },100);

}



function nextSequence()
{
    level++;
    $("level-title").text("level " + level);
    var randomNumber= Math.floor((Math.random()*4));
    var randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}