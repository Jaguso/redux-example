export function setText(text) {
    return {
        type: "SET_TEXT",
        payload: text
    };
}

export function changeBoolean() {
    return {
        type: "CHANGE_BOOLEAN",
    };
}