function start() {
    if (cm.getInfoQuest(21019).equals("helper=clear")) {
        cm.updateInfoQuest(21019, "miss=o;helper=clear");
        cm.hireTutor(false)
    }
};