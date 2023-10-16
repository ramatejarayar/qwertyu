// generation of random value

player_name = document.getElementById("playername").value;

y = Math.floor(Math.random() * 10 + 1);

x = document.getElementById("guessField").value;

guess = 0;

function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1); 
}

function submit()
{
    if(x == y)
{
    alert("CONGRATULATIONS! "+playername+", YOU GUESSED IT RIGHT IN "+guess+" GUESSES");
    guess= 1;
}

else if(x > y)
{
    guess++;
    alert("OOPS SORRY! TRY A SMALLER NUMBER");
}
else
{
    guess++;    
    alert("OOPS SORRY! TRY A GREATER NUMBER")
}
}