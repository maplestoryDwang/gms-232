var status = -1;
var selectionLog = [];

function start(d, b, a) {
    var c = cm.getInfoQuest(100188);
    if (c == null || c.indexOf("start") < 0) {
        startIntro(d, b, a)
    } else {
        cm.dispose();
        cm.openNpc(9062147, "小游戏_大冒险钻头")
    }
}

function startIntro(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    var a = -1;
    selectionLog[status] = b;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("嗯，很高兴见到你，#b#h0##k。", 9062147)
        } else {
            if (status === a++) {
                cm.sendNextPrev("你好像是第一次参加#b#e<大冒险钻头>#k#n。", 9062147)
            } else {
                if (status === a++) {
                    cm.sendNextPrev("我来给你简单介绍一下。", 9062147)
                } else {
                    if (status === a++) {
                        cm.sendNextPrev("#b#e<大冒险钻头>#k#n是在1分钟内消灭掉尽可能多的#e稻草人怪物#n的任务。", 9062147)
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev("在总共10个踏板上配置有4种不同的稻草人怪物。", 9062147)
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev("#b#e<普通稻草人>#k#n\r\n\r\n#fMob/9833338.img/stand/0#\r\n第一种是#e普通稻草人#n。没什么特别之处。", 9062147)
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrev("#b#e<温莉稻草人>#k#n\r\n\r\n#fMob/9833348.img/stand/0#\r\n第二种是#e温莉稻草人#n。\r\n和普通稻草人相比，拥有更高的#e防御率#n。", 9062147)
                                } else {
                                    if (status === a++) {
                                        cm.sendNextPrev("#b#e<甘迪稻草人>#k#n\r\n\r\n#fMob/9833358.img/stand/0#\r\n第三种是#e甘迪稻草人#n。\r\n和普通稻草人相比，拥有#e更高的体力和BOSS怪物属性#n。", 9062147)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNextPrev("#b#e<萧公稻草人>#k#n\r\n\r\n#fMob/9833368.img/stand/0#\r\n第四种是#e萧公稻草人#n。\r\n越往上走，#e等级#n会逐渐升高。", 9062147)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNextPrev("当然，越往上，各种稻草人的体力和能力就越高。", 9062147)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNextPrev("根据在1分钟内消灭掉的稻草人数量，可以获得如下#b#e大冒险币#k#n。", 9062147)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNextPrev("\r\n#e- 1～4个：大冒险币10个\r\n- 5～8个：大冒险币20个\r\n- 9～12个：大冒险币30个\r\n- 13～16个：大冒险币40个\r\n- 17～20个：大冒险币50个\r\n- 21～24个：大冒险币60个\r\n- 25～28个：大冒险币70个\r\n- 29～32个：大冒险币80个\r\n- 33～36个：大冒险币90个\r\n- 37～40个：大冒险币100个#n", 9062147)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNextPrev("通过#b#e<大冒险钻头>#k#n获得的大冒险币不包含在每日限制量中，#r#e每个世界每天只能领取一次#k#n。这一点请一定要记住。", 9062147)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNextPrev("此外，如果对结果不满意，随时可以#e放弃获得奖励#n，#e重新进行挑战#n。", 9062147)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNextPrev("只有强大的战士才有资格体验新的冒险！", 9062147)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNextPrev("去吧！#b#h0##k！\r\n征服#e#b<大冒险钻头>#k#n，然后回来！", 9062147)
                                                                    } else {
                                                                        if (status == a++) {
                                                                            cm.updateInfoQuest(100188, "start;0");
                                                                            cm.forceStartQuest();
                                                                            cm.forceCompleteQuest();
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
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};