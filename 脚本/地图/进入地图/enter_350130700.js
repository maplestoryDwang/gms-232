var status = -1;
var selectionLog = [];
function action(h, Q, v) {
  if (status == 0 && h == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = v;
  var S = -1;
  if (status <= S++) {
    cm.dispose();
  } else {
    if (status === S++) {
      cm.setAmbience("Ambience.img/gravity", 100, 60);
      cm.updateInfoQuest(33996, "check2=0;check3=1;check7=1;check=1");
      cm.npc_ChangeController(1540881, "oid=306064895", 1880, 50, 9, 1830, 1930, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=306064895", "summon", 0, 0);
      cm.setNpcSpecialActionReset("oid=306064895");
      cm.showMapleHero();
      cm.Hidden_background("HofM_trap2", 1, 0, 2, 0);
      cm.Hidden_background("HofM_trap3", 1, 0, 2, 0);
      cm.Hidden_background("HofM_trap4", 1, 0, 2, 0);
      cm.updateInfoQuest(33996, "check2=0;check3=1;check4=1;check7=1;check=1");
      cm.forceStartQuest(33900, '12');
      cm.mapleHeroBecomeNpc(15, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 38);
      cm.mapleHeroSetList([12]);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === S++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === S++) {
          cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
          cm.Hidden_background("HofM_trap2", 1, 1, 1, 3000);
          cm.Hidden_background("HofM_trap3", 1, 1, 1, 1500);
          cm.Hidden_background('HofM_trap4', 1, 1, 1, 3000);
          cm.setAmbience("SoundEff.img/HofM/act3/laser", 100, 60);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === S++) {
            cm.setAmbience("SoundEff.img/HofM/act3/laser2", 100, 60);
            cm.sendNormalTalk_Bottom("#face13#夜光法师，右侧能看到供电装置。", 37, 1540805, false, true);
          } else {
            if (status === S++) {
              cm.sendNormalTalk_Bottom("我也看到了。", 37, 1540880, true, true);
            } else {
              if (status === S++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === S++) {
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
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