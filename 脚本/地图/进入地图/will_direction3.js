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
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/bossWill/intro_spine/skeleton", '3', '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/boss/intro3", 200);
        cm.inGameDirectionEvent_AskAnswerTime(5500);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0);
          cm.dispose();
          cm.warp(cm.getMapId() + 50, 0);
          cm.setInGameDirectionMode(false, true, false);
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