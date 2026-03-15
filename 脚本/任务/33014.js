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
            cm.sendNormalTalk_Bottom("抓紧时间！如果再这样下去，尘土怪会吞噬整个学校的。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("这是最后一次。这次要消灭#r120只尘土怪#k……为什么一次比一次多？反正这是最后一次，好好加油吧。", 36, 1530030)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(33014, "");
                    cm.sendNormalTalk_Bottom("我在这里为你加……我知道了，我什么话都不说，你就不要那样瞪着我了。\r\n#b（进入尘土地带吧。）#k", 37, 1530030, false, false)
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
            cm.sendNormalTalk_Bottom("怪物全部消灭了吗？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("很好，那我现在应该能封印尘土地带了。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(33014);
                    cm.dispose()
                }
            }
        }
    }
};