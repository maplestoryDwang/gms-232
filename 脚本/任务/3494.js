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
            cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
            cm.sendNormalTalk_Bottom("博士！白外星博士好像朝着这边跑过来了！！", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("赶紧将阿琳传送走！", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#来，等一下！\r\n同伴们身处危险之中，独自一人回去实在是……", 36, 2052027, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("可是眼下的你只是个累赘罢了。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#咳咳……", 36, 2052027, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face4#……传送走吧，博士。", 36, 2052027, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#不行，白外星博士的接近速度实在是太快了，在传送之前会被抓到的。", 37, 2052006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("我来引开那个家伙。", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face2#什么？", 36, 2052027, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face4#为什么……何必如此……我之前是讨厌你的啊。", 36, 2052027, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("别说这种话，我们毕竟是并肩奋战的同伴。", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askYesNo_Bottom("#face0##b#ho#，跑到#b左边#k去，赶紧！", 36, 2052006)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(3494, "");
                                                            cm.sendNormalTalk_Bottom("#b(去左边的传送口#k！！)", 56, 0, false, false)
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