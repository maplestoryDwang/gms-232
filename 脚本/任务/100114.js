var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("\r\n你好！#b#h0##k！", 9010010)
        } else {
            if (status === a++) {
                cm.sendNextPrev("\r\n充满了新冒险的岛！", 9010010)
            } else {
                if (status === a++) {
                    cm.sendNextPrev("\r\n你听说#b#e<大冒险岛>#k#n的消息了吗？", 9010010)
                } else {
                    if (status === a++) {
                        cm.sendNextPrev("\r\n据说#b#e<大冒险岛>#k#n最近成了渴望新冒险的勇士们的#e乐土#n！", 9010010)
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev("\r\n在那里还能见到传说中的冒险家#b#e奥本#n#k！", 9010010)
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev("\r\n#b#h0##k，那种地方你也当然不会错过，对吧？", 9010010)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("\r\n怎么样，#b#h0##k～？\r\n你对#e<大冒险岛>#n感兴趣吗？", 9010010)
                                } else {
                                    if (status === a++) {
                                        cm.sendNext("\r\n好的！在#b#e<大冒险岛>#k#n可以通过各种冒险，\r\n获得#b#e<大冒险币>#k#n！", 9010010);
                                        cm.updateInfoQuest(100161, "lv=1");
                                        cm.updateInfoQuest(500617, "lv=1");
                                        cm.teachSkill(80000584, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNextPrev("\r\n把#b#e<大冒险币>#k#n作为努力冒险的证据 \r\n交给奥本，就能成为#e奥本认可的冒险家！#n\r\n\r\n获得#b#e<大冒险等级>#k#n！", 9010010)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNextPrev("\r\n刚到大冒险岛的时候，\r\n等级会被自动定为#b#e<初级>#n#k！", 9010010)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNextPrev("\r\n啊，对了！\r\n\r\n#b#e狩猎怪物#k#n也可以说是\r\n一种冒险！", 9010010)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNextPrev("\r\n因此为了搜集#b#e<大冒险币>#k#n，\r\n狩猎的时候决不能随便应付！", 9010010)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNextPrev("\r\n好了！那就去#b#e<大冒险岛>#k#n\r\n体验精彩的冒险吧！", 9010010)
                                                        } else {
                                                            if (status == a++) {
                                                                cm.warp(993080000, 0);
                                                                cm.forceStartQuest();
                                                                cm.forceCompleteQuest();
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
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose()
        }
    }
};