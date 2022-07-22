//Add Item
export const ADD = (item) => {
    return{
        type: "ADD_CART",
        payload: item
    }
}

//Delete Item
export const DELETE = (id) => {
    return{
        type: "REMOVE_CART",
        payload: id
    }
}

//Remove particular item
export const REMOVE = (item) => {
    return{
        type: "REMOVE_ONE",
        payload: item
    }
}