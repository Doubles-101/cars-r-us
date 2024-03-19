export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=technology&_expand=paint&_expand=wheel&_expand=interior")
    const orders = await fetchResponse.json()
    
    let ordersHTML = "<h2>Custom Car Orders</h2>"
    
    const ordersArray = orders.map(
        (order) => {
            const orderPrice =  order.technology.price + order.wheel.price + order.paint.price + order.interior.price 
            orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
            return `<div>${order.paint.name} car with ${order.wheel.name} wheels, ${order.interior.name} interior, and the ${order.technology.name} for a total cost of ${orderPrice}</div>`
        }
    )

    ordersHTML += ordersArray.join("")

    return ordersHTML
}