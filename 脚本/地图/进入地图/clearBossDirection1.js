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
      cm.forceStartQuest(17450, "20/06/08");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.npc_ChangeController(9390125, "oid=7010854", 5, 38, 2, -45, 55, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=7010854", 'summon', 0, 0);
      cm.fieldEffect_Tremble(0, 800, 30);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_Tremble(0, 800, 30);
        cm.inGameDirectionEvent_AskAnswerTime(800);
      } else {
        if (status === V++) {
          cm.fieldEffect_Tremble(0, 1200, 30);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(9390124, "oid=7011121", 12, -240, 2, -38, 62, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=7011121", 'summon', 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/6"], [1500, 300, -120, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1700);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/7"], [1500, 0, -120, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1700);
              } else {
                if (status === V++) {
                  cm.fieldEffect_Tremble(0, 800, 30);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_Tremble(0, 800, 30);
                    cm.inGameDirectionEvent_AskAnswerTime(800);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/8"], [1500, 300, -220, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1700);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/9"], [1500, 300, -220, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1700);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/10"], [1500, 300, -220, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1700);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/11"], [1500, 300, -220, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1700);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/12"], [1500, 300, -220, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1700);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/13"], [1500, 300, -220, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1700);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/14"], [1500, 300, -220, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1700);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_Tremble(0, 800, 30);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_Tremble(0, 800, 30);
                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                    } else if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.eventSKill(0);
                                      cm.forceStartQuest(56364, '0');
                                      cm.npc_LeaveField("oid=7010854");
                                      cm.npc_LeaveField("oid=7011121");
                                      cm.dispose();
                                      cm.warp(863010700, 0, false);
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