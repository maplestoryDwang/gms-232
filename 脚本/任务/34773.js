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
            cm.updateInfoQuest(34774, "order=icpjsdqongmlbkefrath");
            cm.updateInfoQuest(34775, "count=2");
            cm.updateInfoQuest(34775, "count=2;region=1");
            cm.askYesNo("你好！今天的命令是这些。\r\n\r\n#b#e#y34788##k#n\r\n", 0, 0)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34788, "");
                cm.forceStartQuest(34773, "");
                cm.sendNormalTalk("完成所有命令之后，请回到我这里来。\r\n别忘了一定要在#r#e午夜之前#k#n回来！\r\n如果对命令内容有什么问题，可以通过#e#b任务信息窗#k#n查看！", 0, 0, 0, 0);
                cm.dispose()
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