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
      cm.npc_ChangeController(3001968, "oid=434131", 4392, 120, 2, 4342, 4442, 5, true, 0, false);
      cm.npc_ChangeController(3001968, "oid=434132", 4535, 120, 3, 4485, 4585, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 3700, -85);
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
            cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 4331, -33);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#同一时刻，伯爵宅邸", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(5500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face5#啊……上天啊……！\r\n为什么要对我如此残酷？", 36, 3001957, false, true, 1);
                cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face5#如果是因为我过分俊美，想早点将我招去的话……", 36, 3001957, true, true, 1);
                  cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/2-1", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#好，我会心甘情愿地成为点亮夜空的一颗明星。", 36, 3001957, true, true, 1);
                    cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2-2', 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 2000, 4000, 4578, -185);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face5#嗯哼！", 37, 3001957, false, true, 1);
                          cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#咳，咳咳……", 37, 3001957, true, true, 1);
                            cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face5#尽管我生为一簇鲜花……\r\n却度过了如火焰般激情燃烧的人生啊。", 37, 3001957, true, true, 1);
                              cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                          cm.warp(993162009, 0, false);
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