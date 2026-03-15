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
            cm.dispose();
            cm.openNpc("副本_好友故事_Act4_双重人格闹事者")
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
            cm.sendNormalTalk_Bottom("…………", 37, 1530240, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("虽然失去了意识，但好在没受伤。你刚才给我看的这个孩子是怎么回事？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真可怜……这个孩子由于学习的压力太大，结果竟过度沉迷于卡珊德拉的故事了。", 37, 1530050, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("而且这个人心中的空隙也已被闹事者所吞噬，是吗？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("让人痛心的是，当她清醒之后，一定会被一种深深的负罪感所折磨得痛不欲生。", 37, 1530050, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceForfeitQuest(33036);
                                cm.dispose();
                                cm.warp(330002421, 0)
                            }
                        }
                    }
                }
            }
        }
    }
};