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
      cm.npc_ChangeController(2510013, "oid=20795", -294, 185, 5, -344, -244, 1, false, false);
      cm.npc_ChangeController(2510014, 'oid=20796', 96, 185, 9, 46, 146, 1, false, false);
      cm.npc_ChangeController(2510015, "oid=20797", 162, 185, 10, 112, 212, 0, false, false);
      cm.npc_ChangeController(2510016, 'oid=20798', 408, 185, 13, 358, 458, 1, false, false);
      cm.npc_ChangeController(2510018, "oid=20799", 674, 185, 14, 624, 724, 0, false, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("…………全部杀死了？相信你跟随你的所有人……？", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("…………就这样吗？你所说的理想全部都是假话吗？", 17, 0, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else if (status === V++) {
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.updateInfoQuest(32628, "anger=1;nothere =1;arin=1;bang1=1;guard1=1");
            cm.dispose();
          }
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