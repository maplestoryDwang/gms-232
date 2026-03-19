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
      if (cm.isQuestActive(64123)) {
        cm.npc_ChangeController(9400590, "oid=58677711", -290, 130, 11, -340, -240, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=58677711", 'summon', 0, 0);
        cm.npc_ChangeController(9400597, "oid=58677712", -220, 130, 15, -270, -170, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=58677712", 'summon', 0, 0);
        cm.npc_ChangeController(9400666, "oid=58677713", -720, 130, 24, -770, -670, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=58677713", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("#face1#什……什么情况？！芬……芬里斯！？芬里斯居然跑到这里来了？！", 37, 9400590, false, true);
      } else {
        cm.dispose();
      }
    } else if (status === V++) {
      cm.playerMessage(-1, "保护村民们免受芬里斯的侵袭。");
      cm.dispose();
      cm.Hidden_background("portal", 1, 1, 0, 0);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;