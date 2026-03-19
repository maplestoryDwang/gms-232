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
      cm.npc_ChangeController(1540796, "oid=59220", 1859, -868, 4, 1809, 1891, 5, true, 0, false);
      cm.npc_ChangeController(1540796, "oid=59221", 2142, -868, 1, 2092, 2192, 5, true, 0, false);
      cm.npc_ChangeController(1540796, "oid=59222", 1185, -868, 7, 1135, 1235, 4, true, 0, false);
      cm.npc_ChangeController(1540796, "oid=59223", 926, -868, 6, 876, 976, 4, true, 0, false);
      cm.npc_ChangeController(1540797, 'oid=59224', 1904, -868, 4, 1854, 1904, 5, true, 0, false);
      cm.npc_ChangeController(1540797, "oid=59225", 2036, -868, 1, 1986, 2086, 5, true, 0, false);
      cm.npc_ChangeController(1540797, "oid=59226", 1306, -868, 7, 1256, 1356, 4, true, 0, false);
      cm.npc_ChangeController(1540797, 'oid=59227', 1142, -868, 7, 1131, 1192, 4, true, 0, false);
      cm.npc_ChangeController(1540798, 'oid=59228', 1986, -868, 1, 1936, 2036, 5, true, 0, false);
      cm.npc_ChangeController(1540798, "oid=59229", 1772, -868, 4, 1722, 1822, 5, true, 0, false);
      cm.npc_ChangeController(1540798, "oid=59230", 2193, -868, 1, 2143, 2243, 5, true, 0, false);
      cm.npc_ChangeController(1540798, "oid=59231", 1256, -868, 7, 1206, 1306, 4, true, 0, false);
      cm.npc_ChangeController(1540798, "oid=59232", 1066, -868, 6, 1016, 1091, 4, true, 0, false);
      cm.setNumberForQuestCustomData(33900, 4);
      cm.mapleHeroBecomeNpc(7, 0);
      cm.getPlayer().makeDragon(2217);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 30);
      cm.mapleHeroSetList([4]);
      cm.npc_ChangeController(1540802, "oid=292058781", 1425, -930, 7, 1375, 1475, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=292058781", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=292058782", 1550, -930, 4, 1500, 1600, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=292058782", "summon", 0, 0);
      cm.npc_setForceFlip("oid=292058782", 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("#face1#切，人数实在是太多了！", 37, 1540802, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face4#他们不是在攻击我们，是在攻击这个遗迹！", 37, 1540805, true, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
              cm.forceCompleteQuest(34005);
              cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
              cm.updateInfoQuest(33963, "34001=1;34002=1;34003=1;34004=1;34005=1");
              cm.inGameDirectionEvent_AskAnswerTime(3000);
              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(350132400, 0, true);
              cm.npc_LeaveField("oid=292058781");
              cm.npc_LeaveField("oid=292058781");
              cm.npc_LeaveField("oid=292058782");
              cm.npc_LeaveField("oid=292058782");
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