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
            cm.sendNormalTalk("……问我怎么会变成这样？……本来不太想说的……不是，当然瞒不过主人你了……", 0, 1201002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……你被冰封的数百年间，我也被冰在了冰窟里。那么长的时间，没有主人的陪伴……渐渐的，我的心里便出现了黑暗。", 0, 1201002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不过，你重新苏醒后，我心中的黑暗也跟着完全消失了。既然主人回来了，心里也没有什么可难过的了。本以为这样就没事了……没想到这只是我的错觉。", 0, 1201002, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("拜托了，战神……一定要阻止我。能够阻止我暴走的只有你了。我再也抑制不住内心中的黑暗了！无论如何，一定要#r打败暴走的我#k！", 0, 1201002)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(21401, "");
                            cm.dispose();
                            cm.warp(914020000, 0, false);
                            cm.spawnMobLimit(9001014, 1, -636, 86, 100)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21401.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("谢谢你，战神。多亏了你，才阻止了我的暴走。真是万幸……！以主人的实力，这点小事当然不在话下了！", 0, 1201002, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("现在来看，你的等级已经很高了。既然能够打倒暴走状态下的我……那么唤醒你过去全部的力量也应该是可以的了。", 0, 1201002)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(21401, "001");
                    cm.forceCompleteQuest(21401);
                    cm.teachSkill(21120012, 0, 10);
                    cm.teachSkill(21121000, 0, 10);
                    cm.teachSkill(21120004, 0, 10);
                    cm.teachSkill(21120001, 0, 10);
                    cm.teachSkill(21120019, 0, 10);
                    cm.teachSkill(21120023, 0, 10);
                    cm.teachSkill(21120022, 0, 10);
                    cm.sendNormalTalk("沉睡的技能全都唤醒了……毕竟好久没用了，还需要熟悉熟悉。不过，应该进步会很快的。", 0, 1201002, false, false)
                } else {
                    if (status === a++) {
                        cm.gainItem(1142132, 1);
                        cm.teachSkill(21111021, 20, 0);
                        cm.teachSkill(21120001, 1, 10);
                        cm.teachSkill(21110026, 10, 0);
                        cm.teachSkill(21120021, 5, 0);
                        cm.npc_LeaveField("oid=6074");
                        cm.npc_LeaveField("oid=6067");
                        cm.npc_LeaveField("oid=6075");
                        cm.npc_LeaveField("oid=6080");
                        cm.npc_LeaveField("oid=6081");
                        cm.npc_LeaveField("oid=6082");
                        cm.npc_LeaveField("oid=6084");
                        cm.npc_LeaveField("oid=6085");
                        cm.npc_LeaveField("oid=6086");
                        cm.teachSkill(21120001, 10, 10);
                        cm.npc_LeaveField("oid=6070");
                        cm.forceStartQuest(21772, "");
                        cm.forceCompleteQuest(21772);
                        cm.gainItem(1190513, 1);
                        cm.askMenu("喂，你在哪呢？大事不好了！你快来趟#b#m104000004##k吧！\r\n#b#L0# (喂…………！#p1002104#可是一直喊我英雄的…………)#l", 0, 1204007)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("#b只要你接受，我就喊你#m104000000##k，你要以最快的速度赶过来！知道吗？", 0, 1204007)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(21733, "");
                                cm.forceCompleteQuest(21733);
                                cm.dispose();
                                if (cm.getJob() == 2111) {
                                    cm.changeJob(2112)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};