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
            cm.sendNormalTalk_Bottom("#face0#我家主人的预想果然成真了。在等待剑斗你到来的这段时间，我已经先在城墙四周查探了一番。发现总的来说，这边的防守最为松懈。", 37, 9130023, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#尤其是这个地点，可以说是死角中的死角。这里距离东侧法堂很近，只要翻过这里应该就可以顺利到达目的地了。周围似乎并没有人在，看来这里的戒备真的非常松懈。剑斗，救出樱乃姬的任务就交给你了。", 37, 9130023)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我负责在这边帮忙确保你们的退路。还请一路小心啊。", 37, 9130023, false, true)
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(807050201, 0, "in01", 0);
                        cm.forceStartQuest(57141, "");
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57141.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#哦哦，你顺利将姬儿救出来了啊。真是太棒了。", 37, 9130023, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你就是和剑斗一起将我救出来的幸村吗？为了我，让你费心了。", 37, 9130021, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#不必客气。阁下平安无事就好。好了，大家肯定有很多话想说，但这些话还是留到之后再讲吧。我们现在应该立刻返回本阵。毕竟这里还是敌人的领地。", 37, 9130023)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(57141);
                        cm.gainExp(19112);
                        cm.dispose();
                        cm.warp(807000000, 0, false)
                    }
                }
            }
        }
    }
};