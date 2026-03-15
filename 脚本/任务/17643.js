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
            cm.sendNormalTalk("怎么这么宁静。该不会是海盗们有所察觉撤退了吧。", 0, 9390244, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("说不准哦。说不定会那样呢。但是才没过几天再等等看吧。", 2, 9390244, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("嗯……就那样吧。你做好了随时和海盗交战的准备吗？", 0, 9390244)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17643, "");
                        cm.sendNormalTalk("是海盗！！海盗出现了！！", 5, 9390217, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("终于上钩了！！", 1, 9390244, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("海盗们朝我们商船过来了！！", 5, 9390217, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("去吧！#h0# ！！", 1, 9390244, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.spawnMobLimit(9390815, 1, 850, -25, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -25, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -25, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -25, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -25, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -25, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -25, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -25, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -25, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -25, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -15, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -15, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -15, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -15, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -15, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -15, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -15, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -15, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -15, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -15, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, 45, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, 45, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, 45, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, 45, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, 45, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, 45, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, 45, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, 45, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, 45, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, 45, 100);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17643.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("近处的海盗们逃跑了！！", 4, 9390217, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不能让他们跑掉！！！", 0, 9390244, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("吼吼，该轮我上场了。我要用我的魔法把整条船 #r#e全部毁掉#k#n", 4, 9390204, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("唔哇！！等等等等等等等一下！！", 2, 9390244, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("干嘛拦着我？", 4, 9390204, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那个叫普赛依还是叫什么的家伙还没有出现呢。那些家伙们肯定是往普赛依所在的根据地方向逃跑了，我们就这么跟过去不是更好吗？", 2, 9390244, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("对的，果然是人才啊！赶紧跟上去！！", 0, 9390244, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("呃嗯……真可惜啊。", 4, 9390204, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(17643);
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
};