var status = -1;
var selectionLog = [];
function start() {
  status = -1;
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
  if (status <= V++)
    cm.dispose();
  else if (status === V++) {
    if (cm.isQuestActive(34310)) {
      cm.OnStartNavigation(450003330, 1, '3003209', 34310);
      cm.playerMessage(-1, '前往闹哄哄的夜市看看吧.');
      cm.dispose();
      return;
    } else if (cm.isQuestActive(34300) || cm.isQuestFinished(34300)) {
      cm.dispose();
      return;
    } else if (cm.isQuestFinished(34218)) {
      cm.npc_ChangeController(3003105, 'oid=48250', -163, 78, 70, -204, -113, 1, false, false);
      cm.npc_ChangeController(3003106, 'oid=48251', -266, 78, 43, -316, -216, 0, false, false);
      cm.npc_ChangeController(3003202, 'oid=48252', 495, 78, 84, 445, 536, 0, false, false);
      cm.npc_ChangeController(3003225, 'oid=48253', 1424, 78, 85, 1374, 1474, 1, false, false);
      cm.npc_ChangeController(3003226, 'oid=48254', 1323, 78, 79, 1273, 1331, 1, false, false);
      cm.npc_ChangeController(3003227, 'oid=48255', 610, 78, 72, 576, 660, 1, false, false);
      cm.npc_ChangeController(3003215, 'oid=48256', 240, 51, 48, 190, 290, 0, false, false);
      cm.npc_ChangeController(3003285, 'oid=48257', 916, -129, 16, 866, 966, 1, false, false);
      cm.npc_ChangeController(3003286, 'oid=48258', 2256, -343, 22, 2232, 2306, 1, false, false);
      cm.npc_ChangeController(3003287, 'oid=48259', 65, -344, 60, 15, 115, 1, false, false);
      cm.npc_ChangeController(3003288, 'oid=48260', -597, -335, 32, -647, -591, 1, false, false);
      cm.npc_ChangeController(3003289, 'oid=48261', 698, 78, 72, 648, 748, 1, false, false);
      cm.npc_ChangeController(3003290, 'oid=48262', 1831, 78, 82, 1781, 1851, 1, false, false);
      cm.npc_ChangeController(3003228, 'oid=48263', 1698, 78, 82, 1648, 1748, 1, false, false);
      cm.npc_ChangeController(3003229, 'oid=48264', 1564, 78, 85, 1514, 1591, 0, false, false);
      cm.npc_ChangeController(9000123, 'oid=48265', 838, -338, 9, 788, 888, 1, false, false);
      cm.npc_ChangeController(9000124, 'oid=48266', 852, -328, 9, 802, 902, 1, false, false);
      cm.npc_ChangeController(9010022, 'oid=48267', 3357, 78, 93, 3307, 3407, 1, false, false);
      cm.npc_ChangeController(3003263, 'oid=48268', -28, 51, 48, -78, 22, 0, false, false);
      cm.npc_ChangeController(3003262, 'oid=48269', 101, 51, 48, 51, 151, 1, false, false);
      cm.npc_ChangeController(9010101, 'oid=48270', 2451, -206, 27, 2401, 2501, 1, false, false);
      cm.npc_ChangeController(9010102, 'oid=48271', 2342, -89, 24, 2292, 2392, 1, false, false);
      cm.npc_ChangeController(9010103, 'oid=48272', 2570, -79, 23, 2520, 2620, 1, false, false);
      cm.npc_ChangeController(9010104, 'oid=48273', 2351, 26, 30, 2301, 2401, 1, false, false);
      cm.npc_ChangeController(9010105, 'oid=48274', 2583, 29, 29, 2533, 2633, 1, false, false);
      cm.npc_ChangeController(9010109, 'oid=48275', 846, -249, 4, 796, 896, 1, false, false);
      cm.npc_ChangeController(9010106, 'oid=48276', 687, -223, 4, 637, 737, 1, false, false);
      cm.npc_ChangeController(9400495, 'oid=48277', 2341, -89, 24, 2291, 2391, 1, false, false);
      cm.npc_ChangeController(9400496, 'oid=48278', 2513, -80, 23, 2463, 2563, 1, false, false);
      cm.npc_ChangeController(9001155, 'oid=48279', 1771, -208, 98, 1771, 1821, 1, false, false);
      cm.npc_ChangeController(9001157, 'oid=48280', 2004, -208, 99, 1954, 2054, 1, false, false);
      cm.hideNpc(9400496);
      cm.hideNpc(9001155);
      cm.hideNpc(9001157);
      cm.updateInfoQuest(34340, 'enter=1');
      cm.forceStartQuest(34300);
      cm.dispose();
    } else {
      cm.dispose();
      return;
    }
  }
}