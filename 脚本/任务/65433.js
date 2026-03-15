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
            cm.askAcceptDecline_Bottom("#face5##h0#，虽然有点厚颜无耻……你可以帮忙去金海滩度假村，买回来一杯热带水果汁吗？", 36, 9400921)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#谢谢你，#h0#！", 37, 9400921, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(65433, "");
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0##h0#，你又来了？", 36, 1082002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b是的，我们经常见面呢。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b现在还可以购买艾米上次喝过的果汁吗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这种事情你还是问那边的梅森吧，我有点忙。", 36, 1082002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##h0#，我马上为你准备。你要什么果汁呢？艾米小姐喝了我们度假村的所有果汁……", 36, 1082001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b啊……嗯……那个……啊！有芒果和荔枝的果汁！", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#荔枝芒果汁。1杯50万金币。", 36, 1082001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b请给我一杯……", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(65433, "start=1;NpcSpeech=10820021");
                                            cm.sendNormalTalk_Bottom("#face0#谢谢惠顾，客人~下次带着艾米小姐一起来啊。", 37, 1082001, true, true);
                                            cm.gainItem(4036670, 1)
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
            cm.sendNormalTalk_Bottom("#b艾米，艾米！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#…#h0#... ", 37, 9400920, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b艾米，我去金海滩度假村亲！自！买回来了。你当时喝的就是这个果汁。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face6#真的吗？！真的吗？！", 37, 9400920, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(65433);
                            cm.gainItem(4036670, -1);
                            cm.npc_LeaveField("oid=91885355");
                            cm.npc_LeaveField("oid=91885356");
                            cm.dispose();
                            cm.warp(871000081, 0, true)
                        }
                    }
                }
            }
        }
    }
};