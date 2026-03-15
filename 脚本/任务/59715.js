var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.sendNextSNoESC_Bottom("笔记本的第六页写满了……！")
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
                        cm.inGameDirectionEvent_Monologue("[事件日志6]", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("找到了，找到了！奇怪的动物商人就在勇士部落的线索！", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("代号神那真是个帅气的同伴啊。", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("如果他真的把我的嘟嘟和奈奈卖了，那我一定要好好教训那个人！", 1)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(59715);
                                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                            cm.updateInfoQuest(59762, "1=1;2=1;3=1;4=1;5=1;6=1");
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