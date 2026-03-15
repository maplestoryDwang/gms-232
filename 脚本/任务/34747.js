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
            cm.sendNormalTalk_Bottom("#face0#噔噔！完成了！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34747, "");
                cm.sendNormalTalk_Bottom("#face0#怎么样？很像狐狸耳朵吧！快戴上吧！", 36, 3002110, true, true);
                cm.gainItem(1005059, 1);
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
            cm.sendNormalTalk_Bottom("#face0#好了，快戴到头上去！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#完美！！", 36, 3002110, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（一点都不像……这样化装……还不如不化……）", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#face0#准备好了！快到尖耳狐狸村去吧！\r\n#b（接受时自动移动。）", 36, 3002110)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(940204103, 0)
                        }
                    }
                }
            }
        }
    }
};