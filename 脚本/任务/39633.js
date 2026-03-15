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
            cm.sendNormalTalk_Bottom("#face0#之前大哥说要当王，我还以为他开玩笑的……\r\n但现在想想，大哥还真有成为一位好国王的潜质。", 36, 3001962, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#比如将自卫队团结一致的领导能力，誓要拯救王国的坚强意志！\r\n……当然，也不乏还有些草率的地方。", 36, 3001962, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#臭小子，你怎么能说大哥坏话呢！？\r\n应该说，大哥的发展潜力无穷。", 36, 3001963, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这两种说法意思一样嘛……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#啊，不纠结这个……离开之前，你有没有什么要拜托我们的？", 36, 3001962, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我想请你们多调查一下神王的骑士团。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#关于骑士团的信息，差不多就我们告诉你的那些了。", 36, 3001962, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#不、不过，我们会继续调查的。", 36, 3001963, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#回头我一定好好酬谢你们。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#哎，我们不能收你的酬谢！", 36, 3001963, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你可是我们大哥的骑士哦！？", 36, 3001962, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#客气的话就不多说了！", 36, 3001963, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#你有定下目的地吗？", 36, 3001962, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我打算到其他次元去。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#要去冒险岛世界的话，得到万神殿的大神殿去。\r\n但那地方敌视翼人，你自己多加小心。", 36, 3001962, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#去万神殿需要经过荒蛮终点站。\r\n去找广场上的特鲁比英，他会带你过去。", 36, 3001963, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#特鲁比英……知道了，那我走了。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#慢走哦，骑士！", 36, 3001963, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#我们会再联系你的！", 36, 3001962, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(要去其他次元得前往万神殿的大神殿。\r\n按照拉迪的指点，去找广场上的特鲁比英吧。)", 36, 3001951 - cm.getPlayer().getGender(), 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.forceStartQuest(39633, "");
                                                                                            cm.OnStartNavigation(410000300, 1, "3001931", 39633);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39633.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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