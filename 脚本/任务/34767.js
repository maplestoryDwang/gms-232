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
            cm.sendNormalTalk_Bottom("#face5#如果想见我，只要利用飞到#r万神殿#k去的#b叶片飞机#k就行！下次再会，朋友！", 36, 3002110, true, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(940204113, 0)
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
            cm.sendNormalTalk_Bottom("#face5#如果想见我，只要利用飞到#r万神殿#k去的#b叶片飞机#k就行！下次再会，朋友！", 36, 3002110, true, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(940204113, 0)
            }
        }
    }
};