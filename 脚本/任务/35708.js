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
            cm.sendNormalTalk_Bottom("必须尽快对周围展开搜索。\r\n在找到第一次勘探时消失的成员之前，居然发生这种事……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#是……", 37, 3003758, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你们三位和我一起搜索迷宫……留一位……监视他。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#什……什么？你……你说我吗？", 37, 3003761, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯。拜托了。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#可……可是……我……我一个人……", 37, 3003761, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("这是紧急报警器。一旦遇到危险立刻按下按钮。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这很难……但拜托了。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askMenu_Bottom("#face0#可……可是刚刚其他人两个人在一起……都发生了这样的事……我自己在这里……\r\n\r\n#b#L0#里面更危险。#l\r\n#L1#还是留一个人守在这里比较好。#l#k", 37, 3003761)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3003761, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#好……知……知道了……不……不过能把他绑起来吗？", 37, 3003761, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(35708, "ask=1");
                                                        cm.sendNormalTalk_Bottom("#face0#我担心他说些奇怪的话……做什么奇怪的事……", 37, 3003761, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("好的，就这么办吧。", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h2;09=h0");
                                                                cm.updateInfoQuest(35751, "800=h0;04=h5;90=h0;91=h0;92=h0;93=h0;94=h0;95=h1;96=h0;87=h1;97=h0;88=h0;98=h0;89=h0;99=h1");
                                                                cm.updateInfoQuest(35751, "800=h0;04=h5;90=h0;91=h0;92=h0;93=h0;94=h0;95=h0;96=h0;87=h1;97=h0;88=h0;98=h0;89=h0;99=h1");
                                                                cm.updateInfoQuest(35751, "800=h0;04=h5;90=h0;91=h0;92=h0;93=h0;94=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h1");
                                                                cm.setPartner(1, 3003758, 80002575, 0);
                                                                cm.setPartner(1, 3003759, 80002577, 0);
                                                                cm.setPartner(1, 3003760, 80002579, 0);
                                                                cm.sendNormalTalk_Bottom("我很快就回来。请……等我一会。", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("那就出发吧。", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(35708, "");
                                                                        cm.OnStartNavigation(450011120, 0, "east00", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35708.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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