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
      cm.npc_ChangeController(3003709, "oid=276978", 41, 206, 5, -9, 91, 1, false, 0, false);
      cm.teachSkill(80001037, -1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -847, 90);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h5;09=h1");
        cm.setNumberForQuestInfo(35706, "enter", 1);
        cm.setPartner(1, 3003758, 80002575, 0);
        cm.setPartner(1, 3003759, 80002577, 0);
        cm.setPartner(1, 3003763, 80002578, 0);
        cm.setPartner(1, 3003760, 80002579, 0);
        cm.setPartner(1, 3003764, 80002580, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("绳子延伸到了这里……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#请看那里！", 37, 3003758, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 50, 190);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("！！！", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这是……其他士兵的衣服和武器！", 37, 3003758, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -121, 165);
                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -121, 90);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                          cm.setStandAloneMode(false);
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