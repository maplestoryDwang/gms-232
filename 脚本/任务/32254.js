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
            cm.sendNormalTalk("卡奥？来得正好。帮帮我吧！", 1, 1520003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我不是卡奥。", 3, 1520003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("什么，不是卡奥？别说谎了。这圆鼓鼓的脸蛋……你分明就是卡奥！", 1, 1520003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不是的。我叫#h0#。", 3, 1520003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是吗？呃，好吧……知道了。就当你不是卡奥。不过你来得正好。帮我抓住那只兔子。", 1, 1520003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我凭什么得帮你呢？", 3, 1520003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("看，看……那里，那个蒙着脸的家伙！一看就觉得很可疑，不是嘛。", 1, 1520003, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("要说可疑，你也很可疑。凯琳已经拜托我，让我对你进行调查。", 3, 1520003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo("凯琳？这……，难道那家伙已经察觉到了？\r\n知道了，你现在帮助我的话，我就告诉你一切。现在的首要任务，就是不能让那只兔子逃走！", 1, 1520003)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("谢谢你！后面的事情，就交给我吧~", 1, 1520003, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_LeaveField("oid=4549135");
                                                    cm.playerMessage(-1, "请打倒可疑的兔子。");
                                                    cm.forceStartQuest(32254, "");
                                                    cm.spawnMobLimit(9300802, 1, -1191, 125, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32254.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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