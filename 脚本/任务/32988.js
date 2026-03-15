var PQname = ["影子村_影子村"];
var chs = 0;
var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#站住，影牙。", 37, 2560004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("希姆斯……肯……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我们接到了命令，只要你踏出村子一步，就干掉你。", 37, 2560004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#哈哈，真是个笨蛋。我还在担心，要是你回宿舍去了该怎么办呢。", 37, 2560006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#只要乖乖地喝下中和剂，就什么事都没有了。", 37, 2560004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("让开。我不想伤害你们。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#哈哈，好狂妄的口气！", 37, 2560006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.setStandAloneMode(false);
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.playerMessage(5, "必须打败希姆斯和肯，到迎月山丘去。");
                                        cm.dispose();
                                        cm.openNpc("次元图书馆_Ep5_影子炼金术师_逃脱")
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#face2#不可能……怎么会……", 37, 2560006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("必须到迎月山丘去……真实药水……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32988);
                    cm.updateInfoQuest(32988, "exp=1;clear=1");
                    cm.gainExp(550003);
                    cm.eventSKill(0);
                    cm.dispose();
                    cm.warp(307000210, 0, true);
                    cm.setInGameDirectionMode(false, true, false)
                }
            }
        }
    }
};