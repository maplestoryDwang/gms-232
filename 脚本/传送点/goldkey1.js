function start() {
    var a = cm.getMap().getReactorByName("goldkey1");
    if (a.getState() == 0) {
        a.hitReactor(cm.getClient())
    }
};