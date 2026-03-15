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
            cm.sendNormalTalk_Bottom("乐谱？自从戴米安那家伙出现后，就没人来音乐室了，现在那里到处是灰。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("也就是说，尘土把它拿去了。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b(狩猎尘土，搜集10张乐谱吧。)", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(33510, "");
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
            cm.sendNormalTalk_Bottom("哦，你搜集好了吗？挺快的嘛？\r\n那么，乐谱也有了，现在就要开始正式的练习了，应该会很有趣吧？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(33510);
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.dispose()
            }
        }
    }
};