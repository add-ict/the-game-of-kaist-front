const SET_DATA = 'privateDB/SETDATA';
export const setData = (value) => ({type: SET_DATA, value});
const initState = {
    character: 0,
    deck: {0: false, 1: false, 2: false, 3: false, 4:false},
    score: {Relation: 0, Grades: 0, Health: 0, Bonus: 0},
    scoreScale: {min: 0, max: 100},
    location: 24,
    nextLocation: 24,
    mapData: {
        24: {
            location: 24,
            who: [0,1,2,3,4],
            tooltip: "",
            affectTo: {Relation: false, Grades: false, Health: false, Bonus: false},
            canGo: false
        }
    },
    lastMINIGAME: -1,
    lastSEASON_SELECT: {askN:0,desc:"Error: Please Call Admin."}
}

const privateDB = (state = initState, action) => {
    if (action.type == SET_DATA) return action.value
    return state;
}

export default privateDB