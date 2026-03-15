var status = -1;

function start() {
    action(1, 0, 0)
}

function start(f, h, k) {
    status++;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            cm.setNumberForQuestInfo(34127, "count", 0);
            cm.updateInfoQuest(34163, "region=5");
            var g = cm.getNumberFromQuestInfo(34127, "count");
            var b = 34130,
                j = 34150,
                e = 5 - g;
            var d = cm.randArray(b, j, e);
            for (var c = 1; c <= e; c++) {
                cm.setNumberForQuestInfo(34127, "q" + c, d[c - 1])
            }
            var l = "你来得正好，#ho#。今天有" + (5 - g) + "件事需要拜托你。你想马上开始执行吗？如果不满意，可以重新来我这里领取。\r\n\r\n";
            for (var c = 1; c <= 5 - g; c++) {
                var a = cm.getNumberFromQuestInfo(34127, "q" + c);
                l += "#b#e#y" + a + "##k#n\r\n"
            }
            cm.askYesNo(l, 0, 3003104)
        } else {
            if (status === c++) {
                for (var c = 1; c <= 5 - g; c++) {
                    var a = cm.getNumberFromQuestInfo(34127, "q" + c);
                    cm.forceStartQuest(a)
                }
                cm.sendNormalTalk("结束任务后，只要来找我完成就行了。你必须在今天午夜之前来找我。那祝你好运。", 0, 3003104, true, false)
            } else {
                if (status === c++) {
                    cm.dispose()
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceCompleteQuest(34129);
            cm.addNumberForQuestInfo(34151, "clear", 1);
            cm.sendNormalTalk("#ho#，你完成了全部5个任务。来，我把3个#i1712001:# #t1712001:#和1个#i2614029:# #t2614029:#送给你。", 0, 3003104, false, true);
            cm.gainItem(1712001, 1);
            cm.gainItem(1712001, 1);
            cm.gainItem(1712001, 1);
            cm.gainItem(2614029, 1)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
};