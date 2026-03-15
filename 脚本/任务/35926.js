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
            cm.sendNormalTalk_Bottom("#face0##b(刚才路上遇到的遗迹攻击兵。\r\n头上装着发光的东西。用那个东西……)#k", 36, 1013358, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face3##b(好,回到#m100051042#去吧。\r\n从#o2300208#身上搜集10个#i4036531# #t4036531#。)#k", 36, 1013358, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我有点事情需要确认一下。你在这里等一下。", 36, 1013358, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#啊,果然不愧是勇士……这么快就想到了办法。\r\n那我在这里等你。", 36, 1013350, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(35926, "");
                            cm.OnStartNavigation(100051042, 0, "", 35926);
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35926.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#啊,这么快就回来啦。你手里拿着的那个东西……\r\n是遗迹攻击兵身上的东西吗？", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#碰到之后,就会这样发光。", 36, 1013358, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#有了这个,应该就能潜入水里了。\r\n不过为了以防万一,最好还是丢一个进去试试……", 36, 1013350, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3##b(拿起一个发光的闪光石,丢进了水坑。\r\n光在水里亮了好久,然后化作一阵烟消失了。)#k", 36, 1013358, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##b(看来坚持不了多久。用一个到不了底下。\r\n把搜集到的全都带上吧。)#k", 36, 1013358, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(35926);
                                cm.gainExp(14215);
                                cm.gainItem(4036531, -10);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};