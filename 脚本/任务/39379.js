var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(cm.getQuest(), "q");
    eval(reactor)(mode, type, selection)
}

function action0(d, c, b) {
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
            cm.askYesNo("[向导任务]装备鉴定镜\r\n#b - 目标：鉴定潜能处于封印状态的未确认装备\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你有在消灭怪物之后获得过装备道具吗？\r\n有没有在背包栏中见到过#r红色边框#k的装备？ ", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("如果装备带有潜能，会#b根据等级#k显示指定颜色\r\n的边框。其中封印着潜能的装备会显示#r红色边框#k。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("封印的装备可以#b通过鉴定释放出潜能#k，获得更好的效果。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("装备鉴定并不难。\r\n看到背包栏下边的#b放大镜按钮#k了吗！？\r\n点击放大镜按钮，然后把鼠标放到显示红色边框的装备图标上并点击鼠标，装备的鉴定就完成了。\r\n装备鉴定百分之百成功，所以使用鉴定功能时不要有什么负担~", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊，装备鉴定需要花费#r金币#k。\r\n根据装备等级，需要的金币各不相同，因此必须注意。\r\n当然，在鉴定之前会告知所需的金币，所以不必担心，尽管点击放大镜按钮好了。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("快去鉴定封印着潜能的装备，获取潜能效果吧~", 4, 9010000, true, false);
                                    cm.updateInfoQuest(cm.getQuest(), "q=0");
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

function action1(d, c, b) {
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
            cm.sendNormalTalk("[向导任务]装备鉴定镜\r\n#b - 目标：鉴定潜能处于封印状态的未确认装备\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(74550);
                cm.updateInfoQuest(cm.getQuest(), "q=2");
                cm.sendNormalTalk("今后请继续努力！\r\n\r\n如果想再听一遍任务说明，\r\n可以随时重新点击#b该等级段的向导任务按钮#k。\r\n", 4, 9010000, true, false);
                cm.dispose()
            }
        }
    }
}

function action2(d, c, b) {
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
            cm.askYesNo("[向导任务]装备鉴定镜\r\n#b - 目标：鉴定潜能处于封印状态的未确认装备\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你有在消灭怪物之后获得过装备道具吗？\r\n有没有在背包栏中见到过#r红色边框#k的装备？ ", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("如果装备带有潜能，会#b根据等级#k显示指定颜色\r\n的边框。其中封印着潜能的装备会显示#r红色边框#k。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("封印的装备可以#b通过鉴定释放出潜能#k，获得更好的效果。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("装备鉴定并不难。\r\n看到背包栏下边的#b放大镜按钮#k了吗！？\r\n点击放大镜按钮，然后把鼠标放到显示红色边框的装备图标上并点击鼠标，装备的鉴定就完成了。\r\n装备鉴定百分之百成功，所以使用鉴定功能时不要有什么负担~", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊，装备鉴定需要花费#r金币#k。\r\n根据装备等级，需要的金币各不相同，因此必须注意。\r\n当然，在鉴定之前会告知所需的金币，所以不必担心，尽管点击放大镜按钮好了。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("快去鉴定封印着潜能的装备，获取潜能效果吧~", 4, 9010000, true, false)
                                } else {
                                    if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39379.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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