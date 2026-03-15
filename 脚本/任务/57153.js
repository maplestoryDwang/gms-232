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
            cm.sendNormalTalk_Bottom("#face0#嗯，我也觉得有必要了解一下秀吉的真实想法。但是，只让剑斗一人前往，实在是有些放心不下啊……", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#兼续。", 37, 9130009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#是！我兼续一定会拼上性命，以辅佐剑斗的完成任务！是绝不会给谦信大人脸上抹黑的！就请谦信大人放心吧！", 37, 9130022, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#幸村，你要不要一起走一趟呢？", 37, 9130000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#非常乐意。", 37, 9130023, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#只要剑斗允许，我也愿意与二位共同完成这个任务。", 37, 9130024, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("可是，你们几个同时离开枫叶山丘……", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯，这四个年轻人都很勇敢啊。如何呢，毛利大人？年轻人们都这么说了，我们也应该相信他们，让他们放手去做吧？", 37, 9130010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯……既然春秋你都这么说了，我也就不再继续反对了。", 37, 9130006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline_Bottom("#face0#嗯。不过我要再确认一下。剑斗，你真的愿意接受这么危险的任务吗？", 37, 9130010)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#很好。秀吉指定的密会场所，正是我们两度潜入本能寺的地方——本能寺东侧城墙的外围。这一点还真是没有想到呢。他似乎是对织田军提出，要由自己来负责看守这块地方，所以才能在这里进行密会。", 37, 9130010, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你还记得本能寺的位置吗？就位于枫叶原的北侧。好了，剩下的就交给你们了。", 37, 9130010, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_LeaveField("oid=64854");
                                                            cm.npc_LeaveField("oid=64855");
                                                            cm.npc_LeaveField("oid=64856");
                                                            cm.npc_LeaveField("oid=64859");
                                                            cm.npc_LeaveField("oid=64863");
                                                            cm.npc_LeaveField("oid=64869");
                                                            cm.npc_LeaveField("oid=64843");
                                                            cm.npc_LeaveField("oid=64844");
                                                            cm.npc_LeaveField("oid=64845");
                                                            cm.npc_LeaveField("oid=64847");
                                                            cm.npc_LeaveField("oid=64848");
                                                            cm.npc_LeaveField("oid=64850");
                                                            cm.npc_LeaveField("oid=64852");
                                                            cm.npc_LeaveField("oid=64853");
                                                            cm.npc_LeaveField("oid=64862");
                                                            cm.npc_LeaveField("oid=64867");
                                                            cm.npc_LeaveField("oid=64868");
                                                            cm.npc_LeaveField("oid=64870");
                                                            cm.npc_LeaveField("oid=64871");
                                                            cm.forceStartQuest(57153, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57153.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#剑斗，你回来了啊。这边这位是秀吉大人的伙伴吗？", 37, 9130021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是的。这位便是织田四天王之一——羽柴秀吉大人，而这边这位则是织田军的同盟德川家康大人。他们两位都对信长的残暴行径感到不满，并表示希望加入我们联合军共同战斗。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我名为羽柴秀吉。虽然之前我们一直是敌对身份，但是今后希望能让我加入各位的大部队。", 37, 9130025, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我是德川家康。我不期待能立刻获得各位的信任。只希望大家能通过我今后的行动，看到我的决心。", 37, 9130026, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#但是，你们两位都是我们敌对势力的中心人物。就算突然说要加入我们，也实在让人觉得无法相信啊……", 37, 9130006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#哼。元就你就是想太多了。他们要是做出任何可疑的行径，只要我们直接动手砍了他们不就好了吗？", 37, 9130009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#唉……你的想法也太简单了。万一发生了什么无法挽回的情况……", 37, 9130000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#两位远道而来，真是太辛苦了。我名为松山樱乃。两位还是第一次来到枫叶山丘，对很多人肯定都还不熟悉。期间多半会遇到一些不便之处，还望两位能够多多海涵。", 37, 9130021, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#那么今后就请多多关照了。秀吉大人，家康大人。", 37, 9130021, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#是！我秀吉一定会为了联合军而拼尽全力的！", 37, 9130025, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#一切都在手底下见真章吧。", 37, 9130026, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(57153);
                                                        cm.gainExp(6348411);
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