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
            cm.onScriptMessage_显示教程引导图片(["UI/tutorial/zero/0/0"])
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……这……这里好像写着什么。这个是石像拿在手里的卷轴？……说不定这石像原本就不是石像。", 45, 2410008, false, true);
                cm.effect_Voice("Voice.img/Alpha/55", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("时间拖太久了，#p2410003#再怎么笨也会开始起疑心了。还是回去吧。", 45, 2410008, true, true);
                    cm.effect_Voice("Voice.img/Alpha/56", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face3#这神殿是什么，这个女人又是谁……无论用什么方法，一定要找出来。这个卷轴里肯定会有什么线索。", 45, 2410008, true, true);
                        cm.effect_Voice("Voice.img/Alpha/57", 100)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(40003, "");
                            cm.updateInfoQuest(40010, "");
                            cm.forceStartQuest(40003, "");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40003.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("……冒险岛世界和黑魔法师？还有那位女神伦娜……时间超越者……", 45, 2410008, false, true);
            cm.effect_Voice("Voice.img/Alpha/65", 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face7#咳！说出口了。要当心，这里没一个人可以相信……一定要谨慎。", 45, 2410008, true, true);
                cm.effect_Voice("Voice.img/Alpha/66", 100)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(这个卷轴里提到的叫做蜘蛛王的人，就是把我困在这里的犯人……)", 45, 2410008, true, true);
                    cm.effect_Voice("Voice.img/Alpha/67", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(如果我拥有的力量就是时间之力……那么我就是这个卷轴所提到的神之子……吧？要么……就是被关在影子神殿的那个女子？)", 45, 2410008, true, true);
                        cm.effect_Voice("Voice.img/Alpha/68", 100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face11# #b(……可恶……还是非常模糊。这么说来，我也只能唤醒神殿里的那个女子才能知道真相……)", 45, 2410008, true, true);
                            cm.effect_Voice("Voice.img/Alpha/69", 100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face11# #b(不过，要怎么做才能唤醒她呢。)", 45, 2410008, true, true);
                                cm.effect_Voice("Voice.img/Alpha/70", 100)
                            } else {
                                if (status === a++) {
                                    cm.gainExp(801000);
                                    cm.forceCompleteQuest(40003);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};