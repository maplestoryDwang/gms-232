var status = -1;
function action(f, E, e) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/Lucid/lusi", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/lucid_spine", 200);
      cm.inGameDirectionEvent_AskAnswerTime(9000);
    } else if (status === V++) {
      cm.dispose();
      if (cm.getMapId() < 450004000) {
        cm.warp(cm.getMapId() + 40, 0, true);
      } else {
        cm.warp(cm.getMapId() + 50, 0, true);
      }
      cm.setInGameDirectionMode(false, true, false);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;