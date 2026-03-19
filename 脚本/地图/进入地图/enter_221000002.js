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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ChangeEquipment([1392000]);
      cm.inGameDirectionEvent_AskAnswerTime(5000);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("一定要抓住。", 57, 0, false, true);
        cm.curNodeEventEnd(true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#嗯！", 37, 2052027, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.onTeleport(0, 3, cm.getPlayer().getId(), 2999, -3499);
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/omegaSector/pinkON"], [20000, 0, 0, 1, 0, 0, 0, 0]);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.setInGameDirectionMode(false, true, false);
                  cm.addPopupSay(2052004, 2000, "#face4#这里的风景……有这么美吗？", '', 0);
                  cm.curNodeEventEnd(true);
                  cm.setInGameDirectionMode(true, false, true);
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                  cm.scheduleWarpTask(9, 221000000, 0, false);
                } else if (status === V++) {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;