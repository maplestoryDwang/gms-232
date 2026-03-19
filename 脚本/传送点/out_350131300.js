function enter() {
    cm.openScriptNpc()
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
            cm.setNumberForQuestInfo(33992, "check2", 1);
            cm.sendNormalTalk_Bottom("#face18#哦，接收信号的状态不是很好。", 37, 1540805, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#从这里开始通信就断开了，靠近超越石，就会引发扭曲现象，电波就难以触及。", 37, 1540879, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face11#等拿着东西逃出来之后再联系。", 37, 1540805, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face7#交给我吧！", 37, 1540879, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("那么，现在就去偷走超越石吧？", 36, 1540879)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.openNpc("冒险岛英雄_Act3_突袭博物馆")
                            }
                        }
                    }
                }
            }
        }
    }
};