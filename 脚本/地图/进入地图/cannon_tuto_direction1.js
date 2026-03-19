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
      cm.fieldEffect_PlayFieldSound("cannonshooter/flying", 100);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/balloon/0"], [9000, 0, 0, 1, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/balloon/1"], [9000, 0, 0, 1, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/balloon/2"], [9000, 0, 0, 1, 0, 0, 0, 0]);
        cm.effect_Direction("Effect/Direction4.img/cannonshooter/face04", 0, 0, 0);
        cm.effect_Direction("Effect/Direction4.img/cannonshooter/out01", 0, 0, 0);
        cm.dispose();
        cm.warp(912060400, 0, false);
      }
    }
  }
}