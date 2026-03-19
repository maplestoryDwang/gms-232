function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (cm.getQuestStatus(64085) > 0) {
        cm.dispose();
        return
    }
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#b陷阱越来越多了啊。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##h0#！那边！", 37, 9400580, true, true)
            } else {
                if (status === a++) {
                    cm.sendNewEffects(12, [2000, 740, 70, 0, 0])
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#幸好没有遭到攻击的痕迹呢。", 37, 9400580, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#进去看看吧？", 37, 9400580, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNewEffects(19, [1000])
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(64085, "");
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
};