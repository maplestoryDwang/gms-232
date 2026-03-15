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
            cm.sendNormalTalk_Bottom("#face0#这次也用相同的方法试试看吧。", 36, 2052000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#这，这一次我去！", 36, 2052004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#好吧，积累更多的实战经验也很重要。", 36, 2052001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那我也要一起去，在找路这方面我比较在行。\r\n#fc0xFFAAAAAA#(不知为何也有点担心阿琳)#k", 36, 2052003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3##fc0xFFAAAAAA#(要争取，之前明明说的是要争取)#k", 36, 2052004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#阿琳？你还好吗？", 36, 2052003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#那当然，我是绝对不会输的。", 36, 2052004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#？", 36, 2052003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo_Bottom("#face0#在阿琳和阿英去查看通风口的时候，我们去将#b新白外星黑鹰#k减少个#b200个#k吧。", 36, 2052000)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(3487, "");
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
            cm.gainExp(11004938);
            cm.forceCompleteQuest(3487);
            cm.dispose();
            cm.warp(221030621, 0)
        }
    }
};