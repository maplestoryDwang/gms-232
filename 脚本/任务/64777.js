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
            cm.sendNormalTalk_Bottom("我总能听到有关你的事迹。#h0#。", 36, 9401021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b好久不见，马米。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("听说你结交了许多独特的伙伴。", 36, 9401021, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b大家给予了我很多帮助。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("哈哈，是这样吗。", 36, 9401021, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("不知道……我可不可以拜托你一件事？", 36, 9401021, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b嗯，好的。", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("是我个人的委托。", 36, 9401021, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b没关系，你请说。", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你计划前往地下9层吗？", 36, 9401021, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b是的，我不久前升级了，现在可以下去。", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("你可以……在那里帮我找到我的伙伴们的遗物吗？", 36, 9401021, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("我每天都会回想起那一天。尽管我也想亲自去拿回来，但我不能离开本部太久，也不想让依赖我的人们看见我过于感性的一面。", 36, 9401021, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("我想至少将遗物转交给他们的家属。", 36, 9401021, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b……我会帮你找到的。", 56, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("谢谢，谢谢…… ", 36, 9401021, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("如果你可以找来，我会给你丰厚的谢礼。", 36, 9401021, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceStartQuest(64777, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64777.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("找，找到了？", 36, 9401021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("原来如此，简的项链已经断了，修的法杖也毁坏了……汤姆的剑也已经锈迹斑斑。", 37, 9401021, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……谢谢。", 37, 9401021, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我会修理好，转交给他们的家属。", 37, 9401021, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("给你，我的谢礼。", 37, 9401021, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(64777);
                                cm.gainItem(2631534, 1);
                                cm.gainItem(4036654, -1);
                                cm.gainItem(4036655, -1);
                                cm.gainItem(4036656, -1);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};