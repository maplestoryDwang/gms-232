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
            cm.sendNormalTalk("……你们就是#p2420007#所说的那些人。因为我们也不能亏待受邀请的客人，但是说实话我们这里不欢迎你们。你们还是安静地离开吧。", 32, 2420010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("扎诺团长！他们是救了我的恩人！绝对可以相信！", 36, 2420007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("帮助你，那只是碰巧罢了，不能成为我们能相信他们的证据。是你太鲁莽了，#p2420007#。怎么可以把沙图团的据点随随便便就告诉别人……", 32, 2420010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("对、对不起！但是我认为他们能帮助我们，所以才……他们的实力的确很厉害！", 36, 2420007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那就更严重了！如果他们到处提起我们，我们还没有办法对他们怎么样，不是吗？你应该也知道，我们沙图团正在准备多么重要的事情！", 32, 2420010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face11# #b(……还以为能帮助我们，才到这里来的，没想到只是看到了内讧？烦死了。)", 44, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(……要打吗？)", 44, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b(先看看情况。)", 44, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("正因为是重要的事情，所以才需要有人帮忙，不是吗？虽然我们准备得很充分，但是仅仅靠我们的战力，#b袭击王宫#k可能会以失败而……喔！", 36, 2420007, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("你这个笨蛋！为什么不出去到处宣传，我们要攻打王宫啊！", 32, 2420010, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("咦？王宫……袭击？", 44, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("……这该怎么办……都已经知道我们的计划了……我们又不能攻击恩人……虽然很抱歉，你们只能留在这里等了。", 32, 2420010, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#face3#……别这么快就下定论。要袭击王宫吗？如果是的话我们也很有兴趣。因为你们实在是太烦了，本想回去的，但是我却听到了意外的惊喜？", 44, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face2#我是说#b想和你们联手#k。对了，丑话说在前头，你们可不要怀疑我们。让我们来这里的是你们，而且泄露情报的也是你们。来吧，你们也该找回理智了，我们从长计议吧。", 44, 2400005, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("他、他们绝对不是弱者！面对一群#o9300760#也若无其事地战斗过。团长，我觉得跟他们好好说比较好。他们不是本地人！他们没理由和王妃有关系。", 36, 2420007, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("……好吧，事到如今也只能这样。那么我就告诉你们，不过那之前要考验一下，毕竟这事对我们非常重要…… ", 32, 2420010, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("去找我们沙图团的#b#p2420009##k和#b#p2420008##k两位吧，如果通过了考验我就相信你们。", 32, 2420010, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("我呢？", 36, 2420007, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("你有资格公平审核吗！不能让你去，你除外！", 32, 2420010, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.updateInfoQuest(40105, "");
                                                                                        cm.forceStartQuest(40105, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40105.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.gainExp(140500);
            cm.forceCompleteQuest(40105);
            cm.dispose()
        }
    }
};