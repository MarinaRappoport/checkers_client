class GameLogicController {
    getSelectedPoints(current, selected) {
        if(current[0] === selected[0] && current[1] === selected[1]) {
            return [-1,-1];
        }

        return selected;
    }
}


export default new GameLogicController();