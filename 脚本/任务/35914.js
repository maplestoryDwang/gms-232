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
            cm.sendNormalTalk_Bottom("#face0#我有个用来找东西的罗盘。\r\n只要把与想找的东西有关的东西放上去,它就会指出方向。", 36, 1013351, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#要是感兴趣,就跟我来。\r\n就在房子后面,不用走太远。", 36, 1013351, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##b(和想找的东西有关的东西……\r\n那么把遗物放上去,也许就能找到某种和遗迹有关的东西。)#k", 36, 1013358, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(35914, "");
                        cm.updateInfoQuest(35948, "00=h0;10=h1;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                        cm.updateInfoQuest(35948, "00=h0;10=h0;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                        cm.setPartner(1, 1013350, 80002700, 0);
                        cm.setPartner(1, 1013351, 80002701, 0);
                        cm.OnStartNavigation(100051030, 1, "1013321", 35914);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35914.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#哎呀,不久前废墟发出了很大的怪声,所以……\r\n罗盘碎掉了。", 36, 1013351, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那可是不管什么东西都能找到的家伙,真可惜。\r\n不过如果能找到所有碎片重新拼好,应该还能启动。", 36, 1013351, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我,我……很忙,所以一直没去找……\r\n如果你想启动罗盘,就必须找齐碎片,咳咳。", 36, 1013351, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#碎片掉在哪里了呢？", 36, 1013358, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#那,那个……", 36, 1013351, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(35914);
                                cm.gainExp(1275);
                                cm.gainExp(543);
                                cm.setPartner(0, 1013351, 0, 0);
                                cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                                cm.sendNormalTalk_Bottom("#face0#如果你愿意听我的命令……不,接受我的请求,我就告诉你。\r\n别皱眉头。其,其实也没那么难。", 36, 1013351, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我好像说过吧,收集古董是我的爱好。\r\n但是……自从罗盘坏掉之后,就没法找到新的古董了。", 36, 1013351, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#所以必须通过其他方法来收集古董,嗯哼。\r\n这一带的怪物也会掉落古董,呵呵……", 36, 1013351, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline_Bottom("#face1#你只要帮我从#r#o2300203##k身上搜集#b15个#k#b#i4036527# #t4036527##k就行。\r\n陶瓷兔是#r#m100051022##k很常见的怪物。", 36, 1013351, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#陶瓷兔拥有的碎片是我喜欢的收藏品。\r\n好的,那就拜托了,呵呵……", 36, 1013351, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(35915, "");
                                                    cm.OnStartNavigation(100051022, 0, "", 35915);
                                                    cm.npc_LeaveField("oid=895");
                                                    cm.npc_LeaveField("oid=897");
                                                    cm.npc_LeaveField("oid=898");
                                                    cm.dispose();
                                                    cm.warp(100051022, 2, false)
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