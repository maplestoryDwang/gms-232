var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064440");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayFieldSound("Sound/BgmGL.img/MBlockbuster_1", 100);
      cm.fieldEffect_ScreenMsg("Map/EffectGL.img/MBlockbuster/illust4");
      cm.inGameDirectionEvent_AskAnswerTime(4200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#fs40#1000年后……", 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/BgmGL.img/MBlockbuster_2", 100);
            cm.fieldEffect_ScreenMsg("Map/EffectGL.img/MBlockbuster/illust5");
            cm.inGameDirectionEvent_AskAnswerTime(4200);
          } else if (status === V++) {
            cm.eventSKill(0);
            cm.warp(610064450, 0, true);
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
          }
        }
      }
    }
  }
}