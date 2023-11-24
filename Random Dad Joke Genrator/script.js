// const jokesArr = ["joke1","joke2","joke3","joke4"]
const jokesArr = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "What do you call an alligator in a vest? An investigator!",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Why can't you give Elsa a balloon? Because she will let it go!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How do you organize a space party? You planet!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't we ever tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
    "Why did the bicycle fall over? Because it was two tired!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you make holy water? You boil the hell out of it!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the math book look sad? Because it had too many problems.",
    "Why don't scientists trust stairs? Because they're always up to something!",
    "What did one hat say to the other hat? You stay here, I'll go on ahead!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow become a successful neurosurgeon? Because he was outstanding in his field!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What do you call a fake noodle? An impasta!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't we ever tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
    "Why did the bicycle fall over? Because it was two tired!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you make holy water? You boil the hell out of it!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the math book look sad? Because it had too many problems.",
    "Why don't scientists trust stairs? Because they're always up to something!",
    "What did one hat say to the other hat? You stay here, I'll go on ahead!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow become a successful neurosurgeon? Because he was outstanding in his field!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What do you call a fake noodle? An impasta!",
    "Why don’t some couples go to the gym? Because some relationships don’t work out!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why did the math book look sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't we ever tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
    "Why did the bicycle fall over? Because it was two tired!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you make holy water? You boil the hell out of it!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the math book look sad? Because it had too many problems.",
    "Why don't scientists trust stairs? Because they're always up to something!",
    "What did one hat say to the other hat? You stay here, I'll go on ahead!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow become a successful neurosurgeon? Because he was outstanding in his field!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What do you call a fake noodle? An impasta!",
    "Why don’t some couples go to the gym? Because some relationships don’t work out!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why did the math book look sad? Because it had too many problems!",
    "How does a penguin build its house? Igloos it together!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't we ever tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
    "Why did the bicycle fall over? Because it was two tired!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you make holy water? You boil the hell out of it!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the math book look sad? Because it had too many problems.",
    "Why don't scientists trust stairs? Because they're always up to something!",
    "What did one hat say to the other hat? You stay here, I'll go on ahead!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow become a successful neurosurgeon? Because he was outstanding in his field!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "What do you call a fake noodle? An impasta!",
    "Why don’t some couples go to the gym? Because some relationships don’t work out!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    
    // Add more jokes to complete the array...
  ];
  console.log("length jokeesArr " + jokesArr.length)
let shuffled_array = []
let genrateJokesBtn = document.querySelector("#btn")
let outputBox = document.querySelector(".output")

genrateJokesBtn.addEventListener("click",
()=>{
    let inputBox = document.querySelector("#input_text");

     if(inputBox.value > jokesArr.length)
    {
        outputBox.innerHTML =`<p> Out Of Range </p>`;
    }
 
    else{

        shuffle_arr(jokesArr);
        printJokes(inputBox.value);
    }
    
    
})

function shuffle_arr(arr)
{
    shuffled_array = [];
    let usedIndx = []
    let i =0;
    while(i<arr.length)
    {       
        let rn = Math.floor(Math.random()*arr.length)
        if(!usedIndx.includes(rn))
        {   
            usedIndx.push(rn);
            shuffled_array.push(arr[rn])
            i++;
        }
        
       
    }
    
}

function printJokes(n)
{      
    outputBox.innerHTML = ``;
     outputBox = document.querySelector(".output")
    let i = 0;
    while(i<n)
    {
    let jokeElm = document.createElement("p")
    jokeElm.classList.add("Joke-paragraph")

    jokeElm.innerText = shuffled_array[i];
    outputBox.appendChild(jokeElm);
    i++;
    }
}



