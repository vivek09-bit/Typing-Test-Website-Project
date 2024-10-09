let TypingArea = document.getElementById('Typing-Area');
let WPM = document.getElementById('WPM');
let NetSpeedDisplay = document.getElementById('NetSpeed');
let paragraph = document.getElementById('paragraph');
let ShowTimer = document.getElementById('timer');
let SelectedPara;

TypingArea.addEventListener('focus', Timer);


window.addEventListener("load",()=>{
    SelectedPara = paras()
    paragraph.textContent = SelectedPara;
});



    
function Timer()
{
    const StartTime = Date.now();
    let TextboxInterval = setInterval(()=>{
        
        let currentTime = Math.floor((Date.now()-StartTime)/1000);
        let WpmDisplay= calculateWPM(StartTime);

        NetSpeedDisplay.textContent =`NetSpeed: ${NetSpeedCheck()}`;
        WPM.textContent = `WPM: ${WpmDisplay}`;
        ShowTimer.textContent = `Time: ${currentTime}`;


    },1000);

    TypingArea.addEventListener('blur',()=>{
        clearInterval(TextboxInterval);
    });
}


function calculateWPM(StartTime){
    let TypedWords = TypingArea.value.trim().split(/\s+/).length;
    let InTime = (Date.now() - StartTime)/60000;
    return Math.floor(TypedWords/InTime);
}


function NetSpeedCheck(){
    let acc = 0;
    let TypedWords = TypingArea.value.trim().split(/\s+/);
    let SelectedParaArr = SelectedPara.trim().split(/\s+/);
    for(i = 0; i<TypedWords.length; i++){
        if(i < TypedWords.length && TypedWords[i] === SelectedParaArr[i]){
            acc++;
        }
    }
    return acc;
};

function paras(){
    return para[Math.floor(Math.random()*10)]
};



let para = [
    `If you don't like a test prompt, you can get a different (random) prompt with the "change test" button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox on the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.`,
    `Shorts featuring a young, redheaded girl (voiced by Katrina Johnson of All That) with the alias of Safety Queen who helps kids overcome their fears by advising them against it, giving ridiculous scenarios of what would happen if they went for it, but the kids ignore this and do it anyway and realize there was nothing to fear after all.`,
    `A short bringing kids’ poems to a new level of artistic expression by enlisting fine arts professionals — including dancers, photographers, puppeteers, animators, artists and filmmakers — to interpret the young poets’ words through a visual medium.`,
    `The following is a list of programs broadcast by the Nick Jr. Channel. It was launched on September 28, 2009, as a spin-off of Nickelodeon's long-running preschool programming block of the same name, which has aired since 1988. The channel features original series and reruns of programming from Nickelodeon's weekday morning lineup. A late-night programming block aimed at parents, NickMom, aired on Nick Jr. from October 1, 2012 to September 28, 2015.`,
    `A two-part short where Wendell Craig and a young girl solve a claymation rebus puzzle from offscreen. Wendell fails the puzzle in "The Rebus", but the girl figures it out ("Nickelodeon: It's What You Want") in "The Rebus Again".`,
    `A live-action Snick Snack short created by Stephen Holman and Josephine Huang, who would also create Life with Loopy for KaBlam! The Shrimpskins, Slim and Wally, watch a Sofa Ranch commercial and want to trade in their couch for a new one so they can win a fun weekend with the craziest people in the world. The Shrimpskins' couch won't fit through their door until Wally chainsaws the couch into little pieces and mails them individually. The Sloper family wins the competition, but the Shrimpskins are named the craziest people in the world. The Shrimpskins celebrate until the family arrives and they block off the door.`,
    `An intro featuring many languages leads into a short story about Zeebo, who likes to express himself, and his dad, who initially disapproves of Zeebo expressing himself. Zeebo and his dad eventually decide to express themselves together. The story was designed by Zolo Inc., animated by Pixar, and originally produced for UNICEF's "Cartoons for Children's Rights" campaign.`,
    `In this CGI short produced by Pitch Inc., ants play with a hula hoop-like object. One ant doesn't let another ant play with the object, but that ant gets to do so after it asks the other ant for a turn. This short aired on both Nickelodeon and Nick Jr.; Nick Jr.'s version, entitled "Ants, Ants, Ants", added an intro featuring an anthill.`,
    `He refused to sell his firm to the Standard Oil Trust and was chosen by the Massachusetts Independence League as its candidate for Governor of Massachusetts in 1907. After a strong third place performance, Hisgen became the logical choice as presidential nominee of the national Independence Party during the 1908 United States presidential election. Although he toured the country on the campaign trail, Hisgen's poorer-than-expected showing at the polls in November 1908 spelled the end for the Independence Party (82,537 = 0.55% of the vote), many of whose members rejoined the Democrats. Hisgen subsequently remained in the public eye as a periodic commentator on events in the petroleum industry.`,
    `From 1981 to 2000, Nickelodeon aired an original or acquired short film during the last commercial break of some of its shows, initially under the names Nickelodeon Short Feature (1981 to 1983) and Nickelodeon Breakaways (1983 to 1984). These included acquired one-shot shorts which usually aired after shows that ran less than 23 minutes; they were removed in 1994 due to Nickelodeon deciding to produce its own short series.`,
    `Russian culture has two distinct terms: Средняя Азия (Srednyaya Aziya or "Middle Asia", the narrower definition, which includes only those traditionally non-Slavic, Central Asian lands that were incorporated within those borders of historical Russia) and Центральная Азия (Tsentralnaya Aziya or "Central Asia", the wider definition, which includes Central Asian lands that have never been part of historical Russia). The latter definition includes Afghanistan and 'East Turkestan'.`,
    `High scorers on tests of general knowledge tend to also score highly on intelligence tests. IQ has been found to robustly predict general knowledge scores even after accounting for differences in age, and five-factor model personality traits. However, many general knowledge tests are designed to create a normal distribution of answers, creating a bell-shaped curve.`,
    `General knowledge helps to crack Government exam results [13] The study examined cognitive ability and personality predictors of exam performance and found that general knowledge was positively correlated with GCSE English, mathematics, Grammar, History, Science and overall exam results. General knowledge test scores predicted exam results, even after controlling for IQ, five-factor model personality traits, and learning styles.`,
    `General knowledge has been found to have weak associations with measures of creativity.[15] In a study examining contributions of personality and intelligence to creativity, general knowledge was positively correlated with divergent thinking tests, but was unrelated to a biographical measure of creative achievement, self-rated creativity, or a composite measure of creativity. The relationship between general knowledge and divergent thinking became non-significant when controlling for fluid intelligence.`,
    `Petrarch liked this quotation and referred to it often, and where Cicero used the phrase "litterarum lumen", "the light of literature", Petrarch in the margin wrote lumen litterarum alongside and drew a sketch of a lamp or candle. The Liège manuscript is lost and so is Petrarch's copy, but Petrarch's copy "can be shown to be behind all but one of the later manuscripts" and preserves Petrarch's marginal annotations.[6] Petrarch, in many respects a Medieval man, regretted that Cicero had not been a Christian and believed that he certainly would have been one had he not died before the birth of Jesus.`,
    `he ideal of humanitas was first brought to Rome by the philosophic circle around Scipio and further developed by Cicero. For Cicero, humanitas was a style of thought, not a formal doctrine. It asserted man's importance as a cultivated being, in control of his moral universe. The man who practiced humanitas was confident of his worth, courteous to others, decent in his social conduct, and active in his political role. He was a man, moreover, who faced life with courageous skepticism: he knows that the consolations of popular religion are for more credulous beings than himself, that life is uncertain, and that sturdy pessimism is superior to self-deceptive optimism. Man becomes man as he refines himself; he even becomes godlike: “Deus est mortali iuvare mortalem,” wrote Pliny, translating a Greek Stoic, “To help man is man's true God.” Finally, the man who practiced humanitas cultivated his aesthetic sensibilities as he listened to his reason: "Cum musis,” wrote Cicero, “id est, cum humanitate et doctrina habere commercium".`]