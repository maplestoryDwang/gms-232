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
      cm.npc_ChangeController(9390216, "oid=109679", 751, 350, 61, 701, 801, 1, false, 0, false);
      cm.npc_ChangeController(9390227, "oid=109680", 607, 350, 61, 557, 657, 0, false, 0, false);
      cm.npc_ChangeController(9390228, "oid=109681", 902, 350, 61, 852, 929, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(5000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("不对，那人！！", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_ScreenMsg("Map/EffectBT.img/dawnveil1/Cut4_1");
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你们在干什么！", 17, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("有目击者。干掉他。", 5, 9390227, true, true);
            } else if (status === V++) {
              cm.setInGameDirectionMode(false, true, false);
              cm.setStandAloneMode(false);
              cm.spawnMobLimit(9390833, 1, 1050, 300, 100);
              cm.spawnMobLimit(9390833, 1, 1050, 300, 100);
              cm.spawnMobLimit(9390834, 1, 862, 300, 100);
              cm.spawnMobLimit(9390834, 1, 862, 300, 100);
              cm.spawnMobLimit(9390833, 1, 140, 300, 100);
              cm.spawnMobLimit(9390833, 1, 140, 300, 100);
              cm.spawnMobLimit(9390834, 1, 40, 300, 100);
              cm.spawnMobLimit(9390834, 1, 40, 300, 100);
              cm.dispose();
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