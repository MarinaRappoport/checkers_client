// TODO: make instance of this class per game and send all commands to here
// update the state by the result of this controller
class GameLogicController {
    getSelectedPoints(current, selected) {
        if(current[0] === selected[0] && current[1] === selected[1]) {
            return [-1,-1];
        }

        return selected;
    }
}


export default new GameLogicController();