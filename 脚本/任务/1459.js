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
            cm.sendNormalTalk("你知道有多少海盗在这片宽广的冒险岛世界上游荡吗？那些不计其数的海盗中，能够站在这里的人少之又少。比你想的还要少的所。你就是这样强大的人。", 0, 2081500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("拥有了如此强大的力量，自然要担负起相应的责任。因为强大的力量与责任如影随形。你不明白？我是说#b4次转职#k会伴随着责任通行。不是单纯的强大，而是#b伴随着鲜明意志的强大#k... 不是单纯的冒险，而是#b将冒险岛世界引导向正确方向的冒险#k。", 0, 2081500, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("拥有强大力量的冒险家则要成为#b一名英雄#k，肩负帮助世界的责任。你也是一样。当然我并不是让其放弃冒险家的自由。但是你作为在这个世界上冒险的冒险家，难道不应该为这世界负起一份责任吗？", 0, 2081500, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("责任的到来决定必须进行4次转职的试炼。这个试炼就是要考验你，看你是否能够超越一名冒险家的局限，成为位英雄。去击败传说中能够识别英雄的生物#r天鹰#k和#r火焰龙#k，找到#b英雄军章#k和#b英雄之星#k。", 0, 2081500, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("那么我们就按照你的选择，进入试炼。你要挑战#r天鹰#k和#r火焰龙#k吗？", 0, 2081500)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(1459, "");
                                cm.sendNormalTalk("真正的英雄并非天生的，而是由后天培养的……我相信你可以成为一名英雄。", 0, 2081500, false, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.openNpc(2081500)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1459.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你证明了自己拥有成为英雄的素质。这样就足够了！没有必要继续证明了。你想成为真正的冒险家吗？", 0, 2081500)
        } else {
            if (status === a++) {
                cm.changeJob(cm.getJob() + 1);
                cm.forceStartQuest(1459, "");
                cm.forceCompleteQuest(1459);
                cm.forceCompleteQuest(29903);
                cm.updateInfoQuest(1073, "530=201;531=201;532=201;501=10");
                cm.sendNormalTalk("你已经成长为一名真正的冒险家了啊, 现在的你强大, 善良且勇敢. ", 0, 2081500, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142110, 1);
                    cm.sendNormalTalk("如果同时具备这些特质的人不是英雄的话, 那谁能被称为英雄呢. ", 0, 2081500, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("英雄不是天生的, 需要不断付出努力……希望你能成为一名真正的英雄, 带领冒险岛世界走向光明. ", 0, 2081500, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我顺便说一下, 如果你对现在的职业不满意, 可以来找我. 我会给你机会再次选择自己的命运. 当然, 你需要付出一定的代价. ", 0, 2081500, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};