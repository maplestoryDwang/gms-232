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
            cm.sendNormalTalk_Bottom("我以前上学时，学校里也有这种家伙。\r\n他们为了捉弄其他人，在学校各个地方设置可疑的陷阱，或者用纸做出蟑螂，放在其他人衣服里。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("当然，我所说的那种家伙就是我。啊哈哈哈，不过这些都是过去的事情了。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("总之，现在真相已经水落石出。你把证物交给教室里的奥兹吧。\r\n#b（回到2年级教室吧。）#k", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32855, "");
                        cm.dispose();
                        cm.warp(330000200, 0)
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
            cm.sendNormalTalk_Bottom("你来啦，#h0#。刚好南哈特也在这里。", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么？录音机？\r\n晕，居然是这样…… 只要将这件事告诉南哈特，就能证明卡珊德拉在说谎话了！", 37, 1530110, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(330002405, 0)
                }
            }
        }
    }
};