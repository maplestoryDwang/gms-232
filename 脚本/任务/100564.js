var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("#e#b< 品克缤世界 >#k#n开放了！\r\n\r\n#L0#告诉我有关#e品克缤世界#n的事情。#l\r\n#L1#我想更改#e品克缤角色颜色#n。#l\r\n#L2#现在没什么想知道的。#l", 4, 9010000)
        } else {
            var reactor = "action" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e< 品克缤世界 >#n#k是只能培养品克缤角色的限时活动世界。", 4, 9010000, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("培养品克缤，完成#b#e品克缤步步高#k#n任务，就能在#e品克缤世界#n和#e普通世界#n领取各种奖励。", 4, 9010000, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那我就来逐一介绍一下#b#e< 品克缤世界 >#n#k与普通世界的不同之处吧。", 4, 9010000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#e#b< I. 更改品克缤颜色 >#k#n\r\n\r\n在品克缤世界中可以尽情更改品克缤的#b#e角色颜色#k#n。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#e#b< I. 更改品克缤颜色 >#k#n\r\n\r\n最初创建时，可以随机更改颜色1次。之后每小时可以随机更改颜色一次。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#e#b< I. 更改品克缤颜色 >#k#n\r\n\r\n你随时可以通过和我对话更改颜色！", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#e#b< II. 品克缤世界技能 >#k#n\r\n\r\n为了让你在品克缤世界中更好地成长，我们向世界内的所有角色提供以下#b日常福利#k。\r\n#b\r\n#e<日常福利>#n\r\n- 经验值获得量增加1.5倍\r\n- 攻击力/魔法攻击力增加30\r\n- 攻击普通怪物时，伤害增加30%\r\n- 攻击BOSS怪物时，伤害增加30%#k", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#e#b< III. 其他 >#k#n\r\n\r\n角色间交易、商城、冒险岛联盟等部分内容禁止使用。", 4, 9010000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#e#b< III. 其他 >#k#n\r\n\r\n品克缤世界内的所有信息将#e在运营时间结束时删除#n。", 4, 9010000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#e#b< III. 其他 >#k#n\r\n\r\n品克缤世界的运营期间如下。\r\n\r\n\r\n#e※ 2020年12月02日维护后~2020年12月29日为止", 4, 9010000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("详细内容请参考冒险岛官网。", 4, 9010000, true, true);
                                                status = -1
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
}

function action1(d, c, b, a) {
    if (status <= a++) {
        cm.askYesNo("更改时，品克缤角色会被指定为#b#e随机颜色#k#n，使用的技能颜色也会一起更改。你想现在更改吗？", 4, 9010000)
    } else {
        if (status === a++) {
            cm.updateInfoQuest(100229, "time=20/12/09/11/49");
            cm.sendNormalTalk("颜色更改完成。", 4, 9010000, false, true);
            cm.dispose()
        }
    }
}

function action2(d, c, b, a) {
    if (status <= a++) {
        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100564.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};