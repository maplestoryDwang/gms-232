function start() {
    if (cm.getQuestStatus(6110) == 1) {
        if (cm.getParty() != null) {
            if (!cm.isLeader()) {
                cm.playerMessage("Party leader consisting of two Warriors can decide to enter.")
            } else {
                if (cm.getParty().getMembers().size < 2) {
                    cm.playerMessage("You can make a quest when you have a party with two. Please make your party with two members.")
                } else {
                    if (!cm.isAllPartyMembersAllowedJob(1)) {
                        cm.playerMessage("You can't enter. Your party member's job is not Warrior or Your party doesn't consist of two members.")
                    } else {
                        var a = cm.getEventManager("4jrush");
                        if (a == null) {
                            cm.playerMessage("You're not allowed to enter with unknown reason. Try again.")
                        } else {
                            a.startInstance(cm.getParty(), cm.getMap());
                            return true
                        }
                    }
                }
            }
        } else {
            cm.playerMessage(5, "You don...t have a  party. You can challenge with party.")
        }
    } else {
        cm.playerMessage("You can't enter sealed place.")
    }
    return false
};