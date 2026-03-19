var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.onSetMapObjectMove("subway_bg", [6, 1]);
      cm.onSetMapObjectMove("subway_wheel", [6, 1]);
      cm.onSetMapObjectMove("subway_main", [6, 1]);
      cm.onSetMapObjectMove("subway_frame", [6, 1]);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.setPartner(1, 1531003, 80001789, 0);
      cm.npc_ChangeController(1531020, "oid=5566828", 480, 23, 26, 430, 530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=5566828", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=5566828", 'runaway', -1, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 1500, 680, 0);
    } else {
      if (status === O++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.sendNormalTalk_Bottom("#face0#终究会被我抓到的，就算你再怎么逃也不过是地铁尽头罢了！！", 37, V, false, true);
      } else {
        if (status === O++) {
          cm.npc_setForceFlip("oid=5566828", 1);
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === O++) {
            cm.npc_SetForceMove("oid=5566828", 1, 300, 150);
            cm.inGameDirectionEvent_AskAnswerTime(2400);
          } else {
            if (status === O++) {
              cm.npc_LeaveField("oid=5566828");
              cm.npc_LeaveField("oid=5566828");
              cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
            } else if (status === O++) {
              cm.addPopupSay(1531003, 2000, "#face5#超能力者！好像来了个更厉害的家伙！！！", '', 0);
              cm.spawnMobLimit(2700313, 1, 600, 57, 100);
              cm.spawnMobLimit(2700313, 1, 600, 57, 100);
              cm.spawnMobLimit(2700313, 1, 580, 57, 100);
              cm.spawnMobLimit(2700313, 1, 580, 57, 100);
              cm.spawnMobLimit(2700313, 1, 550, 57, 100);
              cm.spawnMobLimit(2700313, 1, 550, 57, 100);
              cm.spawnMobLimit(2700313, 1, 570, 57, 100);
              cm.spawnMobLimit(2700313, 1, 570, 57, 100);
              cm.spawnMobLimit(2700313, 1, 590, 57, 100);
              cm.spawnMobLimit(2700313, 1, 590, 57, 100);
              cm.spawnMobLimit(2700314, 1, 650, 57, 100);
              cm.spawnMobLimit(2700314, 1, 650, 57, 100);
              cm.spawnMobLimit(2700314, 1, 630, 57, 100);
              cm.spawnMobLimit(2700314, 1, 630, 57, 100);
              cm.spawnMobLimit(2700314, 1, 570, 57, 100);
              cm.spawnMobLimit(2700314, 1, 570, 57, 100);
              cm.setStandAloneMode(false);
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.updateInfoQuest(22701, "kinePro=1;clear1=1;clear2=1;clear3=1");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}