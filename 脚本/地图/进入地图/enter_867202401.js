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
      cm.npc_ChangeController(9400589, "oid=7533567", -500, -80, 1, -550, -450, 0, true, false);
      cm.npc_SetSpecialAction("oid=7533567", "summon", 0, 0);
      cm.npc_ChangeController(9400592, "oid=7533568", -580, -80, 1, -630, -530, 0, true, false);
      cm.npc_SetSpecialAction("oid=7533568", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#face0#我们该怎么做？", 37, 9400589, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#b没什么困难的，你们就当我是怪物，来攻击我就可以了。", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#… 啊？攻击你？", 37, 9400592, true, true);
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