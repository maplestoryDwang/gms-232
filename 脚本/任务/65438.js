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
            cm.sendNormalTalk_Bottom("#b凯利！？你怎么来了？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我来面试啊。", 37, 9401158, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b凯利……？他不是金海滩度假村的总负责人吗？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#面试开始了吗？", 37, 9401158, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#真给力！这边请！", 37, 9400920, true, true)
                        } else {
                            if (status === a++) {
                                cm.npc_LeaveField("oid=91700369");
                                cm.dispose();
                                cm.warp(871000087, 0, false)
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
            cm.sendNormalTalk_Bottom("#face0#真是可惜。", 37, 9401158, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我先走了，我的工作已经堆积如山了。", 37, 9401158, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(65438, "NpcSpeech=94011581");
                    cm.npc_LeaveField("oid=91704929");
                    cm.dispose()
                }
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#你说啥？我被淘汰了？简直不敢相信！我万圣猫竟然被拒绝了！", 37, 9010095, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#切……算了。我以后会以客人的身份去玩的！", 37, 9010095, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(65438, "NpcSpeech=94011581/94011592");
                    cm.npc_LeaveField("oid=91704930");
                    cm.dispose()
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face2#呼呼，真有眼光呢。我不会让你们后悔自己的选择的。", 37, 9401160, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#那我们在咖啡店见吧。", 37, 9401160, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(65438, "NpcSpeech=94011581/94011592/94011533");
                    cm.updateInfoQuest(65438, "obj=1;NpcSpeech=94011581/94011592/94011533");
                    cm.npc_LeaveField("oid=91704931");
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face1#开业准备已经就绪了！", 37, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#明天，艾米咖啡1号店就要正式开业了！吼吼！如果赚到的钱是自卖机3倍的话……我好像马上就会成为富婆了！等我赚了钱，就给你们买好吃的", 37, 9400920, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#那我们大家一起加油！！！", 37, 9400920, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(65438);
                        cm.dispose();
                        cm.warp(871000088, 0, false)
                    }
                }
            }
        }
    }
};