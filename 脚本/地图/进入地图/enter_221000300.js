var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(3478) > 0 && !cm.isQuestFinished(3487)) {
    cm.setPartner(1, 2052032, 80002245, 0);
  }
  if (cm.isQuestActive(3477)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(2052006, "oid=11687", -176, 11, 31, -226, -126, 0, false, false);
      cm.npc_ChangeController(2052007, "oid=11688", -250, 11, 31, -300, -200, 4, true, false);
      cm.npc_ChangeController(2052017, "oid=11689", 19, 11, 31, -31, 69, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(800);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#再次回到现在……#fs15##fn黑体#地球防御本部司令室"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
        cm.inGameDirectionEvent_AskAnswerTime(3700);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#是这个样子的……", 37, 2052004, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#喂？你在听吗？", 37, 2052004, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呼……zzz", 57, 0, true, true);
                } else if (status === V++) {
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;