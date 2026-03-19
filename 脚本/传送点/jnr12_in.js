function start() {
    if (cm.isLeader() && cm.allMembersHere()) {
        cm.warpParty(926110401, 0)
    } else {
        cm.playerMessage(5, "请队长确认每一个队员都在这!")
    }
};