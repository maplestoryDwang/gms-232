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
            cm.sendNormalTalk_Bottom("#face0#嗯，我也觉得有必要了解一下秀吉的真实想法。但是，只让神那一人前往，实在是有些放心不下啊……", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#兼续。", 37, 9130009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#是！我兼续一定会拼上性命，以辅佐神那的完成任务！是绝不会给谦信大人脸上抹黑的！就请谦信大人放心吧！", 37, 9130022, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#幸村，你要不要一起走一趟呢？", 37, 9130000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#非常乐意。", 37, 9130023, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#只要神那允许，我也愿意与二位共同完成这个任务。", 37, 9130024, true, true)
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
                                                cm.askYesNo_Bottom("#face0#嗯。不过我要再确认一下。神那，你真的愿意接受这么危险的任务吗？", 37, 9130010)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(57449, "");
                                                    cm.sendNormalTalk_Bottom("#face0#很好。秀吉指定的密会场所，正是我们两度潜入本能寺的地方——本能寺东侧城墙的外围。这一点还真是没有想到呢。他似乎是对织田军提出，要由自己来负责看守这块地方，所以才能在这里进行密会。", 37, 9130010, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你还记得本能寺的位置吗？就位于枫叶原的北侧。好了，剩下的就交给你们了。", 37, 9130010, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.dispose();
                                                            cm.warp(807050400, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57449.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#什么人？", 37, 9130025, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("阁下就是羽柴秀吉大人吗？我是来自枫叶山丘的反织田联合军的使节，我名叫神那。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我也是作为使节前来的真田幸村。", 37, 9130023, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我是直江兼续。", 37, 9130022, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我是山中幸盛。", 37, 9130024, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#哦哦，你们总算来了。你们能相信我这个敌人的文书，派出这么少的人数前来和我见面，我真不知该怎么感谢你们了。", 37, 9130025, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(57449);
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
};