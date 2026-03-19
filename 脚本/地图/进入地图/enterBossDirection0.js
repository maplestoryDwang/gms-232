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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/teleport/0"], [3200, 0, 189, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(9390121, "oid=6987594", 295, 153, 30, 245, 345, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6987594", "summon", 0, 0);
      cm.setSessionValue("giantBossStr", '6987594');
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.gainItem(4033981, -1);
        cm.贝勒德_小地图([], []);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/1"], [1500, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_Tremble(0, 1000, 30);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/User/2"], [1300, 0, -120, 1, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/2"], [1300, 0, -120, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.fieldEffect_Tremble(0, 1000, 30);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 400, 694, 153);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=6987594", 'stand', 0, 0);
                    cm.inGameDirectionEvent_PushMoveInfo(1, 500, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2298);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/3"], [1500, 0, -150, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/4"], [1500, 200, -300, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/giantBoss/balloonMsg/5"], [1500, 200, -300, 0, 0, 0, 0, 0]);
                            cm.fieldEffect_Tremble(0, 2000, 30);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=6987594", "attack0", 0, 0);
                              cm.fieldEffect_Tremble(0, 1600, 30);
                              cm.fieldEffect_PlayFieldSound("GiantVellud/Boom", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(5);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.eventSKill(0);
                                cm.npc_LeaveField("oid=6987594");
                                cm.dispose();
                                cm.warp(863000910, 0, false);
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