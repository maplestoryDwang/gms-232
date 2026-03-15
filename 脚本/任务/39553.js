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
            cm.sendNormalTalk_Bottom("#face0#最近我总是觉得好像缺了点什么……\r\n好吧,看来是时候学习新法术了。", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#看一看偷偷顺来的道术集就可以了吧？", 36, 3001651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那个……我带来的道术集就只有上次看过的那些。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#唔……那你打算怎么办？", 36, 3001651, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face11#能怎么办,虽然会有些麻烦,不过还是要再回道观看看,\r\n那这就招来筋斗云出发吧？", 36, 3001674 + cm.getPlayer().getGender(), 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face12#许久没来道观了,还有点激动呢……也不知道师父在不在,\r\n没得选了,走吧,筋斗云,去仙游山山脚~！", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39553, "rMap=" + cm.getMapId());
                                    cm.dispose();
                                    cm.warp(993160122, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39553.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(39553);
            cm.updateInfoQuest(1073, "16400=10;16410=31;16411=201");
            cm.openUIWithOption(3, 164111000);
            cm.sendNormalTalk_Bottom("#face9#记忆中的法术进入了我的体内,\r\n嘻嘻……想来在梦里学习道术的道士应该就只有我了吧。", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#……还有,要把这些拿出来啊,我从师父的抽屉里顺走的这些东西……\r\n快到我这个道士的怀里来,小可爱们！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face12#哈哈！我好像又成长了一个阶段,\r\n很想赶紧去看看全新的道术呢！", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                    cm.forceStartQuest(39507, "");
                    cm.forceCompleteQuest(39507);
                    cm.changeJob(16411);
                    cm.dispose()
                }
            }
        }
    }
};