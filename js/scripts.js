
// Citation
// https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
// Loops over all the elements with the contact class

document.querySelectorAll(".contact").forEach(link => {
    link.addEventListener("click", () => {
        // Toggle the form from hidden to displayed
        document.querySelector(".form").classList.remove("hiddenForm");
        document.querySelector(".form").classList.add("displayForm");
        const unProfWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];
        const inputs = document.querySelectorAll("input");
        const textarea = document.querySelector("textarea");
        let errors = [];
        document.querySelector("#cancel").addEventListener("click", () =>{
            event.preventDefault();
            // Toggle class to hide the form if the user clicks cancel
            document.querySelector(".form").classList.add("hiddenForm");
            document.querySelector(".form").classList.remove("displayForm")
        })

        document.querySelector("#clear").addEventListener("click", () => {
            event.preventDefault();
            // Clear all input fields if the user clicks clear
            for (input of inputs){
                input.value = "";
            }
            document.querySelector("textarea").value = ""
        })

        document.querySelector("#submit").addEventListener("click", () =>{
            event.preventDefault();
            const listErrorClass = document.querySelector("form ul");
            // Reference: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
            // Changed ideas from looping over childern to looping over the list items and removing the actual li
            let errorsPresent = listErrorClass.querySelectorAll("li");
            // Remove any errors list items from the form
            for (listItems of errorsPresent){
                listItems.remove();
            }
            // Loop over the input fields
            for (input of inputs)
            {
                // Remove the errors class indicator to start fresh if the user is resubmitting
                input.classList.remove("errors");
                // Use Validate email function here if sending form data directly using input as the argument
                if (input.value.length == 0){
                    errors.push("Please fill out the " + input.id + " field.")
                }
                // Retain the input id to use for adding the error class back to the input id
                inputid = input;
                // Grab the value of the input and transform to lower case 
                input = input.value;
                input  = input.toLowerCase();
                // Loop through the list of unproffesional words and check if they are part of the string
                for (word of unProfWords){
                    // The index is used to check the location of the starting letter of the word = 0 or above means it is found
                    if (input.indexOf(word) > -1){
                        // **ToDo add functionality to highlight unProf word in input** 
                        // Adds the error to the main error list and adds the class errors to input
                        errors.push("* " + word + "* is an unprofessional word. Please replace it with something more appropriate.");
                        inputid.classList.add("errors");
                    }     
                }
            }
            // Check to make sure that message area has input and that no unprofessional words are used
            // Must be outside of the input iterator or it will loop and produce multiple errors    
            if (textarea.value.length == 0){
                errors.push("Please fill out the message field.");
            }
            textarea.classList.remove("errors");
            for (word of unProfWords){
                textareaWords = textarea.value;
                textareaWords = textareaWords.toLowerCase();
                if (textareaWords.indexOf(word) > -1){
                    errors.push("*" + word + "*  is an unprofessional word. Please replace it with something more appropriate")
                    textarea.classList.add("errors")
                }     
            }
            // Citation starts
            // https://github.com/TECHCareers-by-Manpower/js-practice
            // Followed the example in the JS Practice Shopping List for adding and removing classes
            // Syntax element.classList.add/remove(class)
            // If no errors are found change change the classList to noErrrors if it wasn't already set and remove the errors class
            if (errors.length == 0){
                if (listErrorClass.classList != "noErrors"){
                    listErrorClass.classList.add("noErrors")
                    listErrorClass.classList.remove("errors");
                }
                // sumbit inputs to email mailto
                Redirect();
            }
            else
            {
                // create errors li and add them to the ul
                for (error of errors){
                    let newError = document.createElement("li");
                    newError.innerText = error;
                    listErrorClass.appendChild(newError)
                    // Toggle class to errors if not already set  to errors
                    if (listErrorClass.classList != "errors"){
                        listErrorClass.classList.add("errors");
                        listErrorClass.classList.remove("noErrors");
                    }
                // Clears the errors array preparing for the next submit click event    
                errors = [];
                }
            }
            // End Citation
        })
    })
})
function ValidateEmail (input){
    // Validate the email field if sending the form information directly
    // Not neccessary when using mailto
    if (input.type == "email"){
        // Citation Begins
        // https://stackoverflow.com/questions/22276741/ 
        // Email Validation (very rudimentary)
        // First check if there are at least 3 character before the @
        // Then check if the . is at least 3 character after the @ 
        // And finally check if the . is 2 characters less that the length
        if (input.value.indexOf("@") < 3 
            || (input.value.indexOf(".") < (input.value.indexOf("@")+3)) 
            || ((input.value.lastIndexOf(".") + 3)  > (input.value.length))
            ) {
            errors.push("Please enter a valid email address")
        }
        // End Citation
    }
}

// Opens users mail client and pre-populates with inputted information
function Redirect()
{
    // https://stackoverflow.com/questions/15019689
    // How to add line breaks into body of mail
    window.location.href = "mailto:husker@galaxyhit.com?&subject=" + document.querySelector("#subject").value +"&body=" + document.querySelector("#message").value +"%0D%0A%0D%0ASent from " + document.querySelector("#name").value;
}



// let more = document.querySelectorAll(".more");
// for (link of more){
//     link.addEventListener("click", Something);
// }
// function Something (event){
//     let moremore = event.target.parentElement;
//     moremore = moremore.parentElement.querySelector(".moreInfo")
//     moremore.classList.remove("moreInfo");
//     moremore.classList.add("lessInfo")
//     console.log(moremore);
// }
