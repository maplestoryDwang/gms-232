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
            cm.askMenu("你是来打听钥匙的事吧？呵呵，我在旁边都听到了。\r\n#L0##b是的。你见过钥匙吗？#l", 4, 9400214)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不久前我出去狩猎，见到有只蝙蝠怪脖子上戴着个亮闪闪的东西！走近一看，发现是个#e小小的金色钥匙形状的#n吊坠。\r\n因为蝙蝠怪戴项链这情景又好笑又奇怪，所以我还一直记得。", 4, 9400214, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那钥匙是你的吗？我就知道那项链不可能是蝙蝠怪的东西！", 4, 9400214, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("你想找回钥匙的话，到村庄外去看看吧。", 4, 9400214)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(63031, "");
                            cm.sendNormalTalk("对了，夜晚的时候怪物会变强，你多小心。要不等太阳升起来再去也行！", 4, 9400214, false, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63031.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b#e找到了！是钥匙！", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("嗯~？要说是用来开锁的钥匙，这也太小了吧？看上去只能开开日记本的锁。\r\n#L0##b为了以防万一，还是爬上去用它试试吧？#l\r\n#L1#果然不行诶？先别丢掉，留着吧。#l", 4, 9400205)
            } else {
                if (status === a++) {
                    cm.askYesNo("你愿意的话！\r\n（点击接受，即可移动到巨门所在的初始之地。）", 4, 9400205)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(63031);
                        cm.gainExp(158800);
                        cm.updateInfoQuest(63031, "exp=1");
                        cm.updateInfoQuest(63032, "start=1");
                        cm.dispose();
                        cm.warp(867113100, 0, true)
                    }
                }
            }
        }
    }
};