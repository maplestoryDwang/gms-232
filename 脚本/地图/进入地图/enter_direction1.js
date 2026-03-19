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
      cm.updateInfoQuest(34024, "1=1;2=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.curNodeEventEnd(true);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BossDemian/phase1", 100);
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/DemianIllust/1pahseSp/demian", "animation", ''], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(8000);
    } else if (status === V++) {
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.warp(cm.getMapId() - 60, 0, true);
      cm.setInGameDirectionMode(false, true, false);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;