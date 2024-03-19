// Changes the Transient State
import { setPaintChoice } from "./TransientState.js"

const handlePaintChoice = (event) => {

    if (event.target.id === "paint") {
        setPaintChoice(parseInt(event.target.value))
    }

}


export const Paints = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    let html = "<h2>Paints</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint choice</option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}


//  When there is a change, handlePaintChoice runs
document.addEventListener("change", handlePaintChoice)