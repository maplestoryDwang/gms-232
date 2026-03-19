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
    cm.cancelItem(2023401);
    cm.npc_ChangeController(1540458, 'oid=34658', -2251, -364, 10, -2301, -2201, 4, true, false);
    cm.npc_ChangeController(1540604, "oid=34659", -1197, -237, 29, -1247, -1147, 0, false, false);
    cm.npc_ChangeController(1540604, 'oid=34660', -1129, -340, 12, -1179, -1094, 0, false, false);
    cm.npc_ChangeController(1540458, "oid=34661", -2050, -364, 10, -2100, -2000, 4, true, false);
    cm.npc_ChangeController(1540605, "oid=34662", -653, -323, 23, -703, -603, 0, false, false);
    cm.npc_ChangeController(1540606, "oid=34663", -720, -118, 33, -770, -670, 0, false, false);
    cm.npc_ChangeController(1540607, 'oid=34664', -509, -222, 26, -559, -498, 0, false, false);
    cm.npc_ChangeController(1540446, "oid=34665", -1770, -339, 45, -1817, -1752, 1, false, false);
    cm.npc_ChangeController(1540450, "oid=34666", -2148, -364, 10, -2198, -2098, 4, true, false);
    cm.npc_ChangeController(1540453, "oid=34667", -1921, -237, 38, -1923, -1871, 0, false, false);
    cm.npc_ChangeController(1540451, 'oid=34668', -2027, -237, 36, -2077, -1977, 0, false, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350023000");
    cm.updateInfoQuest(33132, "boss=noclear;board1=noclear");
    cm.forceForfeitQuest(33133);
    cm.forceForfeitQuest(33134);
    cm.forceForfeitQuest(33135);
    cm.cameraSwitch_PushSwitchMoveInfo("希纳斯", 3700);
    cm.addPopupSay(1540450, 2000, "情况不容乐观, #h0#. ", '');
    cm.cameraSwitch_PushSwitchMoveInfo('南哈特', 3700);
    cm.addPopupSay(1540451, 2000, "敌人先将联盟的主要战斗力分散, 然后再发动攻击. ", '');
    cm.cameraSwitch_PushSwitchMoveInfo("赫丽娜", 3700);
    cm.addPopupSay(1540453, 2000, "我要守护女皇. ", "Voice3.img/BlackHeaven/hel/14");
    cm.cameraSwitch_PushSwitchMoveInfo("east00", 3700);
    cm.addPopupSay(1540453, 2000, "#h0#, 请让敌人们见识一下你的实力吧!", "Voice3.img/BlackHeaven/hel/15");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;