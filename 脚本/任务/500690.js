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
            cm.askMenu("#b#e<归来的短中分勇士>#n#k\r\n老师，你想知道什么？\r\n#L1# 课程奖励#l\r\n#L2# 每日课程#l\r\n#L3# 谜题任务#l", 4, 9062164)
        } else {
            if (status == a++) {
                cm.dispose();
                if (b == 0) {
                    cm.sendNormalTalk("\r\n#b#e<课程完成奖励>#n#k\r\n#e<1课时>#n\r\n#i1122215:# #b#t1122215:#1个（7天）#k\r\n#e<谜题 1>#n\r\n#i2630438:# #b#t2630438:#1个（7天）#k\r\n#e<2课时>#n\r\n#i2630442:# #b#t2630442:#1个（7天）#k\r\n#e<3课时>#n\r\n#i2049447:# #b#t2049447:#1个（7天）#k\r\n#e<4课时>#n\r\n#i2439869:# #b#t2439869:#3个（7天）#k\r\n#e<谜题 2>#n\r\n#i2630439:# #b#t2630439:#1个（7天）#k\r\n#e<5课时>#n\r\n#i2434288:# #b#t2434288:#1个（7天）#k\r\n#e<6课时>#n\r\n#i2711001:# #b#t2711001:#5个（7天） #k\r\n#e<7课时>#n\r\n#i2049710:# #b#t2049710:#1个（7天）#k\r\n#e<谜题 3>#n\r\n#i2631248:# #b#t2631248:#1个（7天） #k\r\n#e<8课时>#n\r\n#i2436782:# #b#t2436782:#2个（7天）#k\r\n#e<9课时>#n\r\n#i2048731:# #b#t2048731:#1个（7天）#k\r\n#e<10课时>#n\r\n#i3018330:# #b#t3018330:#1个（永久）#k\r\n#e<谜题 4>#n\r\n#i2631249:# #b#t2631249:#1个（7天）#k", 4, 9062164, false, false)
                } else {
                    if (b == 1) {
                        cm.sendNormalTalk("每日课程在#b#e每天上午10点#k#n开始。\r\n\r\n#e<目前课程进度>#n你现在还没有进行任何课程。", 4, 9062164, false, false)
                    } else {
                        if (b == 2) {
                            cm.sendNormalTalk("完成#r#e第1天、第4天、第7天、第10天#k的每日课程时，#n我将会给老师出有趣的谜题任务。谜题任务的内容如下。\r\n\r\n#e<谜题 1>#n 寻找短中分勇士所说的#b地点#k\r\n#e<谜题 2>#n给#b某人#k传递#b某种道具#k#k\r\n#e<谜题 3>#n猜对#b5种怪物名字#k\r\n#e<谜题 4>#n带来#b10种道具#k ", 4, 9062164, false, true)
                        } else {
                            cm.sendNormalTalk("虽然我很想告诉老师谜题任务的内容，但是这样不就没有谜题的乐趣了吗？\r\n#b我只能给老师#e1个#n提示。#k 但是我会给其他老师别的提示，所以#b#e和其他老师共同合作#n收集提示，解开谜题吧！#k", 4, 9062164, true, false)
                        }
                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500690.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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