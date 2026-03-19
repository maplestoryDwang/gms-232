function start() {
    var a = cm.getEventManager("Romeo");
    if (a != null && a.getProperty("stage5").equals("0")) {
        cm.spawnMonster(9300142, 10);
        cm.spawnMonster(9300143, 10);
        cm.spawnMonster(9300144, 10);
        cm.spawnMonster(9300145, 10);
        cm.spawnMonster(9300146, 10);
        a.setProperty("stage5", "1")
    }
};