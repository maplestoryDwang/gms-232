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
      cm.npc_ChangeController(1540446, 'oid=55840', -73, -24, 1, -79, -23, 1, false, 0, false);
      cm.npc_ChangeController(1540498, "oid=286088922", -35, -30, 1, -85, 15, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286088922", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("呼……呼。\r\n攻击总算停止了。", 37, 1540453, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你受伤了吗，赫丽娜？", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我只是受了点轻伤而已。\r\n我们好不容易才到达这里，你能确认一下前方吗？", 37, 1540453, true, false);
        } else if (status === V++) {
          cm.dispose();
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