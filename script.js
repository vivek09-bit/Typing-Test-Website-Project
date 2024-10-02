let TypingArea = document.getElementById('Typing-Area');
let Button = document.getElementById('Start');
let Speed = document.getElementById('Speed');
let Accuracy = document.getElementById('Accuracy');

// TypingArea.addEventListener('focus',setInterval(()=>{
//     Speed.textContent = TypingArea.value.length;

// }, 1000))

// TypingArea.addEventListener('keypress',setInterval(()=>{
//     let StartTime =  new Date()
//     Accuracy.textContent =  StartTime;
//     Speed.textContent = TypingArea.value.length;
// }, 2);

TypingArea.addEventListener('focus',()=>{
    const StartTime = Date.now();
    setInterval(()=>{
        let currentTime = (Date.now()-StartTime)/60000;

        let TypedWords = TypingArea.value.trim().split(/\s+/).filter(word=>word.length>0).length;
        let CharSpeed = Math.round(TypedWords / currentTime);
        Accuracy.textContent = Math.round(CharSpeed);
        // Speed.textContent = TypedWords;
    },1000)
})