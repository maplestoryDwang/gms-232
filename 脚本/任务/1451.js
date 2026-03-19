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
            cm.sendNormalTalk("这宽广无际的冒险岛世界上，存在着不计其数的战士，他们之中能够见到我的人，不过是凤毛麟角。你能拥有如此强大的力量，真是令人吃惊……但是强大并不意味着伟大。", 0, 2081100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你应该已经知道，伴随强大力量而来的是艰巨的责任。冒险家可以达到的终极境界，#b4次转职#k和完全与以往不同的巨大责任息息相关。不是单纯的强大，而是#b伴随着鲜明意志的强大#k... 不是单纯的冒险，而是#b将冒险岛世界引导向正确方向的冒险#k.", 0, 2081100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不错，即使是你，一个单纯享受在冒险岛世界冒险生活的冒险家，也有不可推卸的责任。拥有强大力量的冒险家则要成为#b一名英雄#k，肩负帮助世界的责任。", 0, 2081100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我要试试你是否拥有成为英雄的潜质。你知道能够判定英雄的两个怪物……#r天鹰#k和#r火焰龙#k吗？和它们对决，找到#b英雄军章#k和#b英雄之星#k。这便是你要面临的试炼……", 0, 2081100, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("那么我们就进入试炼吧。你要挑战#r天鹰#k和#r火焰龙#k吗？", 0, 2081100)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(1451, "");
                                cm.sendNormalTalk("我坚信，真正的英雄并非天生的，而是由后天培养的。曾经只是一名冒险家的你，能够为冒险岛世界做出多大的贡献呢……", 0, 2081100, false, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1451.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你证明了自己拥有成为英雄的素质。现在没有必要继续证明了……你愿意成为真正的冒险家吗？", 0, 2081100)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1451, "");
                cm.forceCompleteQuest(1451);
                cm.forceCompleteQuest(29903);
                cm.updateInfoQuest(1073, "100=10;120=202;121=203;122=203");
                cm.forceStartQuest(17906, "1");
                cm.forceCompleteQuest(17906);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(cm.getJob() + 1);
                cm.sendNormalTalk("从一名自由的冒险家开始，现在你已经成为了力量、善良和勇气兼备的真正的冒险家。", 0, 2081100, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142110, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("拥有这一切的人如果不能称为英雄，那谁还能被称为英雄呢？", 0, 2081100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("英雄不是天生的，而是通过努力达成的……希望你成为真正的英雄，带领冒险岛世界走上正确的方向。", 0, 2081100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("假如你不满意现在的职业, 可以再来找我哦。我会让你重新选择自己的命运的。当然这需要你付出一定的代价。", 0, 2081100, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};