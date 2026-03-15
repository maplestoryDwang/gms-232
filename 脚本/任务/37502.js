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
            cm.askYesNo_Bottom("#face0#看来你已经休息充分了。伤也还好吧？", 36, 3004431)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没有大碍了。其他人呢？", 56, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#胡克和切奇在维修城墙。\r\n卡莱尔和塞伦负责整顿城内。", 36, 3004431, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我该做什么呢？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#现在最需要的是#b药品#k。听说库存快要不够了。", 36, 3004431, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##b黎明祭司#k他们说就算冒着危险，也想在城外多收集一些材料。", 36, 3004431, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("#face0#所以说，希望#h0#大人能护他们周全。", 36, 3004431)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#还有……", 36, 3004431, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#请你回来的时候，暗中打探一下关于#b塞伦的翅膀#k的情报。", 36, 3004431, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("嗯？", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#听说早前，就是塞伦执行护送圣剑任务的时候，受了很重的伤。\r\n当时应该是#b黎明祭司#k为她医治的。", 36, 3004431, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#请你打探一下她的翅膀伤势如何，是否一直在接受治疗，还有，是否有恢复完好的可能性。", 36, 3004431, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("你让我打听她翅膀的伤势，难道……\r\n塞伦有希望成为#b圣剑之主#k吗？", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#这个嘛。", 36, 3004431, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#就先当作#b“还有可能吧”#k。", 36, 3004431, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#请你前往海岸岩石带吧。我来收集情报。", 36, 3004431, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#各自忙完手头的事情，下午图书馆见。", 36, 3004431, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceStartQuest(37502, "");
                                                                                cm.updateInfoQuest(37500, "00=h0;11=h0;04=h0;05=h0;06=h0;25=h0;07=h0");
                                                                                cm.updateInfoQuest(37500, "00=h0;11=h0;04=h0;05=h1;06=h0;25=h0;07=h0");
                                                                                cm.OnStartNavigation(993150011, 1, "3004501", 37502);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37502.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#啊！对抗者大人，您好！", 36, 3004437, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#见到您真是太好了。我正犯难呢。", 36, 3004437, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(37502);
                    cm.dispose()
                }
            }
        }
    }
};