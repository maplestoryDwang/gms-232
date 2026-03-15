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
            cm.sendNormalTalk("好了，不要有负担，你就告诉我吧。我能帮你些什么？", 0, 9390217, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯…… 那我就跟你直说吧。我想见见吉尔伯特·达尼尔拉。", 2, 9390217, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("………… 我没有听错吧…… 你说什么？", 0, 9390217, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我想见#b吉。尔。伯。特。达。尼。尔。拉#k。", 2, 9390217, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("额…… 那个，我……。", 0, 9390217, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("怎么了？很难办？", 2, 9390217, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("不…… 不是说很难办……", 0, 9390217, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("海上男子汉…… 刚刚好像跟我说了些什么……", 2, 9390217, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo("……………… 唉，不管了。好的。从这里往东边一直~ 走，经过喷泉之后，就能看到一个有金色点缀的白色建筑物。那就是达尼尔拉商团的办公室。吉尔伯特应该在那里面。", 0, 9390217)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我会跟商团提前打好招呼的，你应该能进得去。见到吉尔伯特的话，你一定要礼貌点。他在整个凯梅尔兹共和国都有着影响力。", 0, 9390217, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(17620, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17620.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("那个，你是吉尔伯特·达尼尔拉吗？", 2, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是的。但我好像没见过你，你是谁？", 0, 9390203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你好。吉尔伯特，我是……", 2, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯。如果你没有提前预约的话，我没时间接待你。你还是回去吧。", 0, 9390203, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(17620);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};