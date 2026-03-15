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
            cm.sendNormalTalk("#b成功进入了地下2层。重新跟#b伊黛娜#k联系吧。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你这么快就发来联系了。到达地下2层了吗？还是说你有其他问题？", 4, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b已经成功进入了地下2层。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("估计特雷格罗的房间在地下3层。那些怪物可能会猛烈地攻击你，不要担心，继续前进。", 4, 3001100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这次要做的事和刚才一样。请在地下2层消灭所有种类怪物各100只，为士兵们开路。", 4, 3001100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("然后确认一下是否可以进入位于3层的特雷格罗的房间。如果能进去，就要直接跟他开展战斗，所以你要谨慎行动，时刻记得做好万全准备。", 4, 3001100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("根据#b#p3001107##k的侦察，地下2层的怪物有#r#o2400118#、#r#o2400119#。请尽快消灭它们。", 4, 3001100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline("准备好后，就立刻开始投入作战吧。", 16, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("如果你和特雷格罗交上手，不要勉强自己，觉得对付不了时就赶紧返回，指定作战计划。你多保重。", 4, 3001100, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(31506, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31506.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b把敌人全部消灭了，用通讯设备进行联系吧。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，看样子你已经把敌人全部消灭了。很快士兵们也会在城堡地区开展战斗。你确认一下是否可以进入特雷格罗的房间。", 4, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("请进入阶梯地区。确认是否可以进入特雷格罗的房间后再跟我联系。", 4, 3001100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("联系中断了。试试能不能打开实验室的门吧。", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(31506);
                            cm.gainExp(408000);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};