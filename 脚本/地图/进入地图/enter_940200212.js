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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.Hidden_background('water', 1, 0, 0, 0);
        cm.npc_ChangeController(3003367, "oid=1901112", 320, -385, 7, 270, 370, 0, false, false);
        cm.npc_SetSpecialAction("oid=1901112", "summon", 0, 0);
        cm.npc_ChangeController(3003371, "oid=1901113", 388, -695, 17, 338, 438, 1, false, false);
        cm.npc_SetSpecialAction("oid=1901113", "summon", 0, 0);
        cm.npc_ChangeController(3003350, "oid=1901114", 100, -360, 3, 50, 150, 0, true, false);
        cm.npc_SetSpecialAction("oid=1901114", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=1901112", 'stand2', -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#很好！让我们齐心协力，将朋友们救出来！", 37, 3003314, false, true);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=1901112");
              cm.npc_SetSpecialAction("oid=1901112", "tower", 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#就是现在！赶紧踩着我们爬上去！！！", 37, 3003314, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_QTE(3);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_MoveAction(6);
                      cm.sendNormalTalk_Bottom("#face0#没错！再加把劲！", 37, 3003315, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_QTE(3);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(600);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(7);
                            cm.inGameDirectionEvent_AskAnswerTime(600);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(7);
                              cm.inGameDirectionEvent_AskAnswerTime(600);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#现在赶紧将朋友们救出来！！！", 37, 3003314, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_QTE(0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                    cm.npc_SetSpecialAction("oid=1901113", "stand2", 0, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.onSetBackEffect("water", 1, 1, 0, 0);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/water", 200);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.setNpcSpecialActionReset("oid=1901113");
                                        cm.npc_SetSpecialAction("oid=1901113", "stand3", -1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#哇！终于成功了！", 37, 3003315, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(450005400, 3, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;