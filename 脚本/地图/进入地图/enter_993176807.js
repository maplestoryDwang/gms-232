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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm54/FungusForest", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -178, 120);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3004754, "oid=1862590", -300, 100, 1, -350, -250, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=1862590", "summon", 0, 0);
          cm.npc_ChangeController(3004733, "oid=1862591", -415, 100, 1, -465, -365, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=1862591", "summon", 0, 0);
          cm.npc_ChangeController(3004735, "oid=1862592", -525, 100, 1, -575, -475, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=1862592", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
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
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.effect_NormalSpeechBalloon("是这边吗？", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon("啊，那边！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004754, null, cm.getPlayer().getId());
                      cm.npc_SetForceMove("oid=1862590", 1, 300, 150);
                      cm.npc_SetForceMove("oid=1862591", 1, 300, 150);
                      cm.npc_SetForceMove("oid=1862592", 1, 300, 150);
                      cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 910, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                cm.setAccountQuestInfo(238, "count=69310;T=20201012191621");
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else if (status === V++) {
                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h4;01=h0;02=h0;03=h0;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h1");
                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;02=h0;03=h0;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h1");
                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;02=h0;03=h0;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h1;02=h0;03=h0;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h1;02=h0;22=h2;03=h0;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h1;02=h0;22=h2;03=h0;23=h1;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h0;36=h0;17=h0;37=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h1;02=h0;22=h2;03=h0;80=h1;23=h1;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0;29=h0");
                                cm.forceCompleteQuest(37724);
                                cm.gainExp(11264558);
                                cm.npc_LeaveField("oid=1862590");
                                cm.npc_LeaveField("oid=1862591");
                                cm.npc_LeaveField("oid=1862592");
                                cm.dispose();
                                cm.warp(450015270, 0, true);
                                cm.setStandAloneMode(false);
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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