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
            cm.sendNormalTalk_Bottom("你是来找学生记录簿的？刚才尘土怪在这里肆虐，然后把一堆文件给叼走了。不知道那其中有没有学生记录簿。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("如果你要找的东西在它们手上，那就进入尘土地带去消灭尘土怪吧。趁此机会尽可能地削减尘土怪的数量吧。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那我就在这儿等你咯。\r\n\r\n#b（从尘土怪那里获得40张零散的学生记录簿吧） ", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32749, "");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("辛苦你了。不过你要这些资料做什么呢？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么？需要那个长相凶狠的大块头的情报？那可是个十足的坏家伙！", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32749);
                    cm.gainItem(4030039, -40);
                    cm.dispose()
                }
            }
        }
    }
};