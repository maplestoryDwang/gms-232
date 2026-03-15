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
            cm.sendNormalTalk_Bottom("喂！这里很危险！\r\n等下和我们一起出去吧。", 56, 9401085, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊，是#h0#。你比想象中来得晚呢。", 36, 9401085, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你认识我……？\r\n你也知道我要来？", 56, 9401085, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我不知道，不过#b赛恩#k知道。", 36, 9401085, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("但是赛恩知道的我都知道。\r\n所以我应该说自己知道吗？", 36, 9401085, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("什么……意思？", 56, 9401085, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#果然就像赛恩说的那样，#h0#理解能力极差。哈哈哈。\r\n被赶出#b赛恩的巢穴#的表情真的值得一看呢。", 36, 9401085, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#h0#，他……好像不是人类。", 36, 9400436, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯？什么意思？", 56, 9401085, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("身体构成物质和我这样的拟真机器人一样。\r\n但是……我从没见过这种型号。", 36, 9400436, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("啊，被发现了。我本来想再逗你们一会儿的，真没意思。", 36, 9401085, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("你到底是谁？", 56, 9401085, 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("我叫#b斯卡伊#k，赛恩也叫我672号。\r\n#h0#，你要是愿意，也可以这样叫我。", 36, 9401085, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("斯卡伊……？我没有在阿特利埃的宣传材料上，看到过你这样的拟真机器人呢……", 56, 9401085, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("当然了。因为我不是克拉尼亚制造出来的。", 36, 9401085, 1, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("什么……？", 56, 9401085, 1, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("我是#b赛恩制造出来的。#k", 36, 9401085, 1, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("赛恩不是想向人类发动#b战争#k吗。\r\n所以他制造出来了骇人的武器以及可怕的兵器。", 56, 9401085, 1, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("但是……为什么要制造你这样的#b拟真机器人#k呢？", 56, 9401085, 1, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#h0#，我告诉你一个秘密。", 36, 9401085, 1, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("其实……", 36, 9401085, 1, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("……？", 56, 9401085, 1, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#h0#、赛恩，都……都是#b笨蛋#k。", 36, 9401085, 1, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("……？？？", 56, 9401085, 1, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("赛恩是个笨蛋。虽然他处心积虑想要消灭人类，但他却又无比渴望#b成为人类。#k", 36, 9401085, 1, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#但现在却又被关在一个巨巨巨巨大的铁疙瘩里，哈哈哈哈！\r\n所以他才制作出了我。", 36, 9401085, 1, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("他想……进到你身体里？", 56, 9401085, 1, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#但我绝不会让他进来的呦。\r\n不管怎么#b囚禁我#k，威胁我折磨我，我也绝对绝对不会让他进来的呦。", 36, 9401085, 1, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("那……怎么可能？赛恩那么聪明且强大。\r\n对付你岂不是易如反掌……", 56, 9401085, 1, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("貌似是克拉尼亚曾经计划开发的#b共同客体#k系统。\r\n为了方便使用，她研发了两个拟真机器人可以互相自由交换精神的技术。", 36, 9401084, 1, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("但由于存在致命的#b缺陷#k，最终她没能如愿……", 36, 9401084, 1, 1)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("没错。奥利弗不是笨蛋呢。\r\n但克拉尼亚很笨，她只研发到如果不#b同时发放信号#k，就绝对不能进行精神交换的程度。", 36, 9401085, 1, 1)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("所以，就算赛恩再怎么敲击我内心的大门，我也绝对不会向他敞开的。", 36, 9401085, 1, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#h0#，我们还是快点找到备份文件吧……", 36, 9401084, 1, 1)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("啊，对了！\r\n但是……本体的电源已经被关闭了……怎么样才能再次开启呢……", 56, 9401085, 1, 1)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#噗……！", 36, 9401085, 1, 1)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("你笑什么……？", 56, 9401085, 1, 1)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("你需要那个？那是赛恩早已丢弃的外壳。\r\n不过那个出故障了，现在完全是一堆破铜烂铁。", 36, 9401085, 1, 1)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("但我知道如何能开启它呦。\r\n如果你能帮我#b离开这里#k，我就会告诉你方法。", 36, 9401085, 1, 1)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                                                                                                                        cm.forceCompleteQuest(64916);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64916.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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