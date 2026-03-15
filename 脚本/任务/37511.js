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
            cm.sendNormalTalk_Bottom("#face0#原来塞伦是去救那个人了。", 36, 3004436, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#是啊，那家伙还真是让人摸不着头脑，对吧？", 36, 3004431, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face0#好了，大伙儿都准备好了吗？", 36, 3004431)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那我们也开始吧。", 36, 3004431, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#先分散从三个不同的方向潜入，战斗结束后，再去指定的地点会合。", 36, 3004431, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#我们就去荡平那些家伙的部队，给那个讨厌的大叔一点颜色瞧瞧吧。", 36, 3004431, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3004435, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(37511, "");
                                        cm.OnStartNavigation(993150070, 0, "east00", 37511);
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

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37511.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#这就已经足够混乱了。", 36, 3004436, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#突袭战比预想的要成功。", 36, 3004435, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(37511);
                    cm.dispose()
                }
            }
        }
    }
};