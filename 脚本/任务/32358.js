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
            cm.setInGameDirectionMode(true, false, false);
            cm.sendNormalTalk("感谢你拯救了冒险岛，冒险家。其实我通过我的分身--修嘉，一直关注着你的冒险旅程。", 1, 1520058, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……….", 1, 1520054, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你是说，修嘉是你的分身？", 17, 1520054, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我是冒险岛世界的精神，是没有实体的灵魂，历经漫长岁月一直寄托在枫树上。我感觉到这世界发生的异变，所以就派出了我的分身来到这个世界。而我的分身就是修嘉。", 1, 1520058, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("感谢各位拯救了冒险岛，以及冒险岛世界。", 1, 1520058, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不过，冒险岛还处在受损的状态。", 17, 1520058, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("大家请看，蕴含着各位力量的这片平凡的枫叶，变成了新的封印石……这是#r冒险岛的封印石#k。", 1, 1520058, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("! 刚才的那个宝石，是冒险岛的封印石？", 17, 1520058, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("就像很久以前其他英雄们所做的一样，以期盼和平之心凝聚大家的力量，创造出了这个世界上本不存在的封印石。", 1, 1520058, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("有了这个，就能把冒险岛恢复原样吗？那该怎么做呢？", 17, 1520058, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.gainItem(2431820, 1);
                                                    cm.sendNormalTalk("就像当初制作出封印石的时候一样，怀着拯救这个世界的心意，请再次聚集到封印石前吧。那样就能让冒险岛恢复原样。", 1, 1520058, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("冒险岛世界的未来就靠你们了………。今后我也会一直关注你们的冒险。", 1, 1520058, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_PlayFieldSound("advStory/disappear", 100);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/quest/3", "oid=0"], [1600, 304, 200, 1, 0, 1, 1, 0, 0]);
                                                            cm.forceStartQuest(32358, "");
                                                            cm.inGameDirectionEvent_AskAnswerTime(3600)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.setInGameDirectionMode(false, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32358.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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