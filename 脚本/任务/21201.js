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
            cm.sendNext("从村子出去向左走，在冰冻悬崖上有一个冰洞……进入冰洞，能够发现一面用冰做成的镜子，叫做镜洞。")
        } else {
            if (status == a++) {
                cm.askAcceptDecline("现在有个战斧，相比还是能显示出一些相关记忆的。赶快去使用心愿之镜吧。")
            } else {
                if (status == a++) {
                    cm.forceStartQuest();
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21201.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("曾经是谁说要让我成为击退黑魔法师的传世武器的？结果中了诅咒，自顾自地沉睡了几百年，把我丢在一边不管不顾。……什么？想不起来了？一句想不起来了就想了事？当初苦苦求我，拜托我的时候怎么说的来着……", 8, 1201002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("说要向#p1203000#证明自己的实力，请他给我一个机会。", 2, 1201002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("没错！当初为了得到我，你低三下四地苦苦哀求。要知道像我这样优秀的武器，你上哪里去找啊？能够和黑魔法师相抗衡的最强的#p1201001#就是我了！结果你却把我扔在冰窟里，一放就是几百年……", 8, 1201002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("倒也没有苦苦哀求。", 2, 1201002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么？没有苦苦哀求？是谁哭着闹着要得到我，甚至不惜双膝下跪苦苦哀求？要不#p1203000#怎么会答应……等等？战神！你难道……难道已经想起来了？！", 8, 1201002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("有一点点……", 2, 1201002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……真不愧是战神啊……呜，呜呜！不，我一点都没有感动！……虽然中了黑魔法师的诅咒，能力尽失，连拿起我的力气都没有了……即便如此，你居然还能想起我，真不愧是我的主人啊！", 8, 1201002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("就算你失去记忆也还是我的主人。那经过极端训练的身体依然能够记得当初的技能，虽然在冰窟中沉睡了数百年，但这一点我还是很清楚的。好吧，我帮你唤醒你的能力！", 0, 1201002)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(21201, "");
                                            cm.forceCompleteQuest(21201);
                                            cm.sendNormalTalk("你的等级还没有以前那么高，没法帮你唤醒所有的能力。不过，先帮你唤醒一部分的能力，这样将来升级也会更快一些。快点恢复从前的能力吧！", 0, 1201002, false, false)
                                        } else {
                                            if (status === a++) {
                                                cm.gainItem(1142130, 1);
                                                cm.forceStartQuest(29925, "");
                                                cm.forceCompleteQuest(29925);
                                                cm.gainItem(1003316, 1);
                                                cm.gainItem(1051241, 1);
                                                cm.gainItem(1072579, 1);
                                                cm.gainItem(1082361, 1);
                                                cm.gainItem(1442148, 1);
                                                if (cm.getJob() == 2100) {
                                                    cm.changeJob(2110)
                                                }
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
};