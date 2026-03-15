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
            cm.sendNormalTalk_Bottom("呃呃……咳咳……真是满目疮痍啊……他肯定会昏过去吧……", 56, 0, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("杰斯……成功了呢……", 56, 0, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("对了……斯卡伊？！\r\n刚刚明明在旁边的……他去哪里了？", 56, 0, 1, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(64929, "");
                        cm.dispose()
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64929.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("发，发生了什么？！\r\n杰斯怎么会这样？！", 36, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("杰斯！呃啊啊啊！\r\n你不要死！杰斯……！呜呜……！", 36, 9401074, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#h0#，发生了什么事情……？", 36, 9401084, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("为引爆阿特利埃，他不惜牺牲自己……\r\n但他现在还有气息！快点救他吧！", 56, 9401072, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("杰斯……到最后都想做好事呢……", 36, 9401081, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("但是……他的身体……呜呜……杰斯……！", 36, 9401076, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("大家安静。", 36, 9401072, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("我有个好主意。", 36, 9401072, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                            cm.forceCompleteQuest(64929);
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