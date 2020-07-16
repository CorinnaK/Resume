const unProfWords = ["hello", "are", "bad"];
const clear = document.querySelector("#clear");
const submit = document.querySelector("#submit");
const cancel = document.querySelector("#cancel");
const inputs = document.querySelectorAll("input");
let errors = [];
console.log (unProfWords);
clear.addEventListener("click", () => {
    event.preventDefault();
    for (input of inputs){
        input.value = "";
    }
    document.querySelector("textarea").value = ""
})

submit.addEventListener("click", () =>
{
    event.preventDefault();
    for (input of inputs)
    {
        input = input.value 
        for (word of unProfWords)
        {
              console.log(input)
            if (input.indexOf(word) > -1)
            {
                console.log("are you broken here?")
                errors.push(word);
                console.log(errors);
            }
        }
          
        
    }
})
