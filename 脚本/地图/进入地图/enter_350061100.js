var status = -1;
var selectionLog = [];
function action(X, I, V) {
  if (status == 0 && X == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = V;
  var t = -1;
  if (status <= t++) {
    cm.dispose();
  } else {
    if (status === t++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
      cm.forceCompleteQuest(33278);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
      cm.npc_ChangeController(1540495, "oid=286267714", 250, -17, 1, 200, 300, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286267714", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("呼，呼呼……终于把他打倒了？", 57, 0, false, true);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
    } else {
      if (status === t++) {
        cm.sendNormalTalk_Bottom("#face0#我……\r\n我怎么会在这里？", 37, 1540495, true, true);
        cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/1", 100);
      } else {
        if (status === t++) {
          cm.npc_ChangeController(1540497, "oid=286271446", 0, -33, 1, -50, 50, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=286271446", 'summon', 0, 0);
          cm.npcMove(1540497, 0, -220, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === t++) {
            cm.npc_SetSpecialAction("oid=286271446", 'appear', -1, 1);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/btOpen", 100);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === t++) {
              cm.npc_SetSpecialAction("oid=286271446", "saying", -1, 1);
              cm.sendNormalTalk_Bottom("#face0#你在干什么，斯乌！", 37, 1540470, false, true);
              cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_2/1_a", 100);
            } else {
              if (status === t++) {
                cm.sendNormalTalk_Bottom("#face0#你是我的玩偶！还不快给我起来战斗？", 37, 1540470, true, true);
                cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_2/1_b", 100);
              } else {
                if (status === t++) {
                  cm.sendNormalTalk_Bottom("#face0#……我……我……", 37, 1540495, true, true);
                  cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/2", 100);
                } else {
                  if (status === t++) {
                    cm.sendNormalTalk_Bottom("#face0#不听话的实验体要受到惩罚。\r\n只要按下这个开关……嘻嘻！", 37, 1540470, true, true);
                    cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_2/2", 100);
                  } else {
                    if (status === t++) {
                      cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 250, 40);
                    } else {
                      if (status === t++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                        cm.npc_SetSpecialAction("oid=286267714", "torture1", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === t++) {
                          cm.npc_SetSpecialAction("oid=286267714", "bdbd", -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === t++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric_loop", 100);
                            cm.sendNormalTalk_Bottom("#face1#啊啊……啊啊啊！", 37, 1540495, false, true);
                            cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/3", 100);
                          } else {
                            if (status === t++) {
                              cm.sendNormalTalk_Bottom("格里梅尔，快停下来！！", 57, 0, true, true);
                            } else {
                              if (status === t++) {
                                cm.sendNormalTalk_Bottom("#face0#让记忆重置几次！嘻嘻嘻！", 37, 1540470, true, true);
                                cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_2/3", 100);
                              } else {
                                if (status === t++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                  cm.npc_SetSpecialAction("oid=286267714", "torture1", 0, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === t++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric_loop", 100);
                                    cm.npc_SetSpecialAction("oid=286267714", "bdbd", -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === t++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                      cm.npc_SetSpecialAction("oid=286267714", "torture2", 0, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === t++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric_loop", 100);
                                        cm.npc_SetSpecialAction("oid=286267714", 'bdbd', -1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === t++) {
                                          cm.npc_SetSpecialAction("oid=286267714", "reborn", 0, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === t++) {
                                            cm.npc_SetSpecialAction("oid=286267714", "evil", -1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === t++) {
                                              cm.sendNormalTalk_Bottom("#face3#目标……消灭。", 37, 1540495, false, true);
                                              cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/5", 100);
                                            } else {
                                              if (status === t++) {
                                                cm.sendNormalTalk_Bottom("#face0#没错，做得好！嘻嘻嘻！", 37, 1540470, true, true);
                                                cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_2/4", 100);
                                              } else {
                                                if (status === t++) {
                                                  cm.sendNormalTalk_Bottom("#fs20#不要欺负斯乌！", 37, 1540490, true, true);
                                                  cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/1", 100);
                                                } else {
                                                  if (status === t++) {
                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                  } else {
                                                    if (status === t++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else {
                                                      if (status === t++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.fieldEffect_PlayBGM("Bgm30/thePhoto", 0, 0);
                                                        cm.npc_ChangeController(1540490, "oid=286278651", -350, -17, 1, -400, -300, 0, true, 1000, false);
                                                        cm.npc_SetSpecialAction("oid=286278651", 'summon', 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === t++) {
                                                          cm.sendNormalTalk_Bottom("#face1#现在停下来吧，斯乌。", 37, 1540490, false, true);
                                                          cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/2", 100);
                                                        } else {
                                                          if (status === t++) {
                                                            cm.npc_SetForceMove("oid=286278651", 1, 350, 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                          } else {
                                                            if (status === t++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, 180, 0);
                                                            } else {
                                                              if (status === t++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === t++) {
                                                                  cm.npc_SetSpecialAction("oid=286267714", "warn", -1, 1);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286278651"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === t++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#……再靠近，我就把你消灭。", 37, 1540495, false, true);
                                                                    cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/6", 100);
                                                                  } else {
                                                                    if (status === t++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === t++) {
                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 200, 40);
                                                                      } else {
                                                                        if (status === t++) {
                                                                          cm.npc_LeaveField("oid=286278651");
                                                                          cm.npc_LeaveField("oid=286278651");
                                                                          cm.npc_LeaveField("oid=286271446");
                                                                          cm.npc_LeaveField("oid=286271446");
                                                                          cm.inGameDirectionEvent_SetHideEffect(1);
                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                          cm.npc_SetSpecialAction("oid=286267714", "hug1", 0, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(6800);
                                                                        } else {
                                                                          if (status === t++) {
                                                                            cm.npc_SetSpecialAction("oid=286267714", "hug2", -1, 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === t++) {
                                                                              cm.npc_SetSpecialAction("oid=286267714", "hug3", -1, 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === t++) {
                                                                                cm.npc_SetSpecialAction("oid=286267714", "hug4", -1, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === t++) {
                                                                                  cm.npc_SetSpecialAction("oid=286267714", "hug5", -1, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === t++) {
                                                                                    cm.npc_SetSpecialAction("oid=286267714", 'hug6', -1, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === t++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#……奥尔卡。", 37, 1540495, false, true);
                                                                                      cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/7", 100);
                                                                                    } else {
                                                                                      if (status === t++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === t++) {
                                                                                          cm.sendNormalTalk_Bottom("#face3#好久不见……斯乌。", 37, 1540490, false, true);
                                                                                          cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/3", 100);
                                                                                        } else {
                                                                                          if (status === t++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === t++) {
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                            } else {
                                                                                              if (status === t++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === t++) {
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("masking_up", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, 0, 30, 1, 1);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, 0, 30, 7, 1);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/blackHeavenCinematic/meetagain_1", 0, 2000, 0, 0, 12, 4, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === t++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#现在结束了。\r\n我们变回精灵吧，斯乌。", 37, 1540499, false, true);
                                                                                                    cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/12", 100);
                                                                                                  } else {
                                                                                                    if (status === t++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face2#黑魔法师的力量很快就会完全恢复。\r\n他会把我们变回原样的。", 37, 1540499, true, true);
                                                                                                      cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/13", 100);
                                                                                                    } else {
                                                                                                      if (status === t++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#奥尔卡，你可能不知道……\r\n之前我的灵魂能够自由穿梭在冒险岛世界。", 37, 1540495, true, true);
                                                                                                        cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/14", 100);
                                                                                                      } else {
                                                                                                        if (status === t++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#…！", 37, 1540499, true, true);
                                                                                                          cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/14_a", 100);
                                                                                                        } else {
                                                                                                          if (status === t++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#我试着呼喊过你几次，\r\n但你听不到我的声音。", 37, 1540495, true, true);
                                                                                                            cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/15", 100);
                                                                                                          } else {
                                                                                                            if (status === t++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face2#起初我的心中充满怨恨。\r\n我很想杀了把我们变成这样的家伙。", 37, 1540495, true, true);
                                                                                                              cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/16", 100);
                                                                                                            } else {
                                                                                                              if (status === t++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#不过……当我在格里梅尔的操纵下，\r\n第一次让你受伤时，我开始发生了一些改变。", 37, 1540495, true, true);
                                                                                                                cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/17", 100);
                                                                                                              } else {
                                                                                                                if (status === t++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face2#那是我第一次流眼泪……", 37, 1540495, true, true);
                                                                                                                  cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/19", 100);
                                                                                                                } else {
                                                                                                                  if (status === t++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#很奇怪吧。\r\n我感觉自己能流泪，真是个奇迹。", 37, 1540495, true, true);
                                                                                                                    cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/20", 100);
                                                                                                                  } else {
                                                                                                                    if (status === t++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face2#我还想以人类的身体继续活着。", 37, 1540495, true, true);
                                                                                                                      cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/13", 100);
                                                                                                                    } else {
                                                                                                                      if (status === t++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#你要和我一起吗，奥尔卡？", 37, 1540495, true, true);
                                                                                                                        cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/22", 100);
                                                                                                                      } else {
                                                                                                                        if (status === t++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#嗯，只要斯乌愿意，那我也愿意。", 37, 1540499, true, true);
                                                                                                                          cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/16", 100);
                                                                                                                        } else {
                                                                                                                          if (status === t++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === t++) {
                                                                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                              cm.setAmbience("Ambience.img/gravity", 100, 60);
                                                                                                                              cm.setAmbience("Ambience.img/flyingdeck_fast", 40, 60);
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#到此为止。", 37, 1540470, false, true);
                                                                                                                              cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_2/5", 100);
                                                                                                                            } else {
                                                                                                                              if (status === t++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === t++) {
                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect2.img/blackHeavenCinematic/meetagain_2", 0, 500, 0, 0, 16, 4, 1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === t++) {
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/heartattack", 100);
                                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect2.img/blackHeavenCinematic/meetagain_3", 0, 500, 0, 0, 14, 4, 0);
                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 0);
                                                                                                                                  } else {
                                                                                                                                    if (status === t++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === t++) {
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 0, 0);
                                                                                                                                      } else {
                                                                                                                                        if (status === t++) {
                                                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                        } else {
                                                                                                                                          if (status === t++) {
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === t++) {
                                                                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, 0);
                                                                                                                                            } else {
                                                                                                                                              if (status === t++) {
                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('3', '', 1, 5000, 50, -50, 0, 0, 0);
                                                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                              } else {
                                                                                                                                                if (status === t++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#斯乌……斯乌？", 37, 1540499, false, true);
                                                                                                                                                  cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/17", 100);
                                                                                                                                                } else {
                                                                                                                                                  if (status === t++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("…………", 37, 1540495, true, true);
                                                                                                                                                    cm.effect_Voice("Voice3.img/BlackHeaven/sw/6_2/23", 100);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === t++) {
                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === t++) {
                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('masking_up', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("masking_down", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3##fs20#斯乌！！", 37, 1540499, false, true);
                                                                                                                                                        cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/18", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === t++) {
                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === t++) {
                                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === t++) {
                                                                                                                                                              cm.npc_ChangeController(1540497, "oid=286314344", 0, -33, 1, -50, 50, 1, false, 0, false);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=286314344", "summon", 0, 0);
                                                                                                                                                              cm.npcMove(1540497, 0, -220, 0);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=286314344", "saying", -1, 1);
                                                                                                                                                              cm.npc_SetSpecialAction("oid=286267714", "dying3", -1, 1);
                                                                                                                                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === t++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === t++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#失败之作必须要报废处理。", 37, 1540470, false, true);
                                                                                                                                                                  cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_2/6", 100);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === t++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("格里梅尔……你到最后还是这么卑鄙！", 57, 0, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === t++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#现在该生气的人是我！\r\n都是你毁了我的力作！", 37, 1540470, true, true);
                                                                                                                                                                      cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_2/7", 100);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === t++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#嘻嘻……不过真正的好戏现在才刚刚开始。\r\n好了，你要怎么做？还打算继续阻止我吗？", 37, 1540470, true, true);
                                                                                                                                                                        cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_2/8", 100);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === t++) {
                                                                                                                                                                          cm.npc_SetSpecialAction("oid=286314344", "laugh", -1, 1);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          cm.effect_Voice("Voice3.img/BlackHeaven/gel/6_2/9", 100);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === t++) {
                                                                                                                                                                            cm.npc_SetSpecialAction("oid=286314344", "disappear", -1, 1);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === t++) {
                                                                                                                                                                              cm.npc_LeaveField("oid=286314344");
                                                                                                                                                                              cm.npc_LeaveField("oid=286314344");
                                                                                                                                                                              cm.inGameDirectionEvent_MoveAction(2);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === t++) {
                                                                                                                                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === t++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === t++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === t++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_MoveAction(2);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === t++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 220, 40);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === t++) {
                                                                                                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                          cm.fieldEffect_PlayBGM("Bgm40/BlackHeavenTheme", 0, 0);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === t++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("奥尔卡！\r\n你怎么能丢下我自己走呢！", 37, 1540460, false, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === t++) {
                                                                                                                                                                                              cm.npc_ChangeController(1540460, "oid=286325030", -250, -33, 1, -300, -200, 0, true, 0, false);
                                                                                                                                                                                              cm.npc_SetSpecialAction("oid=286325030", "summon", 0, 0);
                                                                                                                                                                                              cm.npc_SetForceMove("oid=286325030", 1, 300, 150);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === t++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("大事不好了！\r\n黑色天堂的高度正在逐渐下降！我们快逃……", 37, 1540460, false, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === t++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286325030"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === t++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("奥尔卡……", 37, 1540460, false, true);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === t++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#……斯乌的心脏已经不跳动了。", 37, 1540499, true, true);
                                                                                                                                                                                                      cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/19", 100);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === t++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#斯乌……斯乌！！", 37, 1540499, true, true);
                                                                                                                                                                                                        cm.effect_Voice("Voice3.img/BlackHeaven/orca/6_2/20", 100);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === t++) {
                                                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                        } else if (status === t++) {
                                                                                                                                                                                                          cm.dispose();
                                                                                                                                                                                                          cm.warp(350061110, 0, true);
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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