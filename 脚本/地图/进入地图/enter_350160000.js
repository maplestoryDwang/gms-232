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
      cm.npc_ChangeController(1540795, "oid=60124", 27, 16, 3, -23, 77, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350132400;act4=350160000");
      cm.showMapleHero();
      cm.sendNormalTalk_Bottom("主人，我们快要靠近顶端了！", 37, 1540807, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3#我感受到了邪恶的气息，我们赶紧走吧！", 37, 1540805, true, true);
      } else if (status === V++) {
        cm.updateInfoQuest(34019, "b4boss=1;40500=1");
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