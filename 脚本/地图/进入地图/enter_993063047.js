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
      cm.npc_ChangeController(3003783, 'oid=277168', -918, 206, 3, -968, -868, 1, false, 0, false);
      cm.npc_ChangeController(3003784, "oid=277169", -509, 206, 5, -559, -459, 1, false, 0, false);
      cm.npc_ChangeController(3003740, "oid=277170", -751, 206, 14, -801, -701, 1, false, 0, false);
      cm.npc_ChangeController(3003783, "oid=277171", -440, 206, 4, -490, -390, 0, false, 0, false);
      cm.npc_ChangeController(3003784, "oid=277172", -1030, 206, 6, -1080, -980, 1, false, 0, false);
      cm.npc_ChangeController(3003784, "oid=277173", -81, 206, 7, -131, -31, 0, false, 0, false);
      cm.npc_ChangeController(3003783, "oid=277174", -164, 206, 8, -214, -114, 1, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277175", -1030, 206, 6, -1080, -980, 0, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277176", -918, 206, 3, -968, -868, 0, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277177", -509, 206, 5, -559, -459, 1, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277178", -440, 206, 4, -490, -390, 1, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277179", -164, 206, 8, -214, -114, 1, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277180", -81, 206, 7, -131, -31, 1, false, 0, false);
      cm.npc_ChangeController(3003783, "oid=277181", -1232, 206, 13, -1282, -1182, 0, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277182", -1232, 206, 13, -1282, -1182, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -683, 90);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -726, 190);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.effect_NormalSpeechBalloon("最终这样……", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003700, null, cm.getPlayer().getId());
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h0;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h1;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h1;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                      cm.inGameDirectionEvent_AskAnswerTime(200);
                    } else {
                      if (status === V++) {
                        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                        cm.inGameDirectionEvent_AskAnswerTime(700);
                      } else {
                        if (status === V++) {
                          cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h1;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                          cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                          cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.effect_NormalSpeechBalloon("不……不可以……", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003700, null, cm.getPlayer().getId());
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
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
                                        cm.dispose();
                                        cm.warp(993063048, 0, false);
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