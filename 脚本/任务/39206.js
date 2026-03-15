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
            cm.sendNormalTalk_Bottom("嗯……休息了一下感觉好多了。\r\n再次接受治疗，是有些辛苦。不过，总算有点成果！", 36, 2155104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#当时捡到的那个东西……\r\n#b你还记得那块写有数字的铁板吗？#k", 36, 2155121, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#虽然我不能十分肯定……\r\n#b但那个东西应该来自黑色天堂#k。\r\n我偷听到了独眼爷爷和侦查机器人的谈话了。", 36, 2155121, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#爷爷在那之后，就更加不让我自己独自待着了。\r\n而且它还坚决不让我出门。\r\n但是…你也知道，我得尽快回去。虽然我还不知道为什么…", 36, 2155121, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("进入黑色天堂的话，说不定能想起点什么。\r\n拜托了……我只能拜托你了。\r\n#b你能和我一起进入黑色天堂吗？#k\r\n\r\n#g- 如果点击“是”，即可自动移动。", 37, 2155104)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("谢谢你！我就知道你会和我一起去的。\r\n嗯…请注意不要被爷爷发现，\r\n到这里来。我发现了一个洞。", 37, 2155104, false, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(310070650, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39206.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#呼呼…终于镇定了。\r\n芯片得到了一定程度的修复，我现在好像能撑住了。\r\n独眼爷爷好像也没有察觉，这真是太好了。", 36, 2155121, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#刚刚那通道是什么呢？还有关于她的短暂回忆…\r\n以及我那明确的想要尽快回去的想法…？\r\n这一切…好像都能记起来…", 36, 2155121, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯…抱歉，我的脑子现在还有些乱。\r\n刚好爷爷在喊我，我也要走了…\r\n这次真的很感谢你。如果下次有机会，我们再去那里看看吧。", 36, 2155104, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;5m=0;1q=1;6m=0;2q=1;3q=1;4q=1;5q=1;dqCount=1;story=1");
                        cm.gainExp(60623436);
                        cm.updateInfoQuest(39206, "gExpCheck=1");
                        cm.forceCompleteQuest(39206);
                        cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;5m=0;1q=1;6m=0;2q=1;3q=1;4q=1;5q=1;dqCount=1;story=2");
                        cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;5m=0;1q=1;6m=0;2q=1;3q=1;4q=1;5q=1;dqCount=0;story=2");
                        cm.dispose()
                    }
                }
            }
        }
    }
};