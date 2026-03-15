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
            cm.sendNormalTalk("你是来找阿弗利埃的？你是怎么知道这里的？啊，赫丽娜吗？原来如此。我以为又是听说了宝物的消息之后来到这里的入侵者呢。", 0, 2159451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("但是这可怎么办呢？阿弗利埃现在身体状况非常不好。他现在一直在沉睡，恐怕没办法和你说话……啊，我叫龙神。是阿弗利埃的孩子——米尔的老师。", 0, 2159451, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……真像。", 2, 2159451, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯？真像？", 0, 2159451, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那个眼睛，还有善良的目光，跟那个家伙一模一样。弗里德在笑的时候，眼睛也会和你一样眯成半月形状。", 2, 2159451, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是吗？听你这么说我有点开心呢。我的梦想就是成为像弗里德大人一样的龙神驯龙大师。真高兴你说我和大人很像。", 0, 2159451, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我想你应该可以成为和他一样优秀的龙骑士。总之，我下次再来见阿弗利埃吧。因为我不想看到玛瑙龙倒下的样子。也许……(是说那家伙已经不在人世了吗) ", 2, 2159451, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(38038, "");
                                        cm.forceStartQuest(38038, "");
                                        cm.dispose()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38038.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};