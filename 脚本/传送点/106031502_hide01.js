function start() {
    var a = cm.getInfoQuest(30067);
    if (a == null || !a.equals("clear2")) {
        cm.openNpc(0, "蘑菇城_逃离飞船2")
    }
    return true
};