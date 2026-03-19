function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(41050)) {
        cm.openScriptNpc()
    } else {
        cm.warp(322000100, 0, false)
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("喂喂！这里是王宫的入口，没事不要在这里晃。", 4, 2420004, false, true);
            if (cm.getStringFromQuestInfo(41050, "clear").equals("clear")) {
                cm.dispose()
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我肯定是因为有事才来的，别烦我，快给我让开。", 2, 2420025, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("喂，这里可是王宫，不是阿特里安的民宅。不可能随随便便就能进出，我也不是没事干才站这里把守的。", 4, 2420004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我是来给王妃转交这个绸缎的。王妃的礼物也不让进吗？", 2, 2420025, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那也不能随便进王宫。要不这样吧，我替你把绸缎交给王妃，怎么样？", 4, 2420004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你？那我还真求之不得。我还嫌麻烦呢。", 2, 2420025, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(41050, "clear=clear");
                                    cm.sendNormalTalk("想必你也已经发现了，这是送礼。是雅思敏奶奶为儿子阿尔丁打点的一些礼物。你知道是什么意思了吧？", 2, 2420025, true, true);
                                    cm.gainItem(4033807, -1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("好好，我知道了。我肯定会好好转达的，你放心~", 4, 2420004, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.dispose()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};