var dungeonid = 106021600;
var dungeons = 10;

function start() {
    for (var a = 0; a < dungeons; a++) {
        if (cm.getMap(dungeonid + a).getCharactersSize() == 0) {
            cm.warp(dungeonid + a, 0);
            return true
        }
    }
    cm.playerMessage(5, "All of the Mini-Dungeons are in use right now, please try again later.");
    return false
};