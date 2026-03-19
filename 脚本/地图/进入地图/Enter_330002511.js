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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530050, "oid=38902246", -178, 118, 18, -228, -128, 1, true, false);
      cm.npc_SetSpecialAction("oid=38902246", "summon", 0, 0);
      cm.npc_ChangeController(1530030, "oid=38902247", -278, 118, 19, -328, -228, 1, true, false);
      cm.npc_SetSpecialAction("oid=38902247", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("好了，那我现在就将关于#h0#你的记忆从这个世界洗去。快做准备吧。", 37, 1530050, false, true);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=38902247", 1);
            cm.inGameDirectionEvent_PushMoveInfo(0, 120, -78, 124);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=38902246", 1, 120, 120);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=38902246", 'magic', 0, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.effect_Voice("Skill.img/1111007/Use", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 822, 124);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -78, 124);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(899);
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
                                cm.inGameDirectionEvent_PushMoveInfo(0, 120, -378, 124);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=38902246", -1, 100, 120);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("现在这个世界的人已经不记得#h0#你了。", 37, 1530050, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("总感觉心里空空的……啧……", 37, 1530030, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("没有办法。我们不能再继续干预这个世界了。这是魔法师协会的决定。", 37, 1530050, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === V++) {
                                          cm.npc_setForceFlip("oid=38902247", 0);
                                          cm.dispose();
                                          cm.warp(330002509, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;