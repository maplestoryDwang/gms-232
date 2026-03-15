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
            cm.sendNormalTalk("呼呼……\r\n嗯？我感觉到了#r威尔（困难）#k的气息。\r\n", 0, 3003531, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("如果你打败了#r威尔（困难）#k，请告诉我。我有东西要给你。", 0, 3003531, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34591, "");
                    cm.forceForfeitQuest(49009);
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