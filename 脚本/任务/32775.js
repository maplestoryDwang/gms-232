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
            cm.askYesNo_Bottom("就把这当成是朋友的最后请求吧……你能帮我把奥尔卡的照片拿来吗？如果能看到她的照片，相信我会很快打起精神来的。\r\n\r\n#b（这么看来，宿舍的墙上好像确实贴着海报……）#k", 37, 1530140)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么样的都好，拜托你了。帮我把奥尔卡的照片拿来吧。咳咳，咳咳……\r\n#b（回到宿舍，去把奥尔卡的海报拿来吧）#k", 37, 1530140, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32775, "");
                    cm.dispose();
                    cm.warp(100000004, 2)
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
            cm.sendNormalTalk_Bottom("奥尔卡……奥尔卡的照片还没拿来吗？", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom(" 哦哦，奥尔卡的海报！……什么嘛，这不是今年演唱会的宣传海报吗？你开玩笑呢吧？这个我已经有了！", 37, 1530140, true, true);
                cm.gainItem(4034175, -1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32775, "");
                    cm.forceCompleteQuest(32775);
                    cm.dispose()
                }
            }
        }
    }
};