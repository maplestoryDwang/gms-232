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
            cm.sendNormalTalk_Bottom("#face4#卡莱尔，这是怎么一回事？这些家伙是从哪儿冒出来的……", 36, 3004431, false, true);
            cm.effect_Voice("Voice5.img/CH2/Idea/111", 128)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#他们可能是混在难民队伍里偷偷溜进来的。", 36, 3004433, true, true);
                cm.effect_Voice("Voice5.img/CH2/Carlyle/87", 128)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#报告。翼人军正在越过东城墙。", 36, 3004437, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Knight/14", 128)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#……", 36, 3004433, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我们去阻挡东城墙那边的敌军。王子殿下请快去召集士兵平息骚乱。", 36, 3004431, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Idea/112", 128)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#我知道了。", 36, 3004433, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Carlyle/88", 128)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#我也来帮忙。", 36, 3004430, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##h0#，请你与我们同行。", 36, 3004431, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#该死，尽是些打不死捶不烂的家伙！", 36, 3004435, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3##h0#大人，请您协助守卫城墙。我去阻止罗兰德。", 36, 3004430, true, true);
                                                cm.effect_Voice("Voice5.img/CH2/Seren/64", 128)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(37416, "");
                                                    cm.updateInfoQuest(37400, "01=h0;10=h0;11=h1;02=h0;12=h0;22=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;16=h0;07=h1;17=h1;08=h1;18=h1;09=h0;19=h1");
                                                    cm.OnStartNavigation(993140100, 0, "east00", 37416);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37416.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#城墙上面的战况已经大致稳定。不过，城门那边似乎还打得难舍难分呢？", 37, 3004435, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(37416);
                cm.dispose()
            }
        }
    }
};