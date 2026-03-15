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
            cm.sendNormalTalk_Bottom("首先要记住冒险岛、金银岛和神秘岛。务必要牢牢记住这三个地区。只要穿过金银岛，就可以到达接下来的目的地——圣地了。除此之外，还有名为埃德尔斯坦的区域。不过可以放到之后再继续调查。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("先依照#b#p9110002##k的提议，穿过金银岛，前往圣地去拜见希纳斯女皇吧。而想要前往圣地，需要找#b#m800000000##k西侧的导游妮妮前往冒险岛，在#b#m104020000##k乘坐前往圣地的飞行船才能到达。", 57, 0)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57421, "");
                    cm.OnStartNavigation(800000000, 1, "9111063", 0);
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#嗯？等一下。你是什么人？是来拜见女皇的吗？", 37, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(3000);
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};