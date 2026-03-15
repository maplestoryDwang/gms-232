var status = -1;
var selectionLog = [];

function start(e, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#阿黛尔，你在贝尔达的残骸里，看到了什么？\r\n在找回的记忆中，是否给你提示了前进的方向？", 36, 3001500, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我向他讲述了我在这期间找回的记忆中见到的情景，\r\n关于艾因近卫骑士团和神王的堕落，以及那天的夜袭。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#尽管如此，我还是不愿放下对主君的信义。\r\n我恳切地希望他能重新变回从前那个贤王。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#但过了这么多年，如今我才明白，\r\n高等翼人最终选择走上了无情的战争之路。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#就算我成功守护了先代神王，我能让他回心转意吗？\r\n我能阻止那些无辜的人白白牺牲吗？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我也曾有过与你相似的苦恼。\r\n一直在思索我试图独自中止仪式，是否是个鲁莽的抉择。", 36, 3001500, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#最终我既没能阻止贝尔达的毁灭，也失去了老朋友。\r\n甚至自己的身体还受到了这样的诅咒。", 36, 3001500, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#但如果我不那么做，就救不了我的同僚。\r\n虽然无法改变贝尔达的命运，但我守住了我珍惜的人。", 36, 3001500, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#你当年的行为，一定也不是毫无意义的。", 36, 3001500, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#即使无法改变结局。", 36, 3001500, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(因为那天的选择，才有了今天的我。\r\n我遇到了新的主君，还拯救了里斯托尼亚王国。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#为了扭转巨大的洪流，我们必须团结起来。\r\n仅凭一个人的力量，是干不成大事的。", 36, 3001500, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#你应该也感觉到了吧，格兰蒂斯的危机正在逼近。\r\n在那天到来之前，我们要做好阻止悲剧发生的准备。", 36, 3001500, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face2#为了……守护珍惜之人。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.askAcceptDecline_Bottom("#face0#那么，接下来就各自归位吧？\r\n我们还有很多事情要做哦。\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001500, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(39670, "");
                                                                        cm.dispose();
                                                                        var d = cm.getNumberFromQuestInfo(39669, "rMap");
                                                                        cm.warp(d, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39670.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(因为没有失去信念，所以我才能成为那少年的骑士。\r\n虽然失去了一切，但幸亏有想要守护的信念，才让我重新站了起来。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我是与邪恶和不正之风对抗，守护珍惜之物的骑士。\r\n现在，我可以毫不犹豫地说出这句话了……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(39670);
                    cm.finishAchievement(266);
                    cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;54=h0;j=4;55=h0;56=h0;57=h0;58=h0;59=h0;q=9");
                    cm.teachSkill(150020006, 9, 10);
                    cm.getTopMsgFont("<回忆>技能的等级提高了。", 3, 20, 20, 0, 0);
                    cm.dispose()
                }
            }
        }
    }
};