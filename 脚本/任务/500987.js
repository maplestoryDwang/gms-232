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
            cm.updateInfoQuest(500984, "current=1");
            cm.sendNormalTalk("……？！", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("老师. 你好！\r\n你要立即去寻找回忆吗？", 4, 9062290, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("您换衣服啦？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哈哈！你看出来了啊！\r\n我为了变得更强大一点，想要体验冒险岛世界的#b各种职业#k！", 4, 9062290, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("所以就从熟悉的#r战士职业#k开始！", 4, 9062290, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("老师您当然已经体验了#b各种职业#k吧？", 4, 9062290, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("当然，\r\n在冒险岛世界中体验#r各种各样的职业#k会让你变得更加强大。体验过各种职业之后，你就会感觉到自己提高了一个层次。", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#e#r各种职业！#k #b更加强大的自己！#k#n\r\n我会谨记的，老师！", 4, 9062290, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo("好了，去消灭#r#e等级范围怪物#n#k，寻找#b#e师父们的回忆#n#k\r\n吧！\r\n\r\n\r\n※ 等级范围怪物指的是，以角色的等级为基准，#e-20级\r\n~+20级范围#n内的怪物。", 4, 9062290)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(500987, "getCount=0");
                                                cm.forceStartQuest(500986, "");
                                                cm.forceStartQuest(500987, "");
                                                cm.sendNormalTalk("好了，老师，请你找到#r#e5个#n#k回忆！", 4, 9062290, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(500827, "q1Set=0;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=1;lT=20/04/19;qSetDate=20/12/04;accSum=125588;QuestCount=3;accCheck=201204140619916");
                                                    cm.updateInfoQuest(500827, "q1Set=0;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=1;lT=20/04/19;qSetDate=20/12/04;accSum=185790;QuestCount=3;accCheck=201204140619916");
                                                    cm.updateInfoQuest(500827, "q1Set=0;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=1;lT=20/04/19;qSetDate=20/12/04;accSum=185790;QuestCount=3;accCheck=201204140720421");
                                                    cm.updateInfoQuest(500827, "q1Set=0;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=1;lT=20/04/19;qSetDate=20/12/04;accSum=246295;QuestCount=3;accCheck=201204140720421");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500987.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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