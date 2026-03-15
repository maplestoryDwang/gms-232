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
            cm.sendNormalTalk_Bottom("黑色之翼算是彻底完了。\r\n当然还会有些残存势力，但埃德尔斯坦的解放已经不远了。", 37, 1540452, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("如果埃德尔斯坦得到解放，你以后打算怎么做？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我吗？我还没有思考过……", 37, 1540452, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#……要不要像奥斌大叔所说的那样，好好谈一场恋爱呢？", 37, 1540452, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("对了，我向奥斌大叔……\r\n说了马提尼和格里梅尔的事情。", 37, 1540452, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("他怎么说？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("这死法很符合那些家伙的……他就说了这么一句话。\r\n虽然他尽量不表现出来，但他还是看起来有些凄凉。", 37, 1540452, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("好了，那……\r\n那我们现在要分开了吗？", 37, 1540452, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#谢谢你，在各个方面……", 37, 1540452, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 3);
                                                cm.forceCompleteQuest(33282);
                                                cm.gainExp(Math.pow(cm.getLevel(), 3) * 3);
                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33282.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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