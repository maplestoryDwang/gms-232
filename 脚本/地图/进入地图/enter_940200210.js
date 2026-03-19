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
      cm.npc_ChangeController(3003350, "oid=1831742", 1700, -170, 31, 1650, 1750, 1, true, false);
      cm.npc_SetSpecialAction("oid=1831742", "summon", 0, 0);
      cm.npc_ChangeController(3003359, "oid=1831743", 1700, -170, 31, 1650, 1750, 1, true, false);
      cm.npc_SetSpecialAction("oid=1831743", "summon", 0, 0);
      cm.npc_ChangeController(3003352, "oid=1831744", 900, -170, 54, 850, 950, 0, true, false);
      cm.npc_SetSpecialAction("oid=1831744", "summon", 0, 0);
      cm.npc_ChangeController(3003353, "oid=1831745", 850, -170, 53, 800, 900, 0, true, false);
      cm.npc_SetSpecialAction("oid=1831745", "summon", 0, 0);
      cm.npc_ChangeController(3003354, "oid=1831746", 800, -170, 52, 750, 850, 0, true, false);
      cm.npc_SetSpecialAction("oid=1831746", "summon", 0, 0);
      cm.npc_ChangeController(3003355, "oid=1831747", 750, -170, 52, 700, 800, 0, true, false);
      cm.npc_SetSpecialAction("oid=1831747", "summon", 0, 0);
      cm.npc_ChangeController(3003357, "oid=1831748", 750, 25, 13, 700, 800, 0, true, false);
      cm.npc_SetSpecialAction("oid=1831748", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=1831742", "cry", -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 970, 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_MoveAction(1);
          cm.npc_SetForceMove("oid=1831742", -1, 50, 100);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#异邦人！赶紧把同伴……", 37, 3003309, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#现在重要的不是这个，赶紧看看这个孩子！若是不赶紧想想法子！", 37, 3003301, true, true);
              } else {
                if (status === V++) {
                  cm.forceStartQuest(34464, '');
                  cm.forceCompleteQuest(34464);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1831744"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1831748"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 1200, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=1831744", 1, 600, 150);
                        cm.npc_SetForceMove("oid=1831745", 1, 600, 150);
                        cm.npc_SetForceMove("oid=1831746", 1, 600, 150);
                        cm.npc_SetForceMove("oid=1831747", 1, 600, 150);
                        cm.npc_SetForceMove("oid=1831748", 1, 450, 110);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(2);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1650, 100);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=1831748", 1, 580, 200);
                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=1831748", -1, 30, 110);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=1831744", 'jump', 2000, 0);
                                          cm.npc_SetSpecialAction("oid=1831745", "jump", 2000, 0);
                                          cm.npc_SetSpecialAction("oid=1831746", "jump", 2000, 0);
                                          cm.npc_SetSpecialAction("oid=1831747", "jump", 2000, 0);
                                          cm.npc_SetSpecialAction("oid=1831748", "jump", 2000, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#加把劲，同伴……", 37, 3003309, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.setNpcSpecialActionReset("oid=1831743");
                                              cm.npc_SetSpecialAction("oid=1831743", "refresh", 2400, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2300);
                                            } else {
                                              if (status === V++) {
                                                cm.setNpcSpecialActionReset("oid=1831743");
                                                cm.npc_SetSpecialAction("oid=1831743", 'jump', -1, 0);
                                                cm.sendNormalTalk_Bottom("#face0#呜呜……", 37, 3003310, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.setNpcSpecialActionReset("oid=1831742");
                                                  cm.sendNormalTalk_Bottom("#face7#差点就有危险了，所幸现在看样子是没事了。这孩子怎么会落单，孤身一人在此呢……", 37, 3003301, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else if (status === V++) {
                                                      cm.dispose();
                                                      cm.warp(450005200, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;