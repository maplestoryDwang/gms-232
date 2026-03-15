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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("……你是说，让我给韩太守弄个弟弟出来？你是不是把我当成儿童诱拐犯了！要弟弟干嘛来找我？应该去找他父母才对啊！", 0, 2440013, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("当然，韩太守当初想的是错误的，但那也是因为韩太守没有父母才出此下策啊。", 2, 2440013, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("额，虽然他很可怜但是我也没办法给他弄个什么弟弟。不过，倒是可以用这个#b绳子#k去抓个#r柔道熊猫#k来算了……", 0, 2440013, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41159, "NpcSpeech=24400131");
                        cm.sendNormalTalk("降低柔道熊猫的体力之后，双击这个绳子就可以捕获柔道熊猫。我也只能帮到这里了，我总不能帮他生个弟弟出来吧？……他该不会是真这么想的吧？", 0, 2440013, true, false)
                    } else {
                        if (status === a++) {
                            cm.gainItem(2270030, 1);
                            cm.dispose()
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};