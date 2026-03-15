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
            cm.sendNormalTalk("你知道这宽广的冒险岛世界上，存在着多少魔法师吗？你又是否知道，他们之中能够像你这样站到我面前的人，不过是凤毛麟角。如果你认识到……自己究竟拥有的力量有多强大，我们的谈话就会容易得多。", 0, 2081200, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("伴随强大力量而来的是艰巨的责任……你应该已经知道。因此你应该明白，#b4次转职#k的重要意义。不是单纯的强大，而是#b伴随着鲜明意志的强大#k... 不是单纯的冒险，而是#b将冒险岛世界引导向正确方向的冒险#k.", 0, 2081200, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("和以前以怡情为目的的冒险岛探险完全不同。拥有强大力量的冒险家则要成为#b一名英雄#k，肩负帮助世界的责任。这责任……你能担当起来吗？", 0, 2081200, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你知道#r天鹰#k和#r火焰龙#k吗？和它们对决，找到#b英雄军章#k和#b英雄之星#k。这便是你要面临的试炼……", 0, 2081200, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("那么我们就进入试炼吧。你要挑战#r天鹰#k和#r火焰龙#k吗？", 0, 2081200)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(1453, "");
                                cm.sendNormalTalk("我坚信，真正的英雄并非天生的，而是由后天培养的。我会拭目以待，看你是否能成为英雄。", 0, 2081200, false, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.openNpc(2081200)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1453.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你证明了自己拥有成为英雄的素质。现在没有必要继续证明了……你愿意成为真正的冒险家吗？", 0, 2081200)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1453, "");
                cm.forceCompleteQuest(1453);
                cm.forceCompleteQuest(29903);
                cm.updateInfoQuest(1073, "200=10;220=202;221=203;222=203");
                cm.forceStartQuest(17906, "1");
                cm.forceCompleteQuest(17906);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(cm.getJob() + 1);
                cm.sendNormalTalk("你已经成长为一名真正的冒险家了啊, 现在的你强大, 善良且勇敢. ", 0, 2081200, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142110, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("如果同时具备这些特质的人不是英雄的话, 那谁能被称为英雄呢. ", 0, 2081200, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("英雄不是天生的, 需要不断付出努力……希望你能成为一名真正的英雄, 带领冒险岛世界走向光明. ", 0, 2081200, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我顺便说一下, 如果你对现在的职业不满意, 可以来找我. 我会给你机会再次选择自己的命运. 当然, 你需要付出一定的代价. ", 0, 2081200, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};