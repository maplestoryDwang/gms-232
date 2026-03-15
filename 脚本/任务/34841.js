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
            cm.sendNormalTalk_Bottom("虽然从克里昂那听说了……但还是担心这次能否顺利成功，不过还是要相信克里昂。", 36, 3000002, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("自从麦格纳斯发动入侵后，我们至今还没能夺回首都赫里希安。正以神殿地区万神殿为据点，跟敌人决一死战。", 37, 3000002, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("最近元气恢复大半，并做好了充足的准备，因此我们设立了赫里希安夺取总部，打算正式夺回首都。", 37, 3000002, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("可麦格纳斯的势头更胜一筹，如果连好不容易建成的总部也失守了……", 37, 3000002, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("伊利温你要做的就是帮助这里的指挥官伊黛娜和皮塔斯。怎么样，做得到吗？", 37, 3000002, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34841, "");
                                cm.sendNormalTalk_Bottom("#face0#嗯，我可以的。那去哪呢？", 37, 3001354, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("乘坐右边台阶上的传送口，经过#b赫里希安#k地区，有侦察兵#b#p3001007##k在那等候。他会为你引路的。那万事小心。", 37, 3000002, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.OnStartNavigation(401000002, 1, "3001007", 34841);
                                        cm.npc_LeaveField("oid=46486");
                                        cm.npc_LeaveField("oid=46490");
                                        cm.npc_LeaveField("oid=46491");
                                        cm.npc_LeaveField("oid=46492");
                                        cm.npc_LeaveField("oid=46496");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34841.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("你好，异族人……你是冒险岛勇士吗？", 36, 3001007, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#情况看起来不太乐观。", 37, 3001354, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是的……我们尽力维持着反攻总部，但是幽灵部队发动了空袭……呜呜……总部现在危险了。", 37, 3001007, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("稍等，先擦擦眼泪。", 37, 3001007, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(34841);
                            cm.updateInfoQuest(34841, "exp=1");
                            cm.gainExp(176560);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};