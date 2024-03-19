// Changes the Transient State
import { setInteriorChoice } from "./TransientState.js"

const handleInteriorChoice = (event) => {

    if (event.target.id === "interior") {
        setInteriorChoice(parseInt(event.target.value))
    }

}


export const Interiors = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior package</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}


//  When there is a change, handleInteriorChoice runs
document.addEventListener("change", handleInteriorChoice)