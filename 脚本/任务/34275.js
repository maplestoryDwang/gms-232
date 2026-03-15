var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(34297, "order=btgpmhkljefinorqdsuac");
            cm.updateInfoQuest(34294, "map2=3;map3=2;finish=0;map1=3");
            cm.updateInfoQuest(34294, "map2=2;map3=2;finish=0;map1=3");
            cm.updateInfoQuest(34294, "map2=2;map3=1;finish=0;map1=3");
            cm.updateInfoQuest(34295, "map4=2;map5=3;map6=2;finish=0");
            cm.updateInfoQuest(34295, "map4=2;map5=3;map6=1;finish=0");
            cm.updateInfoQuest(34298, "count=0");
            cm.updateInfoQuest(34274, "region=3");
            cm.askYesNo("你好，#h0#！今天的委托是这些。\r\n\r\n#b#e#y34277##k#n\r\n#b#e#y34295##k#n\r\n#b#e#y34282##k#n\r\n", 0, 3003432)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34277, "");
                cm.forceStartQuest(34295, "");
                cm.forceStartQuest(34282, "");
                cm.forceStartQuest(34275, "");
                cm.sendNormalTalk("有0个不算在内的委托，不过我还告诉你0个新的委托。今天的委托一共有3个！\r\n\r\n#b#e#y34277##k#n\r\n#b#e#y34295##k#n\r\n#b#e#y34282##k#n\r\n", 0, 3003432, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你只要完成所有委托，然后回到我这里就行！别忘了一定要在午夜之前回来！", 0, 3003432, true, false);
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
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};