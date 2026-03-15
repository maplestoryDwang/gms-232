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
            cm.sendNormalTalk_Bottom("你现在应该也很想见见那个阿白实习老师吧？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("为此，我给你准备了一项任务。这是教案，实习老师每周都要填写的。请将这个交给阿白实习老师吧。", 36, 1530070)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(33002, "");
                    cm.sendNormalTalk_Bottom("我已经将教案给你了。我拜托你去做这件事，绝对不是因为害怕自己会变成乌贼。", 37, 1530070, false, true);
                    cm.gainItem(4034146, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b（嗯……阿白实习老师真这么帅吗？先将第一周教案交给教务室的阿白实习老师吧。）#k", 56, 1530074, true, false);
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("你有什么事吗？", 37, 1530200, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("教案……你真是热心，还亲自将教案拿给我。谢谢你。", 37, 1530200, true, true);
                cm.gainItem(4034146, -1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("等等……我们是不是在哪里见过？\r\n#b（阿白实习老师凝视着我。)", 37, 1530200, true, true)
                } else {
                    if (status === a++) {
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.forceCompleteQuest(33002);
                        cm.dispose()
                    }
                }
            }
        }
    }
};