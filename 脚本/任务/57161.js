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
            cm.sendNormalTalk_Bottom("#face0#辛苦各位了。正是有了大家的努力，我们才能在本能寺攻略战中顺利取胜。与其以每个人的功劳大小来论英雄，还不如说，这次的功劳是属于我们所有人的。", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不过，我们还留有一些没有解决的问题。敌方的头目织田信长和他手下的其他大将全部下落不明。根据我们所掌握的情报，他们已经在其他地方建起了新的据点，并开始进行某项准备。但我们并没有找到他们现在的位置，和他们究竟要做些什么。", 37, 9130010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#进行这次攻略战时，我注意到了一个问题。之前在日本的时候，大量灵力都汇集在了本能寺，所以信长才选择这个地方进行魔王降临的仪式。但是现在的本能寺已经彻底失去了所有灵力。", 37, 9130010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#如果信长是因为这个原因离开本能寺，并前往了新的据点……那也就是说，他可能是正在冒险岛的其他地方进行着不同仪式的准备。", 37, 9130010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#本能寺的灵力已经彻底枯竭。而且受到战争的影响，这里被毁作废墟。所以不仅无法继续在这里进行仪式，更是无法将这里当作据点继续使用了。不然，我们就可以把本能寺当成新的据点来用了，真是遗憾啊。", 37, 9130010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#就算本能寺已经陷落，我们要做的事情也还是一样。努力提高自身的能力，为与信长的生死对决做好准备。", 37, 9130010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#这次的战斗结束后，相信大家都能感受到，我们与信长的最终决战已经不远了。估计就在最近一段时间，信长也会开始行动了吧。所以接下来的一战，就是赌上日本与冒险岛命运的生死对决了。", 37, 9130010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#不过，在正式开战之前，还请各位一如往常地来完成任务。", 37, 9130010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(57161, "");
                                            cm.forceCompleteQuest(57161);
                                            cm.gainExp(9726077);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57161.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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