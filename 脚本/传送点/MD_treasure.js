var baseid = 251010402;
var dungeonid = 251010410;
var dungeons = 30;

function start() {
    if (cm.getMapId() == baseid) {
        if (cm.getPlayer().getFame() < 10) {
            cm.playerMessage(5, "You need 10 Fame to enter.");
            return
        }
        if (cm.getParty() != null) {
            if (cm.isLeader()) {
                for (var a = 0; a < dungeons; a++) {
                    if (cm.getPlayerCount(dungeonid + a) == 0) {
                        cm.warpParty(dungeonid + a);
                        return true
                    }
                }
            } else {
                cm.playerMessage(5, "You are not the leader of the party.");
                return false
            }
        } else {
            for (var a = 0; a < dungeons; a++) {
                if (cm.getPlayerCount(dungeonid + a) == 0) {
                    cm.warp(dungeonid + a);
                    return true
                }
            }
        }
        cm.playerMessage(5, "All of the Mini-Dungeons are in use right now, please try again later.");
        return false
    } else {
        cm.warp(baseid, "MD00");
        return true
    }
};