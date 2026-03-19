var status = -1;
var selectionLog = [];
function action(f, E, e) {
  switch (cm.getMapId()) {
    case 807050201:
      action807050201(f, E, e);
      break;
    case 807050202:
      action807050202(f, E, e);
      break;
    case 807050203:
      action807050203(f, E, e);
      break;
    default:
      cm.dispose();
  }
}
function action807050201(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/21"], [0, 0, -120, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/22"], [0, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else if (status === V++) {
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}
function action807050202(f, E, e) {
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
      cm.npc_ChangeController(9130071, 'oid=104919', 92, 1, 2, 92, 142, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/23"], [0, 0, -120, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/24"], [0, 450, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/25"], [0, 0, -120, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/26"], [0, 450, -120, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/27"], [0, 0, -120, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/28"], [0, 450, -120, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/29"], [0, 450, -120, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else if (status === V++) {
                  cm.setInGameDirectionMode(false, true, false);
                  cm.dispose();
                  cm.warp(807050203, 0);
                } else {
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
function action807050203(f, E, e) {
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
      cm.npc_ChangeController(9130071, 'oid=104922', -241, -14, 18, -291, -191, 0, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(9130070, "oid=20968666", 40, 24, 9, -10, 90, 1, false, false);
      cm.npc_SetSpecialAction("oid=20968666", "summon", 0, 0);
      cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/30"], [0, 220, -120, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/31"], [0, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/32"], [0, 220, -120, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status === V++) {
          cm.npc_LeaveField("oid=20968666");
          cm.npc_LeaveField("oid=20968666");
          cm.spawnMobLimit(9421567, 1, 40, -18, 1);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        } else {
          cm.dispose();
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