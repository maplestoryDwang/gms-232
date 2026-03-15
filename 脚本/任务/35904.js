var status = -1;

function start(d, c, b) {
    if (d === 0) {
        status--
    } else {
        status++
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext_Bottom("#face1#喂，要我把你弄出来吗？", 1013358)
        } else {
            if (status === a++) {
                cm.sendNext_Bottom("#face1#拜，拜托了……请，请帮帮我！", 1013353)
            } else {
                if (status === a++) {
                    cm.sendNext_Bottom("#face1#要是我帮了你，你什么都能答应我吗？", 1013358)
                } else {
                    if (status === a++) {
                        cm.sendNext_Bottom("#face1#好，好吧……但是……不能到村外去！\r\n除了那个之外，我什么都听你！", 1013353)
                    } else {
                        if (status === a++) {
                            cm.sendNext_Bottom("#face1#很好，那我就开始拔了哦？", 1013358)
                        } else {
                            if (status === a++) {
                                cm.sendNext_Bottom("#face1#呃……不，不行！\r\n要是那样，我马斯卡波的身体就要变成两截了！", 1013353)
                            } else {
                                if (status === a++) {
                                    cm.sendNext_Bottom("#face6#那该怎么办呢？", 1013358)
                                } else {
                                    if (status === a++) {
                                        cm.sendNext_Bottom("#face1#洒，洒点种子油，应该就能拔出来了！\r\n那个东西在附近很常见，应该很快就能找到！", 1013353)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNext_Bottom("#face1#请帮我从#r#o2300201##k身上搜集#b10个#k#b#i4036524# #t4036524##k！\r\n胖胖花在附近的#r#m100051011##k就能找到！", 1013353)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest();
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
    if (d === 0) {
        status--
    } else {
        status++
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(35948, "10=h0;11=h0;02=h0;12=h0;13=h0;14=h0;15=h0;06=h2;07=h0;16=h0;08=h0;17=h0;09=h0;19=h0");
            cm.sendNext_Bottom("#face3##b(把种子油洒上去之后，地面变得湿润起来。\r\n接着，突然从地下冒出了一个奇怪的东西。）#k", 1013358);
            cm.forceCompleteQuest();
            cm.gainItem(4036524, -10);
            cm.gainExp(500);
            cm.dispose()
        }
    }
};