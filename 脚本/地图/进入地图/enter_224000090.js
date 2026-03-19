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
      cm.npc_ChangeController(2074035, "oid=13776", 384, -1137, 112, 334, 434, 1, false, 0, false);
      cm.forceStartQuest(30927, '1');
      cm.sendNormalTalk_Bottom("#face0#额……这里全都是灰烬啊，\r\n火灾肯定是从这里开始的。", 37, 2074100, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#实在是有些古怪，还是先调查看看吧。", 37, 2074100, true, true);
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