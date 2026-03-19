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
      cm.setNumberForQuestCustomData(33900, 6);
      cm.getPlayer().removeDragon();
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.setAmbience("SoundEff.img/HofM/act1/sliding", 120, 60);
      cm.setAmbience("Ambience.img/flyingdeck_fast", 120, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.emotion(5, -1);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 200, 232);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.userSetFieldFloating(350111300, 5, 5, 5);
        cm.inGameDirectionEvent_AskAnswerTime(600);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
          cm.effect_AddLayer("Effect/CharacterEff.img/HofM/fall", 350111300, 0);
          cm.effect_NormalSpeechBalloon("#fn黑##fs25##r额啊啊啊啊啊啊啊~啊！！！", 0, 0, 1, 10000, 1, 0, 0, 0, 4, 1540805, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.emotion(5, -1);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.emotion(5, -1);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else if (status === V++) {
              cm.userSetFieldFloating(350111300, 0, 0, 0);
              cm.playSoundEffDirectly("SoundEff.img/HofM/act1/sliding");
              cm.dispose();
              cm.warp(350111399, 0, true);
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