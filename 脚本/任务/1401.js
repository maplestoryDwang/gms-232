var status = -1;
var selectionLog = [];
var map = 0;

function start(d, c, b) {
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
        if (status === a++) {
            cm.sendNormalTalk("你就是麦加推荐的那个人啊。听说你想转职成战士……对吗？我就是战士转职官武术教练。我可以为想要以战士身份冒险的人提供帮助。", 0, 1022000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你对战士了解多少呢？战士是以强大的力量和体力为基础，挥舞近战武器打倒敌人的职业。在最接近敌人的地方战斗的无畏的人。是不是很有魅力？", 0, 1022000, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("你好像充分拥有了资格。像你这样的人想成为战士，我随时表示欢迎。你想成为战士吗？接受的话，我就使用转职官的特权，邀请你到#b勇士部落的战士圣殿#k去。#r但是就算拒绝，也不是没有别的路可走。拒绝的话，我可以引导你走其他职业的道路#k。", 0, 1022000)
                } else {
                    if (status === a++) {
                        if (d == 1) {
                            cm.forceStartQuest(1401, "");
                            cm.dispose();
                            if (cm.getMapId() != 102000003) {
                                cm.warp(102000003, 5, false)
                            }
                        } else {
                            cm.askMenu("你不想走战士之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了战士之外，还有四条道路可供选择。\r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l")
                        }
                    } else {
                        if (status === a++) {
                            sel = b;
                            if (sel == 2) {
                                map = 101000003;
                                cm.askAcceptDecline("你想走魔法师之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b汉斯#k那边吧。（确认后会自动传送到转职地图）")
                            } else {
                                if (sel == 3) {
                                    map = 100000201;
                                    cm.askAcceptDecline("你想走弓箭手之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b赫丽娜#k那边吧。（确认后会自动传送到转职地图）")
                                } else {
                                    if (sel == 4) {
                                        map = 103000003;
                                        cm.askAcceptDecline("你想走飞侠之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b达克鲁#k那边吧。（确认后会自动传送到转职地图）")
                                    } else {
                                        if (sel == 5) {
                                            map = 120000101;
                                            cm.askAcceptDecline("你想走海盗之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b凯琳#k那边吧。（确认后会自动传送到转职地图）")
                                        }
                                    }
                                }
                            }
                        } else {
                            if (status === a++) {
                                if (d == 1) {
                                    cm.warp(map, 0, false);
                                    cm.forceStartQuest(1406, sel)
                                } else {
                                    cm.sendOk("嗯？还想再考虑一下吗？")
                                }
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1401.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("很高兴能在这里见到你……我来把你变成战士吧。做好心理准备了吗？临阵退缩的人，不配成为战士。", 0, 1022000)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1401, "");
                cm.forceCompleteQuest(1401);
                cm.forceCompleteQuest(29900);
                cm.updateInfoQuest(1073, "100=10");
                cm.forceStartQuest(17903, "1");
                cm.forceCompleteQuest(17903);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(100);
                cm.sendNormalTalk("成为战士之后，你变得更强了。现在你拥有了战士可以使用的新技能，快去试一下新的力量吧。", 0, 1022000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1302077, 1);
                    cm.gainItem(1142107, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.openUIWithOption(3, 1001005);
                    cm.sendNormalTalk("另外, 你的能力值也得进行适当修改, 以便更加适合战士的特点。显然对于战士而言, STR才是核心属性, 而DEX为补助属性。若不清楚的话, 不妨使用#b自动分配#k也好。", 0, 1022000, true, true)
                } else {
                    if (status === a++) {
                        cm.openUI(2);
                        cm.sendNormalTalk("为了纪念你已成为战士, 我还将适当给你增加背包空间。你可以收集更多的武器和防具, 让自己变得更加强大。", 0, 1022000, true, true)
                    } else {
                        if (status === a++) {
                            cm.openUIWithOption(0, 1);
                            cm.sendNormalTalk("对了，有一点需要注意。虽然新手的时候没关系，但是成为战士的瞬间开始，必须小心不要死掉……万一死了的话，之前积累的经验值可能会受到损失……", 0, 1022000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我能教你的只有这些……我送了你一把剑，现在你去锻炼自己，让自己变得更强吧。", 0, 1022000, true, true);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};