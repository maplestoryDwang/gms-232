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
            cm.sendNormalTalk_Bottom("#face0#殿下好像非常生气……", 36, 3003408, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这可怎么办？一直无法解决排斥反应……", 36, 3003408, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#难道大神官也对此束手无策？", 36, 3003408, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("有事吗？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("啊，夏伊大人。事出突然，目前必须赶快准备实验。\r\n你能帮忙找些实验材料吗？", 36, 3003408)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("可以啊。", 56, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#只要去#b影舞之地3或4#k找到#b装着红色溶液的试剂瓶#k就可以了。", 36, 3003408, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.OnStartNavigation(450006230, 0, "", 0);
                                        cm.forceStartQuest(34261, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose();
            cm.warp(940204006, 0, true)
        }
    }
};