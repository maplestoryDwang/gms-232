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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400582, "oid=7540812", -150, -70, 1, -200, -100, 1, true, false);
      cm.npc_SetSpecialAction("oid=7540812", "summon", 0, 0);
      cm.npc_ChangeController(9400602, "oid=7540813", -638, -70, 1, -688, -588, 0, true, false);
      cm.npc_SetSpecialAction("oid=7540813", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=7540812", "skill", 0, 1);
        cm.sendNormalTalk_Bottom("#face0#艾伊纳尔，没忘记吧？", 37, 9400582, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=7540813", "attack2", 0, 1);
          cm.sendNormalTalk_Bottom("#face0#是的！格挡，刺！", 37, 9400602, true, true);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=7540813", "attack1", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=7540812", "buff", 0, 1);
              cm.playerMessage(-1, "成为艾伊纳尔和凯恩的修炼对象，直到他们累垮。");
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.npc_LeaveField("oid=7540812");
                  cm.npc_LeaveField("oid=7540812");
                  cm.npc_LeaveField("oid=7540813");
                  cm.npc_LeaveField("oid=7540813");
                  cm.setInGameDirectionMode(false, true, false);
                  cm.spawnMobLimit(9402334, 1, -150, -115, 1);
                  cm.spawnMobLimit(9402335, 1, -650, -115, 1);
                  cm.addPopupSay(9400582, 3000, "#face0##h0#，该不会是累了吧？看你动作慢了很多", '', 0);
                  cm.addPopupSay(9400582, 3000, "#face0#哈哈哈，难道是我的实力又增长了？这该如何是好", '', 0);
                  cm.addPopupSay(0, 3000, "#b… 我可以把你这句话当做攻击来看待，凯恩。", '', 0);
                  cm.addPopupSay(9400582, 3000, "#face0#是吗？那我得给他取个好名字。什么名字好呢？", '', 0);
                  cm.addPopupSay(9400582, 3000, "#face0#极限帅气凯恩特别11号飓风脱口秀", '', 0);
                  cm.addPopupSay(0, 3000, '#b…', '', 0);
                  cm.addPopupSay(9400582, 3000, "#face0#艾伊纳尔，你不累吗？", '', 0);
                  cm.addPopupSay(9400602, 3000, "#face0#现在还好！", '', 0);
                  cm.dispose();
                  cm.forceJoinEvent("莫奈德_地图_Act3.9_战斗训练5");
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