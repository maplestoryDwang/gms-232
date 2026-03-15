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
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("真的没消灭掉吗？我们没发现到这边来的怪物……是到反方向去了？多吗？", 33, 2410003, false, true);
            cm.effect_Voice("Voice.img/Milro/5", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face10#不，一共消灭了8只，还有1只。在消灭其他怪物的时候稍微松懈了一下……对不起。", 41, 2410008, true, true);
                cm.effect_Voice("Voice.img/Alpha/26", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("没什么。那么我们去追那个怪物吧？应该还没跑远吧？", 33, 2410003, true, true);
                    cm.effect_Voice("Voice.img/Milro/6", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("啊……我可不想麻烦大家，还是让我一个人处理吧。我知道它往哪里跑了，马上就能解决掉。", 41, 2410008, true, true);
                        cm.effect_Voice("Voice.img/Alpha/27", 100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是嘛？那你快去快回，我们就在这里等着。#p2410008#你肯定能处理掉的。", 33, 2410003, true, true);
                            cm.effect_Voice("Voice.img/Milro/7", 100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face5#就一只而已，没有必要等我。虽然怪物跑得稍微远了点，但也不是什么危险的事情……你们还是先回去吧。", 41, 2410008, true, true);
                                cm.effect_Voice("Voice.img/Alpha/28", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("嗯？真的吗？这么简单的任务好像也没什么关系，但是我们后方支援也是任务……所以……", 33, 2410003, true, true);
                                    cm.effect_Voice("Voice.img/Milro/8", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face4#其实是我不想给大家添麻烦而已。", 41, 2410008, true, true);
                                        cm.effect_Voice("Voice.img/Alpha/29", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("那么……要不我们就先回去？#p2410008#，你也要快点解决哦~", 33, 2410003, true, true);
                                            cm.effect_Voice("Voice.img/Milro/9", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_SetForceMove("oid=1355330", -1, 770, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                cm.effect_Direction("Effect/Direction13.img/zeroPrologue/Scene0", 0, 0, 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("终于甩掉了？还有什么任务？什么时候你们那么认真过……切。", 41, 2410008, false, true);
                                                    cm.effect_Voice("Voice.img/Alpha/30", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("时间所剩无几了？可恶，要加快脚步了。快到#b#m321000600##k看一下。", 41, 2410008, true, true);
                                                        cm.effect_Voice("Voice.img/Alpha/31", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(40002, "");
                                                            cm.updateInfoQuest(40006, "");
                                                            cm.forceStartQuest(40002, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40002.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b(紧闭双眼的女人石像，和其他石像不同，还穿着一身长袍。)#k", 41, 2410006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(感觉她的表情特别的忧伤，难道是幻觉？)#k", 41, 2410006, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(40002);
                    cm.gainExp(17700);
                    cm.dispose()
                }
            }
        }
    }
};