
// Array of words that I want filtered.
const unProfWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];
const formInputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
// Access the unordered list that displays the errors in the form.
const errorPanel = document.querySelector(".errPanel");
// Access any/all of the error list items currently in the unordered list.
let errorListItems = errorPanel.querySelectorAll("li");
let errorMessages = [];

// Citation:
// https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
// Loops over all the elements with the contact class.
document.querySelectorAll(".contact").forEach(link => {
    link.addEventListener("click", () => {

        // Toggle the form from hidden to displayed.
        document.querySelector(".form").classList.remove("hiddenForm");
        document.querySelector(".form").classList.add("displayForm");

        // Toggle form from displayed to hidden when the user clicks the cancel button.
        document.querySelector("#cancel").addEventListener("click", () =>{
            event.preventDefault();
            document.querySelector(".form").classList.add("hiddenForm");
            document.querySelector(".form").classList.remove("displayForm");
        })
        
        // Clears out error list when user clears the form.
        document.querySelector("#clear").addEventListener("click", () => {
            ResetErrors();
        })


        // Validate form information when the user clicks submit.
        document.querySelector("#submit").addEventListener("click", () => {
            event.preventDefault();
            ResetErrors();
            for (formInput of formInputs)
            {
                validateForm(formInput);
            }
            validateForm(textArea);

            // Citation starts:
            // https://github.com/TECHCareers-by-Manpower/js-practice
            // Followed the example in the JS Practice Shopping List for adding and removing classes.
            // Syntax element.classList.add/remove(class).
            
            // If no errors are found change change the classList to noErrrors if it wasn't already set and remove the errors class.
            if (errorMessages.length == 0) {

                errorPanel.classList.remove("errors");
                // Sumbit inputs to email mailto.
                Redirect();
            } 
            else {
                CreateNewErrorsLi();
            }
            // End Citation.
        })
    })
})


// Opens users mail client and pre-populates with inputted information.
function Redirect()
{
    // https://stackoverflow.com/questions/15019689
    // How to add line breaks into body of mail.
    window.location.href = "mailto:husker@galaxyhit.com?&subject=" + document.querySelector("#subject").value + "&body=" + document.querySelector("#message").value + "%0D%0A%0D%0ASent from " + document.querySelector("#name").value;
}


function validateForm (formInput)
{
    // Remove the errors class indicator to start fresh if the user is resubmitting.
    formInput.classList.remove("errors");
    
    // Ensure that the user enters a value in each input field.
    if (formInput.value.length == 0){
        errorMessages.push("Please fill out the " + formInput.id + " field.");
    }
    
    // Use Validate email function here if sending form data directly using input as the argument.
    
    // Loop through the list of unproffesional words and check if they are part of the string.
    for (word of unProfWords){
        
        // Get the value of the input and transform to lower case .
        inputValue = formInput.value;
        inputValue = inputValue.toLowerCase();
        
        // The index is used to check the location of the starting letter of the word = 0 or above means it is found.
        if (inputValue.indexOf(word) > -1){
            errorMessages.push("*" + word + "*  is an unprofessional word. Please replace it with something more appropriate");
            
            // Add the class of errors to the input field to style with red color.
            formInput.classList.add("errors");
        }
    }         
}  


function ResetErrors()
{
    const errorPanel = document.querySelector(".errPanel");
    let errorListItems = errorPanel.querySelectorAll("li");
    
    // Remove any errors list items currently displayed in form.
    for (eachErrorInList of errorListItems){
        eachErrorInList.remove();
    }    
}      


// Creates li elements in HTML in the errPanel for each error message for the form. Takes no arguments.
function CreateNewErrorsLi()
{
    for (errorMessage of errorMessages){
        let newError = document.createElement("li");
        newError.innerText = errorMessage;
        errorPanel.appendChild(newError);
        // Toggle class to errors if not already set to errors.
        if (errorPanel.classList != "errors"){
            errorPanel.classList.add("errors");
        }
        // Clears the errors array preparing for the next submit click event.    
        errorMessages = [];
    }
}


// Ensure user inputs a valid email address into a form. Takes the input as the argument and outputs an error message to the errors array.
// A valid email for this functions is ***@***.**
function ValidateEmail (formInput)
{
    // Validate the email field if sending the form information directly.
    // Not neccessary when using mailto.
    if (formInput.type == "email"){
        // Citation Begins:
        // https://stackoverflow.com/questions/22276741/ 
        // Email Validation (very rudimentary).
        // First check if there are at least 3 character before the "@".
        // Then check if the "." is at least 3 character after the "@" .
        // And finally check if the "." is 2 characters less that the length.
        if (formInput.value.indexOf("@") < 3 
            || (formInput.value.indexOf(".") < (formInput.value.indexOf("@")+3)) 
            || ((formInput.value.lastIndexOf(".") + 3)  > (formInput.value.length))
            ) {
            errorMessages.push("Please enter a valid email address");
        }
        // End Citation.
    }
}