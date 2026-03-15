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
            cm.forceStartQuest(38003, "");
            cm.updateInfoQuest(38003, "");
            cm.gainItem(4033998, 4);
            cm.dispose()
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
            cm.sendNormalTalk("哦，你就是那个传说中的“人类”啊。名字叫隐月？真的像房子一样大！你一定是长得太大，又没什么用，所以才被遗弃了吧？也是，估计要吃不少东西，才能吃得饱。", 0, 3002007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我来到这里，不是因为被遗弃，而是被卷入了某个事件……", 2, 3002007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那是蒸糕吧？正好我有点饿呢，给我吧。啊，我为你准备了一些物品，你带走吧。这双大鞋是我第一次做的，费了我好大的劲呢。要是不合脚的话，你就再拿回来。我给你改改。", 0, 3002007, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(38003, "NpcSpeech=30020071");
                        cm.OnStartNavigation(410000000, 1, "3002006", 38003);
                        cm.gainItem(4033998, -1);
                        cm.gainItem(1072892, 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function stage1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.sendNormalTalk("呃嗬，呃嗬！怎么会有这么可怕的事情……连小小的微物都有尾巴，会两条腿走路，会说话的动物怎么能长得如此凄惨呢？呃嗬，呃嗬。", 0, 3002006, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("凄，凄惨……虽然我没有尾巴，但是我也一样活得很好啊……", 2, 3002006, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是的，只有这种乐观的态度，才能让你继续生活下去。绝对不能沮丧，不能悲观。先用这根绳子把你那像流浪者一样披散的头发扎起来。不要理会别人看你的眼光，绝对不能失去活下去的勇气。", 0, 3002006, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(38003, "NpcSpeech=30020071/30020062");
                    cm.OnStartNavigation(410000000, 1, "3002009", 38003);
                    cm.gainItem(4033998, -1);
                    cm.gainItem(1004037, 1);
                    cm.dispose()
                }
            }
        }
    }
}

function stage2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.sendNormalTalk("哎呀，你就是……真的和听到的一样……怎么……我也有孩子，现在终于可以理解父母的心了。生你的父母，一定也非常心痛。所以不要埋怨他们。", 0, 3002009, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我真的没关系。我以前住的地方都和我一样…………", 2, 3002009, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这是村长让我做的衣服。必须穿着像样的衣服，在外面才不会被人嘲笑。当然，我们村里应该不会有那种人。啊，谢谢你送来的蒸糕。", 0, 3002009, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(38003, "NpcSpeech=30020071/30020062/30020093");
                    cm.OnStartNavigation(410000000, 1, "3002008", 38003);
                    cm.gainItem(4033998, -1);
                    cm.gainItem(1051377, 1);
                    cm.dispose()
                }
            }
        }
    }
}

function stage3(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.sendNormalTalk("哎呀，我的妈！比听说的还要可怜。唉，我看着就觉得难过。脸倒是挺漂亮，但怎么少了这么多东西呢？你母亲是不是在怀你的时候吃错了药？那样的话，生出你这样的畸形儿的概率就会大大增加。", 0, 3002008, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("……也许吧。(不管了。反正再怎么解释，也没人听。)", 2, 3002008, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哎呀，哎呀，真可怜。所以说怀了孩子之后，就必须注意饮食。哎呀，太可怜了。我没什么可以给你的，你把这个拳套拿走吧。必须穿得端正一点，看上去才会好一点。今后如果有什么困难，就随时来找我！", 0, 3002008, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(38003, "NpcSpeech=30020071/30020062/30020093/30020084");
                    cm.OnStartNavigation(410000000, 1, "3002005", 38003);
                    cm.gainItem(4033998, -1);
                    cm.gainItem(1082572, 1);
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
            cm.sendNormalTalk("怎么样？打过招呼了吗？咦？你看上去好像很疲惫的样子。", 0, 3002005, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(2000008, 10);
                cm.gainItem(2000010, 10);
                cm.sendNormalTalk("啊哈，所有人都为你准备了一份礼物。看吧，我们尖耳狐狸都很重感情。", 0, 3002005, true, true)
            } else {
                if (status === a++) {
                    cm.openUIWithOption(0, 1);
                    cm.sendNormalTalk("快把礼物装备上去试试吧。收到礼物之后，就应该马上装备到身上。", 0, 3002005, true, false);
                    cm.forceCompleteQuest(38003);
                    cm.gainExp(600);
                    cm.dispose()
                }
            }
        }
    }
};