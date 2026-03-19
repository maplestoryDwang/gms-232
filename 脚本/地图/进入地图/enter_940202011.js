var status = -1;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(3001346, "oid=255782", -3400, 79, 69, -3450, -3350, 1, false, false);
    cm.setPartner(1, 3001300, 80002330, 0);
    cm.addPopupSay(3001300, 2500, "#face0#在闪光弹的干扰下，士兵的视线暂时被挡住了。", '', 0);
    cm.addPopupSay(3001300, 2500, "#face0#前往水晶门时小心不要撞见士兵。", '', 0);
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;