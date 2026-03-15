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
        if (status === a++) {
            cm.sendNextS_Bottom("在背包里发现了一本旧笔记本，我什么时候得到了这种东西？")
        } else {
            if (status === a++) {
                cm.sendNextS_Bottom("我有点记不清了，但是似乎又能想起来什么。")
            } else {
                if (status === a++) {
                    cm.askMenuS_Bottom("那就让我来看一下吧？\r\n#b#L0#打开笔记本。#l\r\n#L1#没必要看。#l")
                } else {
                    if (status == a++) {
                        if (selectionLog[3] == 0) {
                            cm.sendNextS_Bottom("嗯……只有几个字……读不懂啊。")
                        } else {
                            cm.dispose()
                        }
                    } else {
                        if (status === a++) {
                            cm.sendNextS_Bottom("最后这一页上写的是什么？似乎写得很急啊。")
                        } else {
                            if (status === a++) {
                                cm.sendNextS_Bottom("[一定要阻止APORD！]")
                            } else {
                                if (status === a++) {
                                    cm.sendNextS_Bottom("APORD是什么？这里面肯定有什么重要的信息，我得再调查一下。");
                                    cm.forceStartQuest();
                                    cm.forceCompleteQuest(59700);
                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                    cm.updateInfoQuest(59761, "1=1");
                                    cm.fieldEffect_PlayFieldSound("Sound/Field.img/masteryBook/EnchantSuccess")
                                } else {
                                    if (status == a++) {
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
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};