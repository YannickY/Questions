import { useState } from 'react';
import "./React.css";

//An array of objects that holds questions, answers and Keys that will later be transformed into a list
let info = [
    {id: 0, questions: "What is programming?", answer: "Put simply, programming is giving a set of instructions to a computer to execute. If you’ve ever cooked using a recipe before, you can think of yourself as the computer and the recipe’s author as a programmer. The recipe author provides you with a set of instructions which you read and then follow. The more complex the instructions, the more complex the result!"},
    {id: 1, questions: "What is React?", answer: "React is a JavaScript library for creating user interfaces."},
    {id: 3, questions: "What is front-end programing?", answer: "If you’re familiar with web development, you’ve probably heard reference to “the front end” — but what is it, exactly? Generally speaking, the front end is the user-facing part of a website. It’s what you see when you type in something like “codecademy.com.” " }
];

//function that holds the body of the content in a div element
function Data({question}) {

    //useState for conditional rendering of content 
    const [questions, setQuestions] = useState(false);

    //returns div that will reveal content and className conditionally depending on the value of useState
    return (
        <>
            
            <div className={questions ? "open" : "closed"}>
                <h4>{question.questions}</h4>
                <button onClick={() => setQuestions(!questions)}>{questions ? "-" : "+"}</button>
                {questions &&<p>{question.answer}</p>}
            </div>

        </>
    )

}

export default function Ques() {

    //this rendering function takes the body of content thats held in a div and using the array of objects, it itterates of the lenth resulting in an array of 3 seperate divs containing the body of content
    //array objects is passed to the child function, and each array value contains the array objects value for use
    return (
        <div>
            {info.map(infos => <Data question={infos} />)}
        </div>
    )
}
