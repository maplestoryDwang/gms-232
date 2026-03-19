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
      cm.updateInfoQuest(61333, "act1=610061340");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.addPopupSay(9201537, 2000, "干得漂亮！", '', 0);
        cm.inGameDirectionEvent_AskAnswerTime(3200);
      } else {
        if (status === V++) {
          cm.addPopupSay(9201537, 2000, "只要你继续努力，就没什么能妨碍你阅读记忆了。", '', 0);
          cm.inGameDirectionEvent_AskAnswerTime(7200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我现在该怎么做？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.addPopupSay(9201537, 2000, "搜寻线索！", '', 0);
              cm.inGameDirectionEvent_AskAnswerTime(3200);
            } else {
              if (status === V++) {
                cm.addPopupSay(9201537, 2000, "动作麻利点儿，省得又有记忆尘埃出现。", '', 0);
                cm.inGameDirectionEvent_AskAnswerTime(5200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                  cm.updateInfoQuest(61368, "1=1;2=1;3=1;4=1;5=1;6=1");
                  cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                } else if (status === V++) {
                  cm.eventSKill(0);
                  cm.warp(610061350, 0, false);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=69065");
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