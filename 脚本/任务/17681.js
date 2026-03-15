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
            cm.sendNormalTalk_Bottom("你来了啊，#h0#。我正在等你。", 36, 1540450, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("您好，女皇大人，我刚刚回来。", 56, 1101000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("再次见到你，我很高兴。你这段时间过得如何？其实之前有段时间没能联系上你，我还担心来着。", 36, 1540450, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("是的，发生了很多事情。虽然我在那里结交了新的朋友，但是我也被卷入了很多复杂的事件中，发生了一些让人头疼的事情。", 56, 1101000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("真是辛苦你了。那么，凯梅尔兹实际上是个怎样的地方？", 36, 1540450, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嗯，那里比我想象中要更加充满活力。绿色大自然和凉爽的风……秀丽的风景……在那里生活的许多人……还有他们专属的许多事情……", 56, 1101000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("真是个美丽的地方啊，我以后也想去一次呢。", 36, 1540450, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("啊，这是凯梅尔兹共和国首领大人的亲笔信。他让我交给女皇大人。", 56, 1101000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#给我吗？", 36, 1540450, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("是的，因为这是给女皇大人的信，所以我不知道里面的内容，但我想这应该是为了和平的信件。", 56, 1101000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("原来如此，真是辛苦你了。看来我把这件事委托给#h0#真是太正确了。这个成果将帮助凯梅尔兹共和国和整个冒险岛世界。这都是#h0#的功劳。", 36, 1540450, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("您过奖了。", 56, 1101000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("这次你也没有辜负我的期待，真的谢谢你。#h0#，你的存在一直都是我的巨大支柱。", 36, 1540450, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face2#之前发生了那么多辛苦的事情，请你好好休息吧……到我再次需要#h0#的帮助之前哦，呵呵。", 36, 1540450, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("对了，我为#h0#准备了小礼物。请你去找南哈特吧。", 36, 1540450, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(17681, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17681.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("你来了啊，从你的脸上就能看到你很辛苦啊。", 36, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("真是多亏了某人啊。", 56, 1101002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("什么某人啊，你这说的像是有哪个人特意让你受苦了啊。你的表情似乎是在说我就是那个人啊？", 36, 1540451, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……究竟帕尔巴特是什么人，你给了他什么才让他带我到凯梅尔兹的？还有，一开始去凯梅尔兹的船本身……", 56, 1101002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("请你不要再说这些没营养的话了。最终你不是没什么损失吗？而且还交到了好朋友。当然，我并没有预料到这一点。", 36, 1540451, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b(……我感觉这次也被这个人玩弄于股掌之中啊。)#k", 56, 1101002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("总之，辛苦你了。委托你做事的时候，总是有好结果呢。看来这就是意外之喜吧。", 36, 1540451, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("哎呀，我说错了，这都是你有实力的结果啊。", 36, 1540451, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b(……我居然忘了让女皇教训南哈特……)#k", 56, 1101002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("对了，这个是女皇大人为了你准备的小小奖励。\r\n\r\n#b#i2049702:##t2049702##k\r\n#b#i2431935:##t2431935##k\r\n#b#i2431936:##t2431936##k", 36, 1540451, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("还有，你从凯梅尔兹带来的书信里，还附有这样的东西。你可得好好保管它。\r\n\r\n#b#i1142981:##t1142981##k", 36, 1540451, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(17681);
                                                        cm.sendNormalTalk_Bottom("#face0#而我的谢礼嘛……\r\n以后我们一起去凯梅尔兹旅行吧。你不是说那里风景很秀丽吗。", 36, 1540451, true, true);
                                                        cm.gainItem(1142981, 1);
                                                        cm.gainItem(1302315, 1);
                                                        cm.gainItem(2049703, 1);
                                                        cm.gainItem(2433815, 1);
                                                        cm.gainItem(2433816, 1);
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
};