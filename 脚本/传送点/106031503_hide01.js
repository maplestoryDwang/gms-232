function start() {
    var a = cm.getInfoQuest(30067);
    if (a == null || !a.equals("clear3")) {
        cm.openNpc(0, "蘑菇城_逃离飞船3")
    }
    return true
};