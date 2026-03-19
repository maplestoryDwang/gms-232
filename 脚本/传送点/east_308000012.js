function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      if (cm.isQuestActive(37809)) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, false);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
        cm.setStandAloneMode(true);
        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        cm.sendNormalTalk_Bottom("现在还无法移动。", 56, 0, false, true, 1);
        cm.dispose();
      }
    } else {
      if (status === R++) {
        cm.inGameDirectionEvent_Monologue("#fc0xFF000000#在不落的太阳底下，", 0);
      } else {
        if (status === R++) {
          cm.inGameDirectionEvent_Monologue("#fc0xFF000000#我们打了一仗又一仗。", 1);
        } else {
          if (status === R++) {
            cm.inGameDirectionEvent_Monologue("#fc0xFF000000##r杀死恶魔#fc0xFF000000#，看着王子死去", 0);
          } else {
            if (status === R++) {
              cm.inGameDirectionEvent_Monologue("#fc0xFF000000#而我接过鲁碧安之后……", 0);
            } else {
              if (status === R++) {
                cm.inGameDirectionEvent_Monologue("#fc0xFF000000#和往常一样，\r\n我又回到了最初。", 1);
              } else {
                if (status === R++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else if (status === R++) {
                  cm.forceJoinEvent("圣瑞尼亚的骑士_清怪6");
                  cm.dispose();
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.setStandAloneMode(false);
                  cm.getTopMsgFont("你必须消灭区域内的所有怪物，才能进入下一个关卡。", 3, 20, 20, 0, 0);
                }
              }
            }
          }
        }
      }
    }
  }
}