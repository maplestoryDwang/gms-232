var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h1;33=h0;34=h0;52=h1;35=h0;36=h0;29=h1");
            cm.sendNormalTalk_Bottom("找到了，江！", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#呃啊，透明魔法破解了？", 36, 3003406, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("少废话，赶快给我钱包。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#呃，那好吧……呀！！", 36, 3003406, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face11#孩子们，吃饭了！！", 37, 3003406, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#喵喵喵喵！！！咳咳！！", 37, 3003424, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("哇啊，我的钱！！还不给我吐出来？！", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#怎么能轻易还给你呢。哈哈哈。快啊。\r\n再磨蹭，小猫们可就全跑了！", 37, 3003406, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("呃呃呃，别让我抓到你！！", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face9#记住，大盗江永远都有#b两手准备#k！\r\n好，那再见了！！！", 37, 3003406, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h0;34=h0;52=h1;35=h0;36=h0;29=h1");
                                                    cm.forceStartQuest(34253, "");
                                                    cm.sendNormalTalk_Bottom("#face0#喵喵！！咳咳！！", 37, 3003424, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("必须赶快把那些家伙吞下的钱币找回来！", 56, 0, true, true);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#喵喵喵喵~！", 36, 3003424, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呼，终于找回来了。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("江，别让我抓住你。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(940204003, 0, true)
                    }
                }
            }
        }
    }
};