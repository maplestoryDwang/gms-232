var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("#eTo.#n #b#h0##k\r\n\r\n千载难逢的机会！这个只在#b万圣节举行的庆典#k\r\n请来一定要来看看！必须要有#b庆典服装和假面#k才能参加，所以千万不要忘记哦。将这个邀请函交给#b管家#k的话\r\n就可以不用排队，直接入场。准备好了的话，#b可以慢慢来#k#b主人公#k本来就是要最后登场的。\r\n\r\n                                                     #eFrom.#n #r鬼屋#k", 4, 9062265, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("万圣节庆典……要不去看看？", 2, 0, true, true)
            } else {
                if (status === b++) {
                    cm.askYesNo("是否现在移动至鬼屋？\r\n\r\n#r(※同意后立即移动至鬼屋。)", 4, 9062265)
                } else {
                    if (status === b++) {
                        var a = cm.getMapId();
                        cm.updateInfoQuest(100402, "rMap=" + a + ";tuto=1");
                        cm.updateInfoQuest(100433, "65=0");
                        cm.forceStartQuest(100434, "");
                        cm.dispose();
                        cm.warp(993175481, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100434.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("欢迎光临#b鬼屋#k。\r\n啊，您是派对的#b最后一位客人#k，现在就等你了。\r\n其他客人都已经到了。", 4, 9062245, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("您好。\r\n是你邀请我来这个派对的吗？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不是我。我只是负责管理这个鬼屋的#b管家#k。\r\n#b主人#k现在正在忙着准备舞会。", 4, 9062245, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("既然你参加了这个派对，那我就该告诉你一些#b规定#k。", 4, 9062245, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b规定#k？", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("需要向来参加派对的所有客人传达#r主人的嘱托#k。", 4, 9062245, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("无论屋里来了什么人，#r都请你不要和他说话。#k\r\n派对开始前，必须要待在#r房间里#k。\r\n不管房外有#r任何奇怪的声音#k都请不要出来。", 4, 9062245, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("居然还有这种规定", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("因为#b假面舞会#k是这次派对的主要活动，所以主人不希望客人看到彼此的真实样貌。\r\n这都是为了派对的顺利举行，还望客人一定遵守。", 4, 9062245, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("那么接下来可否请您先去房间稍作歇息？\r\n#b女仆#k会带你到房间去。", 4, 9062245, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(100434);
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
};