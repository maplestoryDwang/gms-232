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
            cm.askYesNo("已经做好了远行的准备了吗。行李都带好了吧？那就出发吧？", 0, 9390256)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("出发吧！目的地是明珠港！", 0, 9390256, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(17677, "");
                    cm.dispose();
                    cm.warp(104000000, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17677.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("咻~感觉好久之后才回到了熟悉的地方啊。", 2, 9390200, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("看来你平安回来了啊？", 0, 9390200, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，你是……探险家帕尔巴特？你在暴风雨中没有受伤吗？", 2, 9390200, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哈哈哈！我这么伟大的探险家怎么可能在那点困难下就屈服呢？那点风浪我已经经历了几千次了！", 0, 9390200, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("虽然那不是一趟舒适的航行……但是啊，我之前说的回报什么的就算了吧，反正我也没能履行约定，把你从凯梅尔兹带回明珠港。", 0, 9390200, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那你为什么还在这里等我啊。", 2, 9390200, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("首先，你在那种风浪中不可能死，安全到达了凯梅尔兹，那我的工作就算完成一半了！当然，因为船被毁了，我回到这里也花了点功夫，但我是不能到凯梅尔兹去找你了。我也有苦衷，请你理解。", 0, 9390200, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("(……回到圣地后我一定要和南哈特好好理论一下。)", 2, 9390200, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline("即便如此，那个老学究的委托我也不能无视，我就只能尽力帮你了。我能带你轻松地前往圣地，你现在要去圣地吗？\r\n#b(接受时立刻前往圣地)", 0, 9390200)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(17677);
                                                cm.sendNormalTalk("这次没问题了！走吧！", 1, 9390200, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.warp(130000000, 0)
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