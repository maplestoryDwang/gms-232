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
      cm.updateInfoQuest(61333, "act1=610061570");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2871227", 1137, 96, 52, 1087, 1187, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2871227", "summon", 0, 0);
      cm.npc_setForceFlip("oid=2871227", 1);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=2871227", 1, 500, 100);
        cm.inGameDirectionEvent_AskAnswerTime(7200);
      } else {
        if (status === V++) {
          cm.npc_LeaveField("oid=2871227");
          cm.npc_LeaveField("oid=2871227");
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#fs40#        第1幕.被遗忘的战斗\r\n\r\n                 结束。", 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                  cm.updateInfoQuest(61368, "10=1;11=1;12=1;13=1;1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                  cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                  cm.playerMessage(5, "你获得了1000荣耀EXP。");
                  cm.updateInfoQuest(61329, 'honor=1');
                  cm.forceCompleteQuest(61329);
                  cm.updateInfoQuest(61346, "act1=1");
                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                } else if (status === V++) {
                  cm.inGameDirectionEvent_SetHideEffect(0);
                  cm.warp(610060000, 0, true);
                  cm.setStandAloneMode(false);
                  cm.eventSKill(0);
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