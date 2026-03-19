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
  } else {
    if (status === V++) {
      cm.dynamicObjMoveSchedule(1332, 278, 1102, 278, 1332, 278, 1, -12, 0, "move01", 6000, 0);
      cm.dynamicObjMoveSchedule(1102, 278, 1332, 278, 1102, 278, 1, 12, 0, "move01", 6000, 3000);
      cm.onSetBackEffectSchedule("tag_01", 1, 1, 0, 0, 9000, 0);
      cm.onSetBackEffectSchedule('tag_02', 1, 0, 0, 0, 11000, 0);
      cm.onSetBackEffectSchedule('tag_03', 1, 1, 0, 0, 9000, 0);
      cm.onSetBackEffectSchedule('tag_04', 1, 1, 0, 0, 11000, 0);
      cm.onSetBackEffectSchedule("tag_01", 1, 0, 0, 0, 9000, 4500);
      cm.onSetBackEffectSchedule('tag_02', 1, 1, 0, 0, 11000, 5500);
      cm.onSetBackEffectSchedule("tag_03", 1, 0, 0, 0, 9000, 4500);
      cm.onSetBackEffectSchedule("tag_04", 1, 1, 0, 0, 11000, 5500);
      cm.地图特效_开关落脚点_Schedule([56], [0], 9000, 0);
      cm.地图特效_开关落脚点_Schedule([58], [0], 11000, 0);
      cm.地图特效_开关落脚点_Schedule([63], [0], 9000, 0);
      cm.地图特效_开关落脚点_Schedule([64], [0], 11000, 0);
      cm.地图特效_开关落脚点_Schedule([56], [1], 9000, 4500);
      cm.地图特效_开关落脚点_Schedule([58], [1], 11000, 5500);
      cm.地图特效_开关落脚点_Schedule([63], [1], 9000, 4500);
      cm.地图特效_开关落脚点_Schedule([64], [1], 11000, 5500);
      cm.hideNpc(1540814);
      cm.npc_ChangeController(1540814, 'oid=57228', -285, 351, 44, -335, -249, 1, false, 0, true);
      cm.setNumberForQuestCustomData(33900, 4);
      cm.mapleHeroBecomeNpc(7, 0);
      cm.getPlayer().makeDragon(2217);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 30);
      cm.updateInfoQuest(33906, "count1=1;count4=1");
      cm.sendNormalTalk_Bottom("#face3#什么都看不到啊。", 37, 1540805, false, true);
      cm.effect_DarkenPlayer(1, -70);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("等一下……那边好像有篝火。", 37, 1540807, true, true);
      } else if (status === V++) {
        cm.npc_ChangeController(1540816, "oid=287793753", 2040, 328, 61, 1990, 2090, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287793753", "summon", 0, 0);
        cm.npc_ChangeController(1540816, "oid=287793754", 2090, 328, 48, 2040, 2140, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287793754", "summon", 0, 0);
        cm.npc_ChangeController(1540816, "oid=287793755", 2215, 328, 48, 2165, 2265, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287793755", "summon", 0, 0);
        cm.npc_ChangeController(1540816, "oid=287793756", 2295, 328, 48, 2245, 2345, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287793756", "summon", 0, 0);
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;