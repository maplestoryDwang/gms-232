var status = -1;

function start(c, b, a) {
    switch (status) {
        case 1:
        case 2:
        case 3:
            status++;
            break;
        default:
            if (c == 1) {
                status++
            } else {
                status--
            }
    }
    if (status == 0) {
        cm.sendNext("我来告诉你时空旅行的方法吧。\r\n有看到那边的右侧的时空隙缝吗？可以从这隙缝移动至异世界。", 32)
    } else {
        if (status == 1) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true);
            cm.inGameDirectionEvent_PushMoveInfo(0, 1500, 520, 100)
        } else {
            if (status == 2) {
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status == 3) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status == 4) {
                        cm.setInGameDirectionMode(false);
                        cm.sendNextPrev("啊?好期待会是什麽样的地方！!", 56)
                    } else {
                        if (status == 5) {
                            cm.sendNextPrev("啊啊…在这说明不如实际体验最快。\r\n不过有一个注意事项，就是在那世界无法使用#h0#在枫之谷所能使用的技能。因为时空不同，这应该这也不算什麽。", 32)
                        } else {
                            if (status == 6) {
                                cm.sendNextPrev("什麽?!!!!!!!!!!!", 56)
                            } else {
                                if (status == 7) {
                                    cm.sendNextPrev("这是我给你的礼物！时空之石。使用此石头就可以从异世界回到这里。", 32)
                                } else {
                                    if (status == 8) {
                                        if (!cm.canHold(2433281)) {
                                            cm.topMsg("消耗栏位不足。请空出 1格以上的空位。");
                                            cm.dispose();
                                            return
                                        }
                                        cm.gainItem(2433281, 1, 30);
                                        cm.forceCompleteQuest();
                                        cm.dispose()
                                    } else {
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