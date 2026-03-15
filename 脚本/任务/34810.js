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
            cm.sendNormalTalk_Bottom("#face0#(卡尼里恩不知道碰到了什么伤心事，泣不成声地呜咽起来。等她平复一些再开口吧。)", 37, 3001351, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#那个……迪恩把我的#i4036167##t4036167#全都做成#b糖果#k了！", 36, 3001308, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#什么？噗！那家伙真是没救了！", 37, 3001310, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#……", 36, 3001308, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#啊，所以说……", 37, 3001310, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face4#那家伙，简！直！坏！透！了！", 37, 3001310, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face9#正好剩下一些，分你点啊？", 37, 3001351, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#真的吗？这也……可以？", 37, 3001308, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askMenu_Bottom("#face0#稍微给一点也行啊……我只要……5个左右就够了……\r\n#L0# #b选择1：只给1个。#l\r\n#L1# #b选择2：给4个。#l\r\n#L2# #b选择3：给7个。#l", 37, 3001308)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#一、一个？谢、谢谢……哈哈……", 37, 3001308, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.gainItem(4036167, -1);
                                                    cm.updateInfoQuest(34810, "give=1");
                                                    cm.sendNormalTalk_Bottom("#face1#那个糖果……可以分给我点吗？", 37, 3001310, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#嗯？啊……\r\n当然，当然了。这里。", 37, 3001308, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#哇~谢谢，我会好好享用的！", 37, 3001310, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#………", 37, 3001308, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#谢谢你们的帮助，孩子们。我们后会有期！", 37, 3001308, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(34810, "");
                                                                        cm.forceCompleteQuest(34810);
                                                                        cm.updateInfoQuest(34810, "exp=1;give=1");
                                                                        cm.sendNormalTalk_Bottom("#face0#若想结束课堂任务，则需要20个#i4036167##t4036167#。", 37, 3001300, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#没关系。马上就能找到了。赶快回去收集吧。", 37, 3001351, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#为获得不足的#i4036167##t4036167#，需前往#m402000514#，#m402000515#，#m402000516#。", 37, 3001300, true, true)
                                                                            } else {
                                                                                if (status == a++) {
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