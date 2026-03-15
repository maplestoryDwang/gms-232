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
            cm.sendNormalTalk_Bottom("#face0#嗯……那么我想请你帮个忙……嗯，嗯……", 37, 3001508, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#这块水晶好像太显眼了……", 37, 3001508, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#呃呃，经常会有怪物被吸引过来……所以……觉得很碍事……", 37, 3001508, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#现在就藏在这个垃圾堆里↗\r\n哈哈，怎么样？没看到吧！？在哪呢！？", 37, 3001509, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#叽，叽勒……所以我们需要什么东西来把它遮起来。", 37, 3001510, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face2#没，没错……嗯……周围有很多废铁之类的东西……我们也正在努力……", 37, 3001508)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#希望你能帮我从#r废弃物处理场3#k的#o2400306#身上，搜集#b30个#k#i4036350# #b#t4036350##k……", 37, 3001508, 0, 1)
                                } else {
                                    if (status === a++) {
                                        cm.OnStartNavigation(402000122, 0, "", 0);
                                        cm.forceStartQuest(34941, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34941.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(34941);
            cm.gainExp(8523);
            cm.updateInfoQuest(34941, "exp=1");
            cm.sendNormalTalk_Bottom("#face2#嗯……把这些焊起来就行了。嗯……巴克巴克好像正在搜集备用粮…如果可以，你最好去看看……", 37, 3001508, 0, 1);
            cm.gainItem(4036350, -30)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
};