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
            cm.sendNormalTalk_Bottom("#face2#这里是实验室，而那一头就是仓库~", 36, 2052009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#仓库？", 36, 2052004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#在那里可以找到我们#bUFO的设计图#k，\r\n设计图上还标注了#b通风管道#k。", 36, 2052009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#通过通风管道潜入操纵室？\r\n这是个好主意！", 36, 2052000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#这最适合变小的你们了，是不是？", 36, 2052009, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#很好，别再拖延了，我们进去吧~", 36, 2052005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#有一个问题~从这里开始就是#r管控区#k了~\r\n凭我的权限是打不开这扇门的，得从#b里面#k打开才行……", 36, 2052009, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo_Bottom("#face0#嗯，我有个好主意，把我举到通风口处。\r\n#b(接受时自动前往)", 36, 2052001)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(3484, "");
                                            cm.dispose();
                                            cm.warp(221030541, 0)
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
            cm.sendNormalTalk_Bottom("#face0#哎哟，有救了。", 36, 2052009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#设计图也找到了，现在就只剩下继续前进了。", 36, 2052000, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(3668312);
                    cm.forceCompleteQuest(3484);
                    cm.dispose()
                }
            }
        }
    }
};