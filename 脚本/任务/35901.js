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
            cm.askAcceptDecline_Bottom("#face0#这好像是古代的文字。要试着解读一下吗？", 36, 1013358, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#虽然会花费一点时间……呵呵……不过还挺让人好奇的。", 36, 1013358, false, true, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35901, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35901.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0##g“靠近时会让人受伤的善变的舞蹈家。”\r\n“跳着红色之舞，留下黑色的脚印。”#k", 36, 1013358, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#啊哈，感觉像是某种暗语……下一句话是……", 36, 1013358, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##b（解读箱子上写着的古代文字。\r\n虽然全都是暗语，但仔细斟酌一下，就能猜到大概的意思。）#k", 36, 1013358, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(35901);
                        cm.gainExp(34);
                        cm.dispose()
                    }
                }
            }
        }
    }
};