let TypingArea = document.getElementById('Typing-Area');
// let Button = document.getElementById('Start');
let Speed = document.getElementById('Speed');
let Accuracy = document.getElementById('Accuracy');
let paragraph = document.getElementById('paragraph');


TypingArea.addEventListener('focus',()=>{
    const StartTime = Date.now();
    let TextboxInterval = setInterval(()=>{
        let currentTime = (Date.now()-StartTime)/60000;

        let TypedWords = TypingArea.value.trim().split(/\s+/).filter(word=>word.length>0);
        let CharSpeed = Math.round(TypedWords.length / currentTime);
        Accuracy.textContent = CharSpeed;
        Speed.textContent = currentTime ;
    },1000);
    
    TypingArea.addEventListener('blur',()=>{
        clearInterval(TextboxInterval);
    });
});
