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
      cm.npc_ChangeController(3003737, "oid=277049", -319, -154, 110, -369, -269, 1, false, 0, false);
      cm.npc_ChangeController(3003738, "oid=277050", 55, -154, 132, 5, 99, 0, false, 0, false);
      cm.npc_ChangeController(3003737, "oid=277051", 313, -514, 160, 263, 363, 1, false, 0, false);
      cm.npc_ChangeController(3003738, "oid=277052", -1037, -514, 84, -1087, -987, 1, false, 0, false);
      cm.npc_ChangeController(3003737, "oid=277053", -664, 206, 17, -714, -614, 0, false, 0, false);
      cm.npc_ChangeController(3003738, "oid=277054", -321, 206, 10, -371, -271, 1, false, 0, false);
      cm.updateInfoQuest(35757, "enter=993063026;do=ing");
      cm.setPartner(1, 3003770, 80002582, 0);
      cm.sendNormalTalk_Bottom("#face0#唉……都追到这里了。要是对付他们肯定会耽误时间的。", 37, 3003770, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#你还放在心上吗？\r\n人都走了#h0#还能怎么办啊！", 37, 3003770, true, true);
        } else if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#悄悄过去，小心别被他们发现。", 37, 3003770, true, true);
          cm.dispose();
        }
      }
    }
  }
}