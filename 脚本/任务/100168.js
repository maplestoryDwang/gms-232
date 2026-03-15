var status = -1;

function start(e, c, b) {
    (e == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askYesNo("\r\n怎么样，#b#h0##k～？\r\n你对#e<大冒险岛>#n感兴趣吗？")
        } else {
            if (status === a++) {
                var d = cm.getMapId();
                if (d >= 993080000 || (d >= 993001000 && d <= 993001400)) {
                    cm.sendOk("你已经在大冒险岛上了，好好体验精彩的冒险吧！");
                    cm.dispose()
                } else {
                    cm.sendNextPrev("\r\n好了！那就去#b#e<大冒险岛>#k#n\r\n体验精彩的冒险吧！")
                }
            } else {
                if (status == a++) {
                    cm.warp(993080000, 0);
                    cm.dispose()
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose()
        }
    }
};