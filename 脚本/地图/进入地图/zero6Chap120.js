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
  } else if (status === V++) {
    cm.npc_ChangeController(2470037, "oid=27599", -1776, 333, 322, -1826, -1726, 1, false, 0, false);
    cm.npc_ChangeController(2470038, "oid=27600", -2455, 333, 303, -2505, -2405, 1, false, 0, false);
    cm.npc_ChangeController(2470035, "oid=27601", 3175, -387, 19, 3125, 3225, 1, false, 0, false);
    cm.npc_ChangeController(2470036, "oid=27602", 1667, 333, 372, 1617, 1717, 1, false, 0, false);
    cm.npc_ChangeController(2470034, "oid=27603", -3154, 333, 314, -3204, -3104, 1, false, 0, false);
    cm.npc_ChangeController(2470025, 'oid=27604', 397, 333, 347, 347, 447, 1, false, 0, false);
    cm.npc_ChangeController(2470026, "oid=27605", 745, 333, 351, 695, 795, 1, false, 0, false);
    cm.npc_ChangeController(2470027, "oid=27606", -715, 333, 335, -765, -665, 1, false, 0, false);
    cm.npc_ChangeController(2470028, "oid=27607", -993, 333, 331, -1043, -943, 1, false, 0, false);
    cm.npc_ChangeController(2470029, "oid=27608", -2426, -57, 57, -2476, -2376, 1, false, 0, false);
    cm.npc_ChangeController(2470030, "oid=27609", -3198, 33, 218, -3248, -3148, 1, false, 0, false);
    cm.npc_ChangeController(2470031, "oid=27610", 2133, 333, 371, 2083, 2183, 1, false, 0, false);
    cm.npc_ChangeController(2470032, "oid=27611", 3156, 333, 387, 3106, 3206, 1, false, 0, false);
    cm.npc_ChangeController(2470033, "oid=27612", 966, 333, 352, 916, 1016, 1, false, 0, false);
    cm.updateInfoQuest(40613, '');
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;