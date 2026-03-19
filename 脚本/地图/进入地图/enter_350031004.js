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
      cm.npc_ChangeController(1540446, "oid=34960", -2414, -435, 11, -2422, -2364, 1, false, 0, false);
      cm.npc_ChangeController(1540604, 'oid=34961', -1568, -237, 27, -1605, -1518, 0, false, 0, false);
      cm.npc_ChangeController(1540604, "oid=34962", -776, -118, 18, -826, -726, 0, false, 0, false);
      cm.npc_ChangeController(1540604, "oid=34963", -2165, -237, 24, -2215, -2165, 0, false, 0, false);
      cm.npc_ChangeController(1540639, "oid=34964", -1393, -237, 30, -1394, -1343, 0, false, 0, false);
      cm.npc_ChangeController(1540639, "oid=34965", -702, -118, 18, -752, -652, 0, false, 0, false);
      cm.npc_ChangeController(1540639, "oid=34966", -1445, -237, 28, -1495, -1434, 0, false, 0, false);
      cm.npc_ChangeController(1540638, "oid=34967", -1236, -237, 14, -1286, -1186, 1, false, 0, false);
      cm.npc_ChangeController(1540638, "oid=34968", -1662, -237, 26, -1712, -1645, 1, false, 0, false);
      cm.npc_ChangeController(1540638, 'oid=34969', -1345, -237, 30, -1394, -1329, 1, false, 0, false);
      cm.npc_ChangeController(1540638, "oid=34970", -634, -118, 18, -684, -584, 1, false, 0, false);
      cm.npc_ChangeController(1540638, "oid=34971", -367, -118, 19, -383, -317, 1, false, 0, false);
      cm.setAmbience("Ambience.img/warfare1", 100, 60);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540624, "oid=22396050", -2077, -388, 10, -2127, -2027, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22396050", "summon", 0, 0);
      cm.npc_setForceFlip("oid=22396050", 1);
      cm.npc_SetSpecialAction("oid=22396050", "attack", -1, 0);
      cm.npc_ChangeController(1540625, "oid=22396051", -1760, -242, 29, -1810, -1710, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22396051", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=22396051", 'attack', -1, 0);
      cm.npc_setForceFlip("oid=22396051", 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(600);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#h0#！你来啦！吉格蒙特队长还好吧？\r\n你也看到了，甲板上已经乱作一团了！", 37, 1540625, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("刚刚巨大的导弹冲击了船体下侧，\r\n我担心下方船舱内会有伤员。", 37, 1540625, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(600);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;