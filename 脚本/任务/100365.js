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
            cm.sendNormalTalk("\r\n嗨，我是软绵绵。你，在天空中飞翔过吗？\r\n我知道一个方法能够帅气地飞行，还可以和朋友们#b分享#k，你要听听看吗？", 4, 9062225, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n那就是……搭乘#b金币哗啦啦云朵怪#k。", 4, 9062225, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n来到#b射手村#k、#b神木村#k和#b无名村#k，\r\n我就可以帮助你搭乘开心地#b金币哗啦啦云朵怪#k。", 4, 9062225, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n#b金币哗啦啦云朵怪#k在每天#b上午10点至晚上10点#k运营，搭乘后可以在周边分享#e哗啦啦金币！#n哦，呵呵。", 4, 9062225, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("分享大~量的金币说不定还能获得#b特别礼物#k哦……？怎么样，有兴趣吗？", 4, 9062225)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(100365);
                                cm.updateInfoQuest(100368, "aNum=0");
                                cm.updateInfoQuest(100368, "aNum=0;num=0");
                                cm.sendNormalTalk("\r\n好的！金币叮咚！做好搭乘#b金币哗啦啦云朵怪#k的准备好就来找我吧。\r\n我会在#b射手村#k、#b神木村#k和#b无名村#k与#b金币哗啦啦云朵怪#k一起等着你。", 4, 9062225, false, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100365.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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