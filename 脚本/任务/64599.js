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
            cm.forceStartQuest(64599, "");
            cm.sendNormalTalk_Bottom("#face2#啦啦！我从艾丹那里拿到了桌子！还是免费的！", 37, 9400921, false, true)
        } else {
            if (status === a++) {
                if (!cm.haveItem(2672016)) {
                    cm.gainItem(2672016, 1)
                }
                cm.sendNormalTalk_Bottom("#face0#嗯……虽然有点小~问题，但不是不能用。", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#我们也从米兰达的跳蚤市场买来了钟！", 37, 9400920, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#正好！那就把桌子和时钟都放置一下吧？", 37, 9400921, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#对了，墙上的家具和地上的家具是能够重叠的。这样就能把家里布置得更好了吧？", 37, 9400921, true, true);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var d = cm.getInfoQuest(64594);
            if (d.contains("2671002") && d.contains("2671002")) {
                cm.sendNormalTalk_Bottom("#face2#你已经放置好了吗？", 37, 9400921, false, true)
            } else {
                cm.sendNormalTalk_Bottom("#face0#你忘记了放置的方法吗？", 37, 9400921, false, true)
            }
        } else {
            if (status == a++) {
                var d = cm.getInfoQuest(64594);
                if (d.contains("2671002") && d.contains("2671002")) {
                    cm.sendNormalTalk_Bottom("#face1#哇！终于像个人住的房屋了！啊，这是当然了，原先也是一样的。", 37, 9400921, true, true)
                } else {
                    cm.sendNormalTalk_Bottom("#face0#首先双击背包里的桌子和时钟，前往[家具保管箱]。", 37, 9400921, true, true)
                }
            } else {
                if (status == a++) {
                    var d = cm.getInfoQuest(64594);
                    if (d.contains("2671002") && d.contains("2671002")) {
                        cm.sendNormalTalk_Bottom("#b不不，现在终于像个家了！这都多亏了埃尔宾和艾米呢！谢谢。", 57, 0, true, true)
                    } else {
                        cm.sendNormalTalk_Bottom("#face0#然后点击我的小屋菜单的#i3801391#按键，打开[家具保管箱]，双击想要放置的家具。", 37, 9400921, true, true)
                    }
                } else {
                    if (status == a++) {
                        var d = cm.getInfoQuest(64594);
                        if (d.contains("2671002") && d.contains("2671002")) {
                            cm.sendNormalTalk_Bottom("#face1#作为邻居，这都是应该做的！以后需要帮助的时候，尽管开口。", 37, 9400921, true, true)
                        } else {
                            cm.sendNormalTalk_Bottom("#face1#点击想要放置家具的位置后，再点击[完成放置]按键即可！你要再试一次吗？", 37, 9400921, true, true);
                            cm.dispose()
                        }
                    } else {
                        if (status == a++) {
                            cm.sendNormalTalk_Bottom("#face0#难道！你的谢谢就只是嘴上说说？应该还有更好的方式吧~~比如说金币？", 37, 9400920, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b…", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#…", 37, 9400921, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#我开玩笑的，可能有2%是出于真心吧。", 37, 9400920, true, true)
                                    } else {
                                        if (status === a++) {
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
                                                        cm.forceCompleteQuest(64599);
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
    }
};