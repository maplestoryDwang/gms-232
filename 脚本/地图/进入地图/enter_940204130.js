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
      cm.npc_ChangeController(3002032, "oid=258495", 3, 1, 1, -47, 53, 1, false, false);
      cm.monadForceMove("white", 0, 0);
      cm.useItem(2210205, false);
      cm.sendNormalTalk_Bottom("#face12#狐，狐神……！", 36, 3002110, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face12#原来是真的，不是梦！\r\n但是……狐神是在睡觉吗？", 36, 3002110, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face12#快点跟他谈谈吧。", 36, 3002110, true, true);
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