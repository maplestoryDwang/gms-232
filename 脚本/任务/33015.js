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
            cm.sendNormalTalk_Bottom("呼，累死我了。以后应该不会再出现尘土地带了吧？都怪那什么阿白实习老师，害我吃了这么多苦头。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("为了以防万一，你能去屋顶上检查一下吗？那里说不定发生了什么事情呢。\r\n#b（接受时将自动移动到屋顶。）#k", 37, 1530030)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你到那里之后，可以向莉莉询问屋顶的情况。", 37, 1530030, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(33015, "");
                        cm.dispose();
                        cm.warp(330000500, 1)
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
            cm.sendNormalTalk_Bottom("怪物全部消灭了吗？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("很好，那我现在应该能封印尘土地带了。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(33014);
                    cm.dispose()
                }
            }
        }
    }
};