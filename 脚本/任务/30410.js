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
            cm.sendNormalTalk_Bottom("嗯？是谁？赶紧滚开。", 37, 2074112, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#长得和刚刚路边上的人一模一样。", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？是弟弟派来的吗？\r\n我们已经不需要人手了。", 37, 2074112, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#……哦？那个人腰间的那个不就是#b发带#k吗？", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你说发带？\r\n是不是右边第二片花瓣掉了？", 37, 2074110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#哦……是！掉了大概一半吧！", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你，你们做什么~这发带是我的~\r\n你们不是工人吗！？", 37, 2074112, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这些家伙到底对青儿做了什么！\r\n青儿！青儿！你在哪儿？", 37, 2074110, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("到底是哪儿跑出来的家伙，居然来妨碍祭祀？\r\n我说！赶紧给我拦住这些家伙，不能让他们碰到#g祭物#k！", 37, 2074112, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.dispose();
                                                cm.warp(224005200, 0)
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
            cm.sendNormalTalk_Bottom("嗯？是谁？赶紧滚开。", 37, 2074112, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#长得和刚刚路边上的人一模一样。", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？是弟弟派来的吗？\r\n我们已经不需要人手了。", 37, 2074112, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#……哦？那个人腰间的那个不就是#b发带#k吗？", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你说发带？\r\n是不是右边第二片花瓣掉了？", 37, 2074110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#哦……是！掉了大概一半吧！", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你，你们做什么~这发带是我的~\r\n你们不是工人吗！？", 37, 2074112, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这些家伙到底对青儿做了什么！\r\n青儿！青儿！你在哪儿？", 37, 2074110, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("到底是哪儿跑出来的家伙，居然来妨碍祭祀？\r\n我说！赶紧给我拦住这些家伙，不能让他们碰到#g祭物#k！", 37, 2074112, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.dispose();
                                                cm.warp(224005200, 0)
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