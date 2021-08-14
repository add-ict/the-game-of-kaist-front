const SET_DATA = 'publicDB/SETDATA';
export const setData = value => ({type: SET_DATA, value})

const initState = {
    timer: 0,
    time: 0,
    turns: 0,
    gameState: 0,
    ranking: {
        Relation: {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
        Grades: {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
        Health: {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
        Bonus: {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
    },
    prevRanking: {
        Relation: {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
        Grades: {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
        Health: {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
        Bonus: {0: 1, 1: 1, 2: 1, 3: 1, 4: 1},
    },
    modal: ["","",""]
}

const publicDB = (state = initState, action) => {
    console.log(action.value)
    switch (action.type) {
        case SET_DATA:
            console.log("!")
            return action.value;
        default:
            return state;
    }
}

export default publicDB