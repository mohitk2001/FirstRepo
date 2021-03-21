let quizapp=[
    {
        Quetion:"What does HTML stand for?",
        a:  "Hyper Trainer Marking Language",
        b:  "Hyper Text Marketing Language",
        c:  "Hyper Text Markup Language",
        d:  "Hyper Text Markup Leveler",
        Correct:"c",
        Qnumber:0,
        bool_val:false,
        User_ans:"nill"
    },
    {
        Quetion:"When javascript developed",
        a:"September 1995",
        b:"September 1996",
        c:"January 2000",
        d:"February 2002",
        Correct:"a",
        Qnumber:1,
        bool_val:false,
        User_ans:"nill"
    },
    {
        Quetion:"When was Python created?",
        a:"1991",
        b:"1990",
        c:"2000",
        d:"1983",
        Correct:"a",
        Qnumber:2,
        bool_val:false,
        User_ans:"nill"
    },
    {
        Quetion:"Who is the founder of Facebook",
        a:"Mark Zukerberg",
        b:"Jeff Bezos",
        c:"Elon Musk",
        d:"Bill Gates",
        Correct:"a",
        Qnumber:3,
        bool_val:false,
        User_ans:"nill"
    },
    {
        Quetion:"Who is the founder of Amazon",
        a:"Mark Zukerberg",
        b:"Jeff Bezos",
        c:"Elon Musk",
        d:"Bill Gates",
        Correct: "b",
        Qnumber:4,
        bool_val:false,
        User_ans:"nill"
    }
];


let QuestionText=document.getElementById("question_text");
let OptionA=document.getElementById("A");
let OptionB=document.getElementById("B");
let OptionC=document.getElementById("C");
let OptionD=document.getElementById("D");




var currentquiz=0;
var QuizData;
QuizLoad();
function QuizLoad()
{
    QuizData=quizapp[currentquiz];
    QuestionText.innerText=QuizData.Quetion;
    OptionA.innerText=QuizData.a;
    OptionB.innerText=QuizData.b;
    OptionC.innerText=QuizData.c;
    OptionD.innerText=QuizData.d;
    //console.log(QuizData.Qnumber);
   // document.getElementById("optnB").checked=true;
}
let next_button=document.querySelector("#btn_n");

let answerEls=document.getElementsByName("answer");

let submittedAns=undefined;

next_button.addEventListener("click",Next);
function Next()
{
    currentquiz++;
    if(currentquiz<quizapp.length)
    {
        QuizLoad();
        if(currentquiz>0 && currentquiz<quizapp.length)
        {
            document.getElementById("btn_p").style.visibility="visible";
        }
    }
    else if(currentquiz===quizapp.length)
    {
        document.getElementById("sub_quiz").style.visibility="visible";
        currentquiz--;
    }
   
        DeselectAll();
   
}
let previous_button=document.getElementById("btn_p");

previous_button.addEventListener("click",Back);
function Back()
{
    currentquiz--;
    if(currentquiz>=0 && currentquiz<quizapp.length)
    {
        QuizLoad();
    }
    DeselectAll();
}

  function DeselectAll()
    { 
        if(QuizData.bool_val==false)
        {
            console.log(currentquiz);
            answerEls.forEach(function(answerEl){
                answerEl.checked=false;
               
            });
        }
        else if(QuizData.bool_val==true)
        {
            answerEls.forEach(function(el){
                if(el.value==QuizData.User_ans)
                {
                    document.getElementById(QuizData.User_ans).checked=true;
                }
            });
        }
    }


let sub_button=document.getElementById("sub_ques");
sub_button.addEventListener("click",submit_ques);

function submit_ques()
{
    
    answerEls.forEach(function(ans){
        if(ans.checked)
        {
            submittedAns=ans.value;
            if(currentquiz===(QuizData.Qnumber))
            {
               QuizData.User_ans=submittedAns;
               //console.log(submittedAns);
               //console.log(QuizData.User_ans);
               QuizData.bool_val=true;
               //console.log(QuizData.bool_val);
            }
        }
    });
}
let score=0;
let quiz_submit=document.querySelector("#sub_quiz");

quiz_submit.addEventListener("click",Done);
function Done()
{
    for(let i=0;i<quizapp.length;i++)
    {
        if(quizapp[i].User_ans===quizapp[i].Correct)
        {
            score++;
        }
    }
    const Child=document.getElementById("main-container");
    console.log(score);
    console.log(Child.lastElementChild);
    while(Child.lastElementChild)
    {
        Child.removeChild(Child.lastElementChild);
    }
    let newEl=document.createElement("h2");
    let node=document.createTextNode(`You Scored ${score} out of 5`);
    newEl.appendChild(node);
    newEl.setAttribute("id","newEl_class");
    Child.appendChild(newEl);


    document.querySelector("#newEl_class").style.color="red";
    document.querySelector("#main-container").style.background="#C0C0C0";
}


































































/*if(QuizData.Correct===QuizData.User_ans)
    {
        score++;
        console.log(score);
    }*/
   /*if(currentquiz>=4)
   {
       fun();
   }*/


/*function fun()
{
    for(let i=0;i<quizapp.length;i++)
    {
        console.log(quizapp[i].bool_val);
        console.log("\n");
    }
}*/