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
      cm.npc_ChangeController(3001933, "oid=434170", 930, 121, 4, 879, 979, 5, true, 0, false);
      cm.npc_ChangeController(3001934, "oid=434171", 1092, 121, 4, 1041, 1141, 5, true, 0, false);
      cm.npc_ChangeController(3001935, "oid=434172", -481, 21, 11, -531, -431, 0, false, 0, false);
      cm.npc_ChangeController(3001936, "oid=434173", -384, 18, 13, -434, -334, 1, false, 0, false);
      cm.npc_ChangeController(3001933, "oid=434174", -751, 121, 1, -792, -692, 4, true, 0, false);
      cm.npc_ChangeController(3001936, "oid=434175", -52, 121, 2, -102, -2, 0, false, 0, false);
      cm.npc_ChangeController(3001935, "oid=434176", -147, 121, 2, -197, -97, 0, false, 0, false);
      cm.npc_ChangeController(3001934, "oid=434177", -622, 121, 1, -690, -590, 5, true, 0, false);
      cm.npc_ChangeController(3001934, 'oid=434178', 775, 121, 3, 693, 793, 5, true, 0, false);
      cm.npc_ChangeController(3001952, "oid=434179", 473, 121, 3, 423, 523, 5, true, 0, false);
      cm.npc_ChangeController(3001962, "oid=434180", 314, -101, 7, 264, 364, 4, true, 0, false);
      cm.npc_ChangeController(3001963, "oid=434181", 398, -111, 7, 348, 448, 4, true, 0, false);
      cm.npc_ChangeController(3001960, 'oid=434182', 34, -251, 9, -16, 84, 4, true, 0, false);
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
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 430, 90);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你们回来了，大哥！？我们刚结束你委托的调查！", 36, 3001962, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.forceCompleteQuest(39611);
                        cm.gainExp(1246);
                        cm.forceCompleteQuest(39661);
                        cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=1;54=h1;55=h1;56=h0;57=h0;58=h0;59=h0;q=1");
                        cm.updateInfoQuest(39601, "50=h0;51=h0;52=h1;53=h0;j=1;54=h1;55=h1;56=h0;57=h0;58=h0;59=h0;q=1");
                        cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                        cm.updateInfoQuest(39601, "50=h0;51=h0;52=h1;53=h0;j=1;54=h0;55=h1;56=h0;57=h0;58=h0;59=h0;q=1");
                        cm.updateInfoQuest(39601, "50=h0;51=h0;52=h1;53=h0;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=1");
                        cm.teachSkill(150020006, 0, -1);
                        cm.teachSkill(150020006, 1, 10);
                        cm.getTopMsgFont('获得了<回忆>技能。', 3, 20, 20, 0, 0);
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