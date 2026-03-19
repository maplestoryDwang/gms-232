var baseid = 221040000;
var dungeonid = 221040001;

function start() {
    try {
        if (cm.getMapId() == baseid) {
            if (cm.getParty() != null) {
                if (cm.isLeader()) {
                    if (cm.getPlayerCount(dungeonid) == 0) {
                        cm.warpParty(dungeonid);
                        return
                    }
                } else {
                    cm.playerMessage(5, "You are not the leader of the party.")
                }
            } else {
                if (cm.getPlayerCount(dungeonid) == 0) {
                    cm.warp(dungeonid);
                    return
                }
            }
            cm.playerMessage(5, "All of the Mini-Dungeons are in use right now, please try again later.")
        } else {
            cm.warp(baseid, "MD00")
        }
    } catch (a) {
        cm.playerMessage("Error: " + a)
    }
};