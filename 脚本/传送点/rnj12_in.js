function start() {
    if (cm.getMap().getCharactersSize() == 4 || cm.getMap(926100401).getCharactersSize() > 0) {
        cm.warpParty(926100401, 0)
    } else {
        cm.playerMessage(5, "Not everyone is here.")
    }
};