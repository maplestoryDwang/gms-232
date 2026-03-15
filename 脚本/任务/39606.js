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
            cm.sendNormalTalk_Bottom("#face2#这也难怪，你还不熟悉这个地方。别担心，\r\n你在和我一起执行任务的过程中，慢慢去了解就好。", 36, 3001952, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#正巧遇到了一群乐师，向他们打听一下吧？\r\n看看是否能获得关于伯爵塞德里克的消息。", 36, 3001952, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在这种地方能打听到消息吗？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face4#在我们王国有句俗话：\r\n想知道什么消息，就去听听街上传唱的歌吧。", 36, 3001952, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#与伯爵相关的那些坊间传闻也是如此。\r\n嘻嘻……也就是说，我们能从他们的歌里得到线索！", 36, 3001952, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face6#噢，看样子他们调完弦了。……可为什么不开始演奏？\r\n似乎出什么问题了。", 36, 3001952, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年悄悄地走近街头演奏者，\r\n偷听他们的谈话后，又回来了。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#他们好像是因为收不到捐款，所以没什么演奏的热情。\r\n最近大家口袋都穷得叮当响，路上行人也不怎么掏钱了。", 36, 3001952, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline_Bottom("#face0#呼……我现在手上也没钱。\r\n得去附近弄点钱来。", 36, 3001952, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0##r#m410000322##k的#r#o2400601##k身上带着#b#i4036657# #t4036657##k。\r\n收集#b5个#k捐给广场乐师的话，他们也会振作起来的。", 36, 3001952, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我去去就来，你在这里等着。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你需要有人带路，我也一起去吧。", 36, 3001952, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#在这附近活动，我一个人就够了。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#不像某人，爬个墙还踩空。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face6#呃，你全看到了！？", 36, 3001952, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#布~？", 36, 3001960, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#嗯，包括你的白痴举动在内。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#好了，那我去了。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.forceStartQuest(39606, "");
                                                                                    cm.OnStartNavigation(410000322, 0, "", 39606);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39606.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#啊呀,你这么快就弄到捐款了吗？\r\n办事真麻利……不愧是我的骑士！", 36, 3001952, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊呀,你这么快就弄到捐款了吗？\r\n办事真麻利……不愧是我的骑士！", 36, 3001952, false, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我把银币投进了放在前面的捐款箱里。\r\n乐师们的脸上顿时有了喜色。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(993162011, 0, false)
                    }
                }
            }
        }
    }
};