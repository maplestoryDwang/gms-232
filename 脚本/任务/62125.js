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
            cm.sendNormalTalk_Bottom("你还不回去？", 37, 9310539, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不过，我很久没和别人说过话了，感觉真不错呢。咳咳咳。", 37, 9310539, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu_Bottom("嗯……你能再帮我一个忙吗？反正我只是个烦人的乡下老头而已，你不乐意帮我也没关系……\r\n#b#L0#我会帮你。#l \r\n#L1#我很忙。#l", 37, 9310539)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("请说！", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("话说……我并不害怕那些发狂的动物，但……", 37, 9310539, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("但？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我所害怕的是#m701102030#中的#o9600309#！那家伙喷出的剧毒能杀死动物和植物。太可怕了，我担心它会伤害到我。", 37, 9310539, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo_Bottom("你能不能帮我消灭那个#o9600309#？", 37, 9310539)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(62125, "");
                                            cm.sendNormalTalk_Bottom("哦，不简单！你和现在的年轻人不太一样啊，以后肯定会大有作为的！", 37, 9310539, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#o9600309#经常会在#m701102030#中出没，你在那里稍作等待就能看到它！你要当心啊！", 37, 9310539, true, false)
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
            cm.sendNormalTalk_Bottom("难道你消灭掉那个巨大的#o9600309#了？", 37, 9310539, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62125);
                cm.updateInfoQuest(62125, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 5);
                cm.sendNormalTalk_Bottom("哦！看来是真的！现在总算可以安心了……！谢谢！", 37, 9310539, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};