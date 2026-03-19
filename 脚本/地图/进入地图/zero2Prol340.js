var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(40055)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(2411017, "oid=24147", 540, 260, 16, 490, 590, 0, false, 0, false);
      cm.npc_ChangeController(2411011, "oid=24148", 910, 230, 6, 860, 960, 1, false, 0, false);
      cm.npc_ChangeController(2411010, "oid=24149", 234, 260, 17, 184, 284, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("你们在做什么！不能欺负#p2411011#！", 33, 2411010, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("？？……什么呀这家伙？", 41, 2400005, true, true);
      } else if (status === V++) {
        cm.setInGameDirectionMode(false, true, false);
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