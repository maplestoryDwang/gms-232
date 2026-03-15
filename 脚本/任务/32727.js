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
            cm.sendNormalTalk_Bottom("我说你，好像从入学的第一天开始就很惹人注意啊？学生们都在议论你呢？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("说你刚入学第一天就跟人打起来。\r\n还把那个全国有名的刺头打架狂给揍得昏迷不醒？哇~~挺厉害的嘛？", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那都是误会。我可没有那么暴力。", 57, 1530031, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("是吗？可是别人也许不会这么想。你只要在这里使用一点儿原来的力量，就会被这个世界的人认为是超能力的。", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("总之，你要尽量不引人注意，像一个普通学生一样。我们的目的就是#r监视那些不知什么时候会在哪里出现的怪物#k，知道吧？被别人注意到的话，可没什么好处。", 37, 1530030, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                cm.forceCompleteQuest(32727);
                                cm.dispose()
                            }
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