var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, X, C) {
  if (cm.getMapId() == 350054100) {
    action10(l, X, C);
  } else {
    if (cm.getMapId() == 350054200) {
      action20(l, X, C);
    } else {
      if (cm.getMapId() == 350055200) {
        action30(l, X, C);
      } else {
        var S = cm.getNumberFromQuestInfo(33242, "p43");
        var G = 'action' + S;
        eval(G)(l, X, C);
      }
    }
  }
}
function action0(l, X, C) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = C;
  var S = -1;
  if (status <= S++) {
    cm.dispose();
  } else {
    if (status === S++) {
      var G = -3836;
      var n = -2503;
      var W = cm.getPlayer().getPosition().x;
      var Z = cm.getPlayer().getPosition().y;
      if (cm.getMap().getNumMonsters() > 0) {
        cm.sendNormalTalk_Bottom("由于周围敌人的妨碍，好像无法拉动控制杆。\r\n请先消灭敌人吧。", 36, 1540451, false, true);
      } else if (Math.abs(G - W) >= 50 || Math.abs(n - Z) >= 50) {
        cm.playerMessage(5, "距离太远, 什么都做不了. ");
      } else {
        cm.npc_LeaveField("oid=26153316");
        cm.npc_ChangeController(1540713, "oid=26154205", -3830, -2503, 115, -3880, -3780, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=26154205", "summon", 0, 0);
        cm.onSetBackEffect("bh_543_1", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([67], [1]);
        cm.spawnMobLimit(8240089, 1, -4076, -1501, 4);
        cm.spawnMobLimit(8240089, 1, -4505, -1501, 4);
        cm.spawnMobLimit(8240089, 1, -4383, -1501, 4);
        cm.spawnMobLimit(8240089, 1, -3859, -1501, 4);
        cm.addNumberForQuestInfo(33242, "p43", 1);
      }
      cm.dispose();
    }
  }
}
function action1(l, X, C) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = C;
  var S = -1;
  if (status <= S++) {
    cm.dispose();
  } else {
    if (status === S++) {
      var G = -3836;
      var n = -1501;
      var W = cm.getPlayer().getPosition().x;
      var Z = cm.getPlayer().getPosition().y;
      if (cm.getMap().getNumMonsters() > 0) {
        cm.sendNormalTalk_Bottom("由于周围敌人的妨碍，好像无法拉动控制杆。\r\n请先消灭敌人吧。", 36, 1540451, false, true);
      } else if (Math.abs(G - W) >= 50 || Math.abs(n - Z) >= 50) {
        cm.playerMessage(5, "距离太远, 什么都做不了. ");
      } else {
        cm.npc_LeaveField("oid=26153317");
        cm.npc_ChangeController(1540713, "oid=26155064", -3830, -1501, 123, -3880, -3780, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=26155064", 'summon', 0, 0);
        cm.onSetBackEffect("bh_543_2", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([68], [1]);
        cm.addNumberForQuestInfo(33242, 'p43', 1);
        cm.spawnMobLimit(8240090, 1, -4394, -502, 3);
        cm.spawnMobLimit(8240090, 1, -4299, -502, 3);
        cm.spawnMobLimit(8240090, 1, -4217, -502, 3);
        cm.spawnMobLimit(8240085, 1, -3472, -502, 1);
      }
      cm.dispose();
    }
  }
}
function action2(l, X, C) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = C;
  var S = -1;
  if (status <= S++) {
    cm.dispose();
  } else {
    if (status === S++) {
      var G = -3836;
      var n = -503;
      var W = cm.getPlayer().getPosition().x;
      var Z = cm.getPlayer().getPosition().y;
      if (cm.getMap().getNumMonsters() > 0) {
        cm.sendNormalTalk_Bottom("由于周围敌人的妨碍，好像无法拉动控制杆。\r\n请先消灭敌人吧。", 36, 1540451, false, true);
      } else if (Math.abs(G - W) >= 50 || Math.abs(n - Z) >= 50) {
        cm.playerMessage(5, "距离太远, 什么都做不了. ");
      } else {
        cm.npc_LeaveField("oid=26153318");
        cm.npc_ChangeController(1540713, "oid=26156322", -3830, -502, 159, -3880, -3780, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=26156322", 'summon', 0, 0);
        cm.onSetBackEffect("bh_543_3", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([69], [1]);
        cm.addNumberForQuestInfo(33242, "p43", 1);
      }
      cm.dispose();
    }
  }
}
function action10(l, X, C) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = C;
  var S = -1;
  if (status <= S++) {
    cm.dispose();
  } else if (status === S++) {
    cm.forceStartQuest(33243, '2');
    cm.npc_LeaveField("oid=26149623");
    cm.npc_ChangeController(1540713, "oid=26165077", -2755, 1600, 168, -2805, -2705, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=26165077", "summon", 0, 0);
    cm.onSetBackEffect("bh_541_7", 1, 1, 0, 0);
    cm.地图特效_开关落脚点([164, 165, 166, 167, 170], [0, 0, 0, 0, 0]);
    cm.dispose();
  }
}
function action20(l, X, C) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = C;
  var S = -1;
  if (status <= S++) {
    cm.dispose();
  } else if (status === S++) {
    cm.npc_LeaveField("oid=26165786");
    cm.npc_LeaveField("oid=26165786");
    cm.npc_ChangeController(1540713, "oid=26167566", -757, 2190, 119, -807, -707, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=26167566", "summon", 0, 0);
    cm.onSetBackEffect("bh_542_5", 1, 0, 0, 0);
    cm.地图特效_开关落脚点([121, 126, 126, 121], [1, 1, 1, 1]);
    cm.dispose();
  }
}
function action30(l, X, C) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = C;
  var S = -1;
  if (status <= S++) {
    cm.dispose();
  } else if (status === S++) {
    cm.onSetBackEffect("bh_552_up", 1, 1, 0, 0);
    cm.地图特效_开关落脚点([93, 94, 95, 96, 106], [0, 0, 0, 0, 0]);
    cm.onSetBackEffect("bh_552_down", 1, 0, 0, 0);
    cm.地图特效_开关落脚点([89, 90, 91, 92, 107], [1, 1, 1, 1, 1]);
    cm.npc_LeaveField("oid=285439913");
    cm.npc_LeaveField("oid=285439913");
    cm.npc_ChangeController(1540713, "oid=285458576", 995, 1190, 105, 945, 1045, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=285458576", "summon", 0, 0);
    cm.setNumberForQuestInfo(33242, "s552", 1);
    cm.dispose();
  }
}