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
            cm.sendNormalTalk_Bottom("那个…", 37, 9400601, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你好，我是这家商店的主人，我叫艾尔巴。", 37, 9400601, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("上次也介绍过，是把我带到这里的恩人。", 37, 9400586, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我住在森林小屋，经常来往与斯库亚斯的杂货店，买很多东西。", 37, 9400586, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("后来我有好几个月没来，是他记得我并过来找到我的。", 37, 9400586, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b真是了不起。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("作为商店的主人，记住每位顾客的脸，那是理所当然的事情。", 37, 9400601, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("有很多人来我们的商店… 这里就像是一个各种消息的集散中心一样。", 37, 9400601, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("所以… 我可以对刚才 #h0# 勇士的问题作出回答。", 37, 9400601, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b刚才的问题… 你是说可疑的人？", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("当然，不是我亲眼看到的。", 37, 9400601, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("大概6个月前，有个人去森林里采药，说是发现了一个可疑的人。", 37, 9400601, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("这仿佛是个非常遥远的故事，我都差点忘记了。不过刚才听到 #h0# 的问题，就突然想起来了。", 37, 9400601, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b能告诉我详细的情况吗？", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("嗯… 听说是穿着一套白色的盔甲，没有漏出一丝皮肤。看到的人都羡慕的说，貌似能穿透暴风雪一样。", 37, 9400601, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("但是他们不是一个人。原以为他们会瞬间移动，但是实际上是几个穿着相同的人。", 37, 9400601, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#b… 一模一样啊… ", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("啊？", 37, 9400601, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#b还有一个人也见过。", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("真的吗？", 37, 9400601, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#b能否知道是谁告诉你这个故事吗？", 57, 0, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("是去森林寻找妻子的人，但现在还没回来。", 37, 9400601, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b啊… ", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#b感谢你，艾尔巴。", 57, 0, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#b(…阿尔西说的话原来是真的啊。)", 57, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.updateInfoQuest(64039, "chk1=1;chk2=1");
                                                                                                                cm.forceCompleteQuest(64113);
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