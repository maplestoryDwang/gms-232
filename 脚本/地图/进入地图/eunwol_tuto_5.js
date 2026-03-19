var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayFieldSound("eunwolTuto/seal");
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.effect_OnUserEff("Effect/Direction15.img/effect/tuto/seal/front");
        cm.effect_OnUserEff("Effect/Direction15.img/effect/tuto/seal/back");
        cm.fieldEffect_PlayFieldSound("eunwolTuto/particle");
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("eunwolTuto/seal_stone");
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/tuto/seal/stone"], [0, 600, -310, 1, 0, 1, 1, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/tuto/seal/stone"], [0, -600, -310, 1, 0, 1, 1, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/tuto/seal/stone"], [0, 150, -520, 1, 0, 1, 1, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/tuto/seal/stone"], [0, -150, -520, 1, 0, 1, 1, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/tuto/seal/stone"], [0, 0, -81, 1, 0, 1, 1, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/story/BalloonMsg0/3"], [0, 200, -320, 1, 0, 1, 1, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_SetHideEffect(0);
              cm.curNodeEventEnd(true);
              cm.setInGameDirectionMode(false, true);
              cm.setStandAloneMode(false);
              cm.dispose();
              cm.warp(940200000, 0);
            } else {
              cm.dispose();
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