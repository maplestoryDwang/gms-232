var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.npc_ChangeController(3003151, "oid=48111", 770, -76, 12, 720, 770, 5, true, false);
            cm.npc_ChangeController(3003153, "oid=48112", 367, -76, 6, 346, 417, 0, false, false);
            cm.npc_ChangeController(3003154, "oid=48113", 299, -76, 9, 249, 306, 0, false, false);
            cm.npc_ChangeController(3003155, "oid=48114", 225, -76, 9, 175, 275, 0, false, false);
            cm.npc_ChangeController(3003166, "oid=48115", 770, -76, 12, 720, 770, 5, true, false);
            cm.Hidden_background("obj_01", 1, 0, 0, 0);
            cm.Hidden_background("obj_02", 1, 0, 0, 0);
            cm.Hidden_background("obj_03", 1, 0, 0, 0);
            cm.Hidden_background("obj_04", 1, 0, 0, 0);
            cm.sendNormalTalk("#b#h0##k！\r\n为了制作那什么#b三…明治#k，需要些什么啊？", 4, 3003151, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯…… 好像需要#b面包、色拉，还有肉饼#k……", 2, 3003151, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好的！那我们先制作#b面包和色拉#k吧！", 4, 3003151, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("刚刚你们所品尝的食物，上面和下面覆盖着其他食材的东西叫做#b面包和色拉#k。你们知道是什么味道吗？", 2, 3003151, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯…！知道！我们以前尝过类似的味道！", 4, 3003151, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("首先，请从五色花园的#b长角菠萝鹿#k那里搜集#i4034943:##b#t4034943#40个#k。也许可以做出面包…的味道！", 4, 3003151, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("对了…！在制作料理之前，我们要不要先决定#b料理的名字#k啊？之前我们一直把吃完料理后#b第一句说的话#k定为料理的名字！", 4, 3003151, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我觉得叫三明治就行了啊……", 2, 3003151, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("不行！这么棒的料理怎么能缺少一个#b有趣的名字#k呢~\r\n好了，小鸡们！你们帮帮旅行者吧！开动脑筋，想想有没有好点子吧~", 4, 3003151, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askMenu("我先来！好了！你来选吧！\r\n#b#L0#欧呕唉！#l\r\n#b#L1#嗬哦！#l#l\r\n#b#L2#都很奇怪啊！#l", 4, 3003153)
                                            } else {
                                                if (status === a++) {
                                                    if (b == 0) {
                                                        cm.updateInfoQuest(123999, "欧呕唉")
                                                    } else {
                                                        if (b == 1) {
                                                            cm.updateInfoQuest(123999, "嗬哦")
                                                        } else {
                                                            if (b == 2) {
                                                                cm.updateInfoQuest(123999, "都很奇怪啊")
                                                            }
                                                        }
                                                    }
                                                    cm.sendNormalTalk("#b" + cm.getInfoQuest(123999) + "！#k？你的选择很不错！", 4, 3003153, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("呃…这么奇怪的名字怎么……", 2, 3003151, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askMenu("好了~你看看我想出的名字怎么样~\r\n#b#L0#天啊？#l\r\n#b#L1#哦吼？#l#l\r\n#b#L2#现在够了！#l", 4, 3003154)
                                                        } else {
                                                            if (status === a++) {
                                                                if (b == 0) {
                                                                    cm.updateInfoQuest(123998, "天啊")
                                                                } else {
                                                                    if (b == 1) {
                                                                        cm.updateInfoQuest(123998, "哦吼？")
                                                                    } else {
                                                                        if (b == 2) {
                                                                            cm.updateInfoQuest(123998, "现在够了")
                                                                        }
                                                                    }
                                                                }
                                                                cm.sendNormalTalk("#b" + cm.getInfoQuest(123998) + "！#k？挺酷的！", 4, 3003153, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("嗯…你们随便吧……", 2, 3003151, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.askMenu("呵呵，呵呵呵~ 我…还有我想到的名字…！\r\n#b#L0#好吃的#l\r\n#b#L1#转转转#l\r\n#b#L2#感受妈妈的爱#l", 4, 3003155)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            if (b == 0) {
                                                                                cm.updateInfoQuest(123997, "天啊")
                                                                            } else {
                                                                                if (b == 1) {
                                                                                    cm.updateInfoQuest(123997, "哦吼？")
                                                                                } else {
                                                                                    if (b == 2) {
                                                                                        cm.updateInfoQuest(123997, "现在够了")
                                                                                    }
                                                                                }
                                                                            }
                                                                            cm.sendNormalTalk("#b" + cm.getInfoQuest(123997) + "！#k？…呵呵呵~ 很好，很好~ 转转", 4, 3003155, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("我没有说过那种话啊…………我还以为就你比较正常呢……", 2, 3003151, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("好的！那我们做的料理名就叫做！#b" + cm.getInfoQuest(123999) + "" + cm.getInfoQuest(123998) + "" + cm.getInfoQuest(123997) + "#k！", 4, 3003151, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("好了！我们现在开始制作料理吧！", 4, 3003151, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.forceStartQuest(34207, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#b#ho#！#k\r\n你已经集齐材料啦？用这些材料应该可以做出面包？的味道！！", 0, 3003160, false, false)
        } else {
            if (status === a++) {
                cm.gainItem(4034943, -40);
                cm.forceCompleteQuest(34207);
                cm.Hidden_background("obj_01", 1, cm.isQuestFinished(34208) ? 1 : 0, 0, 0);
                cm.Hidden_background("obj_02", 1, cm.isQuestFinished(34212) ? 1 : 0, 0, 0);
                cm.Hidden_background("obj_03", 1, cm.isQuestFinished(34214) ? 1 : 0, 0, 0);
                cm.Hidden_background("obj_04", 1, cm.isQuestFinished(34215) ? 1 : 0, 0, 0);
                cm.dispose()
            }
        }
    }
};