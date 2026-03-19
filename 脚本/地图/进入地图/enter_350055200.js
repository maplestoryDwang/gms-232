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
    cm.dispose();
    cm.npc_ChangeController(1540743, "oid=44400", 1, 2097, 62, -49, 51, 1, false, 0, false);
    cm.setPartner(1, 1540741, 80001601, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setPartner(1, 1540738, 80001615, 0);
    cm.setPartner(1, 1540739, 80001616, 0);
    cm.updateInfoQuest(33213, "area=D3_Z38;x=2;y=1");
    cm.updateInfoQuest(33214, 'ul=8180');
    cm.openUI(254);
    if (cm.getNumberFromQuestInfo(33242, "s552") == 0) {
      cm.npc_ChangeController(1540712, "oid=285439913", 995, 1190, 105, 945, 1045, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=285439913", 'summon', 0, 0);
      cm.onSetBackEffect('bh_552_up', 1, 0, 0, 0);
      cm.地图特效_开关落脚点([93, 94, 95, 96, 106], [1, 1, 1, 1, 1]);
      cm.onSetBackEffect("bh_552_down", 1, 1, 0, 0);
      cm.地图特效_开关落脚点([89, 90, 91, 92, 107], [0, 0, 0, 0, 0]);
    } else {
      cm.onSetBackEffect("bh_552_up", 1, 1, 0, 0);
      cm.地图特效_开关落脚点([93, 94, 95, 96, 106], [0, 0, 0, 0, 0]);
      cm.onSetBackEffect("bh_552_down", 1, 0, 0, 0);
      cm.地图特效_开关落脚点([89, 90, 91, 92, 107], [1, 1, 1, 1, 1]);
      cm.npc_ChangeController(1540713, "oid=285458576", 995, 1190, 105, 945, 1045, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=285458576", 'summon', 0, 0);
    }
    cm.onSetBackEffectSchedule("bh_552_1", 1, 1, 0, 0, 16000, 0);
    cm.地图特效_开关落脚点_Schedule([84], [0], 16000, 0);
    cm.onSetBackEffectSchedule("bh_552_2", 1, 1, 0, 0, 16000, 0);
    cm.地图特效_开关落脚点_Schedule([85], [0], 16000, 0);
    cm.onSetBackEffectSchedule('bh_552_3', 1, 1, 0, 0, 16000, 0);
    cm.地图特效_开关落脚点_Schedule([86], [0], 16000, 0);
    cm.onSetBackEffectSchedule('bh_552_1', 1, 0, 0, 0, 16000, 8000);
    cm.地图特效_开关落脚点_Schedule([84], [1], 16000, 8000);
    cm.onSetBackEffectSchedule('bh_552_2', 1, 0, 0, 0, 16000, 8000);
    cm.地图特效_开关落脚点_Schedule([85], [1], 16000, 8000);
    cm.onSetBackEffectSchedule("bh_552_3", 1, 0, 0, 0, 16000, 8000);
    cm.地图特效_开关落脚点_Schedule([86], [1], 16000, 8000);
    cm.dynamicObjMoveSchedule(-1630, 1244, -1630, 1000, -1630, 1244, 1, 0, -12, 'bh_551_1', 6000, 0);
    cm.dynamicObjMoveSchedule(-1630, 1000, -1630, 1244, -1630, 1000, 1, 0, 12, "bh_551_1", 6000, 3000);
    cm.dynamicObjMoveSchedule(-1230, 1244, -1230, 1488, -1230, 1244, 1, 0, 12, "bh_551_2", 6000, 0);
    cm.dynamicObjMoveSchedule(-1230, 1488, -1230, 1244, -1230, 1488, 1, 0, -12, 'bh_551_2', 6000, 3000);
    cm.dynamicObjMoveSchedule(-830, 1244, -830, 1000, -830, 1244, 1, 0, -12, "bh_551_3", 6000, 0);
    cm.dynamicObjMoveSchedule(-830, 1000, -830, 1244, -830, 1000, 1, 0, 12, "bh_551_3", 6000, 3000);
    cm.setNumberForQuestInfo(33242, "savePt", 0);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;