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
      cm.inGameDirectionEvent_同时移动镜头和人(2, 600);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(3500);
        cm.effect_NormalSpeechBalloon("#b（越过这个山脉就到阿布鲁了……）", 1, 0, 1, 3000, 0, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/wind", 128);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
          cm.effect_NormalSpeechBalloon("#b（太阳已经落山了。）", 1, 0, 1, 3000, 0, cm.getPlayer().getId());
        } else if (status === V++) {
          cm.warp(867200101, 0);
          cm.setInGameDirectionMode(false, true, false);
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