var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -200, 350);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setNumberForQuestCustomData(33900, 6);
        cm.getPlayer().removeDragon();
        cm.mapleHeroBecomeNpc(9, 0);
        cm.onActionBarResult(6, -1);
        cm.onActionBarResult(5, 32);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_ChangeController(1540798, "oid=287885454", -100, 200, 16, -150, -50, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885454", "summon", 0, 0);
        cm.npc_ChangeController(1540798, "oid=287885456", -50, 200, 16, -100, 0, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885456", "summon", 0, 0);
        cm.npc_ChangeController(1540798, "oid=287885457", 0, 200, 16, -50, 50, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885457", "summon", 0, 0);
        cm.npc_ChangeController(1540798, "oid=287885459", 50, 200, 16, 0, 100, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885459", 'summon', 0, 0);
        cm.npc_ChangeController(1540798, "oid=287885460", 100, 200, 17, 50, 150, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885460", 'summon', 0, 0);
        cm.npc_ChangeController(1540798, "oid=287885461", 150, 200, 17, 100, 200, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885461", 'summon', 0, 0);
        cm.npc_ChangeController(1540798, "oid=287885463", 200, 200, 17, 150, 250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885463", "summon", 0, 0);
        cm.npc_ChangeController(1540815, "oid=287885464", -1900, 400, 12, -1950, -1850, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=287885464", "summon", 0, 0);
        cm.npc_ChangeController(1540802, "oid=287885465", -1075, 300, 13, -1125, -1025, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885465", "summon", 0, 0);
        cm.npc_ChangeController(1540805, "oid=287885467", 0, 100, 9, -50, 50, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885467", "summon", 0, 0);
        cm.npc_ChangeController(1540799, "oid=287885468", -653, 200, 15, -703, -603, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885468", "summon", 0, 0);
        cm.npc_ChangeController(1540798, "oid=287885469", -920, 200, 13, -970, -870, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885469", "summon", 0, 0);
        cm.npc_ChangeController(1540798, "oid=287885471", -880, 200, 13, -930, -830, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885471", "summon", 0, 0);
        cm.npc_ChangeController(1540810, "oid=287885472", -730, 200, 15, -780, -680, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885472", "summon", 0, 0);
        cm.npc_ChangeController(1540827, "oid=287885473", -800, 200, 15, -850, -750, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287885473", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=287885465", "special3", -1, 1);
        cm.npc_SetSpecialAction("oid=287885472", 'rope', -1, 1);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -730, 350);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(5500);
          cm.effect_Text(["#fn黑体##fs18#另一方面，#fs15##fn黑体#洞穴深处……"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#放开我！", 37, 1540810, false, true);
            cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/1", 128);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你们这些魔族！你们以为这样会安然无事吗！英雄不会轻饶了你们的！", 37, 1540827, false, true);
                    cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/2", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("士官，我们将抵抗的俘虏抓回来了。", 37, 1540798, true, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/3", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("那个少女是什么情况？", 37, 1540799, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/4", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("听说是留在这座岛上的最后一个里恩族人。", 37, 1540798, true, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/5", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("恩，我总觉得有些眼熟啊。", 37, 1540799, true, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/6", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#……你们别以为做了这些丧尽天良的事还能安然无事。", 37, 1540810, true, true);
                              cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/7", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("呵，真是胆大包天啊，看样子是和联盟军的人有关联，\r\n这个俘虏有可能会大有用处，好好留着。", 37, 1540799, true, true);
                                cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/8", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("剩下的该怎么办呢？", 37, 1540798, true, true);
                                  cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/9", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('全都灭口！就现在。', 37, 1540799, true, true);
                                    cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/10", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287885472"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287885473"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#！！", 37, 1540810, false, true);
                                          cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/11", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("你们这帮家伙，到底打算将利琳带走做什么！", 37, 1540827, true, true);
                                            cm.effect_Voice("Voice3.img/HofM/ACT1/HERO/13", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                cm.userSetFieldFloating(350111400, 5, 5, 5);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.userSetFieldFloating(350111400, 0, 0, 0);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=287885467"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=287885468"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=287885469"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=287885471"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=287885472"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=287885473"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -1050, 180);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=287885464", "broken1", 0, 1);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/icewall1", 100);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                                                        cm.userSetFieldFloating(350111400, 5, 5, 5);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.userSetFieldFloating(350111400, 0, 0, 0);
                                                          cm.npc_setForceFlip("oid=287885467", -1);
                                                          cm.npc_setForceFlip("oid=287885468", -1);
                                                          cm.npc_setForceFlip("oid=287885469", -1);
                                                          cm.npc_setForceFlip("oid=287885471", -1);
                                                          cm.npc_setForceFlip("oid=287885472", -1);
                                                          cm.npc_setForceFlip("oid=287885473", -1);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287885467"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287885468"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287885469"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287885471"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287885472"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287885473"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            cm.effect_NormalSpeechBalloon("#fn黑体##fs25##r墙壁开裂了！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 1540798, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=287885464", "broken2", 0, 1);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/icewall2", 100);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                                                              cm.userSetFieldFloating(350111400, 5, 5, 5);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.userSetFieldFloating(350111400, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                cm.effect_NormalSpeechBalloon("#fn黑体##fs25##r搞什么，那边好像有什么东西！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 1540799, cm.getPlayer().getId());
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=287885464", "broken3", 0, 1);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/icewall3", 100);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                                                                  cm.userSetFieldFloating(350111400, 5, 5, 5);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.userSetFieldFloating(350111400, 0, 0, 0);
                                                                    cm.npc_SetForceMove("oid=287885469", 1, 50, 220);
                                                                    cm.npc_SetForceMove("oid=287885471", 1, 50, 220);
                                                                    cm.npc_SetForceMove("oid=287885473", 1, 70, 220);
                                                                    cm.fieldEffect_PlayBGM("Bgm45/Showtime!", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=287885465", "special1", 0, 1);
                                                                      cm.npc_SetSpecialAction("oid=287885464", "broken4", 0, 1);
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/Aran1", 100);
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/icewall4", 100);
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                                                                      cm.userSetFieldFloating(350111400, 5, 5, 5);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.userSetFieldFloating(350111400, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, -870, 350);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetSpecialAction("oid=287885465", "stand2", 0, 1);
                                                                            cm.npc_SetSpecialAction("oid=287885468", "alert", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=287885469", "alert", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=287885471", "alert", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=287885464", "die", -1, 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/HERO/14", 128);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/HERO/14_2", 128);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/HERO/14_3", 128);
                                                                              cm.sendNormalTalk_Bottom("谁？！", 37, 1540798, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/HERO/15", 128);
                                                                                cm.sendNormalTalk_Bottom('报上名来！', 37, 1540799, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/HERO/16", 128);
                                                                                  cm.sendNormalTalk_Bottom("#face0#你很好奇我的身份吗？", 37, 1540802, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetSpecialAction("oid=287885465", 'special2', 0, 1);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/Aran2", 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/HERO/17", 128);
                                                                                        cm.sendNormalTalk_Bottom("#face0##fn黑体##fs25#那我现在就告诉你！", 37, 1540802, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                          cm.inGameDirectionEvent_MoveAction(2);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                                                            cm.emotion(5, -1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_OneTimeAction(62, 600000);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/HERO/18", 128);
                                                                                                cm.sendNormalTalk_Bottom("#face2#尽，尽管上吧！", 37, 1540805, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=287885467"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=287885468"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=287885469"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=287885471"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=287885472"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=287885473"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -870, 350);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=287885468");
                                                                                                      cm.npc_LeaveField("oid=287885468");
                                                                                                      cm.npc_LeaveField("oid=287885472");
                                                                                                      cm.npc_LeaveField("oid=287885472");
                                                                                                      cm.npc_ChangeController(1540823, "oid=287915879", -653, 200, 15, -703, -603, 1, true, 0, false);
                                                                                                      cm.npc_SetSpecialAction("oid=287915879", 'summon', 0, 0);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/HERO/19", 128);
                                                                                                      cm.sendNormalTalk_Bottom("那个，准备战斗！！", 37, 1540799, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/HERO/20", 128);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#啊啊！！", 37, 1540810, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=287915879", -1);
                                                                                                          cm.npc_SetForceMove("oid=287915879", 1, 400, 120);
                                                                                                          cm.npc_SetForceMove("oid=287885454", -1, 1000, 150);
                                                                                                          cm.npc_SetForceMove("oid=287885456", -1, 1000, 150);
                                                                                                          cm.npc_SetForceMove("oid=287885457", -1, 1000, 150);
                                                                                                          cm.npc_SetForceMove("oid=287885459", -1, 1000, 150);
                                                                                                          cm.npc_SetForceMove("oid=287885460", -1, 1000, 150);
                                                                                                          cm.npc_SetForceMove("oid=287885461", -1, 1000, 150);
                                                                                                          cm.npc_SetForceMove("oid=287885463", -1, 1000, 150);
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -600, 350);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.dispose();
                                                                                                              cm.warp(350111600, 0, true);
                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                              cm.npc_LeaveField("oid=287885454");
                                                                                                              cm.npc_LeaveField("oid=287885454");
                                                                                                              cm.npc_LeaveField("oid=287885456");
                                                                                                              cm.npc_LeaveField("oid=287885456");
                                                                                                              cm.npc_LeaveField("oid=287885457");
                                                                                                              cm.npc_LeaveField("oid=287885457");
                                                                                                              cm.npc_LeaveField("oid=287885459");
                                                                                                              cm.npc_LeaveField("oid=287885459");
                                                                                                              cm.npc_LeaveField("oid=287885460");
                                                                                                              cm.npc_LeaveField("oid=287885460");
                                                                                                              cm.npc_LeaveField("oid=287885461");
                                                                                                              cm.npc_LeaveField("oid=287885461");
                                                                                                              cm.npc_LeaveField("oid=287885463");
                                                                                                              cm.npc_LeaveField("oid=287885463");
                                                                                                              cm.npc_LeaveField("oid=287885464");
                                                                                                              cm.npc_LeaveField("oid=287885464");
                                                                                                              cm.npc_LeaveField("oid=287885465");
                                                                                                              cm.npc_LeaveField("oid=287885465");
                                                                                                              cm.npc_LeaveField("oid=287885467");
                                                                                                              cm.npc_LeaveField("oid=287885467");
                                                                                                              cm.npc_LeaveField("oid=287885469");
                                                                                                              cm.npc_LeaveField("oid=287885469");
                                                                                                              cm.npc_LeaveField("oid=287885471");
                                                                                                              cm.npc_LeaveField("oid=287885471");
                                                                                                              cm.npc_LeaveField("oid=287885473");
                                                                                                              cm.npc_LeaveField("oid=287885473");
                                                                                                              cm.npc_LeaveField("oid=287915879");
                                                                                                              cm.npc_LeaveField("oid=287915879");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;