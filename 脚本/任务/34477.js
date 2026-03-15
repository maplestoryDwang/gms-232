var status = -1;

function start() {
    action(1, 0, 0)
}

function start(e, d, c) {
    status++;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("额啊……精灵之树已经彻底被邪恶的气息所吞噬，自然生物都已经恢复原状了，这到底是怎么回事呢？", 4, 3003350, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("啊，树里面似乎要迸发出一股邪恶的气息来！再这样下去……", 4, 3003350, true, true)
            } else {
                if (status === b++) {
                    cm.askAcceptDecline("#b(得赶紧平息这股邪恶的气息才行，靠近精灵之树看看？)#k", 2, 3003306)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("#b(啊，精灵之树好像在哐哐地震动，总感觉像是要出什么事。)#k", 3, 3003306, false, true)
                    } else {
                        if (status === b++) {
                            cm.playerMessage(5, "精灵之树上出现了不和谐的精灵，要是不全数消灭掉，森林就危险了。");
                            cm.updateInfoQuest(34451, "clearB=0;clear=1");
                            cm.dispose();
                            var a = cm.getEventManager("阿尔卡那_剧情_战斗5");
                            a.startInstance(cm.getPlayer(), cm.getMap())
                        }
                    }
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