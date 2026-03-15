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
            cm.askAcceptDecline_Bottom("#face0#切，看来只能见到就抓，想办法找到钥匙了，\r\n差不多抓到#r50只#k#r#o2400556##k，找到#b25个#k#b#i4036581##t4036581##k吧。", 36, 3001674 + cm.getPlayer().getGender())
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#找了这么多，应该能找到与锁配对的钥匙，\r\n如果没有……哈哈，还是到时候再考虑吧？", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(39529, "");
                    cm.dispose()
                }
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39529.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（咔哒一声响，锁被打开了，进去看看吧。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(993160130, 0, false)
            }
        }
    }
};