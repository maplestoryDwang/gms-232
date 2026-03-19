var baseid = 240040520;
var dungeonid = 240040900;
var dungeons = 19;

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
};