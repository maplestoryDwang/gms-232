var status = -1;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.setStandAloneMode(false);
      cm.teachSkill(20041222, 1, 1);
      cm.funckeySetByScript(1, 20041222, 42);
      cm.spawnMob(9300535, 600, -298);
      cm.spawnMob(9300535, 150, -508);
      cm.spawnMob(9300535, -150, -508);
      cm.spawnMob(9300535, -600, -298);
      cm.npc_ChangeController(2159363, 600, -310, 1);
      cm.npc_SetSpecialAction(2159363, 'summon');
      cm.npc_ChangeController(2159364, 150, -520, 1);
      cm.npc_SetSpecialAction(2159364, 'summon');
      cm.npc_ChangeController(2159365, -150, -520, 1);
      cm.npc_SetSpecialAction(2159365, "summon");
      cm.npc_ChangeController(2159366, -600, -310, 1);
      cm.npc_SetSpecialAction(2159366, "summon");
      cm.fieldEffect_ScreenMsg("lightning/screenMsg/4");
      cm.sendNextSNoESC("时间停住了。必须在黑魔法师发现之前，激活所有的封印。");
    } else {
      if (status === V++) {
        cm.sendNextSNoESC("首先去找右边的光之踏板吧。去的时候最好按#r[SHIFT]#k键使用#b<光之传送>#k技能。");
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;