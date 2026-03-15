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
            cm.setInGameDirectionMode(true, true, false);
            cm.sendNormalTalk("你找回了我的宝石。真是太感谢你了，勇敢的冒险家。我的名字叫奥利维亚。\r\n我正要交给赫丽娜的时候，突然出现了一个可疑的人，将宝石夺走了。", 0, 1520007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(奥利维亚的举止有点奇怪……)为何突然用敬语说话呢？", 2, 1520007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯？你，你，你，你这是什么话？我一向很有礼貌，对任何人都是用敬语的呀。", 0, 1520007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("上次在废弃都市碰面时，你不是没用敬语嘛！", 2, 1520007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……切……难道我们本来就认识吗？既然事已至此，就让你看看我真正的面目！", 0, 1520007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("(啊，奥利维亚的样子……？)", 2, 1520007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(32271, "");
                                    cm.npc_ChangeController(1520019, "oid=1112769", 2690, -40, 51, 2640, 2740, 1, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=1112769", "summon", 0, 0);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/quest/0", "oid=1112769"], [800, 0, 0, 1, 0, 1, 0, 0, 0]);
                                    cm.sendNormalTalk("哈哈哈！怎么样，冒险家，这就是我的真面目！", 4, 1520019, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("怎么会这样，奥利维亚变成了一个大叔！！！！！", 2, 1520007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你叫谁大叔啊！没大没小的家伙，我要把封印石带走了！", 4, 1520019, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=1112769");
                                                cm.forceCompleteQuest(32271);
                                                cm.gainExp(20000);
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.gainItem(4033885, -1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32271.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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