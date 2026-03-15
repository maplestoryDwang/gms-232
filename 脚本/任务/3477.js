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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/3477.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 110, -34);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#好~那我就开始做简报了。", 37, 2052007, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#根据迄今为止的规律来看，预计#r下一次攻击#k会在#r一周之内#k进行。", 37, 2052007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#再这么下去，本部会处于无防备的状态的。\r\n#b#ho##k，你去帮助他们，渗透入#b白外星博士的UFO#k吧。", 37, 2052006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#不过博士！UFO渗透作战计划全都因为缺乏现实性，被废除了！", 37, 2052007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2##fc0xFFAAAAAA#(呵呵)#k\r\n和那时候的尺寸是不一样啊。", 37, 2052006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3##fs30#好吧！#b冒险岛金刚#k！我批准你们合体！", 37, 2052006, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                cm.playVideoByScript("omegaSector.avi")
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_PlayFieldSound("advStory/stoneUse", 100);
                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                    cm.gainExp(3668312);
                                                                    cm.forceCompleteQuest(3477);
                                                                    cm.npc_ChangeController(2052032, "oid=37959728", 276, -36, 31, 226, 326, 1, true, false);
                                                                    cm.npc_SetSpecialAction("oid=37959728", "summon", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                        cm.effect_PlayMusic("Field.img/flowervioleta/bird")
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#……至少应该不太会耗费油钱。", 37, 2052006, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.fieldEffect_PlayBGM("Bgm08.img/LetsMarch", 0, 0);
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
                        }
                    }
                }
            }
        }
    }
};