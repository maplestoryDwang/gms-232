var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#face1#额额额……", 37, 1531001, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face0#振作一点，杰！！！这是怎么一回事！！尤娜呢？！！！", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face1#额……！！……那些幽灵一样的家伙抓走了尤娜。\r\n导航上能看到周围有快速移动的生物，你赶紧追上去。", 37, 1531001, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face0##b(好像是往地铁的方向去了！赶紧追上去吧！)#k", 37, a, true, true)
                    } else {
                        if (status === b++) {
                            cm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinePro=0;kinetuto=1;kinetuto2=1;E1=1;E2=1;blackCat=3;E3=1");
                            cm.forceStartQuest(22832, "");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22832.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face4#超能力者！是这边！", 37, 1531003, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(9000);
                cm.forceCompleteQuest(22832);
                cm.dispose()
            }
        }
    }
};