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
            cm.sendNormalTalk_Bottom("#face0#闲聊就到这里！好了！下面是第一个任务！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我们必须去#b狐狸谷#k搜集材料！快跟我来！", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34744, "");
                    cm.updateInfoQuest(34770, "20=h0;21=h0;22=h0;23=h0;24=h0;25=h0;29=h0");
                    cm.updateInfoQuest(34770, "20=h0;21=h1;22=h0;23=h0;24=h0;25=h0;29=h0");
                    cm.sendNormalTalk_Bottom("啊！一眨眼就跑掉了？快追过去吧。\r\n #b（请通过右边的传送口移动。）", 56, 0, true, true)
                } else {
                    if (status === a++) {
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
            cm.sendNormalTalk_Bottom("#face0#怎么这么慢？我等了好久了！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34744);
                cm.gainExp(16918334);
                cm.updateInfoQuest(34744, "exp=1");
                cm.dispose()
            }
        }
    }
};