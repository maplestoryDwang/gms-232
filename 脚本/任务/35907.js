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
            cm.askAcceptDecline_Bottom("#face0#我也没办法把村民们全都叫出来。\r\n你最好先去跟那边的村长谈谈。", 36, 1013353, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#如果你能先跟他熟悉起来,其他的朋友们也很快就会向你敞开心扉。\r\n好了,快去见见村长吧。", 36, 1013353, false, true, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35907, "");
                    cm.sendNormalTalk_Bottom("#face0#呵呵……我说村里怎么乱糟糟的。原来是你把外地人带来了,马斯卡波。\r\n那个人到底为什么要到我们村来呢？", 36, 1013352, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##b(马斯卡波说明了之前发生的事。\r\n说是为了报答我的救命之恩,想邀请我参加村里的节日。)#k", 36, 1013358, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#让人感觉阴森森的外地人,嗯……\r\n但是不能光凭外表来判断一个人。", 36, 1013352, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#按马斯卡波所说,你应该不是个坏人……\r\n好吧,那就这样吧。我想邀请你一起参加我们的节日。", 36, 1013352, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#在此正式向你表示欢迎,外地人。这里是卡鲁帕村。\r\n我是这里的村长戈达。你是哪里人？", 36, 1013352, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##b(说是冒险岛世界的冒险家,正在各地旅行。\r\n还好村长对我好像不是很警惕。)#k", 36, 1013358, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#呵呵……我会记住的,冒险家。", 36, 1013352, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#什么时候才能看到那种灵药呢？", 36, 1013358, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#节日还在准备中。距离举行仪式还有一段时间。\r\n如果等得无聊,你也可以帮我们一起准备,嗯哼。", 36, 1013352, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face6##b(等放松下来之后,说不定会说到一些重要的事。\r\n啧……先装作帮助村里人,慢慢挖掘所需的情报吧。)#k", 36, 1013358, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(35907);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35907.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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