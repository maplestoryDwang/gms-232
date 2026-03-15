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
            cm.sendNormalTalk("啊哈哈哈哈，哈哈哈哈！我体内的黑暗正在沸腾！哈哈哈……\r\n\r\n呼……有时候我自己都难以控制自己，看来超越了种族界限的我还不够完美啊！", 4, 9400961, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这么说来，好像我还没有进行正式的自我介绍呢？我叫做黑女巫-是黑暗魔法的最强者！", 4, 9400961, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯？你刚才为什么要那样？！你想尝尝我的巨型黑暗导弹吗？！", 4, 9400961, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b……噗", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……算了，你不能进入-我很伤心！", 4, 9400961, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b哪里？", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("什么哪里啊！你听了刚才我说的话吗？当-然-！就是这个沙漠最火热的狩猎场，#r#e燃烧的日蚀地带#n#k！", 4, 9400961, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("反正因为在广阔沙漠中出现的辉煌灿烂和日蚀的气息，喜欢闪亮东西的沙漠矮人现在陷入了超级兴奋的状态。\r\n……你能去把他们消灭掉吗？……哈哈", 4, 9400961, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b……难道？！", 2, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("正是如此！可以获得大量的经验值哦！\r\n因为你也是微不足道的人类，所以从一开始是无法待很久的。一开始#b每30只能获得110%的额外经验值#k，如果不断参与，#b45分钟内就能获得足足140%的额外经验值#k哦！呵呵，#fs14#呵呵#fs20#哈哈哈！#fs12#\r\n怎么样？你现在后悔刚才嘲笑我的事情了吧？", 4, 9400961, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("你准备好进入这火热的狩猎场了吗？！你准备好消灭被日蚀的气息所侵蚀的怪物了吗！咳咳，准备好的人尖叫起来！！！！！", 4, 9400961, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b(唔……再惹他发火可就糟了……先附和他一下吧。)#k", 2, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#b#fs30#是！！！！！！！！！！", 2, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("哈哈哈，好啊，你的喊声让我体内的黑暗都躁动不安了起来呢，那我就原谅你刚才的失误吧！\r\n#b#e如果你想进入这火热的狩猎场，那就在本周活动中选择[日蚀地带]吧……#k#n哦呵呵！", 4, 9400961, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.setNumberForQuestInfo(500831, "tuto2", 1);
                                                                    cm.forceCompleteQuest(64684);
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