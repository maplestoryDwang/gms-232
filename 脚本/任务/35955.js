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
            cm.sendNormalTalk("不行。跟异邦人我什么都不能说……", 4, 1013401, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呃啊啊！！怪物！！怪物来啦！！大家快躲起来！大家快躲起来！！", 4, 1013401, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("怪物？看来得做好战斗准备了。", 2, 1013401)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(910090400, 0)
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
            cm.sendNormalTalk("都赶走了吗？为什么异邦人都这么强呢？不，还是因为我们卡鲁帕太弱了吗？", 4, 1013401, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("谢谢你救了我。", 4, 1013401, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(1427698);
                    cm.forceCompleteQuest(35955);
                    cm.dispose()
                }
            }
        }
    }
};