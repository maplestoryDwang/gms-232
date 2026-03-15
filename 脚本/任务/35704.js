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
            cm.updateInfoQuest(16925, "");
            cm.sendNormalTalk_Bottom("得先从失散的人开始找起。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……十三，十四。总共15个人，包括梅尔朗在内总共应该有五个人在周围。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("首先……把战舰里没有损坏的物品收拾一下吧。\r\n其他人待会去找。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("如果毫无准备地出去，不知道会发生什么……\r\n我在周围设置下警戒石。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#是！", 37, 3003760, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(35704, "set1=0");
                                cm.updateInfoQuest(35704, "set1=0;set2=0");
                                cm.updateInfoQuest(35704, "set1=0;set2=0;set3=0");
                                cm.forceStartQuest(35704, "");
                                cm.sendNormalTalk_Bottom("#face0#这就是警戒石，在看上去是迷宫的门的地方设置一下就可以了。", 37, 3003760, true, true)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(2439370, 3);
                                    cm.sendNormalTalk_Bottom("(设置在闪光的位就可以了。)", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.npc_LeaveField("oid=50981");
                                        cm.npc_LeaveField("oid=50984");
                                        cm.npc_LeaveField("oid=50985");
                                        cm.npc_LeaveField("oid=50989");
                                        cm.npc_LeaveField("oid=50990");
                                        cm.npc_LeaveField("oid=50993");
                                        cm.npc_LeaveField("oid=50996");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35704.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("呼……这样应该就能掌握周围的情况了。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊，#h0#，你来了啊？", 37, 3003758, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯，你们收拾出来很多东西吧？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#冲击没有想象的那么严重，物品大部分都没有破损。", 37, 3003760, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#有一些箱子飞了出去，还有些东西不见了。不过粮食还有很多。", 37, 3003760, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("战舰怎么样？能够马上启动吗？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#战舰的舰桥和机关室受损严重，目前无法启动。\r\n偏偏就那里受损最严重……", 37, 3003759, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我先查看下可以修的地方，但是我也不能保证能启动。现在就算修好了，也不知道能不能顺利启动。", 37, 3003759, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("这真是……", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#现在怎么办呢，#h0#？", 37, 3003758, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("让我想一想。", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(35704);
                                                        cm.gainExp(170671356);
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
};