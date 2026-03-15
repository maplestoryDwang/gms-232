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
            cm.sendNormalTalk_Bottom("所以，根据#b坤#k的话……\r\n阿特利埃工厂中有人留下，#b重新启动了工厂#k，抓回了想要逃走的工作人员，并#b强制改造身体#k？", 56, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("顺便还拍到了骇人的#b杀人兵器#k智能机器人们。就像视频里那样。", 36, 9401072, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("呃啊，停！今晚我又要做噩梦了……", 36, 9401071, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("所以要快点#b阻止那个人！#k\r\n如果这样坐以待毙，恐怕事情会一发不可收拾。", 56, 9401072, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("他说的没错。我侵入了内部CCTV，反复查看，却只能勉强看到地下入口……", 36, 9401072, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("这些#b危险的存在#k好像马上就要破土而出了。", 36, 9401072, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("这样下去，他们会经过大厅和森林……#b闯到这里。#k\r\n然后把冒险岛变成一片废墟。", 36, 9401072, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("啊啊……为什么会发生这样的事情……啊啊……\r\n#h0#，真的很抱歉，但只有你能救我们了！#k", 36, 9401071, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("潜入工厂，消灭大摇大摆的#b杀人兵器#k。前往深处打听#b工厂重新运作的原因#k。", 36, 9401072, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(64911, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64911.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("好了，现在到#b地下4层深处#k去看看吧？\r\n杰斯和我认为那里一定还有些什么。", 36, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("谁也不知会出现什么……可能会有危险，请你务必保重身体，#h0#。", 36, 9401071, 1, 1)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                    cm.forceCompleteQuest(64911);
                    cm.dispose()
                }
            }
        }
    }
};