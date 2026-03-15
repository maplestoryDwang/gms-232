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
            cm.sendNormalTalk("要转职为双刀客，需要有一个证明。你要通过考试来证明自己有足够的实力。不用担心，你肯定没问题的。", 0, 1056000, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("你到我创造出来的空间去和影子双刀战斗，从他们身上获得黑珠吧。这就是为了唤醒你的慧眼而做的考试，接受我就直接送你过去。", 0, 1056000)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(2638, "");
                    cm.dispose();
                    cm.warp(910350300, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2638.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.teachSkill(4311003, 0, 5);
            cm.updateInfoQuest(1073, "431=201;400=10;430=201");
            cm.sendNormalTalk("双刀客不只要看到敌人，还得是拥有可以保护他人的能力的双刀继承人，才能学习。", 0, 1056000, false, true)
        } else {
            if (status === a++) {
                cm.removeAll(4031013);
                cm.gainItem(1052244, 1);
                cm.sendNormalTalk("我们虽然都是独自战斗，但决不能只为了自己而战斗。那样只能算是单纯的独善其身…慧眼要关注的，是弱者。", 0, 1056000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("看你是否能为弱者战斗，就是这次考试的目的。而你已经成功通过了考试。", 0, 1056000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("…这让我想起了以前的事情，我遇见我父亲的那一天……我当时被怪物们团团围住，是他救了我，还把我收为女儿。", 0, 1056000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我希望你也能拥有一颗善良的心，就像他一样……", 0, 1056000, true, true)
                        } else {
                            if (status === a++) {
                                cm.openUIWithOption(0, 1);
                                cm.sendNormalTalk("可以让你的力量更上一层楼的新装备已经发放给你了。希望你能好好使用。", 1, 1056000, true, false)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(29901, "");
                                    cm.playerMessage(5, "获得了<中级冒险家>称号。");
                                    cm.gainItem(1003319, 1);
                                    cm.gainItem(1082364, 1);
                                    cm.gainItem(1072582, 1);
                                    cm.gainItem(1041177, 1);
                                    cm.gainItem(1061186, 1);
                                    cm.gainItem(1332162, 1);
                                    cm.gainItem(1342048, 1);
                                    cm.changeJob(431);
                                    cm.forceCompleteQuest(2638);
                                    cm.npc_LeaveField("oid=1759610");
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};