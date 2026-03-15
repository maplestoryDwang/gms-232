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
            cm.sendNext("黑腐法师的诅咒对所有的玛瑙龙都产生了影响。存在于这片土地上的玛瑙龙正在逐渐死去。这样下去的话，我们就要灭绝了。")
        } else {
            if (status == a++) {
                cm.sendNextPrevS("怎么会发生这种事？")
            } else {
                if (status == a++) {
                    cm.sendNextPrev("我们是黑廣法师最大的对手。黑魔法师拼命想拉找我们，但是我们拒绝了他的提议，站出来和黑魔法师对抗。之后他就一直把我们当成眼中钉，肉中刺。但是他的诅咒并不完美。因此我才能把他对我的朋友弗里德施加的诅咒转移到我的身上。")
                } else {
                    if (status == a++) {
                        cm.sendNextPrevS("为什么呢？")
                    } else {
                        if (status == a++) {
                            cm.sendNextPrev("失去种族的王还留在这个世界上干什么呢？与其这样，还不如让自己的朋友活下去。当然，我也有事情要他去做。")
                        } else {
                            if (status == a++) {
                                cm.sendNextPrevS("我能问问是什么事情吗？")
                            } else {
                                if (status == a++) {
                                    cm.sendNextPrev("没关系。原来我们种族拥有近乎无限的生命，但后代却非常稀少。因为这次战争，原本为数不多的族人几乎全部死了，剩下的孩子们也受到了诅咒。但还好不久前出生了一个受到祝福的新生命。那个孩子还没从蛋中孵化，因此才能摆脱黑魔法师的诅咒。")
                                } else {
                                    if (status == a++) {
                                        cm.sendNextPrev("但是在和黑魔法师展开最后决战的时候，我把它掉在了神木村的什么地方。所以我想手托弗里德回到神木村去，把那个孩子转移到安全的地方。但是没想到弗里德在这漫长的时间里都没能醒来。")
                                    } else {
                                        if (status == a++) {
                                            cm.sendNextPrev("所以我想拜托你。请你找到我们最后的孩子。")
                                        } else {
                                            if (status == a++) {
                                                cm.sendNextPrev("如果中途把最后的玛瑙龙蛋弄丢了的话，请放弃任务，重新和我对话。")
                                            } else {
                                                if (status == a++) {
                                                    cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNext("谢谢你。你能把我们最后的孩子交给我吗？")
        } else {
            if (status == a++) {
                cm.sendOk("等弗里德醒来之后，我会让他带着蛋到安全的地方去。虽然对弗里德非常抱歉，但这是朋友的委托，他一定会用一生去保护他的。这样，我们的希望就能延续到未来。")
            } else {
                if (status == a++) {
                    cm.dispose();
                    cm.forceCompleteQuest()
                }
            }
        }
    }
};