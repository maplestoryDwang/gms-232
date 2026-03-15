var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#p2081000#让你来带我走的吗？", 37, 9310538, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b是啊！他很担心你，让你赶快回去。我会带你走的。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不要！我不走！", 37, 9310538, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b嗯？你说你不走？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("啊……不，不是，不是我不走……现在我是不能走。其实，我的背囊里装有给#p2081000#和朋友们的礼物，但是被我弄丢了。\r\n我必须找到那个背囊才能回去！", 37, 9310538, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b啊！这种小问题，我来帮你。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你……你……要帮我？", 37, 9310538, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b没错！我马上就能帮你找到。你记得是在哪儿丢的吗？", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askMenu_Bottom("啊……嗯……南京路！我在外滩还背着背囊的，进了村子就没了，那就一定是在南京路丢的！你……会帮我找到吧？\r\n#b#L0#你就等着吧~我马上就找回来给你！#l \r\n#L1#嗯，对不起，我有点忙，下次帮你找吧。#l", 37, 9310538)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(62101, "");
                                                cm.sendNormalTalk_Bottom("啊……看来你很闲啊……谢谢。", 37, 9310538, false, false)
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
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("啊……难道，你已经……找到了？", 37, 9310538, false, true);
            cm.gainItem(4034654, -1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62101);
                cm.updateInfoQuest(62101, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.sendNormalTalk_Bottom("我还以为已经被怪物拿走了……啊，你是狩猎了怪物，然后找到的？真厉害啊……", 37, 9310538, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};