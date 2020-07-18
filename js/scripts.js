
document.querySelector("#contact").addEventListener("click", () =>{
    document.querySelector(".form").classList.remove("hiddenForm");
    document.querySelector(".form").classList.remove("displayForm");
    const unProfWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];
    const clear = document.querySelector("#clear");
    const submit = document.querySelector("#submit");
    const cancel = document.querySelector("#cancel");
    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");
    let errors = [];
    cancel.addEventListener("click", () =>{
        event.preventDefault();
        document.querySelector(".form").classList.add("hiddenForm");
        document.querySelector(".form").classList.remove("displayForm")
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
        const listErrorClass = document.querySelector("form ul");
        // Reference: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
        // Changed ideas from looping over childern to looping over the list items and removing the actual li
        let errorsPresent = listErrorClass.querySelectorAll("li");
        for (listItems of errorsPresent){
            listItems.remove();
        }
        
        for (input of inputs)
        {
            input.classList.remove("errors");
            // Validate the email field if sending the form information directly
            // Not neccessary when using mailto
            // if (input.type == "email"){
            //     // Citation Begins
            //     // https://stackoverflow.com/questions/22276741/ 
            //     // Email Validation (very rudimentary)
            //     // First check if there are at least 3 character before the @
            //     // Then check if the . is at least 3 character after the @ 
            //     // And finally check if the . is 2 characters less that the length
            //     if (input.value.indexOf("@") < 3 
            //         || (input.value.indexOf(".") < (input.value.indexOf("@")+3)) 
            //         || ((input.value.lastIndexOf(".") + 3)  > (input.value.length))
            //         ) {
            //         errors.push("Please enter a valid email address")
            //     }
            //     // End Citation
            //}

            if (input.value.length == 0){
                errors.push("Please fill out the " + input.id + " field.")
            }
            inputid = input;
            input = input.value;
            input  = input.toLowerCase();
            for (word of unProfWords){
                if (input.indexOf(word) > -1){
                    // **ToDo add functionality to highlight unProf word in input** 
                    errors.push("-- " + word + "-- is an unprofessional word. Please replace it with something more appropriate.");
                    inputid.classList.add("errors");
                }     
            }
        }    
        if (textarea.value.length == 0){
            errors.push("Please fill out the message field.");
        }
        textarea.classList.remove("errors");
        for (word of unProfWords){
            textareaWords = textarea.value;
            textareaWords = textareaWords.toLowerCase();
            if (textareaWords.indexOf(word) > -1){
                errors.push("-- " + word + "--  is an unprofessional word. Please replace it with something more appropriate")
                textarea.classList.add("errors")
            }     
        }
        // Citation starts
        // https://github.com/TECHCareers-by-Manpower/js-practice
        // Followed the example in the JS Practice Shopping List for adding and removing classes
        // Syntax element.classList.add/remove(class)
        if (errors.length == 0){
            if (listErrorClass.classList != "noErrors"){
                listErrorClass.classList.add("noErrors")
                listErrorClass.classList.remove("errors");
            }
            redirect();
        }
        else
        {
            for (error of errors){
                let newError = document.createElement("li");
                newError.innerText = error;
                listErrorClass.appendChild(newError)
                if (listErrorClass.classList != "errors"){
                    listErrorClass.classList.add("errors");
                    listErrorClass.classList.remove("noErrors");
                }
            errors = [];
            }
        }
        // End Citation
    })
})

function redirect()
{
    // https://stackoverflow.com/questions/15019689
    // How to add line breaks into body of mail
    window.location.href = "mailto:husker@galaxyhit.com?&subject=" + document.querySelector("#subject").value +"&body=" + document.querySelector("#message").value +"%0D%0A%0D%0ASent from " + document.querySelector("#name").value;
}


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