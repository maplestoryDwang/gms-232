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
            cm.sendNormalTalk_Bottom("#face0#博士，通讯设备已经连上了。", 36, 2052007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#辛苦了，那现在召唤#bUFO#k了……", 36, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#你说召唤UFO吗？？", 36, 2052001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#阿英制作了信号探测器，打探出了那帮家伙的#bUFO呼叫机#k的位置。", 36, 2052006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#哇~阿英可真厉害啊？我还以为她总会搞砸机器呢。", 36, 2052002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#我可没有总是，没有总是！", 36, 2052003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我们也能启动那个呼叫机吗？", 36, 2052000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#虽说生物方面应该不需要什么其他的程序，不过问题就在#b冒险岛金刚#k上，\r\n#b行李#k是必须有票才行的。", 36, 2052003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#考虑到冒险岛金刚的重量……\r\n估计怎么也得有个#b10张#k才行吧。", 36, 2052003, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("#face0#来，还傻愣着做什么，\r\n快去#b外星章鱼坦克#k那里收集#b10张票#k吧。", 36, 2052006)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(3480, "");
                                                    cm.sendNormalTalk_Bottom("#face0##fs25#突击！！", 36, 2052006, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#fs25##b冒险岛金刚！！！#k", 36, 2052007, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我说，该死？我的台词呢？！", 36, 2052006, true, false)
                                                        } else {
                                                            if (status === a++) {
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
            cm.sendNormalTalk_Bottom("#face0#辛苦了，10张都顺利收集回来了呢。", 36, 2052007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#现在只要去#bUFO呼叫机#k那里就可以了。", 36, 2052007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#UFO呼叫机就在#b鲁斯韦尔草原4#k山坡上，就在左边，赶紧过去吧。", 36, 2052003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那我就回本部了，祝大家好运。", 36, 2052007, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(3480);
                            cm.gainItem(4036070, -10);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};