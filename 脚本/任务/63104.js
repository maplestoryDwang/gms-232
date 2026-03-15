var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("什么？下宝物雨了？在哪里？都给我让开！哎……那不是我的宝物吗？？", 5, 9400313, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("这是怎么回事？我的宝物为什么会？？混账！你们全给我放下！那是我的宝物！！", 5, 9400313, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("哎呦喂……我破产啦……我的宝物哦……呜呜……我多辛苦才收集到的……", 5, 9400313, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("#b(还多辛苦收集，都是通过非正当手段攫取来的。)", 3, 0, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk("噢，这是你干的吧。没想到你真的成功了。", 5, 9400314, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk("#b这点小事不算什么。哈哈", 3, 0, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk("多亏了你，其他人全都非常开心。这都是你的功劳。", 5, 9400314, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk("#b别客气。只要大家都开心就好。", 3, 0, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk("谢谢你这么为我们着想。以后我再也不跟人打赌了。", 5, 9400314, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk("#b是的。以后别打赌了。对了……当时你们打了什么赌？", 3, 0, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk("啊，赌的是看谁能不吃东西坚持得更久。", 5, 9400314, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk("#b……什么？", 3, 0, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk("你想啊，人不吃东西怎么能撑得住。肚子饿当然得吃。", 5, 9400314, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk("#b啊……。那阿尔玛因到底饿着肚子撑了多久才赢了打赌呢？", 3, 0, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk("嗯……不，情况有点不同。我们大多数人都是因为偷偷吃东西被逮到才输掉的", 5, 9400314, true, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk("#b……啊？这样说的话……阿尔玛因算不上利用非正当手段夺取财物啊？", 3, 0, true, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.sendNormalTalk("话不能这么说。他比我们更耐饿这点很可疑不是吗？你看他那么胖", 5, 9400314, true, true)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk("#b这……这哪有不正当因素……", 3, 0, true, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.sendNormalTalk("总之辛苦你了。托你的福，人们都开心起来了。", 5, 9400314, true, true)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk("#b………………。", 3, 0, true, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.sendNormalTalk("还有，这是给你的礼物（递过钥匙）", 5, 9400313, true, true)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                var a = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                                                                                                cm.getPlayer().getTopMsgByItem(4036001, "获得了可以开启巨门的钥匙。(" + a + "/12)");
                                                                                                cm.forceCompleteQuest(63104);
                                                                                                cm.gainItem(4036006, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63104.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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