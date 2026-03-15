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
            cm.askAcceptDecline_Bottom("#face0#我听说村里有无脸怪出没，\r\n请你去找#r#m410000200##k的一个叫#b#p3001603##k的人，帮忙解决这一事件。", 36, 3001652)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（无脸怪？该不会是……村里剩下的最后一只怪物吧？\r\n……切，饕餮这家伙！可能真的闹脾气了，不肯出来嘛。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（总之如果那就是最后的怪物，往后就没必要继续留在这座村庄了吧？\r\n也差不多是时候去其他地方看看了……）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(39525, "");
                        cm.OnStartNavigation(410000200, 1, "3001603", 39525);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39525.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face12#天才解决师虎影来啦~！\r\n我听说村里有无脸怪出没……", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哎哟喂，解决师到了呢，\r\n是，最近无脸怪经常出现，那家伙吧……", 36, 3001657, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（听闻无脸怪刚开始出现是几个月前，\r\n那时候那家伙还只是在村子里徘徊。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（不过，似乎是从不久前开始偷东西的，\r\n正因为此，村民们也忧心忡忡。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#昨天还是后面那家人，看样子这次估计要轮到我家了。\r\n我想对方可能会趁午后安静的时光出动……", 36, 3001657, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#麻烦你了，解决师，请帮忙找到那些被偷走的物品。\r\n还有请贼人别再出现在这里。", 36, 3001657, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face10#明白了，我会好好教训它们一番的~！", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;05=h0;15=h0;33=h0;34=h0;16=h1;35=h0;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                                        cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;05=h1;15=h0;33=h0;34=h0;16=h1;35=h0;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                                        cm.forceCompleteQuest(39525);
                                        cm.gainExp(117);
                                        cm.gainExp(2785);
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