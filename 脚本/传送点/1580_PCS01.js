function enter() {
    if (cm.isQuestFinished(64079) && cm.getNumberFromQuestInfo(64080, "chk1") < 0) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#b佩图尔说死亡谷因为危险，反而比较安全。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#为什么……？", 37, 9400580, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#啊……原来是因为地势险要，怪物也不会轻易进去啊！这么说来，现在都没看到怪物呢。", 37, 9400580, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b没错。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#掉到这里反而是件好事呢，太好了。", 37, 9400580, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(64080, "chk1=0");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};