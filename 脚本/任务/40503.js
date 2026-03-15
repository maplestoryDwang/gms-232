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
            cm.sendNormalTalk("你们回来啦？我一直迫切地等待着两位的到来。我为两位准备了一些很有趣的问题。我相信你们一定会喜欢的。", 32, 2460000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("就那么回答问题有点无聊，所以我制定了有趣的规则。好了，现在两位即将移动到#r我创造的空间之塔#k。", 32, 2460000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("如果你能在那里#b答对我出的谜题，就可以上升一层，如果答错就必须和怪物战斗#k。希望你能解开所有谜题……到达我所在的最上层。", 32, 2460000, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("啊啊，解释得太多就会变得没意思了。请移动到塔那里吧。我创造的……谜语之塔。", 32, 2460000)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(40503, "");
                            cm.forceStartQuest(40503, "");
                            cm.dispose();
                            cm.warp(326090110, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40503.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你们来到最顶层啦！两位果然厉害。发现了问题背后隐藏着的正确答案。为你们鼓掌~ ", 33, 2460000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face11#……要是没有全答对，不会把我关在这座塔里吧？", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哎呀，怎么会？我只是相信你俩一定可以答对我的谜题。", 33, 2460000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("好了，现在该怎么办呢？你答对了问题，要跟两位走吗？或者觉得很好玩，还想再试试？你是怎么想的呢？", 33, 2460000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你，真的是女神之泪吗？", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("天哪？你是什么意思啊？难道这个世界上还有假的女神之泪吗？", 33, 2460000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face11#……是真的的话，你就抓住我的手看看。你是真是假，只要抓住我的手，观察下时间之力就知道了。#p2400006#，你也观察仔细了。", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("嗯。", 41, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("你们的疑心真重……我真没想到我一直等待的人会是这样的人。但是没关系。我有信心。我们来握个手吧。", 33, 2460000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face11#……果然是假的。我再继续这样抽送时间之力的话，你可能会爆炸的。你是明知会那样，还那么自信满满地说你是女神之泪的吗？", 41, 2400005, false, true);
                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/rachel/0", 1, 1, 1, 0, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("你，你说什么。爆炸吗？还有，你说我是假的？我真的是女神之泪……", 33, 2460000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face11#闭嘴。", 41, 2400006, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("哇，真是可怕……我真的不知道这是怎么回事。我只是一直在等待着两位……", 33, 2460000, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("如果你想装的像#p2450000#那样被洗脑了的话，那就不要白费力气了。你觉得我不知道那洗脑药吗？我非常了解洗脑药所带有的独特香味。你身上没有那种香味。你是……威尔的手下？", 41, 2400005, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/rachel/0", 1, 0, 0, 0, 0)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("你比我想的还要聪明呢。也对，不然你也不能来到这里了……但是你还不够果断。如果是我的话，在知道对方是假货的瞬间，就会把对方制伏了。", 33, 2460000, false, true);
                                                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("因为你们没那么做，所以才给了我逃脱的机会啊，不是吗？好了，在走之前，我就把威尔的口信传达给你们吧。#b灯下反而黑#k。记住了吗？", 33, 2460000, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("小心叛徒？他说#r拥有蜘蛛之人#k 是威尔的人。", 33, 2460000, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.forceCompleteQuest(40503);
                                                                                            cm.forceCompleteQuest(40951);
                                                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial")
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("#face10#……叛徒……出现了？", 41, 2400006, false, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("#face11#…………", 41, 2400005, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                        cm.gainExp(41202000);
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
};