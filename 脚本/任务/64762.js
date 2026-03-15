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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("我看看……应该记在这里了，啊！找到了。远征队管理方法！", 37, 9401029, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("铛啷，这里是#h0#的远征队信息。呃嗯，叫你#h0#太生疏了……我可以叫你队长吗？", 37, 9401029, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("当然可以。", 57, 0, true, true);
                    cm.updateInfoQuest(64753, "point=0;level=1;rank=0")
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好的！队长！嘿嘿。", 37, 9401029, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b#e远征队等级#k#n是#b远征队属下所有队员的等级之和#k，另外根据#b远征队等级，指挥等级会有所上升。#k啊！这里不包括队长的等级。", 37, 9401029, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("虽然目前我们还处于#b#e新手等级#k#n，但达到#b#e远征队10级#k#n后，就可以升级为#b#e初级#k#n啦！详细的升级信息可在#b<远征队队长指南>#k中了解。", 37, 9401029, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b#e声望#k#n将根据#b深渊探险时间自动累积。#k使用声望可以雇佣其他冒险家，也可以购买武器和技能！", 37, 9401029, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("要进入深渊，必须首先选择同行的伙伴。这里！看见我了吗？嘿嘿，是我呀，我！\r\n#b鼠标右击我的角色后，点击[远征队设置]菜单就完成设置啦！#k ", 37, 9401029, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("尽管目前你的等级太低，所以只能设置一个伙伴，但升级后就可以和最多5个伙伴一同进入深渊。想想都觉得激动吧？这不就像英雄小说中出现的故事嘛。带领5个队员探险深渊的深处！咳呃！", 37, 9401029, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("队长！那就将我设置为远征队队员吧？（眼神亮晶晶）", 37, 9401029, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b（打开远征队管理窗口，将莫妮卡设置为远征队队员。）", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(64762, "");
                                                        cm.eventSKill(0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.openNewUI(1, "UIAbyssExpeditionManangementButton");
                                                        cm.fakeInit();
                                                        cm.openNewUI(1, "UIAbyssExpedition");
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
    }
}

function stage0(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64762.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("哇啊啊！我们现在真的成为伙伴了！现在只需要出发去冒险就可以了！", 36, 9401029, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("走出门的那一刻冒险就会开始，我们快离开总部吧！", 36, 9401029, true, true)
            } else {
                if (status === a++) {
                    cm.OnStartNavigation(867147000, 0, "out00", 0);
                    cm.forceCompleteQuest(64762);
                    cm.dispose()
                }
            }
        }
    }
};