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
  } else if (status === V++) {
    cm.uiChangeStage(0);
    cm.fieldEffect_ScreenMsg("defense/count");
    cm.playerMessage(-1, "消灭突然出现的怪物吧。");
    cm.spawnMobLimit(9402307, 1, 874, 402, 100);
    cm.npc_ChangeController(9400595, "oid=3603888", 1970, 440, 3, 1920, 2020, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=3603888", "summon", 0, 0);
    cm.npc_ChangeController(9400689, "oid=3603889", 877, 440, 2, 827, 927, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=3603889", "summon", 0, 0);
    cm.fieldEffect_ScreenMsg("killing/stage/1");
    cm.scheduleOpenNpcTask(4, 0, "莫奈德_Act2_粉红围攻");
    cm.fieldEffect_ScreenMsg("killing/first/start");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;