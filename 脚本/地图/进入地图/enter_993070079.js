var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003750, "oid=2185042", 0, -550, 22, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2185042", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2185043", 120, -550, 26, 70, 170, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2185043", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2185044", 200, -550, 23, 150, 250, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2185044", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -50, -549);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1, -1, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#……"], [100, 2200, 4, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs18#……#h0#……"], [100, 2200, 4, -50, -50, 1, 4, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1300);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(993070079, 3, 3, 100);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
              cm.sendNormalTalk_Bottom("#face0#快醒醒，#h0#！", 37, 3003750, false, true);
              cm.effect_Voice("Voice4.img/BM3/sig/0", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("女皇……陛下？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("女皇陛下，这……这场战争……！", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我知道。我也知道，我也曾经苦恼过。", 37, 3003750, true, true);
                      cm.effect_Voice("Voice4.img/BM3/sig/3", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#抱歉没有事先告诉你。\r\n我以为自己默默承受才是最好的方法。", 37, 3003750, true, true);
                        cm.effect_Voice("Voice4.img/BM3/sig/4", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#仔细听着，#h0#。你是对抗者。对抗者，是要对抗什么呢？", 37, 3003750, true, true);
                          cm.effect_Voice("Voice4.img/BM3/sig/6", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("黑……魔法师……", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#错了。所谓对抗者，是指#r对抗命运的人#k。", 37, 3003750, true, true);
                              cm.effect_Voice("Voice4.img/BM3/sig/7", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('！！！', 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('对抗命运的人？', 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(6000);
                                      cm.effect_Text(["#r#fn黑体##fs26#只有怀抱封印石的对抗者才能违抗不灭的命运。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("违抗命运……？", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#所以我们才需要你。\r\n这场战争的结局，就取决与你。", 37, 3003750, true, true);
                                              cm.effect_Voice("Voice4.img/BM3/sig/10", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#证明给我们看吧。我们不是棋盘上的棋子。", 37, 3003750, true, true);
                                                cm.effect_Voice("Voice4.img/BM3/sig/13", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#我们不是诸神的傀儡，可以凭借自己的意志活下去！", 37, 3003750, true, true);
                                                  cm.effect_Voice("Voice4.img/BM3/sig/20", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#女皇陛下！没时间了！", 37, 3003758, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#去战斗吧。战胜敌人，活着回来。", 37, 3003750, true, true);
                                                      cm.effect_Voice("Voice4.img/BM3/sig/22", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("女皇陛下……", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#这是命令。", 37, 3003750, true, true);
                                                          cm.effect_Voice("Voice4.img/BM3/sig/25", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#全体舰队开火！！！", 37, 3003750, false, true);
                                                                cm.effect_Voice("Voice4.img/BM3/sig/28", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#全体舰队开火！！！！", 37, 3003758, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_SetHideEffect(1);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/ship2", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.Hidden_background("ship_993070033", 1, 0, 0, 0);
                                                                              cm.Hidden_background("ship2_993070033", 1, 1, 0, 0);
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3003750, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#为了保护对抗者，全体舰队前进。", 37, 3003750, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#白色之矛退到后方，观察局势。\r\n请将护卫舰上的骑士团长们召集到旗舰上来。", 37, 3003750, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#是！", 37, 3003758, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#现在就剩下……", 37, 3003750, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/ship1", 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/ship1", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=2185042", 0);
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2185042"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=2185043", 1);
                                                                                                        cm.npc_setForceFlip("oid=2185044", 1);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#是我军的小型舰船！好像有点奇怪！", 37, 3003758, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetForceMove("oid=2185042", 1, 250, 120);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.userSetFieldFloating(993070079, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 385, -559);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.userSetFieldFloating(993070079, 2, 2, 50);
                                                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_ChangeController(3003759, "oid=2185319", 530, -550, 27, 480, 580, 1, false, 300, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=2185319", "summon", 0, 0);
                                                                                                                    cm.npc_ChangeController(3003759, "oid=2185320", 590, -550, 17, 540, 640, 1, false, 300, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=2185320", 'summon', 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_ChangeController(3003672, "oid=2185322", 440, -550, 27, 390, 490, 1, true, 500, false);
                                                                                                                        cm.npc_SetSpecialAction("oid=2185322", "summon", 0, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#希纳斯女皇。", 37, 3003672, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face3#吉格蒙特？！你怎么过来了？", 37, 3003750, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#请回答我。为什么？", 37, 3003672, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#联盟……不，你从来不会这样。\r\n竟然让其他人进入死地，骑士团的舰船却躲在后面！", 37, 3003672, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#快回去，吉格蒙特。\r\n你不应该到这里来。", 37, 3003750, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#是因为恐惧吗？因为不想失去身边的人？", 37, 3003672, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#听我说，吉格蒙特！", 37, 3003750, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#正因此，我们的士兵正不明不白地陆续死去！", 37, 3003672, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#吉格蒙特！！", 37, 3003750, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#如果你再不回去，就军法处置……", 37, 3003750, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#够了！！", 37, 3003672, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_SetSpecialAction("oid=2185043", 'alert', -1, 1);
                                                                                                                                                cm.npc_SetSpecialAction("oid=2185044", "alert", -1, 1);
                                                                                                                                                cm.npc_SetSpecialAction("oid=2185319", "alert", -1, 1);
                                                                                                                                                cm.npc_SetSpecialAction("oid=2185320", "alert", -1, 1);
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lever", 100);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#即使身穿盔甲，手持利剑，你也不过是个柔弱的少女罢了！", 37, 3003672, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#战场不是你这样的人该来的地方！", 37, 3003672, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 150, 0);
                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM3_fight/0", 0, 150, 0, 0, 2, 4, 0, -1, 0, 0, 0);
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face9#呃！！！", 37, 3003750, false, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#快说！！不给出个合理的理由，我就把你……！", 37, 3003672, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#！！", 37, 3003672, false, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#（盔甲下面……）", 37, 3003672, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#（怎么全都是血……？！）", 37, 3003672, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#（事情发展到这个地步……从什么时候开始的……？）", 37, 3003672, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face9#回去吧……吉格蒙特……你不能待在这里……", 37, 3003750, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你……你到底……", 37, 3003672, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#希纳斯……", 37, 3003672, false, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你……该不会……", 37, 3003672, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185042");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185042");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185043");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185043");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185044");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185044");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185319");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185319");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185320");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185320");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185322");
                                                                                                                                                                                    cm.npc_LeaveField("oid=2185322");
                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                    cm.warp(993070080, 0, false);
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