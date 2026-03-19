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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.playVideoByScript('kaiser.avi');
    } else if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.playerMessage(-1, "播放动画失败。");
      cm.dispose();
      cm.warp(940001160, 0, false);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.setInGameDirectionMode(false, true, false);
    }
  }
}