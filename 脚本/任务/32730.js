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
            cm.sendNormalTalk_Bottom("嗯，念在你是初犯，这次我就从轻处置了。不过以后你最好给我小心点。", 37, 1530370, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b（看来不论自己怎么解释都没用了……）#k\r\n那么我应该怎么做呢？", 57, 1530372, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这不是我，而是学生会长应该决定的事。好了，这是学生会长的电话号码，你直接打电话问他吧。", 37, 1530370, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你该不会是长这么大了，还不会打电话吧？\r\n\r\n#b（打开智能手机UI，给学生会长南哈特打电话吧。）#k", 37, 1530370, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32730, "");
                            cm.updateInfoQuest(32719, "sms=0;gal=0;add=1");
                            cm.getTopMsgFont("打开智能手机, 就可以给南哈特打电话了. ", 3, 20, 20, 0);
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