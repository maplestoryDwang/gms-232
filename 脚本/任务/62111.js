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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.npc_LeaveField("oid=96041");
            cm.sendNormalTalk_Bottom("我从没见过你啊！你从哪里来的？来上海做什么？", 37, 9310532, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊，我受神木村#p2081000#的委托，来寻找一个叫#p9310538#的哈夫林……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯，这个理由太牵强了吧！你的意思是说，你是受人之托才到上海这座危险的城市来吗？", 37, 9310532, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("帮助陷入危机的人，是我义不容辞的责任……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("虽然你看上去很可疑，但我还是暂且相信你吧。不过，要是你想留在#m701100000#的话，就必须先经受一项测试。如果无法通过测试，别说待在#m701100000#了，就连一秒钟都别想逗留！", 37, 9310532, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("需要进行测试吗？", 37, 9310532)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("很好，等你准备好接受测试后，再来和我说话吧。", 37, 9310532, false, false)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(62111);
                                        cm.updateInfoQuest(62111, "chk=1");
                                        cm.addNumberForQuestInfo(62109, "yuyuanPoint", 2);
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