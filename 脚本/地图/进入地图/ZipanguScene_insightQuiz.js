var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  cm.npc_LeaveField("oid=11111");
  cm.npc_LeaveField("oid=11112");
  cm.npc_LeaveField('oid=11113');
  cm.npc_LeaveField("oid=11114");
  cm.npc_LeaveField("oid=11115");
  var V = 'action' + (cm.getMapId() - 800024200);
  eval(V)(f, E, e);
}
function action0(f, E, e) {
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk("叔叔你只要在你认识的人中找出略有差异的对象即可！", 5, 9111018, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        var O = cm.rand(9111040, 9111049);
        var b = cm.rand(1, 5);
        cm.npc_ChangeController(b == 1 ? O + 10 : O, "oid=11111", 125, -53, 12, 75, 175, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11111", "summon", 0, 0);
        cm.npc_ChangeController(b == 2 ? O + 10 : O, "oid=11112", 275, -53, 22, 225, 325, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=11112', 'summon', 0, 0);
        cm.npc_ChangeController(b == 3 ? O + 10 : O, 'oid=11113', 425, -53, 18, 375, 475, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=11113', "summon", 0, 0);
        cm.npc_ChangeController(b == 4 ? O + 10 : O, "oid=11114", 575, -53, 17, 525, 625, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11114", 'summon', 0, 0);
        cm.npc_ChangeController(b == 5 ? O + 10 : O, "oid=11115", 725, -53, 15, 675, 775, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11115", "summon", 0, 0);
        cm.dispose();
      }
    }
  }
}
function action20(f, E, e) {
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk("叔叔你只要在你认识的人中找出略有差异的对象即可！", 5, 9111018, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        var O = cm.rand(9111040, 9111049);
        var b = cm.rand(1, 5);
        cm.npc_ChangeController(b == 1 ? O + 10 : O, "oid=11111", 125, -53, 12, 75, 175, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=11111', 'summon', 0, 0);
        cm.npc_ChangeController(b == 2 ? O + 10 : O, "oid=11112", 275, -53, 22, 225, 325, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11112", "summon", 0, 0);
        cm.npc_ChangeController(b == 3 ? O + 10 : O, 'oid=11113', 425, -53, 18, 375, 475, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11113", 'summon', 0, 0);
        cm.npc_ChangeController(b == 4 ? O + 10 : O, 'oid=11114', 575, -53, 17, 525, 625, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11114", 'summon', 0, 0);
        cm.npc_ChangeController(b == 5 ? O + 10 : O, "oid=11115", 725, -53, 15, 675, 775, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=11115', "summon", 0, 0);
        cm.dispose();
      }
    }
  }
}
function action40(f, E, e) {
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk("那现在正式开始咯。", 5, 9111018, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        var O = cm.rand(1, 5);
        var S = cm.randArray(9111040, 9111049, 5);
        cm.npc_ChangeController(O == 1 ? S[0] + 10 : S[0], "oid=11111", -25, -53, 13, -75, 25, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11111", "summon", 0, 0);
        cm.npc_ChangeController(O == 2 ? S[1] + 10 : S[1], "oid=11112", 125, -53, 12, 75, 175, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=11112', 'summon', 0, 0);
        cm.npc_ChangeController(O == 3 ? S[2] + 10 : S[2], "oid=11113", 275, -53, 22, 225, 325, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11113", "summon", 0, 0);
        cm.npc_ChangeController(O == 4 ? S[3] + 10 : S[3], 'oid=11114', 425, -53, 18, 375, 475, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11114", "summon", 0, 0);
        cm.npc_ChangeController(O == 5 ? S[4] + 10 : S[4], "oid=11115", 575, -53, 17, 525, 625, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11115", "summon", 0, 0);
        cm.dispose();
      }
    }
  }
}
function action60(f, E, e) {
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk("叔叔你只要在你认识的人中找出略有差异的对象即可！", 5, 9111018, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        var O = cm.rand(1, 5);
        var S = cm.randArray(9111040, 9111049, 5);
        cm.npc_ChangeController(O == 1 ? S[0] + 10 : S[0], "oid=11111", -25, -53, 13, -75, 25, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11111", "summon", 0, 0);
        cm.npc_ChangeController(O == 2 ? S[1] + 10 : S[1], 'oid=11112', 125, -53, 12, 75, 175, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11112", "summon", 0, 0);
        cm.npc_ChangeController(O == 3 ? S[2] + 10 : S[2], "oid=11113", 275, -53, 22, 225, 325, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11113", "summon", 0, 0);
        cm.npc_ChangeController(O == 4 ? S[3] + 10 : S[3], 'oid=11114', 425, -53, 18, 375, 475, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11114", "summon", 0, 0);
        cm.npc_ChangeController(O == 5 ? S[4] + 10 : S[4], "oid=11115", 575, -53, 17, 525, 625, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11115", "summon", 0, 0);
        cm.dispose();
      }
    }
  }
}
function action80(f, E, e) {
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk("叔叔你只要在你认识的人中找出略有差异的对象即可！", 5, 9111018, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        var O = cm.rand(1, 5);
        var S = cm.randArray(9111040, 9111049, 5);
        cm.npc_ChangeController(O == 1 ? S[0] + 10 : S[0], "oid=11111", -25, -53, 13, -75, 25, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11111", "summon", 0, 0);
        cm.npc_ChangeController(O == 2 ? S[1] + 10 : S[1], "oid=11112", 125, -53, 12, 75, 175, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11112", "summon", 0, 0);
        cm.npc_ChangeController(O == 3 ? S[2] + 10 : S[2], "oid=11113", 275, -53, 22, 225, 325, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=11113', "summon", 0, 0);
        cm.npc_ChangeController(O == 4 ? S[3] + 10 : S[3], "oid=11114", 425, -53, 18, 375, 475, 1, false, 0, false);
        cm.npc_SetSpecialAction('oid=11114', "summon", 0, 0);
        cm.npc_ChangeController(O == 5 ? S[4] + 10 : S[4], "oid=11115", 575, -53, 17, 525, 625, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=11115", 'summon', 0, 0);
        cm.dispose();
      }
    }
  }
}