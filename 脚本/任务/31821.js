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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31821.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你好哇。因为我这么快就到了，吓一跳吧。我是个称职的商人，即使在最危险的情况下，也一心扑在买卖上，所以才走过常人难走的路，不顾艰险地来到这里。", 0, 3001004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那边明明没有路啊……", 2, 3001004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("哈哈哈，瞧你那副难以置信的小样儿……嘿嘿，我先介绍一下自己吧，我是隶属商团的#b#p3001004##k。", 0, 3001004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("认识你很高兴。最近意外的客人越来越多呢。", 0, 3001004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我对种族啦，出身啦这类东西不感兴趣。看你样子比我小，我就不跟你拿腔捏调地说话了，可别觉得是我瞧不起你哦。好了，下面说说正事吧。", 0, 3001004, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(31821);
                                cm.gainExp(121000);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};