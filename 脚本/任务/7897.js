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
            cm.updateInfoQuest(7897, "f=0;0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
            cm.sendNormalTalk("冒险家，你能帮我个忙吗？很久以前#p2020009#托管的书不见了。后来我得知丢失的书落到了在休彼德蔓的客房做生意的#b黑心商人泊布#k手里。", 0, 2040052, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是什么书？要不要我帮忙？", 16, 2040052, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("因为他说看看内容也无妨，我就翻阅了几遍，可那书的内容实在太难理解了。请你帮忙把书找回来好吗？\r\n\r\n#b#L0# 帮忙是应该的。#l\r\n#L1# 唔……不，我改变主意了。#l", 0, 2040052)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(7897, "");
                        cm.sendNormalTalk("谢谢你答应找回书。那我等你的好消息。", 0, 2040052, false, false)
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