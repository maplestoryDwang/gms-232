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
      cm.npc_ChangeController(2142100, "oid=221198", -213, 67, 97, -263, -163, 1, false, 0, false);
      cm.npc_ChangeController(2142105, 'oid=221199', 1083, 203, 169, 1033, 1133, 1, false, 0, false);
      cm.npc_ChangeController(2142103, "oid=221200", 189, -332, 142, 139, 239, 1, false, 0, false);
      cm.npc_ChangeController(2142101, "oid=221201", 82, -757, 279, 32, 132, 1, false, 0, false);
      cm.npc_ChangeController(2142102, "oid=221202", -263, -757, 273, -313, -213, 1, false, 0, false);
      cm.npc_ChangeController(2142107, "oid=221203", -172, -1278, 329, -222, -122, 1, false, 0, false);
      cm.npc_ChangeController(2142106, 'oid=221204', -451, -1063, 322, -501, -401, 1, false, 0, false);
      cm.npc_ChangeController(2142112, 'oid=221205', -969, -603, 216, -1019, -919, 1, false, 0, false);
      cm.npc_ChangeController(2142104, "oid=221206", -1082, -603, 214, -1132, -1032, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 190, -577, 220);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(15000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b(这里是虚假的未来的勇士部落……)#k", 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b(从遥远的山上吹来的风中，带着村民们痛苦的呻吟和喊声，四周到处都是沙尘。这个城市到底发生了什么事情？)#k", 17, 0, true, true);
          } else if (status === V++) {
            cm.forceStartQuest(31951, 'ok');
            cm.warp(273000000, 3, true);
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
          }
        }
      }
    }
  }
}