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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("SoundEff.img/ArcaneRiver/sunny", 200, 60);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
        cm.sendNormalTalk_Bottom("即便没有双弩枪，你也能发挥出这么惊人的实力？我真想把你介绍给我的同僚们。", 37, 3003278, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("没有辜负我对你的特别期待。不敢想象下次再见，你会变得有多厉害…", 37, 3003278, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#真的好幸福。希望永远都不要醒过来… 不想醒过来…", 37, 3003270, false, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                cm.inGameDirectionEvent_AskAnswerTime(250);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(940200104, 0);
              }
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