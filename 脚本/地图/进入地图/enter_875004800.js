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
    cm.npc_ChangeController(9401360, "oid=207137", -616, 225, 1, -666, -566, 1, false, 0, false);
    cm.Hidden_background("guide", 1, 1, 0, 0);
    cm.spawnMobLimit(9601668, 1, -500, -145, 20);
    cm.spawnMobLimit(9601668, 1, -250, -145, 20);
    cm.spawnMobLimit(9601668, 1, 0, -148, 20);
    cm.spawnMobLimit(9601668, 1, 250, -97, 20);
    cm.spawnMobLimit(9601668, 1, 500, -146, 20);
    cm.spawnMobLimit(9601668, 1, 650, -143, 20);
    cm.spawnMobLimit(9601669, 1, -350, 242, 20);
    cm.spawnMobLimit(9601669, 1, -100, 242, 20);
    cm.spawnMobLimit(9601669, 1, 2050, 242, 20);
    cm.spawnMobLimit(9601669, 1, 400, 236, 20);
    cm.spawnMobLimit(9601669, 1, 650, 242, 20);
    cm.addPopupSay(9401289, 3000, "#face0#呃呃呃……这……这里！", '', 0);
    cm.dispose();
  }
}