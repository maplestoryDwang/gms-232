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
            cm.updateInfoQuest(36102, "First=1");
            cm.forceCompleteQuest(36102);
            cm.forceStartQuest(34625, "");
            cm.teachSkill(64001002, 20, 0);
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34625.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("是、是你啊。和我一起执行支部长下达的特殊任务的同伴……先、先收下#i1004986##b伪装斗篷#k吧。\r\n", 0, 3001205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嘿嘿，如果不是装备栏已满，就是背包已包含#b伪装斗篷#k。整理好道具再跟我对话吧。\r\n", 4, 3001205, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是、是你啊。和我一起执行支部长下达的特殊任务的同伴……先、先收下#i1004986##b伪装斗篷#k吧。\r\n", 0, 3001205, false, true)
                } else {
                    if (status === a++) {
                        cm.setPartner(true, 3001251, 80002311, 0);
                        cm.gainExp(5581);
                        cm.sendNormalTalk("哈啊，怎么会突然发生这种事情？我又要无家可归了吗……\r\n", 4, 3001205, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(1004986, 1);
                            cm.sendNormalTalk("不、不是的。你要积极乐观一点，积极乐观……卡德娜，接下来我们的任务就是潜入斗战俱乐部。\r\n", 4, 3001205, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这和摸清Mr.哈扎尔的底细有什么关系？那地方原本就在这里，难道不是吗？\r\n", 2, 3001205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("呃，这、这个……说起来有点复杂……最近发生的一连串可疑事件都和这个斗战俱乐部有关。", 4, 3001205, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b(Mr.哈扎尔不久前秘密在斗战俱乐部建立了一座基地，据说有毒气体就是从那里排放出来的。)#k\r\n", 4, 3001205, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("附近的生命体发生奇怪变化的情况也是，越靠近斗战俱乐部就越严重……总之，那里一定有什么。\r\n", 4, 3001205, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我、我们快去调查一下吧。对了，因为我们的长相已经暴露了，所以最好现在就穿上#i1004986##b伪装斗篷#k。\r\n", 4, 3001205, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(34625);
                                                    cm.OnStartNavigation(402000000, 0, "north00", 0);
                                                    cm.openUIWithOption(0, 1);
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
};