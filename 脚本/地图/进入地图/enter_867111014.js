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
      cm.npc_ChangeController(1012106, "oid=116592", 4770, -56, 1);
      cm.npc_ChangeController(1012003, 'oid=116593', 3350, 124, 1);
      cm.npc_ChangeController(1012133, "oid=116594", 5022, -56, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400033, "oid=1662055", 5260, 441, 0);
      cm.npc_SetSpecialAction("oid=1662055", "summon");
      cm.npc_ChangeController(9400032, "oid=1662056", 5379, 441, 0);
      cm.npc_SetSpecialAction("oid=1662056", "summon");
      cm.npc_ChangeController(9400031, "oid=1662057", 5480, 441, 1);
      cm.npc_SetSpecialAction("oid=1662057", 'summon');
      cm.sendNextNoESC_Bottom("这肯定就是奈奈，而且确实是朝着勇士部落的方向去了。", 9400033);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNextNoESC_Bottom("那我们就快点去勇士部落，确认奈奈、嘟嘟的痕迹吧。还有明明女士说的商人！！！", 9400031);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNextSNoESC_Bottom("好，接下来是勇士部落啊。我也得去找找那个商人的痕迹了。");
          } else {
            if (status === V++) {
              cm.sendNextSNoESC_Bottom("如果还能有痕迹就好了……先看看增加的内容吧？");
            } else {
              if (status === V++) {
                cm.forceCompleteQuest(59714);
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                cm.updateInfoQuest(59762, "1=1;2=1;3=1;4=1;5=1");
                cm.inGameDirectionEvent_AskAnswerTime(4200);
              } else if (status === V++) {
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                cm.inGameDirectionEvent_SetHideEffect(0);
                cm.warp(cm.getNumberFromQuestInfo(59744, 'map'), 0);
                cm.setInGameDirectionMode(false, false, false);
                cm.setStandAloneMode(false);
                cm.npc_LeaveField("oid=1662055");
                cm.npc_LeaveField("oid=1662056");
                cm.npc_LeaveField("oid=1662057");
                cm.dispose();
              } else {
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