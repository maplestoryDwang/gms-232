function start() {
    var a = cm.getMap().getReactorByName("goldkey6");
    if (a.getState() == 0) {
        a.hitReactor(cm.getClient())
    }
};