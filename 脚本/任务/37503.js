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
            cm.sendNormalTalk_Bottom("#face0#收集医疗用品原料的进度比预想中有所延迟。", 36, 3004437, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那些黑太阳残党一直在妨碍我们收集材料。我们本打算一举将其歼灭，但无奈对方人多势众。", 36, 3004437, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face0#您能帮忙击退他们吗？", 36, 3004437)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(37503, "");
                        cm.OnStartNavigation(993150011, 0, "west00", 37503);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37503.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#感谢您，对抗者大人。\r\n您帮了我们一个大忙。", 36, 3004442, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("（问一下有关塞伦翅膀的事吧。）", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#什么？您是在问守护者大人吗？", 36, 3004442, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#可以确定的是，那时候她伤得很重。连翼肌都受到了损伤。", 36, 3004442, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不过，因为使用了上好的药剂治疗，恢复起来也很快。\r\n看起来也不像留下了什么后遗症。", 36, 3004442, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那她为何无法展开双翼呢？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#可能有什么暗伤吧？\r\n毕竟我们能治愈的只有一些肉眼可见的表层伤口。", 36, 3004442, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#有时候……伤痕刻在心中，旁人是看不到的。", 36, 3004442, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("看不到的伤痕……", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(37503);
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
};