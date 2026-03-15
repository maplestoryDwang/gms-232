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
            cm.sendNormalTalk_Bottom("#face0#叽，叽勒……在进行探索的时候，难免会出现和同伴失散的情况。那种时候就需要用到电波装置，叽勒。", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#啊，这个会发出独特的电波，因此可以帮助我们找到掉队的同伴。当然，寻找掉队的人，就是你的工作了。", 36, 3001510, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#总之，既然你也一起参加这次调查，那就需要四个电波装置。还有，我的电波装置也需要顺便修理一下……", 36, 3001510, 1, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face4#所以需要多搜集一些材料，叽勒。你去帮我从#r#m402000616##k的#o2400354#身上搜集……大概#b20个#k#i4036348# #b#t4036348##k。", 36, 3001510)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯，我让你去，不是想偷懒。在此期间，我需要检查一下其他探测装备。哈哈，我说的是真的，叽勒。", 36, 3001510, 0, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34926, "");
                                cm.OnStartNavigation(402000616, 0, "", 34926);
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34926.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(34926);
            cm.gainExp(3993);
            cm.updateInfoQuest(34926, "exp=1");
            cm.sendNormalTalk_Bottom("#face0#啊，来啦。那么多应该够了，叽勒……叽楞。", 36, 3001510, 0, 1);
            cm.gainItem(4036348, -20)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#好了，我要制造电波装置了。你去见见巴……巴克……那个家伙吧。妮雅队长应该已经跟他说了，叽，叽勒……", 36, 3001510, 1, 1)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};