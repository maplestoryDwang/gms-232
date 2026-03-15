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
            cm.sendNormalTalk_Bottom("#b（向汉斯说明事情原委。）#k", 56, 1530391, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("仔细想想他所说的话，冒险岛世界的黑暗气息之所以会侵入那个世界……说不定是他一手策划的。", 37, 1530391, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("果然平行世界也与我们这个世界相同。数百年前冒险岛世界发生的惨事，肯定会在那个世界再现的。", 37, 1530391, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("但是，我们现在已经没有介入的权限了。我们也不能再介入了。", 37, 1530040, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("…………", 37, 1530391, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("老师？你在睡觉吗？", 37, 1530020, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("啧，你这家伙！我只是陷入了沉思而已。", 37, 1530391, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("看来我们要改变想法了。我认为，你们在这里还有未完成的事情。", 37, 1530391, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("老师，但是……", 37, 1530040, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("不要太墨守陈规了，莉莉。#h0#，你能再做一段时间的学生吗？与大家在一起……", 37, 1530391, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("大家关于#h0#的记忆已经全部消失了！", 37, 1530040, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("记忆只要重新恢复就行了。我们有必要继续对那世界发生的事情进行观察。", 37, 1530391, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("既然那个世界有#r恶徒#k……那至少应该有1名#b英雄#k才像话吧？哈哈。", 37, 1530391, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.dispose();
                                                                cm.warp(330002514, 0)
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
            cm.sendNormalTalk_Bottom("辛苦你了，#h0#。我为你准备了很多礼物。", 37, 1530040, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(33028);
                cm.forceCompleteQuest(32705);
                cm.finishAchievement(1210);
                cm.sendNormalTalk_Bottom("我给你的#e#r#t1182079##n#k#e是种很神奇的异界物品。它会与你共同成长。", 37, 1530040, true, true);
                cm.gainItem(1142732, 1);
                cm.gainItem(3010867, 1);
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.gainItem(1182079, 1);
                cm.gainItem(4310125, 2)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};