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
            cm.forceStartQuest(23168, "");
            cm.dispose()
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23168.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你成功破坏了黑色之翼的新武器吗？你果然强大到令人难以置信的地步了，我为你感到骄傲，真的，你真的辛苦了！你能站在反抗者这边我真的感到庆幸，老实说我没有想到你能成长到这个地步。", 0, 2159488, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("不过现在就放心还为时过早，既然知道新武器被破坏了，那#p2154009#肯定会带着手下而来的，趁着他们赶到之前先逃吧，就直接用地下总部#t4032740#，来，一……二……三！", 0, 2159488)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(23168);
                    cm.gainItem(4032743, -1);
                    cm.dispose();
                    cm.warp(310010000, 0, false)
                }
            }
        }
    }
};