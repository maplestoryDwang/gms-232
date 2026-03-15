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
            cm.askYesNo("据说在星之力充盈的冒险岛世界，出现了通往夜空的门。去看看那扇门究竟通向什么地方吧。\r\n#b（在射手村找到通往夜空的门，然后前往星之大陆吧。）", 4, 9201324)
        } else {
            if (status === a++) {
                cm.warp(100000000, 0);
                cm.forceStartQuest(62201, "9201324");
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
            cm.sendNextS("欢迎你，冒险岛世界的勇士。我一直在这星之大陆恭候你的到来。")
        } else {
            if (status === a++) {
                cm.sendNextPrev("你一直在等我？这里是什么地方？", 16, 9201324)
            } else {
                if (status === a++) {
                    cm.sendNextPrev("这星之大陆与勇士你所生活的冒险岛世界在宇宙中相隔很远。", 4, 9201324)
                } else {
                    if (status === a++) {
                        cm.sendNextPrev("不知道是什么原因，现在冒险岛世界各个地方的星之力都非常充盈。", 4, 9201324)
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev("因此，在遥远的过去由星之力建造而成的这个国度——星之大陆和冒险岛世界之间出现了相连的宇宙通道。", 4, 9201324)
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev("原来如此……不过，你是谁啊？", 16, 9201324)
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrev("我叫做葛洛夏纳。\r\n我是掌管星之大陆盛夏之国的女王。", 4, 9201324)
                                } else {
                                    if (status === a++) {
                                        cm.sendNextPrev("星之大陆共分为4个国家，它们分别是暖春之国、盛夏之国、晚秋之国、寒冬之国。\r\n还有，每个国家都有自己的女王和国王。我作为代表，向勇士你致以问候。", 4, 9201324)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNextPrev("我们的星之大陆是因星之力而诞生的，所以我们的工作主要也是围绕着星星。\r\n我们会创造出装点宇宙的新星星，也会让历史较为悠久的星星长眠。\r\n宇宙中的星星不计其数，要做的事情也很多，所以我们分为四个国家，各司其职。", 4, 9201324)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNextPrev("对了，为了纪念星之大陆和冒险岛世界像这样互相连通，我们想用我们的微薄之力，为冒险岛世界献上特殊礼物。", 4, 9201324)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNextPrev("是什么礼物呢？", 16, 9201324)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askYesNo("虽然冒险岛世界现在也十分美丽，但……我愿意为你们创造美丽的星座，让冒险岛世界变得比这里更加光彩夺目。\r\n你看怎么样啊？", 4, 9201324)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendOk("好的。不过，冒险岛世界的勇士，为了创造出星座，我需要勇士你的帮助。如果你再次来找我，我会详细为你说明的。", 9201324)
                                                        } else {
                                                            if (status === a++) {
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
};