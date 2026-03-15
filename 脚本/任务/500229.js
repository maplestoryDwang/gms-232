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
            cm.sendNormalTalk("#e第四课#n是#b<符文>#k。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b符文！#k这个我也好像知道！\r\n一定是非常重要的……\r\n又大又强的……\r\n漂亮而神秘的！", 4, 9062057, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b对于自己不知道的东西，要有勇气承认#k。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("果然还是#b勇气#k最重要！\r\n#e我不知道！#n", 4, 9062057, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b符文#k是在消灭#b等级范围内的怪物#k时，在野外出现的#b神秘石块#k。", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b符文#k可以#e每15分钟使用一次#n。\r\n在符文附近输入#b空格键#k后，输入提示的#b方向键#k，可以在#b3分钟内#k获得效果。", 16, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("所有符文都会提供#b经验值获得量增加#k增益。根据符文的种类，还会提供#b提高攻击力或者发动强力技能#k等各种效果。", 16, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b符文#k出现后很长时间没有使用时，该区域就会降下#r可怕的诅咒#k，#b无法获得经验值和掉落道具#k。因此见到符文后，#e一定要发动符文#n。", 16, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b符文！\r\n15分钟一次！3分钟内！\r\n一定要发动！#k\r\n我一定会复习再复习，老师！", 4, 9062057, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo("老师！现在马上开始#b<4学时>启动3次符文#k\r\n#r示范课程#k吧？", 4, 9062057)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(500229, "");
                                                    cm.sendNormalTalk("我一定会好好学习！", 4, 9062057, false, true)
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