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
            cm.warp(224000046, 15, true)
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
            cm.sendNormalTalk_Bottom("哞哞~？你在找工作吗哞哞？\r\n什么？小荳？哞……哞哞……\r\n我还以为小荳会很难再去找工作了呢哞哞。\r\n这家伙一直以来确实做了点不好的事情哞哞~\r\n你最好去找蟾蜍问问看，我没什么要说的了哞哞。", 37, 2074144, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(30438, "NpcSpeech=20740281");
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
            cm.sendNormalTalk_Bottom("呱呱！你说什么！\r\n我见她消停了几日，现在又犯病了吗呱呱。\r\n这次她又打算好好羞辱一下我这个介绍工作的人吗！\r\n现在要不是像善良的#b兴夫#k大叔这种人，估计就没有人会接受小荳了！\r\n哎哟……我现在真的也想放弃了，我不管了，呱呱。", 37, 2074145, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(30438, "NpcSpeech=20740281/20740292");
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("哦，你还好吗？\r\n工作？正好#b乐夫#k大哥在招人呢……\r\n不过，额……据我所知，那可不是女孩子能做得来的事情。\r\n我也不好说，你还是先去看看吧，我会跟大哥说好的。", 37, 2074001, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(30438, "NpcSpeech=20740281/20740292/20740013");
                cm.dispose()
            }
        }
    }
}

function stage3(d, c, b) {
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
            cm.warp(224000047, 20, true)
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
            cm.dispose();
            cm.warp(224000047, 20, true)
        }
    }
};