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
            cm.sendNextSNoESC_Bottom("笔记本的第九页被写满了……！")
        } else {
            if (status === a++) {
                cm.askMenuS_Bottom("要不要读一下？\r\n#b#L0#1. 读一下。#l\r\n#L1#2. 以后再读。#l")
            } else {
                if (status === a++) {
                    if (b == 1) {
                        cm.dispose();
                        return
                    }
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2200)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("[事件日志9]", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("呀嚯！我们终于又找到了其他同伴！侦探团的乐趣就在于聚集同伴啊？！", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("我们在魔法密林遇到了叫做陈的帅气同伴。", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("但是，代号陈说自己重要的朋友，叫做灵灵的老虎似乎很久之前就被APORD抢走了……", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("真是太让人伤心了……我们一定要全力帮助他！", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("有这么多可靠的同伴，我真是太开心了，嘿嘿！", 1)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(59722);
                                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                    cm.updateInfoQuest(59763, "1=1;2=1;3=1");
                                                    cm.inGameDirectionEvent_AskAnswerTime(2200)
                                                } else {
                                                    if (status === a++) {
                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.setInGameDirectionMode(false, false, false);
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