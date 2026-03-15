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
            cm.sendNormalTalk("你知道这宽广的冒险岛世界上，有多少飞侠吗？他们都在争分夺秒地打猎，期待变得强大。但能够来到这里的人，不过是极少数。比你想的还要少。", 0, 2081400, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你虽然拥有了强大的力量，可你了解这力量所带来的责任吗？如果了解，才能理解#b4次转职#k的重要性。不是单纯的强大，而是#b伴随着鲜明意志的强大#k... 不是单纯的冒险，而是#b将冒险岛世界引导向正确方向的冒险#k.", 0, 2081400, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("拥有强大力量的冒险家则要成为#b一名英雄#k，肩负帮助世界的责任。你也是一样。这不是让你放弃冒险的乐趣。只不过是说要时刻关注自己的责任罢了。", 0, 2081400, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("因此……4次转职的试炼就登场了。这个试炼是要考验你，看你是否能够超越一名冒险家的界限，成为一名英雄。你知道#r天鹰#k和#r火焰龙#k吗？去和它们对决，找到#b英雄军章#k和#b英雄之星#k。它们会证明你是否具备英雄的资质。", 0, 2081400, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("那么我们就进入试炼吧。你要挑战#r天鹰#k和#r火焰龙#k吗？", 0, 2081400)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(1457, "");
                                cm.sendNormalTalk("真正的英雄并非注定。而是由一个人如何使用自己所具有的强大力量决定的。那就是英雄……", 0, 2081400, false, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.openNpc(2081400)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1457.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你证明了自己拥有成为英雄的素质。这样就足够了！没有必要继续证明了。你想成为真正的冒险家吗？", 0, 2081400)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1457, "");
                cm.forceCompleteQuest(1457);
                cm.forceCompleteQuest(29903);
                cm.updateInfoQuest(1073, "431=201;432=201;433=201;434=201;400=10;430=201");
                cm.playerMessage(-1, "[技能]获得黑暗猫头鹰！");
                cm.forceStartQuest(17906, "1");
                cm.forceCompleteQuest(17906);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(cm.getJob() + 1);
                cm.sendNormalTalk("你已经成长为一名真正的冒险家了啊, 现在的你强大, 善良且勇敢. ", 0, 2081400, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142110, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("如果同时具备这些特质的人不是英雄的话, 那谁能被称为英雄呢. ", 0, 2081400, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("英雄不是天生的, 需要不断付出努力……希望你能成为一名真正的英雄, 带领冒险岛世界走向光明. ", 0, 2081400, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我顺便说一下, 如果你对现在的职业不满意, 可以来找我. 我会给你机会再次选择自己的命运. 当然, 你需要付出一定的代价. ", 0, 2081400, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};