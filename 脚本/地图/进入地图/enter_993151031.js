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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004447, "oid=1138949", 594, 14, 12, 544, 644, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1138949", 'summon', 0, 0);
      cm.npc_ChangeController(3004456, "oid=1138952", 759, -29, 32, 709, 809, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1138952", "summon", 0, 0);
      cm.npc_ChangeController(3004454, "oid=1138954", 525, 14, 11, 475, 575, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1138954", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=1138952", "special4", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -107, 115);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#啧啧，真丢人。", 37, 3004447, false, true);
              cm.effect_Voice("Voice5.img/CH3/5_1", 128);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.setNpcSpecialActionReset("oid=1138952");
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#……", 37, 3004456, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#放弃吧。", 37, 3004447, true, true);
                      cm.effect_Voice("Voice5.img/CH3/5_2", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#强者才有资格谈论报复。", 37, 3004447, true, true);
                        cm.effect_Voice("Voice5.img/CH3/5_3", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#反正靠你那副不完整的身躯什么都干不成。", 37, 3004447, true, true);
                          cm.effect_Voice("Voice5.img/CH3/5_4", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3004456, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你给我记住……\r\n等我成为圣剑的主人，太阳的怒火将第一个吞没你们。", 37, 3004456, true, true);
                              cm.effect_Voice("Voice5.img/CH3/5_5", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#呵，随你的便。", 37, 3004447, true, true);
                                cm.effect_Voice("Voice5.img/CH3/5_6", 128);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#接下来怎么打算？", 37, 3004454, false, true);
                                    cm.effect_Voice("Voice5.img/CH3/5_7", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#大伙儿都休息好了吧。全军准备出击。", 37, 3004447, true, true);
                                      cm.effect_Voice("Voice5.img/CH3/5_8", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#全军准备出击！！！", 37, 3004465, true, true);
                                        cm.effect_Voice("Voice5.img/CH3/5_9", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#现在出击的话，只会像昨天一样打消耗战啊？", 37, 3004454, true, true);
                                          cm.effect_Voice("Voice5.img/CH3/5_10", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#这次我也会上战场。", 37, 3004447, true, true);
                                            cm.effect_Voice("Voice5.img/CH3/5_11", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#这样做没关系吗？我们的目标是……", 37, 3004454, true, true);
                                              cm.effect_Voice("Voice5.img/CH3/5_12", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#我知道。", 37, 3004447, true, true);
                                                cm.effect_Voice("Voice5.img/CH3/5_13", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#什么信念、意志……在我眼中都是些毫无用处的东西。", 37, 3004447, false, true);
                                                      cm.effect_Voice("Voice5.img/CH3/5_14", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayBGM("Bgm53/Apostles", 0, 0);
                                                          cm.fieldEffect_复合图片动画(["Effect/Direction23.img/spine/4/skeleton", "animation", '', '02'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/metaSpine", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(20000);
                                                        } else if (status === V++) {
                                                          cm.forceCompleteQuest(39912);
                                                          cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                                                          cm.updateInfoQuest(39900, "00=h0;10=h1;11=h0;04=h0;23=h0;05=h0;06=h0;07=h0;25=h1;55=h0");
                                                          cm.updateInfoQuest(39900, "00=h0;10=h1;11=h0;04=h0;23=h0;05=h0;06=h0;07=h0;25=h0;55=h0");
                                                          cm.updateInfoQuest(39900, "00=h0;10=h0;11=h0;04=h0;23=h0;05=h0;06=h0;07=h0;25=h0;55=h0");
                                                          cm.eventSKill(0);
                                                          cm.warp(993151034, 0, false);
                                                          cm.npc_LeaveField("oid=1138949");
                                                          cm.npc_LeaveField("oid=1138949");
                                                          cm.npc_LeaveField("oid=1138952");
                                                          cm.npc_LeaveField("oid=1138952");
                                                          cm.npc_LeaveField("oid=1138954");
                                                          cm.npc_LeaveField("oid=1138954");
                                                          cm.dispose();
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}