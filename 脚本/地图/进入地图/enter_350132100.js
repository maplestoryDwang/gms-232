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
      cm.showMapleHero();
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setAmbience("Ambience.img/flyingdeck", 50, 60);
      cm.Hidden_background("bird", 1, 0, 0, 0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk_Bottom("#face3#有什么在靠近！", 37, 1540805, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#主人，看天上！", 37, 1540807, true, true);
        } else {
          if (status === V++) {
            cm.playSoundEffDirectly("Ambience.img/flyingdeck");
            cm.fieldEffect_PlayBGM("Bgm45/Time Is Gold", 0, 0);
            cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT3_birds/001", 'animation', '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/bird_appear", 100);
            cm.Hidden_background("bird", 1, 1, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(350132200, 0, true);
              cm.setInGameDirectionMode(false, true, false);
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