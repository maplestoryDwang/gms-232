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
      cm.npc_ChangeController(2155105, "oid=6562936", 2848, -600, 33, 2798, 2898, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6562936", "summon", 0, 0);
      cm.setPartner(1, 2155104, 80001702, 0);
      cm.spawnMobLimit(8250027, 1, 700, 199, 6);
      cm.spawnMobLimit(8250027, 1, 1338, -75, 6);
      cm.spawnMobLimit(8250027, 1, 1048, 199, 6);
      cm.sendNormalTalk_Bottom("嗯…那个洞连接到很深的地方。\r\n没有时间了。我得记起什么才行…\r\n抱歉，我现在什么都没想起来。", 37, 2155104, false, true);
      cm.spawnMobLimit(8250027, 1, 1859, -75, 6);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face1#这么做或许有些鲁莽，但… #b我们能不能先进入那里面？#k\r\n虽然监视机器人的警备非常森严，但…\r\n我也不知道，我总觉得应该进去看看。帮帮我，拜托你了。", 37, 2155121, true, true);
      } else if (status === V++) {
        cm.getTopMsgFont("躲开监视机器人, 到深处看看吧. ", 3, 20, 20, 0, 0);
        cm.spawnMobLimit(8250027, 1, 1859, -75, 6);
        cm.spawnMobLimit(8250027, 1, 1859, -75, 6);
        cm.dispose();
      }
    }
  }
}