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
            cm.forceStartQuest(40052, "");
            cm.updateInfoQuest(40052, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40052.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我变成神官的时候，从女神那里继承了一个很特殊的能力。那就是感知时间之力，并找到其源泉的能力。把这个能力和#b占卜#k结合在一起，再远的时间之力也都可以找得到。", 33, 2400008, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，占卜这个词可能对你们很陌生吧，就是通过道具来寻找矿物或水脉的方法。通常这都是在地面上进行的……不过像我这样通过修炼之后，可以在地图上也能实现。", 33, 2400008, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("百闻不如一见，能把地图拿出来看一下吗？", 33, 2400008, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("从这个地图上感觉到的时间之力最强大的地点，就是这个最中央……也就是我们神殿的位置。还有其他几个地方也能感觉到时间之力，我估计是女神之泪……嗯……不过……", 33, 2400008, false, true);
                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/seaching/0", 1, 1, 1, 0, 0)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("还有一个地方也能感觉到时间之力，虽然不强大但是很特别。这个感觉……好像是#时间圣物#k。啊，这么说来两位还没有拿到时间圣物嘛。", 33, 2400008, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/seaching/0", 1, 0, 0, 0, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("哎呀呀~还真是啊！两位真的没有拿到时间圣物呢！时间圣物是#b将时间之力精细化并且能产生更强威力的物品#k。", 33, 2400000, false, true);
                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0)
                                        } else {
                                            if (status === a++) {
                                                cm.onScriptMessage_显示教程引导图片(["UI/tutorial/zero/1/0"])
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("女神也是通过圣物来掌控时间之力的，还记得女神手上一直拿着的沙漏吗？那就是时间之力。圣物是可将主人的力量引导至最理想状态的道具，时间之力可根据有没有圣物，而有天壤之别。", 33, 2400000, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("在寻找女神之泪的途中，不知道军团长会有什么阻碍，但是我觉得先去找圣物肯定很有帮助。两位不如先去寻找时间圣物吧，怎么样？", 33, 2400000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("圣物还没有遇到主人，可能还是个沙漏的形态。寻找巨大的沙漏也并不算困难吧。", 33, 2400000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("我来追踪一下圣物的地点……请稍等片刻。", 33, 2400008, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceCompleteQuest(40052);
                                                                    cm.forceCompleteQuest(40901);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.playerMessage(5, "从现在开始可以在冒险岛世界中拾取金币和道具，组队功能激活。");
                                                                    cm.gainExp(130000);
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
};