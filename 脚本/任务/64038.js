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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64038.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function stage0(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#啊！#h0#！谢谢你。你要提前说一声，我就跟你一起去了，这样光受着你的恩惠，我真过意不去。", 37, 9400583, false, true);
            cm.gainItem(4036373, -5);
            cm.gainItem(4036374, -5)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(64038, "NpcSpeech=94005831");
                cm.dispose()
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#你放心吃吧，大多都是我凯恩弄来的。", 37, 9400582, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#真的吗？我好荣幸！", 37, 9400583, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("谢谢你，#h0#……哈瓦尔，快跟勇士道谢。", 37, 9400591, false, true);
                    cm.gainItem(4036373, -5);
                    cm.gainItem(4036374, -5)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("谢谢你，勇士！", 37, 9400593, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(64038, "NpcSpeech=94005831/94005912");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=201902"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.updateInfoQuest(64038, "NpcSpeech=94005831/94005912/94005803");
            cm.updateInfoQuest(64038, "chk=1;NpcSpeech=94005831/94005912/94005803");
            cm.gainItem(4036373, -10);
            cm.gainItem(4036374, -10);
            cm.npc_LeaveField("oid=4250245");
            cm.npc_LeaveField("oid=4250245");
            cm.dispose();
            cm.warp(867200851, 0, true);
            cm.setInGameDirectionMode(false, true, false)
        }
    }
};