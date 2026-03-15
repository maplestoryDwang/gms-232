var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("#e#b<幸运纸莎草纸>#k \r\n你好！#b#h0#！#k有什么可以帮你？#n\r\n\r\n#L0##b#e幸运纸莎草纸使用方法#n#k#l\r\n\r\n#L1##b#e幸运纸莎草纸魔法数式#n#k#l\r\n\r\n#L2##b#e幸运纸莎草纸使用期限#n#k#l", 4, 9062179)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("我给你介绍一下#b#e幸运纸莎草纸#n#k的使用方法。", 4, 9062179, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("进入#e#b等级范围怪物#k#n出没的猎场时，\r\n会自动激活#s80002753##b#e[幸运纸莎草纸]#n#k技能，\r\n\r\n正上方将出现幸运纸莎草纸。", 4, 9062179, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("在这个状态下消灭#b#e等级范围内的普通怪物#k#n时，可以获得#b#e新复古能量#k#n。\r\n\r\n#b（※ 从精英怪物以及精英BOSS等特殊怪物处无法获得新复古能量。）#k", 4, 9062179, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在#b#e技能窗口#k#n里鼠标#e#b右击#k#n幸运纸莎草纸技能，可以变更技能的状态。", 4, 9062179, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("还有注意一点！\r\n幸运纸莎草纸只有在你#b#e每日可收集的新复古能量#k#n还有剩余的情况才能使用，这点你要记牢了。", 4, 9062179, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我会为你祈祷，愿你好运相随！", 4, 9062179, true, true)
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

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("我给你介绍一下#b#e魔法数式#n#k。", 4, 9062179, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#i3801400#\r\n如上所示，#b#e幸运纸莎草纸#k#n中写着可以记入#b#e3个数字#n#k的#b#e魔法数式#n#k。", 4, 9062179, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#i3801399#\r\n纸莎草纸最初呈现卷轴的形态，等获得列入数式中的#b#e数字#k#n后，它就会展现真正的面貌。", 4, 9062179, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("靠消灭#r#e普通等级范围怪物#n#k收集#e#b20次#n#k#b#e新复古能量#k#n时，可以获得#b#e1个随机数字#k#n。\r\n\r\n#b（※ 从精英怪物、精英BOSS等特殊怪物处无法获得新复古能量和数字。）#k", 4, 9062179, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#e数字#k#n将在#e1#n~#e16#n中#e随机#n选取一个，\r\n从左至右填入数式的问号处。", 4, 9062179, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("等你凑齐#b#e3个#n#k数字，就可以完成数式。\r\n数式完成后，过#r#e5秒#n#k即可获得#e#b1,500点新复古能量#n#k和#e#b额外经验值#n#k。", 4, 9062179, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这时候可以获得的额外经验值相当于，#b#e数式结果#n#k和#b#e得出最后一个数字时消灭的怪物所得经验值#k#n相乘的数值。", 4, 9062179, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#i3801401#\r\n 比如说，假设你依次获得了数字#b#e10#k#n、#b#e11#k#n、#b#e12#k#n，\r\n\r\n#i3801402#\r\n 则数式的结果为#r#e252#k#n。", 4, 9062179, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("还有，如果你获得数字时消灭的怪物为#e石面怪人#n，将可以一次性获得#e#r消灭石面怪人时所得经验值#k的#r252倍#k#n。", 4, 9062179, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("数式完成后，如果你对结果不满意，可以在#r#e5秒#n#k内点击#b#e采集键#n#k重新排列数字。", 4, 9062179, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b#e重新排列#k#n时，数字的位置会随机变动，你将按照变动后的数式结果获得相应的经验值。\r\n不过，重新排列仅限#r#e1次#k#n，变动过后的#e#r结果可能不变，或是变得更糟#k#n，你要慎重选择。", 4, 9062179, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我会为你祈祷，愿你好运相随！", 4, 9062179, true, true)
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
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e[活动时间]#k\r\n\r\n 2020年7月22日\r\n  ～ 2020年8月4日周三下午11点59分为止#n", 4, 9062179, false, true)
    } else {
        if (status === a++) {
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100284.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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