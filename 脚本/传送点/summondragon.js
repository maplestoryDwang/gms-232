function start() {
    if (cm.haveItem(4001094)) {
        cm.getMap().getReactorByName("dragonBaby").hitReactor(cm.getClient());
        cm.getMap().getReactorByName("dragonBaby2").hitReactor(cm.getClient());
        cm.playerMessage(5, "九灵龙的蛋，舒舒服服的发了一道神秘的光，现在已经回到巢里。");
        cm.gainItem(4001094, -1)
    }
};