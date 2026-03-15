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
            cm.dispose()
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
            cm.npc_ChangeController(9400676, "oid=7622061", 200, 400, 14, 150, 250, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622061", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7622062", 120, 400, 22, 70, 170, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622062", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7622063", 50, 400, 22, 0, 100, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622063", "summon", 0, 0);
            cm.npc_ChangeController(9400676, "oid=7622064", -30, 400, 9, -80, 20, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622064", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7622065", -100, 400, 29, -150, -50, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622065", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7622066", -180, 400, 23, -230, -130, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622066", "summon", 0, 0);
            cm.npc_ChangeController(9400676, "oid=7622067", -280, 400, 12, -330, -230, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622067", "summon", 0, 0);
            cm.npc_ChangeController(9400675, "oid=7622068", -350, 400, 28, -400, -300, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622068", "summon", 0, 0);
            cm.npc_ChangeController(9400674, "oid=7622069", -430, 400, 24, -480, -380, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622069", "summon", 0, 0);
            cm.npc_ChangeController(9400641, "oid=7622070", -500, 400, 4, -550, -450, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622070", "summon", 0, 0);
            cm.npc_ChangeController(9400675, "oid=7622071", -560, 400, 4, -610, -510, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622071", "summon", 0, 0);
            cm.npc_ChangeController(9400641, "oid=7622072", -620, 400, 5, -670, -570, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622072", "summon", 0, 0);
            cm.npc_ChangeController(9400667, "oid=7622073", -800, 400, 11, -850, -750, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622073", "summon", 0, 0);
            cm.npc_ChangeController(9400672, "oid=7622074", -850, 400, 11, -900, -800, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622074", "summon", 0, 0);
            cm.npc_ChangeController(9400674, "oid=7622075", -910, 400, 27, -960, -860, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622075", "summon", 0, 0);
            cm.npc_ChangeController(9400675, "oid=7622076", -970, 400, 26, -1020, -920, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622076", "summon", 0, 0);
            cm.npc_ChangeController(9400666, "oid=7622077", -1050, 400, 17, -1100, -1000, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622077", "summon", 0, 0);
            cm.npc_ChangeController(9400674, "oid=7622078", -1120, 400, 17, -1170, -1070, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622078", "summon", 0, 0);
            cm.npc_ChangeController(9400676, "oid=7622079", -1200, 400, 8, -1250, -1150, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622079", "summon", 0, 0);
            cm.npc_ChangeController(9400672, "oid=7622080", -1250, 400, 10, -1300, -1200, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622080", "summon", 0, 0);
            cm.npc_ChangeController(9400668, "oid=7622081", -1400, 400, 6, -1450, -1350, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622081", "summon", 0, 0);
            cm.npc_ChangeController(9400676, "oid=7622082", -1500, 400, 3, -1550, -1450, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622082", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7622083", -1630, 400, 7, -1680, -1580, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622083", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7622084", -1750, 400, 1, -1800, -1700, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622084", "summon", 0, 0);
            cm.npc_ChangeController(9400676, "oid=7622085", -1810, 400, 2, -1860, -1760, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622085", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7622086", -1900, 400, 30, -1950, -1850, 0, true, false);
            cm.npc_SetSpecialAction("oid=7622086", "summon", 0, 0);
            cm.setMobImage("PL_MONAD.img/EP1/ACT2/monsterfootstep_loop", 100);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -500, -610);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402245/Attack2", 100);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402247/Attack1", 100);
                cm.sendNormalTalk_Bottom("#b艾丽卡！它们的目的地是斯巴乐缇！", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation", "oid=7621935"], [1000, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不行！我们必须阻止它们！那里还有很多正在接受治疗的伤者……！", 37, 9400580, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#怎么办？！", 37, 9400580, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b但是它们数量太多了，我们两个无法消灭所有怪物。就算现在我们一起去斯巴乐缇战斗……", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face4#我们必须阻止它们进入斯巴乐缇。", 37, 9400580, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b但是，没有能阻拦它们的方法……", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_setForceFlip("oid=7621935", 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_setForceFlip("oid=7621935", -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_setForceFlip("oid=7621935", 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_setForceFlip("oid=7621935", -1);
                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNewEffects(17, [2000, 1000, 2000, -910, -520])
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#……", 37, 9400580, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#b……！", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face4#如果能破坏这个……", 37, 9400580, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.sendNormalTalk_Bottom("#b就能阻止怪物！", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNewEffects(19, [0])
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                    cm.inGameDirectionEvent_ForcedFlip10(1, 93);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_MoveAction(5);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -775, -532);
                                                                                                            cm.inGameDirectionEvent_ForcedFlip10(1, 30);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.npc_SetSpecialAction("oid=203328", "die1", 0, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNewEffects(0, [0, 0, 0, 0, 0])
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.npc_SetForceMove("oid=7622061", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622062", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622063", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622064", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622065", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622066", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622067", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622068", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622069", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622070", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622071", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622072", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622073", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622074", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622075", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622076", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622077", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622078", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622079", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622080", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622081", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622082", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622083", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622084", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622085", 1, 100, 50);
                                                                                                                                cm.npc_SetForceMove("oid=7622086", 1, 100, 50);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNewEffects(12, [3000, -763, 440, 0, 0])
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402246/skill1", 100);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402241/Attack1", 100);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402250/Attack5", 100);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402247/Attack2", 100);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402245/Attack2", 100);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402252/Attack2", 100);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402246/skill1", 100);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402247/Attack1", 100);
                                                                                                                                                                    cm.playSoundEffDirectly("PL_MONAD.img/EP1/ACT2/monsterfootstep_loop");
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNewEffects(19, [0])
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#就是这个！", 37, 9400580, false, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b好的，还有其他的……", 57, 0, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation", "oid=9400580"], [1000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                        cm.setMobImage("PL_MONAD.img/EP1/ACT2/monsterfootstep_loop", 100);
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622061");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622062");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622063");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622064");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622065");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622066");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622067");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622068");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622069");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622070");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622071");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622072");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622073");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622074");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622075");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622076");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622077");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622078");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622079");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622080");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7622081");
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.npc_ChangeController(9400676, "oid=7622607", -650, 400, 5, -700, -600, 0, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622607", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400642, "oid=7622608", -580, 400, 4, -630, -530, 0, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622608", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400642, "oid=7622609", -510, 400, 4, -560, -460, 0, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622609", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400676, "oid=7622610", -440, 400, 24, -490, -390, 0, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622610", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400642, "oid=7622611", -370, 400, 28, -420, -320, 0, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622611", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400642, "oid=7622612", -300, 400, 12, -350, -250, 0, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622612", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400676, "oid=7622613", -230, 400, 12, -280, -180, 0, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622613", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400675, "oid=7622614", -150, 400, 23, -200, -100, 0, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622614", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400674, "oid=7622615", -50, 400, 29, -100, 0, 0, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622615", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400641, "oid=7622616", -750, 400, 25, -800, -700, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622616", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400675, "oid=7622617", -820, 400, 11, -870, -770, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622617", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400641, "oid=7622618", -890, 400, 27, -940, -840, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622618", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400667, "oid=7622619", -950, 400, 26, -1000, -900, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622619", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400672, "oid=7622620", -1020, 400, 26, -1070, -970, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622620", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400674, "oid=7622621", -1080, 400, 17, -1130, -1030, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622621", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400675, "oid=7622622", -1130, 400, 8, -1180, -1080, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622622", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400666, "oid=7622623", -1200, 400, 8, -1250, -1150, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622623", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400674, "oid=7622624", -1280, 400, 10, -1330, -1230, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622624", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400676, "oid=7622625", -1350, 400, 18, -1400, -1300, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622625", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400672, "oid=7622626", -1400, 400, 6, -1450, -1350, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622626", "summon", 0, 0);
                                                                                                                                                                                            cm.npc_ChangeController(9400668, "oid=7622627", -1480, 400, 6, -1530, -1430, 1, true, false);
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=7622627", "summon", 0, 0);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNewEffects(12, [3000, -763, 440, 0, 0])
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=7622607", "attack1", -1, 0);
                                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=7622616", "attack1", -1, 0);
                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402246/skill1", 100);
                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402241/Attack1", 100);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622608", -1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622609", -1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622610", -1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622611", -1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622612", -1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622613", -1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622614", -1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622615", -1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622617", 1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622618", 1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622619", 1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622620", 1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622621", 1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622622", 1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622623", 1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622624", 1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622625", 1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622626", 1, 20, 50);
                                                                                                                                                                                                        cm.npc_SetForceMove("oid=7622627", 1, 20, 50);
                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402250/Attack5", 100);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402247/Attack2", 100);
                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402245/Attack2", 100);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402252/Attack2", 100);
                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402246/skill1", 100);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402247/Attack1", 100);
                                                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=7622608", "attack1", -1, 0);
                                                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=7622617", "attack1", -1, 0);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622609", -1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622610", -1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622611", -1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622612", -1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622613", -1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622614", -1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622615", -1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622618", 1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622619", 1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622620", 1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622621", 1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622622", 1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622623", 1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622624", 1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622625", 1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622626", 1, 20, 50);
                                                                                                                                                                                                                    cm.npc_SetForceMove("oid=7622627", 1, 20, 50);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402250/Attack1", 100);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402247/Attack3", 100);
                                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402245/Attack1", 100);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402252/Attack1", 100);
                                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402246/skill1", 100);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402247/Attack2", 100);
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#为什么和那时不同呢……", 37, 9400580, false, true)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b……它们好像会来追我们啊？", 57, 0, true, true)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#那正好！比起让它们去村子里，不如让它们追着我们！", 37, 9400580, true, true)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.sendNewEffects(19, [1000])
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b……好的！开始诱引作战！", 57, 0, false, true)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                cm.forceCompleteQuest(64088);
                                                                                                                                                                                                                                                                cm.forceStartQuest(64089, "");
                                                                                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                                                                                cm.openNpc(0, "副本_莫奈德_Act2_探索森林六");
                                                                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7621935");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7621935");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7621936");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7621936");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622082");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622083");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622084");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622085");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622086");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622607");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622608");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622609");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622610");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622611");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622612");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622613");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622614");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622615");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622616");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622617");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622618");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622619");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622620");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622621");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622622");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622623");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622624");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622625");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622626");
                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=7622627")
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
            }
        }
    }
};