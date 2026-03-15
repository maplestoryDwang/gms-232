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
            cm.sendNormalTalk_Bottom("话说回来，现在又到了卡珊德拉让学生们集体收听她的怪谈剧场的时间了。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#h0#，她的谎言还没有被完全粉碎。她还会继续说谎的，请替我去揭露真相。", 37, 1530070)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯，请到2年级教室，看看卡珊德拉这次会说些什么吧。\r\n#b（前往2年级教室）#k", 37, 1530070, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32857, "");
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
            cm.sendNormalTalk_Bottom("……那个，南哈特现在怎么样了？", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("他没什么大碍？真是太好了…… #b（卡珊德拉舒了口气。）#k\r\n啊哈哈，也就是说，怀疑我卡珊德拉的人，最终遭到了报应？你最好也小心点。", 37, 1530180, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32857, "");
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(32857);
                    cm.dispose()
                }
            }
        }
    }
};