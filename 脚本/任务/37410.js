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
            cm.sendNormalTalk_Bottom("#face0#真是不巧，这段时间我可能无暇顾及此事。可以拜托两位代我继续寻找圣剑的主人吗？", 36, 3004433, false, true);
            cm.effect_Voice("Voice5.img/CH2/Carlyle/60", 128)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不要紧吗？如果走漏了风声，被教团知道你拜托我们这些外人寻找圣剑之主，他们的意见会很大吧？", 36, 3004431, true, true);
                cm.effect_Voice("Voice5.img/CH2/Idea/47", 128)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那就劳烦两位低调行事了。", 36, 3004433, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Carlyle/61", 128)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这可不是三言两语就能糊弄过去的事……", 36, 3004431, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Idea/48", 128)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("#face0#我相信两位一定不会辜负我的期望。是吗？", 36, 3004433);
                            cm.effect_Voice("Voice5.img/CH2/Carlyle/62", 128)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#还是先去见我的朋友吧。\r\n他精通史学和神学，说不定能帮上二位。", 36, 3004433, false, true);
                                cm.effect_Voice("Voice5.img/CH2/Carlyle/63-1", 128)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#去王室图书馆找#b图书管理员艾伦#k就行。", 36, 3004433, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/64-1", 128)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#图书管理员吗？", 36, 3004431, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Idea/49", 128)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#啊，说起来，还请两位见面时对他和气些。", 36, 3004433, true, true);
                                            cm.effect_Voice("Voice5.img/CH2/Carlyle/65", 128)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#嗯？？", 36, 3004431, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(37410, "");
                                                    cm.updateInfoQuest(37400, "10=h0;01=h0;02=h0;11=h1;12=h1;13=h0;04=h0;05=h1;06=h1;07=h1;08=h1;09=h0");
                                                    cm.updateInfoQuest(37400, "10=h0;01=h0;02=h0;11=h1;12=h0;13=h0;04=h0;05=h1;06=h1;07=h1;08=h1;09=h0");
                                                    cm.updateInfoQuest(37400, "10=h0;01=h0;02=h0;11=h1;12=h0;13=h0;04=h0;14=h1;05=h1;06=h1;07=h1;08=h1;09=h0");
                                                    cm.updateInfoQuest(37400, "10=h0;01=h0;02=h0;11=h1;12=h0;13=h0;04=h0;14=h1;05=h1;15=h1;06=h1;07=h1;08=h1;09=h0");
                                                    cm.OnStartNavigation(993140050, 0, "", 37410);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37410.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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