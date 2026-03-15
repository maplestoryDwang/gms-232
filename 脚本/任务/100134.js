var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    var a = -1;
    selectionLog[status] = b;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("\r\n#b#h0##k！\r\n你听说有关#b#e大冒险岛#n#k的消息了吗？", 9010010)
        } else {
            if (status === a++) {
                cm.sendNextPrev("\r\n冒险家们聚集的岛！\r\n必须做好准备才行哟！", 9010010)
            } else {
                if (status === a++) {
                    cm.sendNextPrev("\r\n在出去冒险之前，需要做好什么准备呢？", 9010010)
                } else {
                    if (status === a++) {
                        cm.sendNextPrev("\r\n那就是……\r\n\r\n#fs18#        #b#e经验值！！#n#k", 9010010)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("怎么样，#b#h0##k～？准备好带上我的#e#b经验值包#k#n，来一场真正的冒险吧！", 9010010)
                        } else {
                            if (status === a++) {
                                cm.sendOk("\r\n很好！待我准备一下，稍候再来找我吧～！", 9010010)
                            } else {
                                if (status == a++) {
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

function end(c, b, a) {
    cm.dispose()
};