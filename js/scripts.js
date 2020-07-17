
document.querySelector("#contact").addEventListener("click", () =>{
    document.querySelector("#modal").style.display="flex";
    console.log("hey");
    const unProfWords = ["hello", "are", "bad", "test"];
    const clear = document.querySelector("#clear");
    const submit = document.querySelector("#submit");
    const cancel = document.querySelector("#cancel");
    const inputs = document.querySelectorAll("input");
    let errors = [];
    cancel.addEventListener("click", () =>{
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
            input = input.value;

            for (word of unProfWords)
            {
                console.log(input)
                if (input.indexOf(word) > -1)
                {
                    errors.push(word);
                    errorHandling(word)
                }
            }  
        }
    })

    function errorHandling(errorId){
        errorId = "'#" + errorId +"'";
        // Create element (show element?)
        

    }
    errorHandling("name");
})
document.querySelector(".moreTech").addEventListener("click", () => {
    event.preventDefault();
    skillsFullList = document.querySelectorAll("#skills .desktopView");
    for (skill of skillsFullList){
        if (skill.style.display != "flex"){
            skill.style.display = "flex"
        }
        else {
            skill.style.display= "none"
        }
    }
    if (document.querySelector("#skills a").innerHTML != "(less...)"){
        document.querySelector("#skills a").innerHTML = "(less...)"
    }
    else {
        document.querySelector("#skills a").innerHTML = "(more...)"
    }
    
})