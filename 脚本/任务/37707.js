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
            cm.sendNormalTalk_Bottom("#face0#这次会是佩皮等待的另一半吗？", 36, 3004732, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("佩皮？", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯，是这里的一个居民。正在等待命运中的另一半。", 36, 3004732, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你在帮他寻找吗？", 56, 0, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯，我也在找某个人，所以顺便帮着找一下。", 36, 3004732, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你在找谁呢？", 56, 0, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯……在我的记忆中有个若隐若现的太阳。", 36, 3004732, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我正在寻找我的太阳。", 36, 3004732, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("太阳…… 怎么感觉好像是很厉害的东西。", 56, 0, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#没错，对我来说是非常重要的东西。我想也许是那个太阳创造出了我们。", 36, 3004732, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我们身上的纽扣，不也和太阳一样长得圆圆的吗？", 36, 3004732, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#见到……见到太阳之后……", 36, 3004732, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("见到之后？", 56, 0, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#……虽然还没想好要干什么……但见到之后应该就知道了……", 36, 3004732, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.askAcceptDecline_Bottom("#face0#这里的事情都结束了。我们一起回村子吧？\r\n#r（接受时，立即移动。）#k", 36, 3004732, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.updateInfoQuest(37700, "00=h1;01=h0;02=h0;03=h1;26=h0;81=h1;36=h0;37=h0");
                                                                        cm.updateInfoQuest(37700, "00=h1;01=h0;02=h0;03=h1;04=h1;26=h0;81=h1;36=h0;37=h0");
                                                                        cm.updateInfoQuest(37700, "00=h1;01=h0;02=h0;03=h1;04=h1;05=h1;26=h0;81=h1;36=h0;37=h0");
                                                                        cm.dispose();
                                                                        cm.warp(993176802, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37707.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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