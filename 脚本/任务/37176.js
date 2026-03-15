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
            cm.sendNextNoESC("你能再帮我带来干净的泉水和莲花吗？")
        } else {
            if (status === a++) {
                cm.sendNextNoESC("请帮我带回#r21滴#k干净的泉水……灌满这个小水瓶就行了。\r\n莲花要多采一些，要#r10朵#k才够……")
            } else {
                if (status === a++) {
                    cm.sendNextNoESC("这次我给你的水瓶在你#r获得干净的泉水时，会自动灌水#k。这样你就不用亲自去灌了。")
                } else {
                    if (status === a++) {
                        cm.sendNextSNoESC("……那你干嘛不一开始就给我这种水瓶啊？")
                    } else {
                        if (status === a++) {
                            cm.sendNextNoESC("......")
                        } else {
                            if (status === a++) {
                                cm.sendNextNoESC("要有诚意！诚意才是最重要的！\r\n唔……你要是愿意亲手灌水也不是……")
                            } else {
                                if (status === a++) {
                                    cm.sendNextSNoESC("……不不，有这个水瓶就方便多了。")
                                } else {
                                    if (status === a++) {
                                        cm.sendNextNoESC("啊！又要喝刚才的水，吃刚才的花吗？\r\n哇……太棒了！", 1501010)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNextSNoESC("哈哈……")
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest();
                                                cm.gainItem(4220198, 1);
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
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h0;04=h2;07=h1;08=h1");
    cm.forceCompleteQuest();
    cm.gainExp(10320);
    cm.dispose()
};