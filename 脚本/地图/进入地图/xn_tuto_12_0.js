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
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(2159377, "oid=307176", -889, -311, 1, -939, -839, 4, true, 0, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.npc_ChangeController(2159381, "oid=23805864", -1040, 20, 4, -1090, -990, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=23805864", "summon", 0, 0);
          cm.npc_ChangeController(2159384, "oid=23805865", -990, 20, 4, -1040, -940, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=23805865", "summon", 0, 0);
          cm.npc_ChangeController(2159379, "oid=23805866", -780, 20, 5, -830, -730, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=23805866", 'summon', 0, 0);
          cm.npc_ChangeController(2159385, "oid=23805867", -470, 20, 7, -520, -420, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=23805867", "summon", 0, 0);
          cm.npc_ChangeController(2159386, "oid=23805868", -550, 20, 6, -600, -500, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=23805868", 'summon', 0, 0);
          cm.npc_ChangeController(2159387, "oid=23805869", -370, 20, 7, -420, -320, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=23805869", 'summon', 0, 0);
          cm.npc_ChangeController(2159388, "oid=23805870", -620, 20, 6, -670, -570, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=23805870", 'summon', 0, 0);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/17", 'oid=0'], [2400, -500, -130, 1, 0, 1, 1, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/18", "oid=23805867"], [1500, 0, -145, 1, 0, 1, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1380);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("各位！", 1, 2159384, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("吉格蒙特，我来救你了。我们等回去之后再寒暄吧。啊哈！", 1, 2159387, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=23805869", "shoot", 0, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(720);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/smogStart", "oid=0"], [0, -370, 20, 1, 0, 1, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1050);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/smog", "oid=0"], [3900, -370, 20, 1, 0, 1, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=23805864");
                        cm.npc_LeaveField("oid=23805865");
                        cm.npc_LeaveField("oid=23805867");
                        cm.npc_LeaveField("oid=23805868");
                        cm.npc_LeaveField("oid=23805869");
                        cm.npc_LeaveField("oid=23805870");
                        cm.inGameDirectionEvent_SetHideEffect(1);
                        cm.inGameDirectionEvent_AskAnswerTime(2220);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/smogEnd", "oid=0"], [0, -370, 20, 1, 0, 1, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(420);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(600);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(600);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/1", "oid=23805866"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else if (status === V++) {
                                cm.npc_LeaveField("oid=23805866");
                                cm.dispose();
                                cm.warp(931060070, 0, false);
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