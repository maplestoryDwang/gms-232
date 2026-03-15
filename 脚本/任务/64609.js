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
            cm.sendNormalTalk_Bottom("#b艾米！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2##h0#~你是来表示感谢的吧？呼，你能有这种房屋都是因为我艾米哦！你可不能忘记这件事。", 37, 9400920, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b没错，谢谢你让我来到了这里。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("#b所以说……我觉得如果以后装修房屋的事情也能和艾米一起完成，那就太好了。\r\n#b#L0# 请你成为我的管家。#l\r\n#L1#今后我们一起好好相处吧。#l\r\n#r(※只能雇佣1名管家，雇佣后可以通过管家菜单进行变更。)#l", 57, 0)
                    } else {
                        if (status === a++) {
                            if (b == 0) {
                                cm.sendNormalTalk_Bottom("#face1#管家？管家？嗯……听起来倒是很有趣，你会给我报酬的吧？", 37, 9400920, false, true)
                            } else {
                                cm.sendNormalTalk_Bottom("#face1#好啊！请多多指教~", 37, 9400920, false, true);
                                cm.dispose()
                            }
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#这样啊，好的！那我就答应你吧，#h0#。", 37, 9400920, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#对了，这是给#h0#的礼物！因为你说想要用温馨的家装饰，我就准备了这个。它还有很厉害的功能，你可别被吓到了哦！", 37, 9400920, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(64608);
                                        cm.forceCompleteQuest(64609);
                                        cm.updateInfoQuest(64610, "hide=1");
                                        cm.updateInfoQuest(500773, "askR=0;manager=0;managerHide=0;s1=25;s2=14;s3=3;bonusTalk=0;s4=2;s5=3;resetDate=" + cm.getNowTimeString(3) + ";affDown=" + cm.getNowTimeString(3));
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