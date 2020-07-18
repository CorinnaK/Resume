
document.querySelector("#contact").addEventListener("click", () =>{
    document.querySelector("#modal").style.display="flex";
    // console.log("hey");
    const unProfWords = ["hello", "are", "bad", "test"];
    const clear = document.querySelector("#clear");
    const submit = document.querySelector("#submit");
    const cancel = document.querySelector("#cancel");
    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");
    let errors = [];
    cancel.addEventListener("click", () =>{
        event.preventDefault();
        document.querySelector("#modal").style.display="none";
    })
    clear.addEventListener("click", () => {
        event.preventDefault();
        for (input of inputs){
            input.value = "";
        }
        document.querySelector("textarea").value = ""
    })

    submit.addEventListener("click", () =>{
        event.preventDefault();
        for (input of inputs)
        {
            if (input.value.length == 0){
                errors.push("Please fill out the " + input.id + " field.")
            }
            input = input.value;
            for (word of unProfWords)
            {
                if (input.indexOf(word) > -1)
                {
                    // **ToDo add functionality to highlight unProf word in input** 
                    errors.push(word + " is an unprofessional word, please change this word.");
                }
            } 
        }
        if (textarea.value.length == 0)
        {
            errors.push("Please fill out the message field.")
        }
        if (textarea.value.indexOf(word) > -1)
                {
                    errors.push(word + " is an unprofessional word. Please replace this word with something more appropriate")
                }
        if (errors.length == 0){
            console.log("no errors")
        }
        else
        {
            
            for (error of errors)
            {
                let newError = document.createElement("li");
                newError.innerText = error;
                newError.appendChild(document.querySelector(".error"))
                console.log (error);
            }
        }
       
    })
})
//     function checkForErrors (word){
//         errorId = "'#" + errorId +"'";
//         // Create element (show element?)
//     }
//     errorHandling("name");
// })

// function redirect()
// {
//     window.location.href = "mailto:mail@example.org";
// }
// funtion something()
// {
//     event.preventDefault();
//     console.log(typeof e);
//     if (e.target.parentNode.nextSibling.classList.contains("desktopView"));
//     console.log("hi");
// }
// let more = document.querySelectorAll(".more");
// for (link of more){
//     link.addEventListener("click", something);
// }






//     // skillsFullList = document.querySelectorAll("#skills .desktopView");
//     // for (skill of skillsFullList){
//     //     if (skill.style.display != "flex"){
//     //         skill.style.display = "flex"
//     //     }
//     //     else {
//     //         skill.style.display= "none"
//     //     }
//     // }
//     // if (document.querySelector("#skills a").innerHTML != "(less...)"){
//     //     document.querySelector("#skills a").innerHTML = "(less...)"
//     // }
//     // else {
//     //     document.querySelector("#skills a").innerHTML = "(more...)"
//     // }
    
// // })