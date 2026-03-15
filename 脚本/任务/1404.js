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
            cm.sendNormalTalk("麦加说的那个人就是你？#h0#……嗯，据她说，你是个很有天赋的小孩……喂，你想成为飞侠吗？你知道飞侠吗？", 0, 1052001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("有些人觉得飞侠是些偷偷摸摸的小偷，但其实不是这样的。冒险岛世界的飞侠是在黑暗中用锋利的短刀和飞镖战斗的人。可能有一点不是那么堂堂正正，但是这就是飞侠的本质，没有必要否定。", 0, 1052001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("飞侠是可以用快速强力技能攻击敌人的职业。虽然你体力较弱，但因为行动快速，所以可以轻松地躲避怪物。因为运气很强，所以擅长爆击。", 0, 1052001, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("怎么样？你想一起踏上飞侠之路吗？如果你决定选择飞侠之路，我就使用转职官的特权，邀请你到#b废都的废都酒吧#k去……那是个隐秘的地方，你应该感到荣幸。#r但是如果更喜欢其他职业的话，你可以拒绝。我会为你推荐飞侠之外的其他道路#k。", 0, 1052001)
                    } else {
                        if (status === a++) {
                            if (d == 1) {
                                cm.forceStartQuest(1404, "");
                                cm.dispose();
                                if (cm.getMapId() != 103000003) {
                                    cm.warp(103000003, 5, false)
                                }
                            } else {
                                cm.askMenu("你不想走飞侠之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了飞侠之外，还有四条道路可供选择。\r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L5#海盗#l")
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
                                        if (sel == 3) {
                                            map = 100000201;
                                            cm.askAcceptDecline("你想走弓箭手之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b郝丽娜#k那边吧。（确认后会自动传送到转职地图）")
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
            cm.forceStartQuest(2899, "1");
            cm.askYesNo("欢迎来到废都酒吧。如果不是以这种方式，你可能连入口都找不到。呵呵，出去的时候，一定要记住门在哪里。好了，做好成为飞侠的准备了吗？", 0, 1052001)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1404, "");
                cm.forceCompleteQuest(1404);
                cm.forceCompleteQuest(29900);
                cm.updateInfoQuest(1073, "400=10");
                cm.forceStartQuest(7635, "1");
                cm.forceStartQuest(17903, "1");
                cm.forceCompleteQuest(17903);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(400);
                cm.sendNormalTalk("现在你就是飞侠了。你已经可以使用飞侠技能了，打开技能窗看看吧。等级升高之后，就能学习更多的技能。", 0, 1052001, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1472061, 1);
                    cm.gainItem(1332063, 1);
                    cm.gainItem(2070015, 1);
                    cm.gainItem(2070015, 1);
                    cm.gainItem(2070015, 1);
                    cm.gainItem(1142107, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.openUIWithOption(3, 4001334);
                    cm.sendNormalTalk("光是技能还不够。属性也必须符合飞侠的需要，才能说是真正的飞侠。飞侠的主要属性是运气，辅助属性是敏捷。不知道提高属性的方法的话，就使用#b自动分配#k。", 0, 1052001, true, true)
                } else {
                    if (status === a++) {
                        cm.openUI(2);
                        cm.sendNormalTalk("我来送你一件礼物。我已经帮你增加了装备、其他栏的格数。背包的空间总是越多越好。呵呵……", 0, 1052001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊，我来告诉你一点需要注意的地方。新手虽然没关系，但是不是新手的人如果死了，之前积累的经验值就会受到损失。小心一点。要是辛苦积累到的经验值受到损失，岂不是很冤枉？", 0, 1052001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好了！我能教你的就只有这些。我给了你一件适合你用的武器，希望你能一边旅行，一边修炼。", 0, 1052001, true, true);
                                cm.openUIWithOption(0, 1);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};