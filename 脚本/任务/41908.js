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
            cm.forceStartQuest(41907, "0");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("哎呀呀~神之子是两位，圣物也是两个！真是热闹哦！感觉来郊游似的，太高兴了？", 33, 2400009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……那也算圣物啊？他的性格也……", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("？", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……算了，没有一个能靠得住的家伙。只能我自己努力了……要调整这么多人数，肯定会非常累吧？一定要小心，不能打起来……", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你就是那个很啰嗦的另一个神之子吧！见到你很高兴！", 33, 2400009, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face0#谁啰嗦啊！？", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("哈哈，果然没错，啰嗦得和拉兹丽一模一样？", 33, 2400009, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("什么啊？！这呆呆的家伙，说谁啰嗦啊？！你自己还不是很呆嘛！", 33, 2400010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face1#嗯？你是说我呆~吗？是吗？", 33, 2400009, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b(虽然看起来有点不同，但是傻傻的反应的确和贝塔有几分相似。不对，等等！拉比斯这家伙说我和拉兹丽很像？……难道说圣物和主人的性格很接近？！)", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face1#干，干嘛？为什么盯着我看？哼！", 33, 2400010, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face7##b(我是这种性格？开玩笑吧……！怎么可能！)", 41, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("好了，你们知道如何使用圣物吗？圣物和普通的武器不同，管理方法也比较复杂。", 33, 2400009, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("要想好好使用我们，就得用心去学习！", 33, 2400010, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("我们会说明如何运用，先回到内心世界去吧。", 33, 2400009, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.updateInfoQuest(41908, "");
                                                                        cm.forceStartQuest(41908, "");
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.dispose();
                                                                        cm.warp(321190500, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41908.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("看到没？看到没？消灭怪物之后出现的那红色球体，对，就是你吸收的那个。遇到我们之前，你们应该也见到过。这其实是怪物的……冤魂？因为仇恨太深了，想要对你们报仇。如果一直能看到这个，就说明你们已经被鬼附身了……！", 33, 2400009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哈哈，开玩笑啦。这种玩笑，你们该不会生气了吧？喂喂，看你那表情是不是真的害怕了？那是什么东西？那就是#b武器点#k。是我取的名字，是不是有点土？", 33, 2400009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("反正武器点可以算是怪物留下来的力量，我们吸收之后就会变得更强。每个怪物必定能获得1点的武器点。但是，如果和怪物等级差太多的话，就不会有的。", 33, 2400009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("如果是首领怪的话，和等级无关，有很~多~很~多的武器点……", 33, 2400009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("可以获得……", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face0#……咦？看来我由于召唤稻草人，已经用尽了力气！使用武器点的方法#p2400010#会说明的。那么我就~", 33, 2400009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(41908);
                                    cm.setInGameDirectionMode(false, true, false);
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