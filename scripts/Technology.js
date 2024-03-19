// Changes the Transient State
import { setTechnologyChoice } from "./TransientState.js"

const handleTechnologyChoice = (event) => {

    if (event.target.id === "tech") {
        setTechnologyChoice(parseInt(event.target.value))
    }

}


export const Technologies = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technologies.map( (tech) => {
            return `<option value="${tech.id}">${tech.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}


//  When there is a change, handleTechnologyChoice runs
document.addEventListener("change", handleTechnologyChoice)