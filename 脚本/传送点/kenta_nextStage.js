function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            if (cm.isLeader() && cm.allMembersHere()) {
                var a = false;
                switch (cm.getMapId()) {
                    case 923040100:
                        a = em.getProperty("escort_end").equals("1");
                        break;
                    case 923040200:
                        a = cm.haveItem(2430364, 20);
                        break;
                    case 923040300:
                        a = cm.getPlayer().getEventInstance() != null && cm.getPlayer().getEventInstance().getProperty("kentaSaving") != null && cm.getPlayer().getEventInstance().getProperty("kentaSaving").equals("0");
                        break
                }
                if (a) {
                    cm.warpParty(cm.getMapId() + 100, 1)
                } else {
                    cm.getTopMsgFont("还有没做完的事情。", 3, 20, 4, 0, 0)
                }
            } else {
                cm.getTopMsgFont("请队长集合所有队员。", 3, 20, 4, 0, 0)
            }
            cm.dispose()
        }
    }
};