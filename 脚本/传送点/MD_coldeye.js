var baseid = 101030400;
var dungeonid = 101030500;
var dungeons = 30;

function start() {
    try {
        if (cm.getMapId() == baseid) {
            if (cm.getParty() != null) {
                if (cm.isLeader()) {
                    for (var a = 0; a < dungeons; a++) {
                        if (cm.getPlayerCount(dungeonid + a) == 0) {
                            cm.warpParty(dungeonid + a);
                            return
                        }
                    }
                } else {
                    cm.playerMessage(5, "You are not the leader of the party.")
                }
            } else {
                for (var a = 0; a < dungeons; a++) {
                    if (cm.getPlayerCount(dungeonid + a) == 0) {
                        cm.warp(dungeonid + a);
                        return
                    }
                }
            }
            cm.playerMessage(5, "All of the Mini-Dungeons are in use right now, please try again later.")
        } else {
            cm.warp(baseid, "MD00")
        }
    } catch (b) {
        cm.playerMessage("Error: " + b)
    }
};