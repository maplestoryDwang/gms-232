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
      cm.npc_ChangeController(3001933, "oid=434145", 951, 121, 4, 879, 979, 4, true, 0, false);
      cm.npc_ChangeController(3001934, "oid=434146", 1068, 121, 4, 1041, 1141, 2, true, 0, false);
      cm.npc_ChangeController(3001935, "oid=434147", -481, 21, 11, -531, -431, 0, false, 0, false);
      cm.npc_ChangeController(3001936, 'oid=434148', -384, 18, 13, -434, -334, 1, false, 0, false);
      cm.npc_ChangeController(3001933, "oid=434149", -719, 121, 1, -792, -692, 4, true, 0, false);
      cm.npc_ChangeController(3001936, "oid=434150", -52, 121, 2, -102, -2, 0, false, 0, false);
      cm.npc_ChangeController(3001935, "oid=434151", -147, 121, 2, -197, -97, 0, false, 0, false);
      cm.npc_ChangeController(3001934, "oid=434152", -607, 121, 1, -690, -590, 5, true, 0, false);
      cm.npc_ChangeController(3001933, "oid=434153", 544, 121, 3, 488, 588, 4, true, 0, false);
      cm.npc_ChangeController(3001934, "oid=434154", 654, 121, 3, 606, 706, 4, true, 0, false);
      cm.npc_ChangeController(3001952, "oid=434155", 95, -81, 5, 45, 145, 4, true, 0, false);
      cm.npc_ChangeController(3001962, 'oid=434156', 314, -101, 7, 264, 364, 4, true, 0, false);
      cm.npc_ChangeController(3001963, "oid=434157", 398, -111, 7, 348, 448, 4, true, 0, false);
      cm.npc_ChangeController(3001960, "oid=434158", 34, -251, 9, -16, 84, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 35, -130);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
              cm.sendNormalTalk_Bottom("#face0#布乌，原来你在这儿啊？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face6#你回来了，阿黛尔？", 36, 3001952, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#布，布乌……", 36, 3001960, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 370, 90);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#噢，这位就是大哥的骑士！？", 36, 3001962, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#发达了哦，大哥！", 36, 3001963, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#大哥？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#啊，那个……", 36, 3001952, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.forceCompleteQuest(39608);
                                      cm.gainExp(1049);
                                      cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h0;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                      cm.updateInfoQuest(39601, "50=h0;51=h0;52=h1;53=h0;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0");
                                      cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h0;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                      cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                      cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
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
                                            cm.warp(410000314, 0, false);
                                            cm.setStandAloneMode(false);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
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