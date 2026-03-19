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
      cm.setStandAloneMode(true);
      cm.setQuestCustomData(63088, 'sit');
      cm.npc_ChangeController(9400238, "oid=22273604", 343, 80, 6, 293, 393, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22273604", 'summon', 0, 0);
      cm.npc_ChangeController(9400239, "oid=22273605", 481, 80, 7, 431, 531, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22273605", "summon", 0, 0);
      cm.npc_ChangeController(9400240, "oid=22273606", -250, 80, 4, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22273606", "summon", 0, 0);
      cm.npc_ChangeController(9400241, "oid=22273607", -752, 80, 2, -802, -702, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22273607", 'summon', 0, 0);
      cm.npc_ChangeController(9400242, "oid=22273608", -613, 80, 3, -663, -563, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22273608", "summon", 0, 0);
      cm.npc_ChangeController(9400232, "oid=22273609", -82, 80, 5, -132, -32, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=22273609", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setQuestCustomData(63088, "stand");
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("哎哟喂，躺了太久，腰都快不行了。", 37, 9400210, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("夜幕降临后，身体总算恢复力气了。之前真累死我了。", 37, 9400211, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("真是无比漫长的一天啊。", 37, 9400213, true, true);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(867113200, 0, true);
              cm.setStandAloneMode(false);
              cm.setInGameDirectionMode(false, true, false);
              cm.forceCompleteQuest(63059);
              cm.gainExp(158800);
              cm.updateInfoQuest(63059, "start=1;exp=1");
              cm.npc_LeaveField("oid=22273604");
              cm.npc_LeaveField("oid=22273604");
              cm.npc_LeaveField("oid=22273605");
              cm.npc_LeaveField("oid=22273605");
              cm.npc_LeaveField("oid=22273606");
              cm.npc_LeaveField("oid=22273606");
              cm.npc_LeaveField("oid=22273607");
              cm.npc_LeaveField("oid=22273607");
              cm.npc_LeaveField("oid=22273608");
              cm.npc_LeaveField("oid=22273608");
              cm.npc_LeaveField("oid=22273609");
              cm.npc_LeaveField("oid=22273609");
            }
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