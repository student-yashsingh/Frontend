document.designMode="on"
let div =document.createElement("div")
        div.innerHTML="I have been inserted."
        div.setAttribute("class","created")
        document.querySelector(".container").append(div)
        let cont =document.querySelector(".container")
        cont.insertAdjacentHTML("afterend","hlo this data is in the variable cont")

        // rest u can revise from the notes.
