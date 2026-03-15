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
            cm.askMenu("……什么，你就是战神？！你还活着？！天啊，也是，你是所有战士的骄傲、矛的达人，怎么可能那么轻易地就输给黑魔法师呢！\r\n#b#L0#(……受不了。)#l\n#k", 0, 2131003)
        } else {
            if (status === a++) {
                cm.askMenu("话说回来，你来这里什么事情？你难道也是被派来寻找适合新建村子的地方的？这种事情交给你简直就是杀鸡用牛刀，太大材小用了。\r\n#b#L0#我是来拿#t4032325#的。#l\n#k", 0, 2131003)
            } else {
                if (status === a++) {
                    cm.askYesNo("啊……你说#t4032325#？稍等，我找找看放哪里了……", 0, 2131003)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……真不好意思，战神。真不知道该怎么跟你说才好。明明刚才是放在这里的……似乎是和其它钥匙一起丢掉了。全都是我的错。虽然你说过好几次这个钥匙很重要，但我还是粗心大意地给弄丢了！", 0, 2131003, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不过不用担心！钥匙肯定在附近#r#o9001024##k们的身上！只要教训教训那些家伙，把钥匙找回来就行！#b#t4032326#是10把钥匙中的一个#k，必须把10把钥匙全都找回来确认才行！", 0, 2131003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊……？你说我为什么不自己动手？我的任务是在这里治疗伤兵。请向我展示一下最强战士的能力！", 0, 2131003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("不过我可以把你送到它们所在的地方去，你想现在出发吗？", 0, 2131003)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(21752, "");
                                        cm.dispose();
                                        cm.warp(930010001, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21752.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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