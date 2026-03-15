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
            cm.forceCompleteQuest(34859);
            cm.updateInfoQuest(34859, "carn=2");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -149, 20);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.npc_ChangeController(3001314, "oid=912815", -333, 56, 2, -383, -283, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=912815", "summon", 0, 0);
            cm.npc_ChangeController(3001315, "oid=912816", -211, 56, 2, -261, -161, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=912816", "summon", 0, 0);
            cm.npc_ChangeController(3001308, "oid=912817", -89, 56, 2, -139, -39, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=912817", "summon", 0, 0);
            cm.npc_ChangeController(3001311, "oid=912818", -32, 56, 2, -82, 18, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=912818", "summon", 0, 0);
            cm.npc_ChangeController(3001323, "oid=912819", -493, 56, 1, -543, -443, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=912819", "summon", 0, 0);
            cm.npc_ChangeController(3001307, "oid=912820", 29, 56, 2, -21, 79, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=912820", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.effect_Text(["#fn黑体##fs18#第二课：魔法战斗实践", ""], [20, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.npc_SetSpecialAction("oid=912815", "skill", -1, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/student_skill", 100);
                    cm.npc_SetSpecialAction("oid=912819", "hit", 1, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(100)
                } else {
                    if (status === a++) {
                        cm.effect_NormalSpeechBalloon("呀！", 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001314, null, cm.getPlayer().getId());
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400407/Damage", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                    } else {
                        if (status === a++) {
                            cm.setNpcSpecialActionReset("oid=912815");
                            cm.sendNormalTalk_Bottom("#face0#哎~这样怎么行！？快出来！我给你示范~~！！", 37, 3001307, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#迪恩学生,在魔法训练中开玩笑是很危险的。再有下次,加倍罚你做作业。", 37, 3001303, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#呃！你……", 37, 3001307, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#好,下一个！", 37, 3001303, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.onTeleport(0, 3, cm.getPlayer().getId(), -210, 24);
                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                cm.npc_LeaveField("oid=912815");
                                                cm.npc_LeaveField("oid=912816");
                                                cm.npc_LeaveField("oid=912817");
                                                cm.npc_LeaveField("oid=912818");
                                                cm.npc_LeaveField("oid=912820");
                                                cm.npc_ChangeController(3001314, "oid=912821", 29, 56, 2, -21, 79, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=912821", "summon", 0, 0);
                                                cm.npc_ChangeController(3001315, "oid=912822", -333, 56, 2, -383, -283, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=912822", "summon", 0, 0);
                                                cm.npc_ChangeController(3001308, "oid=912823", -150, 56, 2, -200, -100, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=912823", "summon", 0, 0);
                                                cm.npc_ChangeController(3001311, "oid=912824", -93, 56, 2, -143, -43, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=912824", "summon", 0, 0);
                                                cm.npc_ChangeController(3001307, "oid=912825", -34, 56, 2, -84, 16, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=912825", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(800)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_SetSpecialAction("oid=912822", "skill", -1, 1);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/student_skill", 100);
                                                        cm.npc_SetSpecialAction("oid=912819", "hit", 1, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.effect_NormalSpeechBalloon("耶！", 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001315, null, cm.getPlayer().getId());
                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400407/Damage", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.setNpcSpecialActionReset("oid=912822");
                                                                cm.setNpcSpecialActionReset("oid=912821");
                                                                cm.npc_setForceFlip("oid=912821", -1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(30)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#大家干得漂亮！", 37, 3001303, false, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#哇～！你刚刚真是太棒了！看来昨天我们的练习派上用场了！太好了！", 37, 3001308, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.onTeleport(0, 3, cm.getPlayer().getId(), -330, 22);
                                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                cm.npc_LeaveField("oid=912821");
                                                                                cm.npc_LeaveField("oid=912822");
                                                                                cm.npc_LeaveField("oid=912823");
                                                                                cm.npc_LeaveField("oid=912824");
                                                                                cm.npc_LeaveField("oid=912825");
                                                                                cm.npc_ChangeController(3001314, "oid=912829", -34, 56, 2, -84, 16, 1, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=912829", "summon", 0, 0);
                                                                                cm.npc_ChangeController(3001315, "oid=912830", 29, 56, 2, -21, 79, 1, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=912830", "summon", 0, 0);
                                                                                cm.npc_ChangeController(3001308, "oid=912831", -212, 56, 2, -262, -162, 1, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=912831", "summon", 0, 0);
                                                                                cm.npc_ChangeController(3001311, "oid=912832", -160, 56, 2, -210, -110, 1, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=912832", "summon", 0, 0);
                                                                                cm.npc_ChangeController(3001307, "oid=912833", -96, 56, 2, -146, -46, 1, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=912833", "summon", 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#哦吼,你就是今天第一天转学来的学生？", 37, 3001303, false, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#你是叫伊利温吧？来,你先试试。", 37, 3001303, true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_ForcedFlip10(1, 40);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_QTE(2)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                                                                                        cm.setNpcSpecialActionReset("oid=912819");
                                                                                                        cm.npc_SetSpecialAction("oid=912819", "hit", 0, 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.effect_NormalSpeechBalloon("你刚刚……是攻击了吧？", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3001314, null, cm.getPlayer().getId());
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.effect_NormalSpeechBalloon("奇怪的家伙……", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3001315, null, cm.getPlayer().getId());
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#噗哈！你刚刚在干什么？！练习机器人怕痒~", 37, 3001307, false, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face4#真让人寒心。", 37, 3001311, true, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face3#呃……", 37, 3001351, true, true, 1)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这种普通攻击根本行不通！为什么不能使用#b魔法#k呢？", 37, 3001303, true, true, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#请收集#b翅膀#k的水晶能量,传送到手背水晶……", 37, 3001303, true, true, 1)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#可学生………#r没有……魔法之翼啊？！", 37, 3001303, true, true, 1)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##r翅膀上竟然没有魔法气息……#k这在水晶学院还是头一次。", 37, 3001303, true, true, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#……(好想逃啊。)", 37, 3001351, true, true, 1)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##b不管使用什么办法,请攻击前方的练习机器人。#k", 37, 3001303, true, true, 1)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face8#(那么……)", 37, 3001351, true, true, 1)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_QTE(2)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_OneTimeAction(1382, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001001/Use", 100);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/hit", "oid=912821"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                                                                        cm.npc_SetSpecialAction("oid=912819", "die", 0, 1);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400407/Die", 100);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(700)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.npc_LeaveField("oid=912819");
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.effect_NormalSpeechBalloon("!?", 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001314, null, cm.getPlayer().getId());
                                                                                                                                                                                    cm.effect_NormalSpeechBalloon("!?", 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001315, null, cm.getPlayer().getId());
                                                                                                                                                                                    cm.effect_NormalSpeechBalloon("!?", 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001308, null, cm.getPlayer().getId());
                                                                                                                                                                                    cm.effect_NormalSpeechBalloon("!?", 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001311, null, cm.getPlayer().getId());
                                                                                                                                                                                    cm.effect_NormalSpeechBalloon("!?", 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001307, null, cm.getPlayer().getId());
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.effect_NormalSpeechBalloon("刚……刚才是什么？", 0, 0, 0, 1500, 0, 0, 0, 0, 4, 3001315, null, cm.getPlayer().getId());
                                                                                                                                                                                        cm.npc_setForceFlip("oid=912829", 1);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.effect_NormalSpeechBalloon("我……我是在发抖吗？", 0, 0, 0, 1500, 0, 0, 0, 0, 4, 3001314, null, cm.getPlayer().getId());
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#刚刚……你使用的是魔法吗？", 37, 3001311, false, true, 1)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#嗯？他也没有魔法之翼啊！这怎么可能？", 37, 3001307, true, true, 1)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#好奇特的景象啊。", 37, 3001311, true, true, 1)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.npc_setForceFlip("oid=912829", -1);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#太好了！虽然这种魔法攻击谈不上完美无缺,但已经很有成效了。", 37, 3001303, false, true, 1)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.updateInfoQuest(34802, "class1=1;class2=1;out=2;exp=1");
                                                                                                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -149, 20);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                                                                        cm.npc_LeaveField("oid=912829");
                                                                                                                                                                                                                        cm.npc_LeaveField("oid=912830");
                                                                                                                                                                                                                        cm.npc_LeaveField("oid=912831");
                                                                                                                                                                                                                        cm.npc_LeaveField("oid=912832");
                                                                                                                                                                                                                        cm.npc_LeaveField("oid=912833");
                                                                                                                                                                                                                        cm.updateInfoQuest(34858, "gate=1;cinna=1");
                                                                                                                                                                                                                        cm.updateInfoQuest(34859, "dean=1;carn=2");
                                                                                                                                                                                                                        cm.updateInfoQuest(34859, "dean=1;extra1=1;carn=2");
                                                                                                                                                                                                                        cm.updateInfoQuest(34859, "dean=1;extra1=1;extra2=1;carn=2");
                                                                                                                                                                                                                        cm.updateInfoQuest(34859, "dean=1;extra1=1;extra2=1;carn=3");
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#现在大家已经掌握了基本技能,剩下的就是正式投入实战了。", 36, 3001303, false, true, 1)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#好,请进入战斗练习室,消灭#r移动型练习机器人#k。", 37, 3001303, true, true, 1)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.askAcceptDecline_Bottom("#face0#消灭大约#b20只#k就可以了。没什么问题吧？", 37, 3001303, 1)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.forceStartQuest(34803, "");
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#来,准备好了吗？请进入后面的战斗练习室,消灭#r移动型练习机器人#k吧！", 37, 3001303, false, true, 1);
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

function end(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#这种程度应该跟其他学生的水平差不多了。啊,当然算不上出众。", 37, 3001303, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3001351, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那下次见喽。", 37, 3001303, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3001300, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#带你前往下一个教室。", 37, 3001300, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(34803);
                                cm.updateInfoQuest(34803, "kc=26;exp=1");
                                cm.OnStartNavigation(402000530, 0, "", 0);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};