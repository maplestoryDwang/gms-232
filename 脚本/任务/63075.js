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
            cm.sendNormalTalk("唉-……唉-……", 4, 9400219, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b你为什么这样叹气？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……唉-……我好害怕。你听见了吗？那个诡异的叫声！", 4, 9400219, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(我侧耳倾听，好像听见挠黑板一样的声音。)", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#o9402048#！是#o9402048#。只有一个家伙会一到晚上就发出那么可怕的叫声。吓得人根本没法睡觉……", 4, 9400219, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("你有空的话，能不能帮我消灭#o9402048#？我真的很害怕！", 4, 9400219)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("噢！谢谢，谢谢你！那不是普通的#o9402048#，是#o9402049#！", 4, 9400219, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(63075, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63075.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(63075);
            cm.gainExp(476400);
            cm.updateInfoQuest(63075, "exp=1");
            cm.sendNormalTalk("现在我再也听不见那个可怕的叫声，终于能安心了。", 4, 9400219, false, false)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
};