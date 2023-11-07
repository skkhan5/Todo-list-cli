import inquirer from "inquirer";

let todos:string[]=[];
let loop = true
while(loop){
    const answer:{
        TODO:string;
        addmore:boolean
    } = await inquirer.prompt([{
        type:"input",
        name:"TODO",
        message:"What do you want to add todo?"
    },
    {
        type:"confirm",
        name:"addmore",
        message:"What do you want to add more todo?",
        default:false
    },

])
const{addmore,TODO}= answer
console.log(answer)
loop= addmore
if(TODO){
    todos.push(TODO)

}else{
    console.log("Please enter valid input")
}

}
console.log(todos)


if(todos.length> 0){
    console.log("your todo list:")
    todos.forEach(todo =>{
        console.log(todo)
    })

}else{
    console.log("no todos found")
}




