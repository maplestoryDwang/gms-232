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
      cm.monadForceMove("white", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3003689, "oid=2206285", -4300, -550, 4, -4350, -4250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2206285", "summon", 0, 0);
        cm.npc_ChangeController(3003688, "oid=2206286", -3700, -550, 4, -3750, -3650, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2206286", "summon", 0, 0);
        cm.npc_ChangeController(3003689, "oid=2206287", -3500, -550, 1, -3550, -3450, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2206287", "summon", 0, 0);
        cm.npc_ChangeController(3003688, "oid=2206288", -3350, -550, 1, -3400, -3300, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2206288", "summon", 0, 0);
        cm.npc_ChangeController(3003688, "oid=2206289", -2900, -550, 1, -2950, -2850, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2206289", "summon", 0, 0);
        cm.npc_ChangeController(3003689, "oid=2206290", -2300, -550, 2, -2350, -2250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2206290", "summon", 0, 0);
        cm.npc_ChangeController(3003688, "oid=2206291", -2150, -550, 2, -2200, -2100, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2206291", 'summon', 0, 0);
        cm.inGameDirectionEvent_OneTimeAction(5, 999999);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -3748, -513);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
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
                cm.inGameDirectionEvent_PushScaleInfo(9000, 0, 1000, 9000, -2431, -513);
              } else {
                if (status === V++) {
                  cm.monadForceMove("white", 1, 30);
                  cm.inGameDirectionEvent_AskAnswerTime(30);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(30);
                  } else {
                    if (status === V++) {
                      cm.monadForceMove('white', 0, 30);
                      cm.inGameDirectionEvent_AskAnswerTime(30);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(30);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                          cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                          cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                          cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(30);
                        } else {
                          if (status === V++) {
                            cm.monadForceMove("white", 1, 30);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.monadForceMove("white", 0, 900);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1990);
                              } else {
                                if (status === V++) {
                                  cm.monadForceMove("white", 1, 30);
                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                  } else {
                                    if (status === V++) {
                                      cm.monadForceMove('white', 0, 30);
                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                          cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                          cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                          cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                        } else {
                                          if (status === V++) {
                                            cm.monadForceMove("white", 1, 30);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.monadForceMove("white", 0, 900);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1990);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2670, -460);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.userSetFieldFloating(993060067, 3, 3, 3);
                                                              cm.sendNormalTalk_Bottom("#face1#迷雾那边……有敌人冲出来了！！", 37, 3003659, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#呃……一眼望不到头！！", 37, 3003661, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.userSetFieldFloating(993060067, 10, 10, 10);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.userSetFieldFloating(993060067, 3, 3, 3);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#呃……", 37, 3003659, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#不能在这里倒下！！", 37, 3003661, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#让我们继续前进！！", 37, 3003659, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#白色之矛那边看上去很危险！！", 37, 3003661, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("（如果无法发射舰炮的话，就无法进入内部。\r\n要把这里交给其他勇士，先回到白色之矛那里去吗？）", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.userSetFieldFloating(993060067, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, -3370, -860);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                              cm.effect_Text(["#fn黑体##fs18#此刻，白色之矛"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction17.img/effect/ark/fire/0/front_particle", "animation", '', '00'], [0, 1, 1, 0, 0, 0, 0, 1]);
                                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction17.img/effect/ark/fire/1/fire_particle_01", "animation", '', '01'], [0, 1, 1, 0, 0, 0, 0, 1]);
                                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction17.img/effect/ark/fire/2/fire_particle_02", "animation", '', '02'], [0, 1, 1, 0, 0, 0, 0, 1]);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM1_Cygnus/0", 0, 1500, 0, 0, 1, 4, 0);
                                                                                                cm.fieldEffect_Hero9(80, 1000);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face1#坚持住！！", 37, 3003661, false, true);
                                                                                                  cm.effect_Voice("Voice4.img/BM1/DIR5/1", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#呃……数量一点都不见少！！", 37, 3003659, true, true);
                                                                                                    cm.effect_Voice("Voice4.img/BM1/DIR5/2", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_Hero9(80, 500);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#炮台那边的防线崩溃了！！", 37, 3003651, false, true);
                                                                                                        cm.effect_Voice("Voice4.img/BM1/DIR5/3", 128);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_Hero9(80, 500);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#前进的路……被完全挡住了！！", 37, 3003661, false, true);
                                                                                                            cm.effect_Voice("Voice4.img/BM1/DIR5/4", 128);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#呃，敌人太多了！！", 37, 3003659, true, true);
                                                                                                              cm.effect_Voice("Voice4.img/BM1/DIR5/5", 128);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_Hero9(80, 500);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BM1_Cygnus/1", 0, 1500, 0, 0, 1, 4, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#不……要是在这里倒下……同伴们就……", 37, 3003660, false, true);
                                                                                                                    cm.effect_Voice("Voice4.img/BM1/DIR5/6", 128);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_Hero9(80, 500);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#呃……别动队那边……还没好吗！？", 37, 3003659, false, true);
                                                                                                                        cm.effect_Voice("Voice4.img/BM1/DIR5/7", 128);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_Hero9(80, 500);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#女皇陛下，现在不挡住他们的话，舰炮就危险了。\r\n要让别动队回来支援吗……", 37, 3003651, false, true);
                                                                                                                            cm.effect_Voice("Voice4.img/BM1/DIR5/8", 128);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_Hero9(80, 500);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face2#不，不能在这里退缩。", 37, 3003656, false, true);
                                                                                                                                cm.effect_Voice("Voice4.img/BM1/DIR5/9", 128);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction20.img/effect/BM1_Cygnus/3", 0, 1500, 0, -80, 1, 4, 1);
                                                                                                                                  cm.fieldEffect_Hero9(80, 500);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#所有人拿起盾牌拼了！！", 37, 3003656, false, true);
                                                                                                                                    cm.effect_Voice("Voice4.img/BM1/DIR5/10", 128);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#一口气冲到炮台！！", 37, 3003656, true, true);
                                                                                                                                      cm.effect_Voice("Voice4.img/BM1/DIR5/11", 128);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_Hero9(80, 500);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#是，女皇陛下！！", 37, 3003659, false, true);
                                                                                                                                          cm.effect_Voice("Voice4.img/BM1/DIR5/12", 128);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                              cm.fieldEffect_Hero9(80, 500);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#（大家……都在浴血奋战。\r\n这次该轮到我来保护大家了。）", 37, 3003656, false, true);
                                                                                                                                                cm.effect_Voice("Voice4.img/BM1/DIR5/13", 128);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#（一定要……继续前进。\r\n我希纳斯无论如何都会把后面防守住。）", 37, 3003656, true, true);
                                                                                                                                                  cm.effect_Voice("Voice4.img/BM1/DIR5/14", 128);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction20.img/effect/BM1_Cygnus/2", 0, 1500, 0, 0, 1, 4, 0);
                                                                                                                                                      cm.fieldEffect_Hero9(80, 500);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#前进！！", 37, 3003656, false, true);
                                                                                                                                                        cm.effect_Voice("Voice4.img/BM1/DIR5/15", 128);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2670, -460);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_取消复合图片动画('00', 0, 0);
                                                                                                                                                                cm.fieldEffect_取消复合图片动画('01', 0, 0);
                                                                                                                                                                cm.fieldEffect_取消复合图片动画('02', 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_OneTimeAction(5, 999999);
                                                                                                                                                                cm.userSetFieldFloating(993060067, 3, 3, 3);
                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_Hero9(80, 500);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("（白色之矛的甲板上出现了晶莹的光。\r\n好像可以听到希纳斯在喊着前进。）", 57, 0, false, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.userSetFieldFloating(993060067, 0, 0, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 2000, 8000, -2600, -916);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(9000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#不……那个，巨大怪兽的眼睛……要睁开了……", 37, 3003659, false, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 4000, 4000, -2600, -916);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/boss", 100);
                                                                                                                                                                                      cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM1_Boss/skeleton", 'idle', '', '02'], [0, 0, 0, 0, 0, 0, 0, 1]);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#哈……完蛋了吗……", 37, 3003660, false, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                  cm.fieldEffect_取消复合图片动画('02', 1, 500);
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206285");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206285");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206286");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206286");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206287");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206287");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206288");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206288");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206289");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206289");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206290");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206290");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206291");
                                                                                                                                                                                                          cm.npc_LeaveField("oid=2206291");
                                                                                                                                                                                                          cm.dispose();
                                                                                                                                                                                                          cm.warp(993060086, 0, false);
                                                                                                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}