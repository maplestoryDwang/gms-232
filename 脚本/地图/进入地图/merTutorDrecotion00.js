var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1033201, "oid=214353", 266, 2, 1);
      cm.npc_ChangeController(1033200, "oid=214354", 138, 2, 1);
      cm.teachSkill(20021166, 1, 1);
      cm.teachSkill(20021181, 1, 1);
      cm.teachSkill(20020111, 1, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.playVideoByScript("Mercedes.avi");
    } else {
      if (status === V++) {
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_MoveAction(4);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/0", "oid=0"], [2000, 0, -100, 1, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/1", "oid=0"], [2000, 0, -100, 1, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.curNodeEventEnd(true);
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/2", 'oid=0'], [2000, 0, -100, 1, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/3", 'oid=0'], [2000, 0, -100, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.curNodeEventEnd(true);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/4", 'oid=0'], [2000, 0, -100, 1, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.curNodeEventEnd(true);
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5", "oid=0"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else if (status === V++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.getTopMsgFont("按下键盘的方向键 [←]、[→]键就能移动。", 3, 20, 20, 0);
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