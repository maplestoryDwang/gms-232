function start() {
    if (!cm.isQuestActive(32984)) {
        cm.sendNormalTalk_Bottom("（好像还有别的事要做……）", 57, 0, false, true);
        return
    }
    cm.openNpc("次元图书馆_Ep5_影子炼金术师_神殿");
    cm.playerMessage(5, "必须消灭掉所有怪物，继续向神殿深处前进。")
};