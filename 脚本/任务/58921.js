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
            cm.sendNormalTalk("我把#h0#装满的坛子都包好了。", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这个包裹皮很漂亮吧？这是我妈妈亲自做的。", 4, 9130107, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(这个包裹皮的花纹也太土了，真不好看。不过还是别说了。)", 16, 9130107, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("让我们在 #m811000018:#见吧。把这些坛子放在那里应该就行。", 4, 9130107)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58921, "");
                            cm.sendNormalTalk("#m811000018:#过了#m811000017:#就到了。我们在那里见吧。", 4, 9130107, false, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58921.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你来得真快啊。也是，因为你是空手来的嘛。", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("咻，坛子实在太重了，我本来想叫你拿来的，我的手臂现在好痛。", 4, 9130107, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("所以，请你赶紧拿着这坛子吧。", 4, 9130107, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(58921);
                        cm.sendNormalTalk("请你小心，打碎了就出大事了。", 4, 9130107, true, false);
                        cm.gainItem(4034136, 1)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};