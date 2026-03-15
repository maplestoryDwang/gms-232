var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/3", 0, 900, 0, -80, 12, 4, 0);
            cm.sendNormalTalk_Bottom("#face1#打开背包，双击#t2672015:#即可前往#b[家具保管箱]#k。", 37, 9400921, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#然后点击我的小屋菜单的#b#i3801391##t3801391##k按键，查看沙发，点击[放置]按键后就能放在任意位置。但是，不能和已经放置的床重叠放置。你要不要试试？", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
                    cm.sendNormalTalk_Bottom("#face2#如果#h0#能喜欢就好了！", 37, 9400921, true, true);
                    cm.updateInfoQuest(64594, "start");
                    cm.dispose();
                    cm.forceStartQuest()
                }
            }
        }
    }
}

function end(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        var d = cm.getInfoQuest(64594);
        if (d.equals("ok")) {
            end2(e, c, b, a)
        } else {
            if (d.equals("start")) {
                end1(e, c, b, a)
            } else {
                end0(e, c, b, a)
            }
        }
    }
}

function end0(d, c, b, a) {
    if (status == a++) {
        cm.sendNormalTalk_Bottom("#face1# [#i2672015:##t2672015#]\r\n啦啦~！这是为了纪念我们成为邻居而送你的礼物。这是可以代替破旧的椅子，让你舒舒服服地坐着的蓬松~沙发。", 37, 9400921, false, true)
    } else {
        if (status === a++) {
            cm.gainItem(2672015, 1);
            cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/3", 0, 900, 0, -80, 12, 4, 0);
            cm.sendNormalTalk_Bottom("#face1#打开背包，双击#t2672015:#即可前往#b[家具保管箱]#k。", 37, 9400921, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#然后点击我的小屋菜单的#b#i3801391##t3801391##k按键，查看沙发，点击[放置]按键后就能放在任意位置。但是，不能和已经放置的床重叠放置。你要不要试试？", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
                    cm.sendNormalTalk_Bottom("#face2#如果#h0#能喜欢就好了！", 37, 9400921, true, true);
                    cm.updateInfoQuest(64594, "start");
                    cm.dispose()
                }
            }
        }
    }
}

function end1(d, c, b, a) {
    if (status == a++) {
        cm.sendNormalTalk_Bottom("#face1#怎么，还是没有头绪吗？", 37, 9400921, true, true)
    } else {
        if (status === a++) {
            cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/3", 0, 900, 0, -80, 12, 4, 0);
            cm.sendNormalTalk_Bottom("#face1#打开背包，双击#t2672015:#即可前往#b[家具保管箱]#k。", 37, 9400921, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#然后点击我的小屋菜单的#b#i3801391##t3801391##k按键，查看沙发，点击[放置]按键后就能放在任意位置。但是，不能和已经放置的床重叠放置。你要不要试试？", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
                    cm.sendNormalTalk_Bottom("#face2#如果#h0#能喜欢就好了！", 37, 9400921, true, true);
                    cm.updateInfoQuest(64594, "start");
                    cm.dispose()
                }
            }
        }
    }
}

function end2(d, c, b, a) {
    if (status == a++) {
        cm.sendNormalTalk_Bottom("#face1#呵呵，果然……我就说我的眼光不会错的嘛？", 37, 9400921, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face2#放上和简单的灰调原木床相配的布艺沙发，就能装修出将简洁之美发挥到极致的风格！怎么样？家里是不是变得更加优雅了？", 37, 9400921, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b比刚才看起来更像是家了呢，谢谢你，埃尔宾！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那么……你以后就住在这里了吗？", 37, 9400921, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b也许……吧？？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#好极了！旁边一直没有邻居，我还觉得有点寂寞呢。能有像#h0#这样帅气的人搬来住真是太好了。", 37, 9400921, true, true)
                        } else {
                            if (status === a++) {
                                cm.askMenu_Bottom("#face2#如果你有时间，要不要和我一起去广场？我可以给你介绍一下其他邻居！\r\n#L0##b好的。#l\r\n#L1#今天很忙。#l", 37, 9400921)
                            } else {
                                if (status === a++) {
                                    selectionLog[666] = b;
                                    if (selectionLog[666] == 0) {
                                        cm.sendNormalTalk_Bottom("#face2#好极了，那你就跟我来吧！", 37, 9400921, false, true)
                                    } else {
                                        cm.sendNormalTalk_Bottom("#face2#没关系，等你什么时候有空了再来吧！", 37, 9400921, false, true)
                                    }
                                } else {
                                    if (status === a++) {
                                        if (selectionLog[666] == 0) {
                                            cm.OnStartNavigation(871200197, 0, "out00", 0);
                                            cm.forceStartQuest(64595, "")
                                        }
                                        cm.dispose();
                                        cm.forceCompleteQuest(64594)
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