var status = -1;
function action(f, E, e) {
  status++;
  if (!cm.getQuestStatus(24007) == 1) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1033202, 'oid=214359', -106, -303, 1);
      cm.npc_ChangeController(1033203, "oid=214360", -191, -303, 1);
      cm.npc_ChangeController(1033204, 'oid=214361', -13, -303, 1);
      cm.npc_ChangeController(1033205, "oid=214362", -1531, 1, 1);
      cm.npc_ChangeController(1033103, "oid=214363", 766, -94, 1);
      cm.npc_ChangeController(1033104, "oid=214364", 586, 1, 0);
      cm.npc_ChangeController(1033105, 'oid=214365', 863, 1, 1);
      cm.npc_ChangeController(1033106, 'oid=214366', 702, 1, 0);
      cm.npc_ChangeController(1033000, "oid=214367", 1585, 1, 1);
      cm.npc_ChangeController(1033001, "oid=214368", 1529, -158, 1);
      cm.npc_ChangeController(1033002, "oid=214369", 1550, -315, 1);
      cm.npc_ChangeController(1033206, "oid=214370", 1085, 1, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/6", "oid=0"], [3300, 0, -100, 1, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.updateInfoQuest(24006, "Afrien=o;Eurel=1");
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/8", "oid=0"], [2000, 0, -100, 1, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else if (status === V++) {
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
        cm.getTopMsgFont("按下键盘的[Alt]键就能跳跃。", 3, 20, 20, 0);
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {} else if (status === V++) {
        cm.warp(992000000, 0);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, true);
        cm.setStandAloneMode(false);
        cm.dispose();
        cm.npc_LeaveField(2540000);
      } else {
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