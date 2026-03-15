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
            cm.sendNormalTalk_Bottom("#face0#现在去邀请居民们吧？", 37, 9400921, true, true)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("#face1#如果可以，#h0#亲自去广场邀请居民们吧，怎么样？\r\n#b#L0#好的！#l\r\n#L1#现在还有点尴尬啊。#l", 37, 9400921)
            } else {
                if (status === a++) {
                    if (b == 0) {
                        cm.sendNormalTalk_Bottom("#face1#好的，我和艾米会准备一些简单的食物，我们待会见！", 37, 9400921, false, true)
                    } else {
                        cm.sendNormalTalk_Bottom("#face1##h0#肯定会做得很好的。我和艾米会准备一些简单的食物，你要拿出勇气来！", 37, 9400921, false, true)
                    }
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(cm.getMapId(), 0, "out00", 0);
                        cm.forceStartQuest(64600, "");
                        cm.updateInfoQuest(500767, "2=1;3=1;4=1;entrance=0;7=1;managerXpos=100;managerYpos=100");
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
    if (status == a++) {
        cm.sendNormalTalk_Bottom("#face0#搬家聚会？那是什么？", 37, 9400926, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#b就是搬家后，邀请邻居们来参观家里，再一起吃好吃的。特鲁迪只要来玩就可以了。", 57, 0, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#啊，特鲁迪十分情愿，说要去搬家聚会！", 37, 9400926, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(64600, "NpcSpeech=94009261");
                    cm.dispose()
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
    if (status == a++) {
        cm.sendNormalTalk_Bottom("#face0#……搬家聚会？", 37, 9400924, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#你把时钟挂起来了吗？", 37, 9400924, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b当然了！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#……我知道了。我会准时到的。", 37, 9400924, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(64600, "NpcSpeech=94009261/94009242");
                        cm.dispose()
                    }
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
    if (status == a++) {
        cm.sendNormalTalk_Bottom("#face0#啊啊，我听埃尔宾说了你搬家的事情。呵呵。那个桌子可是我做的。看起来是不是像值300万金币？虽然因为是练习用的作品，不能出售……", 37, 9400923, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#总之，待会儿去就行了吧？凯尼斯大叔还没来，我会转告他的。", 37, 9400923, true, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(64600, "NpcSpeech=94009261/94009242/94009233");
                cm.OnStartNavigation(871000000, 0, "goHome", 0);
                cm.dispose()
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
    if (status === a++) {
        cm.sendNormalTalk_Bottom("#face1#你回来了啊？", 37, 9400921, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#啊，我都激动起来了！对了，你没有别的要邀请的朋友吗？", 37, 9400921, true, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/4", 0, 900, 0, -80, 12, 4, 0);
                cm.sendNormalTalk_Bottom("#face1#好友邀请，只要在点击我的小屋菜单的#i3801393#按键后，输入好友的角色名字就能邀请了。", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#在#b好友名单窗口#k或者#b聊天窗口#k中右键点击好友的角色名字，然后点击[我的小屋邀请]按键也能进行邀请。", 37, 9400921, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
                        cm.askMenu_Bottom("#face1#你要不要试着邀请好友？\r\n#b#L0#现在就邀请。#l\r\n#L1#好友就下次再邀请吧。#l", 37, 9400921)
                    } else {
                        if (status === a++) {
                            if (b == 0) {
                                cm.sendNormalTalk_Bottom("#face1#好的，请在邀请好友后再和我对话！", 37, 9400921, false, true)
                            } else {
                                cm.sendNormalTalk_Bottom("#face1#行，那下次再试试看吧！现在只要等人来就可以了。", 37, 9400921, false, true)
                            }
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(64600, "NpcSpeech=94009261/94009242/94009233/94009214");
                                cm.forceCompleteQuest(64600);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b, a) {
    if (status === a++) {
        cm.sendNormalTalk_Bottom("#face2#你已经邀请了所有好友吗？", 37, 9400921, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face1#好的，现在只要等人来就可以了。", 37, 9400921, true, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(64600);
                cm.dispose()
            }
        }
    }
};