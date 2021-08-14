export const PAUSED = 0;
export const MOVEMENT = 15;
export const MINIGAME = 25;
export const SEASON_SELECT = 35;
export const SEASON_USE = 45;
export const LASTEVENT = 55;
export const LASTEVENT_USE = 65;
export const USE_BONUS = 75;
export const RESULT = 85;

export const gameStates = {
    0: "PAUSED",
    15: "MOVEMENT",
    25: "MINIGAME",
    35: "SEASON_SELECT",
    45: "SEASON_USE",
    55: "LASTEVENT",
    65: "LASTEVENT_USE",
    75: "USE_BONUS",
    85: "RESULT"
};
export const gameStateName = (x) => {
    if (gameStates[x]) return gameStates[x];
    return "Approving"
}