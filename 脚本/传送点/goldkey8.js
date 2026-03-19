function start() {
    var a = cm.getMap().getReactorByName("goldkey8");
    if (a.getState() == 0) {
        a.hitReactor(cm.getClient())
    }
};