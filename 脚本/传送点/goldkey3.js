function start() {
    var a = cm.getMap().getReactorByName("goldkey3");
    if (a.getState() == 0) {
        a.hitReactor(cm.getClient())
    }
};