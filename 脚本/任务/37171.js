var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            if (!cm.isQuestActive(37169)) {
                cm.removeAll(4036503);
                cm.removeAll(4220196)
            }
            if (!cm.isQuestActive(37173)) {
                cm.removeAll(4036505);
                cm.removeAll(4220197)
            }
            if (!cm.isQuestActive(37174)) {
                cm.removeAll(4036504)
            }
            if (!cm.isQuestActive(37176)) {
                cm.removeAll(4036506);
                cm.removeAll(4036507);
                cm.removeAll(4220198);
                cm.removeAll(2630243)
            }
            cm.sendNext("艾洛丁的鸟在哭……？嗯……一定是发生了什么事……")
        } else {
            if (status === a++) {
                cm.sendNext("总之，你说过会教它唱歌的！")
            } else {
                if (status === a++) {
                    cm.sendNext("你必须把小鸟一起带走，对吧？")
                } else {
                    if (status === a++) {
                        cm.askYesNo("那你们一起去就行了！")
                    } else {
                        if (status === a++) {
                            cm.sendNext("再见！")
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h0;04=h2");
                                cm.setPartner(1, 1501010, 80002688, 0);
                                cm.sendNext("嘿嘿，真让人期待！你会比鲁安教得更好吗？那样我的歌声定能得到人们的认可！", 1501003)
                            } else {
                                if (status === a++) {
                                    cm.sendNext("哼，小心我……")
                                } else {
                                    if (status === a++) {
                                        cm.sendNextS("哈哈……那就快出发吧。还有很长的路要走。")
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest();
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
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("终于来了吗？啊！")
        } else {
            if (status === a++) {
                cm.setPartner(0, 1501010, 80002688, 0);
                cm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h0;04=h2;07=h1");
                cm.forceCompleteQuest();
                cm.gainExp(10320);
                cm.dispose()
            }
        }
    }
};