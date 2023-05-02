// Action(functions) rules:-
// 1. It return simple JS objects.
// 2. It's pure JS function.

export const increaseBy = (num) => {
    return { 
        type: "INC_BY",
        data: num
      }
}

export const decreaseBy = (num) => {
    return { 
        type: "DEC_BY",
        data: num
      }
}