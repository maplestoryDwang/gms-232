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
            cm.askAcceptDecline_Bottom("#face0#那边那道门的钥匙貌似也在那些老鼠的手里，\r\n去抓到大概#r50只#k#r#o2400557##k，找到#b25个#k#b#i4036582# #t4036582##k吧。", 36, 3001674 + cm.getPlayer().getGender());
            cm.spawnMobLimit(2400557, 1, 136, 38, 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#收集这么多应该就够了，\r\n希望这其中能有和锁配对的钥匙……", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(39530, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39530.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（钥匙和锁完全吻合，\r\n只听咔哒一声响，锁开了。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#成功了，赶紧开门进去吧。", 36, 3001651, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(993160131, 0, false)
                }
            }
        }
    }
};