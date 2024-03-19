import { Interiors } from "./Interior.js"
import { Orders } from "./Orders.js"
import { Paints } from "./Paint.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { Technologies } from "./Technology.js"
import { Wheels } from "./Wheel.js"

const render = async () => {
    const techHTML = await Technologies()
    const interiorHTML = await Interiors()
    const paintHTML = await Paints()
    const wheelHTML = await Wheels()
    const buttonHTML = await SaveSubmission()
    const orderHTML = await Orders()

    
    const composedHTML = `
        <h1>Cars 'R Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                ${paintHTML}
            </section>

            <section class="choices__technologies options">
                ${techHTML}
            </section>

            <section class="choices__wheels options">
                ${wheelHTML}
            </section>

            <section class="choices__interiors options">
                ${interiorHTML}
            </section>
        </article>

        <article class="orderButton">
            ${buttonHTML}
        </article>

        <article class="customOrders">
            ${orderHTML}
        </article>
    `

    document.querySelector("#container").innerHTML = composedHTML
}

// Custom event listener to change html when button is pressed
document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()