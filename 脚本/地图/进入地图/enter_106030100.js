var status = -1;
function action(f, E, e) {
  status++;
  if (cm.getPlayer().getPosition().getX() > -500) {
    cm.dispose();
    return;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.playerMessage(-1, "本故事需要在1024*768以上的分辨率下进行。");
      cm.fieldEffect_PlayBGM("Bgm00/Silence");
      cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/welcome");
      cm.fieldEffect_ScreenMsg("Map/Effect.img/temaD/enter/mushCatle");
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === V++) {
      cm.fieldEffect_PlayBGM("Bgm38/MushroomCastle");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(false, true);
      cm.setStandAloneMode(false);
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