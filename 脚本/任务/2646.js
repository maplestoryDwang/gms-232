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
            cm.sendNormalTalk("#h0#, 我有东西要交给你。这是一本#b冒险之书#k, 它可以记录你日后在冒险岛世界旅行过程中所经历的事情。在这里可以记录将要发生的只属于你的故事。", 4, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("怎么样。你要接受#b冒险之书#k吗? ", 16, 0)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32360, "4");
                    cm.sendNormalTalk("给你......这本冒险之书正适合你这名飞侠......", 4, 1012100, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(2646, "");
                        cm.sendNormalTalk("详细内容你可以慢慢查看。", 4, 1012100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("虽然这条路并不平坦, 但我希望即将启程的你可以尽情享受这次冒险之旅。", 4, 1012100, true, false);
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2646.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
        if (status === a++) {
            cm.sendNormalTalk("#b冒险之书#k? 你说过可以在上面记录我的冒险故事, 是吧? ", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这样看来, 我已经很久没有来过冒险岛世界了。回首往日, 这段时间我......", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("#b#L0#努力升级。#l\r\n#L1#努力赚钱。#l\r\n#L2#结识新的朋友。#l\r\n#L3#就那样马马虎虎地度过了。#l", 25, 0)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我努力提升了等级。和以前相比我已经强大了许多。当然, 这种程度还很不足......", 16, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("既然已经如此, 就让我以一个全新的心态开始这次冒险之旅吧? ......嗯? ", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainExp(170);
                                cm.forceCompleteQuest(2646);
                                cm.curNodeEventEnd(true);
                                cm.setInGameDirectionMode(true, false, false);
                                cm.fieldEffect_ScreenMsg("adventureStory/mapleLeaf/0");
                                cm.inGameDirectionEvent_AskAnswerTime(1800)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(4460003, 1);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.sendNormalTalk("这枫叶是怎么回事? 仔细想想在冒险岛大陆的确曾经有一颗很大的枫树。这片枫叶是追随我而来的吗? ", 17, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("这也是纪念, 让我把它收好。把它夹在#b冒险之书#k里的话就不会皱掉了吧。", 17, 0, true, true);
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
};