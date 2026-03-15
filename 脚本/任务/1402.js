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
            cm.sendNormalTalk("哦，你就是麦加说的那个人啊。你好？听说你对魔法师之路感兴趣。那么，我魔法师转职官汉斯可以帮助你。", 0, 1032001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("相信你应该已经对魔法师有所了解了。那是以较高的智力为基础，使用魔法的职业。虽然远距离和近距离战斗都很出色，但体力稍微有点弱……但是魔法师创造出了很多魔法来克服这一缺点，不要太担心。", 0, 1032001, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("你看上去好像充分具备成为魔法师的素质……你想成为魔法师吗？接受的话，我就使用转职官的特权，邀请你到#b魔法密林的魔法图书馆#k去。和我见个面，然后帮你转职。#r但是就算拒绝，也不是没有别的路可走。拒绝的话，我可以为你介绍魔法师以外的职业。#k", 0, 1032001)
                } else {
                    if (status === a++) {
                        if (d == 1) {
                            cm.forceStartQuest(1402, "");
                            cm.dispose();
                            if (cm.getMapId() != 101000003) {
                                cm.warp(101000003, 5, false)
                            }
                        } else {
                            cm.askMenu("你不想走魔法师之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了魔法师之外，还有四条道路可供选择。\r\n#b#L1#战士#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l")
                        }
                    } else {
                        if (status === a++) {
                            sel = b;
                            if (sel == 1) {
                                map = 102000003;
                                cm.askAcceptDecline("你想走战士之路吗？虽然很遗憾，但我尊重你的选择。我送你到#b武术教练#k那边吧。（确认后会自动传送到转职地图）")
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
            cm.askYesNo("哦，你来啦。很高兴能在这里见到你……你一定可以成为一名好魔法师。我马上就让你成为魔法师。", 0, 1032001)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1402, "");
                cm.forceCompleteQuest(1402);
                cm.forceCompleteQuest(29900);
                cm.updateInfoQuest(1073, "200=10");
                cm.forceStartQuest(17903, "1");
                cm.forceCompleteQuest(17903);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(200);
                cm.sendNormalTalk("至此, 你已经能够使用各种魔法技能了。我给了你一些#bSP#k, 那就不妨打开#bSkill#k来学习自己想拥有的技能吧。最好学一些#b攻击魔法#k哦。", 0, 1032001, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1372043, 1);
                    cm.gainItem(1142107, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.openUIWithOption(3, 2001008);
                    cm.sendNormalTalk("仅靠技能还不够。难道你不想把自己的属性也改造成符合魔法师的特性吗？魔法师的核心属性为INT, 补助属性为LUK。你若觉得更改属性很麻烦, 不妨使用#b自动分配#k。", 0, 1032001, true, true)
                } else {
                    if (status === a++) {
                        cm.openUI(2);
                        cm.sendNormalTalk("对了, 我还要给你这个变成魔法师而有些忘乎所以的奔向狩猎场的人一句忠告。变成魔法师之后一旦死亡时, 就有可能完全丧失在这期间所累积的经验值哦。谁让魔法师的体力相对较弱呢, 所以千万要小心啊。", 0, 1032001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我已经把能教你的全部都教给你了。为了你的修炼, 我还将送给你一个短杖, 你可要好好使用哦。那就祝你好运吧。", 0, 1032001, true, true)
                        } else {
                            if (status === a++) {
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