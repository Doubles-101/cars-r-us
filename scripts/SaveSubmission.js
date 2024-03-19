import { placeOrder } from "./TransientState.js"


const handleSurveySubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        placeOrder()
    }
}

export const SaveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClick)

    return "<div><button id='saveSubmission'>Place Order</button><div>"
}