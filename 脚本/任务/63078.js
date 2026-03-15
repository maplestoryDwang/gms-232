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
            cm.sendNormalTalk("咳咳，#h0#，你有空吗？", 4, 9400221, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#p9400221#，你有什么事？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，没什么大事。只不过……有个小小的事情想请你帮忙。", 4, 9400221, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("可爱的#p9400223#不是来到我们思索之地了嘛？\r\n但我觉得这地方对#p9400223#来说太荒凉了……", 4, 9400221, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不瞒你说，之前因为大家整日都在埋头思索，为了防止在一边思考一边走路时不被碰伤，村庄里尽量不地放置任何设施。", 4, 9400221, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b你们走路时也在思考吗？", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("这不是理所当然的吗？由于人们走来走去也常发生碰撞，我们甚至划分了各自的区域，大家只在该区域里进行思索", 4, 9400221, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("咳咳，这不是要紧的。现在我想为了#p9400223#把村庄装点一下，你有什么建议？", 4, 9400221, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b唔……种些花花草草和树木怎么样？", 2, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo("我也是这个想法！你能帮忙吗？", 4, 9400221)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("噢！谢谢你！那么请你去村庄外面收集#t4034998#，再将其种在村庄里吧。我会给你标记好移栽的位置。", 4, 9400221, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("我相信你一定会做得很好！哈哈", 4, 9400221, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(63078, "T1=0");
                                                            cm.updateInfoQuest(63078, "T1=0;T2=0");
                                                            cm.updateInfoQuest(63078, "T1=0;T2=0;T3=0");
                                                            cm.updateInfoQuest(63078, "T1=0;T2=0;T3=0;comCount=0");
                                                            cm.afterlandChangeMapObject("gT01_0", 1, 1, 1000, 0, 0, 0, 0);
                                                            cm.afterlandChangeMapObject("gT02_0", 1, 1, 1000, 0, 0, 0, 0);
                                                            cm.afterlandChangeMapObject("gT03_0", 1, 1, 1000, 0, 0, 0, 0);
                                                            cm.forceStartQuest(63078, "");
                                                            cm.getMap().spawnReactorIfNotExist(8659075, 0, 236, 130, 0, "growTree03");
                                                            cm.getMap().spawnReactorIfNotExist(8659073, 0, -130, 130, 0, "growTree01");
                                                            cm.getMap().spawnReactorIfNotExist(8659074, 0, 88, 129, 0, "growTree02");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63078.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("噢……！我非常满意。", 4, 9400221, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(63078);
                cm.gainExp(794000);
                cm.updateInfoQuest(63078, "T1=3;T2=3;T3=3;comCount=3;exp=1");
                cm.sendNormalTalk("#b嗯……树木还不够漂亮……得请#p9400223#给它涂上颜色才行。", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("真是个好主意！我要马上去跟#p9400223#商量一下。等涂好了你要过来瞧瞧哦。", 4, 9400221, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};