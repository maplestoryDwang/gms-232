function start() {
    var a = cm.getMap().getReactorByName("goldkey10");
    if (a.getState() == 0) {
        a.hitReactor(cm.getClient())
    }
};