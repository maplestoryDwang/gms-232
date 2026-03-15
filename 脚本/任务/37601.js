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
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
            cm.sendNormalTalk_Bottom("#face0#唧……", 36, 3004662, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这是什么声音？", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#是从顺流漂下来的这个东西（#b#i4036638# #r#t4036638##k）里发出的声音。", 36, 3004659, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊，你是……", 56, 0, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("#face0#有件事你一定会感兴趣。\r\n有时间的话，能到无名村来一趟吗？\r\n\r\n#b（※ 接受时，移动至任务区域。）", 36, 3004659, 1)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(993176000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37601.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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