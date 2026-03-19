function enter() {
    if (cm.isQuestActive(3494)) {
        cm.openScriptNpc()
    } else {
        cm.warp(221030900, 1)
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 2014, -648);
                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                cm.sendNormalTalk_Bottom("因为我们是并肩奋战的同伴。", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.fieldEffect_PlayBGM("Bgm22.img/DespairOnDevil", 0, 0);
                    cm.sendNormalTalk_Bottom("#face4#同伴……你说同伴吗？今天第一次见面的我……", 37, 2052027, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#波特君，开始传送阿琳吧。", 37, 2052006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#现在想来……第一次见面时，阿敏姐姐也是这么说的。", 37, 2052027, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#说“要开始传送”吗？", 37, 2052006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#她说我是她的同伴，要保护我。", 37, 2052027, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#阿敏和你的第一次见面……你说的是#b火凤凰之战#k吗？", 37, 2052006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face2#那时候姐姐已经耗尽了冒险能量，甚至都没法变身。", 37, 2052027, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#其他队员也都倒下，\r\n跑去帮忙的我也是动弹不得……", 37, 2052027, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face3#不过，她却为了保护住我们，\r\n一步都没有后退。", 37, 2052027, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face3#不曾有一瞬的犹豫。", 37, 2052027, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face3#姐姐为什么会这么做呢？\r\n那之后的我……又是为何决心成为冒险勇士的呢。", 37, 2052027, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#开始传送。", 37, 2052007, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0##fs20#5！", 37, 2052007, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0##fs20#4！", 37, 2052007, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##fs20#3！", 37, 2052007, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.playerMessage(5, "避开掉落的障碍物，从清扫机器人卡雄的手中逃跑！");
                                                                                    cm.dispose();
                                                                                    cm.warp(221030840, 0)
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
        }
    }
};