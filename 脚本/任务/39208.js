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
            cm.sendNormalTalk_Bottom("#face1#呼…以后不要再喊我笨蛋了行吗？\r\n虽然我也是那样，但… 那个总需要人照顾的老头…\r\n真让人放不下心，好奇怪。", 36, 2155121, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不过我还是要去看看，\r\n我们今天再去上次的那个通道看看吧。\r\n那里肯定与某个地方相连…我记不起来了。", 36, 2155121, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("那里好像与某个对我来说很重要的地方相连。\r\n呃，总之去看看应该就知道了。\r\n怎么样？你做好准备了吗？\r\n\r\n#g- 如果点击“是”，即可自动移动。", 37, 2155104)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好的。我们再去那个地方看看吧。", 37, 2155104, false, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(310070481, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39208.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#呃…谢谢你。\r\n总是麻烦你…\r\n多亏了你，我今天想起了很多事情。", 36, 2155121, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#我们捡到的那块铁板的真实来历，\r\n还有我过去的部分模样，\r\n还有那个超级人造人…", 36, 2155121, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#…不知为何，我觉得要再去见见那个超级人造人。\r\n但是… 我能去吗？\r\n究竟发生了什么事情…这个铁板怎么在我手上…", 36, 2155121, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#呃…突然想起了这么多事情，我的头有些疼。\r\n今天…今天稍微休息下吧。\r\n我想自己待一会儿。真的很感谢你，朋友。", 36, 2155121, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainExp(60623436);
                            cm.updateInfoQuest(39208, "gExpCheck=1");
                            cm.forceCompleteQuest(39208);
                            cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;1q=1;5m=0;2q=1;6m=0;3q=1;4q=1;5q=1;6q=1;7q=1;dqCount=1;story=3");
                            cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;1q=1;5m=0;2q=1;6m=0;3q=1;4q=1;5q=1;6q=1;7q=1;dqCount=0;story=3");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};