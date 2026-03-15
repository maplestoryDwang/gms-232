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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20031.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askMenu("怎么这么慢？该不会是趁我不在的时候，在哪儿偷懒吧？让你去拿的东西呢？\r\n#b\r\n#L0# ……在这里……还有，我在阁楼里捡到了这封信。好像还没看过……好像是个叫库洛姆的人寄来的……#l", 0, 1106002)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你说什么！！快给我！干嘛随便碰别人的东西？", 0, 1106002, false, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(20031);
                    cm.gainExp(34);
                    cm.gainExp(57);
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, true, true);
                    cm.setStandAloneMode(true);
                    cm.emotion(4, 2000);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.gainItem(4033194, -1);
                        cm.gainItem(4033195, -1);
                        cm.gainItem(2000016, 10);
                        cm.gainItem(2000018, 10);
                        cm.sendNormalTalk("呜呜……今天又被骂了……", 3, 1106002, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯？那是什么？", 3, 1106002, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/soul/0", "oid=16777215"], [4000, 0, -100, 1, 0, 156, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(5000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("哇！！刚才那是什么？我看见了……一道明亮的光……？", 3, 1106002, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.dispose();
                                        cm.warp(913070002, 0, false)
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