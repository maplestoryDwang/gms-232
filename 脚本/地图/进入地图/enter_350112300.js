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
      cm.npc_ChangeController(1540820, "oid=57756", 737, -531, 25, 687, 787, 1, false, 0, false);
      cm.npc_ChangeController(1540821, "oid=288220912", 788, -730, 27, 738, 838, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=288220912", "summon", 0, 0);
      cm.updateInfoQuest(33905, "check2=1;check3=1;check5=0;check=1");
      cm.updateInfoQuest(33905, "check2=1;check3=1;check5=0;check7=1;check=1");
      cm.showMapleHero();
      cm.Hidden_background("AF_Tuto", 1, 0, 0, 0);
      cm.Hidden_background("AF_breath", 1, 0, 0, 0);
      cm.Hidden_background('AF_mark', 1, 0, 0, 0);
      cm.Hidden_background("AF_mark2", 1, 0, 0, 0);
      cm.Hidden_background("AF_Magic", 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 192, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
      cm.sendNewEffects(17, [0, 4000, 4000, 797, -580]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.Hidden_background("AF_breath", 1, 1, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 5000, 0);
          cm.sendNewEffects(17, [12000, 4000, 500, 547, -480]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(12000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.Hidden_background('AF_breath', 1, 0, 0, 0);
                cm.setInGameDirectionMode(false, false, false);
                cm.forceStartQuest(33900, '4');
                cm.mapleHeroBecomeNpc(7, 0);
                cm.onActionBarResult(6, -1);
                cm.onActionBarResult(5, 30);
                cm.setPartner(0, 1540785, 0, 0);
                cm.setPartner(0, 1540781, 0, 0);
                cm.setPartner(1, 1540781, 80001900, 0);
                cm.setPartner(1, 1540785, 80001904, 0);
                cm.sendNewEffects(7, [0, 0, 0, 0, 0]);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#……阿弗……利埃……", 37, 1540805, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1##fs20#先祖！！！！！", 37, 1540807, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#该死……太过分了。", 37, 1540802, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……赶紧靠过去看看。", 37, 1540806, true, true);
                      } else if (status === V++) {
                        cm.dispose();
                      }
                    }
                  }
                }
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