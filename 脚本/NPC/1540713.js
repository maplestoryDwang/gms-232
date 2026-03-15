var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getMapId() == 350054300) {
        cm.sendNormalTalk_Bottom("这一层已经清空了，请前往下一层。", 36, 1540451, false, true);
      } else if (cm.getMapId() == 350055200) {
        cm.npc_LeaveField("oid=285458576");
        cm.npc_ChangeController(1540712, "oid=285439913", 995, 1190, 105, 945, 1045, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=285439913", "summon", 0, 0);
        cm.onSetBackEffect("bh_552_up", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([93, 94, 95, 96, 106], [1, 1, 1, 1, 1]);
        cm.onSetBackEffect("bh_552_down", 1, 1, 0, 0);
        cm.地图特效_开关落脚点([89, 90, 91, 92, 107], [0, 0, 0, 0, 0]);
        cm.setNumberForQuestInfo(33242, 's552', 0);
      } else {
        cm.sendNormalTalk_Bottom("通道已经打开了，请继续前进。", 36, 1540451, false, true);
      }
      cm.dispose();
    }
  }
}