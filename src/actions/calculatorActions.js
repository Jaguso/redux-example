export function calculateTotal(number) {
    return {
        type: "CALCULATE",
        payload: number
    };
}