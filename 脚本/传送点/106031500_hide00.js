function start() {
    var a = cm.getInfoQuest(30067);
    if (a == null || !a.equals("clear")) {
        cm.openNpc(0, "蘑菇城_逃离飞船1")
    }
    return true
};