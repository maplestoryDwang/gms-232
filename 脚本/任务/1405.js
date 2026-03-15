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
            cm.sendNormalTalk("#h0#……？嗯，麦加说的果然没错，你看上去很有天赋。见到你很高兴。我叫凯琳，是海盗船诺特勒斯号的船长，同时也是海盗们的转职官。听说你对海盗感兴趣，是吗？", 0, 1090000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我们得先谈点个人的事情。为了对抗威胁冒险岛世界的人——黑魔法师，我在不久前组建了海盗团。诺特勒斯号的海盗们现在正在冒险岛世界各地调查黑魔法师的痕迹。", 0, 1090000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("如果你成为海盗的话，就必须帮助调查黑魔法师。当然，这不是义务，而是建议。虽然我是海盗们的转职官，但不是海盗们的主人。所以不是命令，只是建议。", 0, 1090000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("如果你是在冒险岛世界冒险的人，相信你一定愿意为冒险岛世界做这些事情。不是出于奖励，而是出于善意……呵呵。好像扯得太长了。你先记住这些，真正重要的在后面。", 0, 1090000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("海盗大致分为使用短枪的人和使用体术的人，各自的技能存在很大的差别。如果说有什么共同点的话，那就是都有华丽的连续技。虽然操作很难，但熟悉了的话，就会变得很强。", 0, 1090000, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("我好像说得太多了……你快决定吧。到底是成为海盗，还是选择其他职业？如果想成为海盗，我就使用转职官的特权，马上邀请你到诺特勒斯号去。#r拒绝的话，我会建议你选择其他职业。请别担心#k。", 0, 1090000)
                            } else {
                                if (status === a++) {
                                    if (d == 1) {
                                        cm.forceStartQuest(1405, "");
                                        cm.dispose();
                                        cm.warp(120000101, 0, false)
                                    } else {
                                        cm.askMenu("你不想走海盗之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了海盗之外，还有四条道路可供选择。\r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l")
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
                                                    if (sel == 4) {
                                                        map = 103000003;
                                                        cm.askAcceptDecline("你想走飞侠之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b达克鲁#k那边吧。（确认后会自动传送到转职地图）")
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
            cm.askYesNo("终于能见面了，真是让人高兴啊……为什么这么惊讶？因为我看上去太年轻了？你可别看我这样，我的年纪可不小哦，所以别小看我。来吧，现在就去转职成为海盗吧。", 0, 1090000)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1405, "");
                cm.forceCompleteQuest(1405);
                cm.forceCompleteQuest(29900);
                cm.updateInfoQuest(1073, "500=10");
                cm.forceStartQuest(17903, "1");
                cm.forceCompleteQuest(17903);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(500);
                cm.sendNormalTalk("好了，现在你已经是海盗的一员了。你已经有了很多海盗技能，你可以打开技能窗看一看。我给了你一些SP，你可以用来提升技能。随着等级的升高，你可以使用更多的技能。努力修炼吧。", 0, 1090000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1482014, 1);
                    cm.gainItem(1492014, 1);
                    cm.gainItem(2330006, 1);
                    cm.gainItem(2330006, 1);
                    cm.gainItem(2330006, 1);
                    cm.gainItem(1142107, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.openUIWithOption(3, 5001010);
                    cm.sendNormalTalk("光是技能还不行。请你打开属性窗，按照海盗的需要对自己的属性进行分配。想成为拳手的话，就以力量为中心，想成为火枪手的话，就以敏捷为中心。不知道的话，使用#b自动分配#k会比较方便。", 0, 1090000, true, true)
                } else {
                    if (status === a++) {
                        cm.openUI(2);
                        cm.sendNormalTalk("还有一个礼物就是, 我给你增加了装备、消费、设置、其他道具保管箱的数量。若有价值的物品就放到背包里好了。", 0, 1090000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊，还有一件事必须记住。你已经从新手成为了海盗，战斗时一定要注意体力。死了的话，之前积累的经验值会受到损失。要是辛苦积累到的经验值受到损失，岂不是很冤枉？", 0, 1090000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好了！我能教你的就只有这些。我给了你几件适合你使用的武器，希望你一边旅行，一边锻炼自己。如果遇到了黑魔法师的部下，一定要消灭掉他们！明白了吗？", 0, 1090000, true, true);
                                cm.openUIWithOption(0, 1);
                                cm.forceStartQuest(2945, "1");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};