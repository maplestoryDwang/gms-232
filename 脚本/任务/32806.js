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
            cm.sendNormalTalk_Bottom("好了，接下来，就把我们搜集到的证据照片贴到校园的各个地方吧。当然，我们得小心行事不能被发现才行。要是被逮到的话，恐怕连根骨头都捡不回来！既然要贴，那么最好是贴在人来人往的地方。比如说#r正门公告栏、走廊墙壁或者是教务室之类的地方。", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那就拜托了，#h0#各位队员！\r\n\r\n#b（在校园内转转，寻找可以贴照片的地方吧。）#k", 37, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32806, "");
                    cm.dispose()
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
                cm.dispose()
            }
        }
    }
};