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
            cm.sendNormalTalk_Bottom("人就是这样的，就算心里没想法，如果周围的人不断煽风点火的话，也一定会慢慢开始关注的。因为人的意识被一件事物反复刺激之后，就会自然而然地对其产生关注。", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("所以，先在学校制造传闻吧。比如说，我们可以拍了照片散播出去。就是那~种意义的照片。你问怎么才能拍到那种照片？那当然要看……时机了！", 37, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(330002324, 1)
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
            cm.sendNormalTalk_Bottom("你搜集到了可以作为证据的照片？让我看看。", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哦吼，拍得真不错。乍一看，还真像是两个人在亲密交谈呢？你，在这方面还挺有才的嘛？", 37, 1530100, true, true);
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.dispose();
                cm.forceCompleteQuest(32805)
            }
        }
    }
};