function enter() {
    if (cm.getInfoQuest(32628) == "arin=1;bang1=1;guard1=1") {
        return
    }
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
            cm.sendNormalTalk("完了……好像彻底迷路了。这么下去怎么能找到白魔法师呢？", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……不行。在走得更远之前，还是先回去吧。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.fieldEffect_PlayFieldSound("cannonshooter/bang", 100);
                    cm.sendNormalTalk("……？！刚才的枪声？", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("总觉得不安。回小孩所在的地方吧。", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(32628, "arin=1;bang1=1;guard1=1");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};