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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.fieldEffect_复合图片动画(["Effect/Direction20.img/bossBlackMage/fail_spine/black", "animation", '', 'intro'], [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]);
          cm.fieldEffect_PlayFieldSound("Sound/Etc.img/BlackMageFailSpine", 200);
          cm.inGameDirectionEvent_AskAnswerTime(4500);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1, -1, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else if (status === V++) {
            cm.fieldEffect_取消复合图片动画("intro", 100, 0);
            cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
            cm.warp(450012500, 1, true);
          }
        }
      }
    }
  }
}