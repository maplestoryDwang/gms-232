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
            cm.sendNormalTalk_Bottom("#face0#信玄大人的预想果然成真了。在等待神那你到来的这段时间，我已经先在城墙四周查探了一番。发现总的来说，这边的防守最为松懈。", 37, 9130022, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#尤其是这个地点，可以说是死角中的死角。这里距离东侧法堂很近，只要翻过这里应该就可以顺利到达目的地了。周围似乎并没有人在，看来这里的戒备真的非常松懈。神那，救出樱乃姬的任务就交给你了。", 37, 9130022)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57437, "");
                    cm.OnStartNavigation(807050201, 0, "in01", 0);
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#哦哦，你顺利将姬儿救出来了啊。真是太棒了。", 37, 9130022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你就是和神那一起将我救出来的兼续吗？为了我，让你费心了。", 37, 9130021, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#不必客气。阁下平安无事就好。好了，大家肯定有很多话想说，但这些话还是留到之后再讲吧。我们现在应该立刻返回本阵。毕竟这里还是敌人的领地。", 37, 9130022)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(57437);
                        cm.OnStartNavigation(807000000, 1, "9130010", 0);
                        cm.dispose();
                        cm.warp(807000000, 0)
                    } else {
                        if (status == a++) {
                            cm.forceCompleteQuest();
                            cm.gainExp(12000);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};