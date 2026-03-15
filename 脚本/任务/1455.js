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
            cm.sendNormalTalk("这宽广无际的冒险岛世界上，存在着不计其数的弓箭手……他们之中几乎没有知道，能够站在这里的人，不过是极少数。说的就是你。你知道你拥有的力量多么强大吗？", 0, 2081300, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你应该已经从赫丽娜学到，伴随强大力量而来的是艰巨的责任。你考虑过了吧？#b4次转职#k的重要性。不是单纯的强大，而是#b伴随着鲜明意志的强大#k... 不是单纯的冒险，而是#b将冒险岛世界引导向正确方向的冒险#k.", 0, 2081300, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("与以前追求享乐也不会遭人非难的时代不同。拥有强大力量的冒险家则要成为#b一名英雄#k，肩负帮助世界的责任。你也是一样。", 0, 2081300, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("因此，4次转职的试炼是很有必要的。你知道#r天鹰#k和#r火焰龙#k吗？去和它们对决，找到#b英雄军章#k和#b英雄之星#k。它们会证明你是否具备英雄的资质。", 0, 2081300, true, true);
                        cm.forceStartQuest(1455, "")
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.openNpc(2081300)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1455.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你证明了自己拥有成为英雄的素质。这样就足够了！现在你没有必要继续证明了。你想成为真正的冒险家吗？", 0, 2081300)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1455, "");
                cm.forceCompleteQuest(1455);
                cm.forceCompleteQuest(29903);
                cm.updateInfoQuest(1073, "300=10;310=201;311=201;312=201");
                cm.forceStartQuest(17906, "1");
                cm.forceCompleteQuest(17906);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(cm.getJob() + 1);
                cm.sendNormalTalk("你已经成长为一名真正的冒险家了啊, 现在的你强大, 善良且勇敢. ", 0, 2081300, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142110, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("如果同时具备这些特质的人不是英雄的话, 那谁能被称为英雄呢. ", 0, 2081300, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("英雄不是天生的, 需要不断付出努力……希望你能成为一名真正的英雄, 带领冒险岛世界走向光明. ", 0, 2081300, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我顺便说一下, 如果你对现在的职业不满意, 可以来找我. 我会给你机会再次选择自己的命运. 当然, 你需要付出一定的代价. ", 0, 2081300, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};