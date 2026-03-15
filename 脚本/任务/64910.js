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
            cm.askYesNo_Bottom("那我们就现在立刻动身，前往他们所在的#b藏身处#k吧，#h0#？", 36, 9401071)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(64939, "map=" + cm.getMapId());
                cm.forceStartQuest(64910, "");
                cm.dispose();
                cm.warp(867142000, 0, false)
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64910.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#h0#！再次欢迎你来到#b藏身处#k。\r\n#b匹比#k和其他的#b拟真机器人#k朋友们也都在这里。", 36, 9401071, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("再次感谢你能来帮助我们！你是我们的#b救世主#k！", 36, 9400433, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好久不见。", 36, 9401072, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哇哇哇！是#h0#！你有没有带好吃的来呀？", 36, 9400439, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#h0#，你好。你看起来身体倍儿棒呢。", 36, 9400438, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("在这多事之秋，你过得还好吗？\r\n你这身体可真结实。只有这样才能成为我的对手……", 36, 9400442, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那个……阿特利埃建筑里到底发生什么事了？", 56, 9401072, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("你给他看那个视频了吗？", 36, 9401072, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("当然了。虽然我太害怕了，看的时候捂住了眼睛……", 36, 9401071, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("最后看到的那些像是#b杀人兵器#k一样的智能机器人到底是什么……", 56, 9401072, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我敢保证，在阿特利埃制作的产品中没有那些东西。\r\n肯定是在阿特利埃#b被封锁后#k出现的。", 36, 9401072, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("但那个建筑现在不是空空如也吗？", 56, 9401072, 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("没错，在克拉尼亚逃走的瞬间，所有人都离开了这里。\r\n虽然我们俘虏了几个人，但大部分都逃走了。\r\n也就是说，现在#r工厂内空无一人#k……", 36, 9401072, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("这个人叫#b坤#k，曾被关押在阿特利埃工厂里面。不久前来到了藏身处。\r\n坤，你能详细说明一下吗？", 36, 9401071, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("我来了，工厂。从深处到这里的藏身处，来了。", 36, 9401086, 1, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("嗯？讲话有些奇怪呢……？", 56, 9401072, 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("很遗憾，他现在正遭受严重后遗症的折磨……\r\n如你所见……#b身体的大部分被改造成了机器#k。甚至连#b大脑#k……可怜的人啊……", 36, 9401071, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("我看他倒在附近森林里，就把他带回来了。", 36, 9400434, 1, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("告诉了我。拟真机器人善良……出口……在哪里。我出来了。=", 36, 9401086, 1, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("就算能再次张口说话，也还需要进行大量维修。\r\n你就当他的大脑大部分是机器部件吧。", 36, 9401072, 1, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("竟然被改造了……这怎么可能呢？", 56, 9401072, 1, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("被改造了。我的身体。部分。\r\n 因为工厂，阿特利埃的。#r又运作了。#k", 36, 9401086, 1, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("你说阿特利埃工厂重新运作了？这怎么可能？", 56, 9401072, 1, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("电源。确实。断了。匹比和杰斯。\r\n但是又动了。有人。留在。那里。", 36, 9401086, 1, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("什么……？是谁留在了工厂里？\r\n有没有可能是工厂错误启动了呢……", 56, 9401072, 1, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("没有。杰斯和我反复地查看过许多遍了。\r\n就算杰斯不知道，但我已经清楚确认过了，肯定没错。\r\n因为设置了强力#b暗号#k，要想重新启动工厂的话，必须要把它解开。", 36, 9401072, 1, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("世上没人能解开匹比的暗号。但是……", 36, 9401071, 1, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("我本想再次停止工厂的运作，但失败了。\r\n强力的防御密码甚至都不允许我靠近。", 36, 9401072, 1, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("虽然不知道对方是谁，但他肯定很聪明……比我，不，#b比任何人都要优秀。#k", 36, 9401072, 1, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("他。做了。很简单。\r\n开始的一切……那个老板。离开阿特利埃时。我们也逃跑了。像我这样的工作人员。", 36, 9401086, 1, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("但是。被抓了。然后。被改造。可怕。\r\n用机器部件，身体被改成，拟真机器人一样。就是那个机器……", 36, 9401086, 1, 1)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("说了。为了打仗。为了……更好的世界。好世界。", 36, 9401086, 1, 1)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("知道了。藏在那里……工厂四周。\r\n无数双……眼睛……盯着。一直……盯着……", 36, 9401086, 1, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("那是……那是……#b那#k是……\r\n呃啊啊啊啊！", 36, 9401086, 1, 1)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("哎，又勾起那时候的记忆了……让他休息一会儿吧。", 36, 9401071, 1, 1)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                                                                                                        cm.forceCompleteQuest(64910);
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