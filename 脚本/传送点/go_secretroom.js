var baseid = 106021000;
var dungeonid = 106021001;
var dungeons = 10;

function start() {
    if (cm.getPlayer().getMapId() == baseid) {
        for (var a = 0; a < dungeons; a++) {
            if (cm.getMap(dungeonid + a).getCharactersSize() == 0) {
                cm.warp(dungeonid + a, 0);
                return true
            }
        }
        cm.playerMessage(5, "All of the Mini-Dungeons are in use right now, please try again later.");
        return false
    } else {
        cm.warp(baseid, "in00")
    }
    return true
};