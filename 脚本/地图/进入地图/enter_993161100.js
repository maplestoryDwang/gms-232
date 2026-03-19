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
  } else if (status === V++) {
    cm.npc_ChangeController(3001637, "oid=432319", 482, 694, 428, 432, 532, 1, false, 0, false);
    cm.npc_ChangeController(3001638, "oid=432320", 1159, 1120, 482, 1109, 1196, 1, false, 0, false);
    cm.npc_ChangeController(3001639, "oid=432321", 1844, -1241, 363, 1794, 1894, 1, false, 0, false);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, false);
    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 2);
    cm.updateInfoQuest(39597, "40=h0;41=h1;07=h0;37=h1;38=h1;39=h1;count1=0");
    cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face5#点亮灯火，看看那家伙的反应吧！", '', 0);
    cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face5#好像可以用NPC/采集键开启。", '', 0);
    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
    cm.setInGameDirectionMode(false, true, false);
    cm.dispose();
  }
}