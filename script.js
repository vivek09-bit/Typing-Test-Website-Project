let TypingArea = document.getElementById('Typing-Area');
let Button = document.getElementById('Start');
let Speed = document.getElementById('Speed');
let Accuracy = document.getElementById('Accuracy');
let paragraph = document.getElementById('paragraph');

let TypingParagraph = `If you don't like a test prompt, you can get a different (random) prompt with the "change test" button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox on the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.`

paragraph.textContent = TypingParagraph;

TypingArea.addEventListener('focus',()=>{
    const StartTime = Date.now();
    setInterval(()=>{
        let currentTime = (Date.now()-StartTime)/60000;

        let TypedWords = TypingArea.value.trim().split(/\s+/).filter(word=>word.length>0);
        let CharSpeed = Math.round(TypedWords.length / currentTime);
        Accuracy.textContent = Math.round(CharSpeed);
        Speed.textContent = TypingParagraph;
    },1000)
})