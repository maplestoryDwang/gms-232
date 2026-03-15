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
            cm.sendNormalTalk("你好，#h0#……我经常听麦加提起你的名字。听说你对弓箭手很感兴趣。我是弓箭手转职官赫丽娜。见到你很高兴……", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你对弓箭手的了解有多少呢？弓箭手是使用弓或弩，在远距离攻击敌人的职业……虽然移动速度相对较慢，但锐利的箭矢从来不会射偏，每一发都非常具有威胁。", 0, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("如果你真的想成为弓箭手，我就用转职官的特权，邀请你到#b射手村的弓箭手培训中心#k来。#r如果你想选择其他职业，可以拒绝。我会帮助你走上其他道路的#k……你想成为弓箭手吗？", 0, 1012100)
                } else {
                    if (status === a++) {
                        if (d == 1) {
                            cm.forceStartQuest(1403, "");
                            cm.dispose();
                            if (cm.getMapId() != 100000201) {
                                cm.warp(100000201, 5, false)
                            }
                        } else {
                            cm.askMenu("你不想走弓箭手之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了弓箭手之外，还有四条道路可供选择。\r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l")
                        }
                    } else {
                        if (status === a++) {
                            sel = b;
                            if (sel == 1) {
                                map = 102000003;
                                cm.askAcceptDecline("你想走战士之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b武术教练#k那边吧。（确认后会自动传送到转职地图）")
                            } else {
                                if (sel == 2) {
                                    map = 101000003;
                                    cm.askAcceptDecline("你想走弓箭手之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b汉斯#k那边吧。（确认后会自动传送到转职地图）")
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
            cm.askYesNo("欢迎来到弓箭手培训中心。能直接见到你，我感到很高兴……好的，我来让你变成弓箭手。", 0, 1012100)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1403, "");
                cm.forceCompleteQuest(1403);
                cm.forceCompleteQuest(29900);
                cm.updateInfoQuest(1073, "300=10");
                cm.forceStartQuest(17903, "1");
                cm.forceCompleteQuest(17903);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(300);
                cm.sendNormalTalk("现在你已经是弓箭手了。如果你想学习弓箭手的新技能，请打开技能窗。我给了你一些#bSP#k，你可以用它来提升技能。", 0, 1012100, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1452051, 1);
                    cm.gainItem(2060000, 9900);
                    cm.gainItem(2061000, 9900);
                    cm.gainItem(1142107, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.openUIWithOption(3, 3001004);
                    cm.sendNormalTalk("光是技能还不够。属性也必须按照弓箭手的需要进行调整。弓箭手的中心属性是敏捷，辅助属性是力量。如果不知道属性该怎么分配的话，请使用#b自动分配#k。", 0, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.openUI(2);
                        cm.sendNormalTalk("啊……对了……我给你准备了一份小礼物。我增加了你的装备和消耗道具保管箱数量。多装点好东西，以备不时之需吧。", 0, 1012100, true, true)
                    } else {
                        if (status === a++) {
                            cm.openUIWithOption(0, 1);
                            cm.sendNormalTalk("还有，有一点必须注意。成为弓箭手之后，在战斗中就必须更加注意。死了的话，之前积累的经验值就会受到损失。这一点和新手时期不同……请不要忘记。", 0, 1012100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我能教你的就只有这些。我送了你一件弓箭手的武器，请你一边在各地打猎，一边锻炼自己。", 0, 1012100, true, true);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};