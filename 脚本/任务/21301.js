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
            cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21301.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("抓到#o9001013#了吗？呵呵呵……真不愧是我的主人！很好，把你找到的#t4032312#给我吧……啊……？怎么不说话？难道……你没找到？", 0, 1201002)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("什么？！没找到#t4032312#？怎么会这样？！你忘了吗？啊，怎么……再怎么被黑魔法师诅咒，再怎么被封冻几百年也不能让你变得这么笨啊……", 8, 1201002, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不行。我不能绝望。主人糊里糊涂，我可不能糊涂……深呼吸……深呼吸……", 8, 1201002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("再去找找，反正小偷已经逃走。看来必须重新做#t4032312#了。以前也做过一次，你知道需要哪些材料吧？快去搜集材料……", 8, 1201002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#i4001173#", 0, 1201002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……彻底没希望了。啊啊啊！", 8, 1201002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b（#p1201002#正在气头上。先撤再说。说不定#p1201000#能给我什么帮助。）#k", 2, 1201002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(21301);
                                        cm.dispose()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};