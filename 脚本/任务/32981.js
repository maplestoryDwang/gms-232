var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("米露？你在这里干什么？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#艾特有话要我转告你，所以我在这里等着。他说会在#b#m307000230:##k等你。", 37, 2560002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("谢谢你，米露。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#啊，等等。", 37, 2560002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我想问一下……你在吃影子中和剂吗？", 37, 2560002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯？那当然。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#但是为什么……不，别忘了吃。\r\n要不然就会变成影子怪物，哈哈。", 37, 2560002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯，谢谢你，米露。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(32981, "");
                                                cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h1;13=h2;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                                cm.OnStartNavigation(307000230, 0, "", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("你是在……睡觉吗？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face15#你又迟到了。", 37, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你怎么每次都知道我来了？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face15#这个嘛～说出来就没意思了。如果你乖一点，我就想一想。啊～", 37, 2560003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("还要我怎样啊……", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h1;13=h1;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                cm.updateInfoQuest(32981, "exp=1");
                                cm.gainExp(550003);
                                cm.forceCompleteQuest(32981);
                                cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h0;13=h1;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};