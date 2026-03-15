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
            cm.updateInfoQuest(7896, "f=0;0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
            cm.sendNormalTalk("#m222020000#发生了一件麻烦事。之前保管的旧书信不见了。那封信没有借出的记录，却出现在#b黑心商人泊布#k的手上，他在休彼德蔓的客房里做生意……", 0, 2040052, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("旧书信？要不要我帮忙？", 16, 2040052, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("将旧书信归还图书馆不是件易事，你肯帮忙真是太好了。\r\n\r\n#b#L0# 帮忙是应该的。#l\r\n#L1# 唔……不，我改变主意了。#l", 0, 2040052)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(7896, "");
                        cm.sendNormalTalk("谢谢你愿意帮忙找回书信。那我等你的好消息。", 0, 2040052, false, false)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};