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
            cm.sendNormalTalk("呜……呜……", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(在这里居然有这样的少年。太奇怪了。而且还在哭……还是不要管他为好。)", 16, 9130107, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("呜……呜呜……嗯？人……人……！请你帮帮我！", 4, 9130107)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(58914, "");
                        cm.forceStartQuest(58979, "ing");
                        cm.sendNormalTalk("((真是的……) 怎么了？", 16, 9130107, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("呜呜，我是照看盟军马的侍童，被人从哨所带到了这里。我因为受到冲击，昏了过去，一睁眼就在这儿了。", 4, 9130107, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk(" (盟军在这里？)……其他盟军士兵去哪里了？", 16, 9130107, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("士兵们都变得好奇怪……好……好可怕。我想离开这里，请你帮我找找我的行李吧。", 4, 9130107, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那是我父亲最后留下的遗物。应该是掉在这附近了……但是因为太黑了，看不清在哪儿。", 4, 9130107, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("那是个非常漂亮有花纹的包裹。", 4, 9130107, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58914.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你帮我找到包裹了吗？", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("谢谢你！真的太感谢你了！", 4, 9130107, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58914);
                    cm.gainExp(30);
                    cm.gainItem(4034131, -1);
                    cm.dispose()
                }
            }
        }
    }
};