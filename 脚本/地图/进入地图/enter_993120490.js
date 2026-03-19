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
      cm.npc_ChangeController(9062194, 'oid=364414', 796, 362, 102, 746, 846, 1, false, 0, false);
      cm.npc_ChangeController(3004201, "oid=364415", 1487, 339, 0, 1437, 1537, 0, false, 0, false);
      cm.npc_ChangeController(3004202, "oid=364416", 2547, 385, 0, 2497, 2597, 0, false, 0, false);
      cm.npc_ChangeController(3004203, 'oid=364417', 2211, 372, 0, 2161, 2261, 1, false, 0, false);
      cm.npc_ChangeController(3004210, "oid=364418", 1628, 312, 0, 1578, 1678, 1, false, 0, false);
      cm.npc_ChangeController(3004215, 'oid=364419', 1420, 327, 0, 1370, 1470, 0, false, 0, false);
      cm.npc_ChangeController(3004216, 'oid=364420', 1698, 329, 0, 1648, 1748, 1, false, 0, false);
      cm.npc_ChangeController(3004204, "oid=364421", 877, 570, 144, 827, 927, 4, true, 0, false);
      cm.npc_ChangeController(3004205, "oid=364422", 710, 359, 102, 660, 760, 4, true, 0, false);
      cm.npc_ChangeController(3004211, "oid=364423", 2667, 402, 0, 2617, 2717, 0, false, 0, false);
      cm.npc_ChangeController(3004212, 'oid=364424', 1828, 585, 0, 1778, 1878, 1, false, 0, false);
      cm.npc_ChangeController(3004213, 'oid=364425', 1735, 579, 0, 1685, 1785, 0, false, 0, false);
      cm.npc_ChangeController(3004217, "oid=364426", 1775, 327, 0, 1725, 1825, 1, false, 0, false);
      cm.npc_ChangeController(3004219, "oid=364427", 1333, 330, 0, 1283, 1383, 0, false, 0, false);
      cm.npc_ChangeController(3004218, 'oid=364428', 1258, 329, 0, 1208, 1308, 0, false, 0, false);
      cm.npc_ChangeController(3004220, "oid=364429", 3241, 386, 0, 3191, 3291, 1, false, 0, false);
      cm.npc_ChangeController(3004220, 'oid=364430', 974, 344, 0, 924, 1024, 1, false, 0, false);
      cm.npc_ChangeController(3004220, 'oid=364431', 3171, 413, 0, 3121, 3221, 1, false, 0, false);
      cm.npc_ChangeController(3004221, "oid=364432", 396, 549, 0, 346, 446, 0, false, 0, false);
      cm.npc_ChangeController(3004221, "oid=364433", 2891, 626, 0, 2841, 2941, 1, false, 0, false);
      cm.npc_ChangeController(3004224, 'oid=364434', 473, 343, 0, 423, 523, 0, false, 0, false);
      cm.npc_ChangeController(3004224, "oid=364435", 2115, 370, 0, 2065, 2165, 0, false, 0, false);
      cm.npc_ChangeController(3004225, "oid=364436", 133, 549, 0, 83, 183, 0, false, 0, false);
      cm.npc_ChangeController(3004225, 'oid=364437', 2589, 623, 0, 2539, 2639, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 112, 275);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("升至最高阶位。把手放上来，接受力量吧", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 70);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_ScreenMsg("Effect/EventEffect.img/glorionForce/0");
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/wakeUp_boom", 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/compass", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1650);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/toair", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我感觉到了一股温暖的气息。", 57, 0, false, true);
                  } else if (status === V++) {
                    cm.eventSKill(0);
                    cm.warp(993120000, 4, false);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.getTopMsgFont("凝聚荣耀特攻队之力，额外获得暴击伤害增加10%效果。", 3, 20, 10, 0, 0);
                    cm.playerMessage(5, "凝聚荣耀特攻队之力，额外获得暴击伤害增加10%效果。");
                    cm.playerMessage(5, "强化了力量训练技能。");
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