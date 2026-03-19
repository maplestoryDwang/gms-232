var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(1033211, "oid=200922", -177, -339, 45, -227, -127, 1, false, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -180, -80);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003275, "oid=1797792", -260, -60, 4, -310, -210, 0, false, false);
          cm.npc_SetSpecialAction("oid=1797792", "summon", 0, 0);
          cm.npc_ChangeController(3003276, "oid=1797793", -320, -60, 2, -370, -270, 0, false, false);
          cm.npc_SetSpecialAction("oid=1797793", "summon", 0, 0);
          cm.npc_ChangeController(3003277, "oid=1797794", -380, -60, 2, -430, -330, 0, false, false);
          cm.npc_SetSpecialAction("oid=1797794", "summon", 0, 0);
          cm.npc_ChangeController(3003280, "oid=1797795", -40, -60, 6, -90, 10, 1, false, false);
          cm.npc_SetSpecialAction("oid=1797795", "summon", 0, 0);
          cm.npc_ChangeController(3003281, "oid=1797796", -100, -60, 4, -150, -50, 1, false, false);
          cm.npc_SetSpecialAction("oid=1797796", 'summon', 0, 0);
          cm.npc_ChangeController(3003270, "oid=1797797", -180, -60, 4, -230, -130, 1, true, false);
          cm.npc_SetSpecialAction("oid=1797797", "summon", 0, 0);
          cm.setNpcSpecialActionReset("oid=1797797");
          cm.npc_SetSpecialAction("oid=1797797", "mer", -1, 0);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#美丽的埃欧雷。我是精灵女王。还有比这更幸福的事情吗？", 37, 3003270, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#可爱的百姓们，他们无论什么时候都相信我并追随我。好了，快说说看。你们到底有多爱我？", 37, 3003270, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('……', 37, 3003275, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('……', 37, 3003276, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('……', 37, 3003281, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('……', 37, 3003280, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -180, -80);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=1797792");
                                  cm.npc_LeaveField("oid=1797793");
                                  cm.npc_LeaveField("oid=1797794");
                                  cm.npc_LeaveField("oid=1797795");
                                  cm.npc_LeaveField("oid=1797796");
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#……", 37, 3003270, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#……", 37, 3003270, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                      } else if (status === V++) {
                                        cm.npc_LeaveField("oid=1797797");
                                        cm.dispose();
                                        cm.warp(940200125, 0);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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