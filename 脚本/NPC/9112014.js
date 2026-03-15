var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.isQuestActive(58726)) {
    var V = 'action' + cm.getMapId();
    eval(V)(f, W, U);
  } else if (cm.isQuestFinished(58726)) {
    cm.playerMessage(-1, "<这个石灯里已经点香了。>");
    cm.playerMessage(5, "<这个石灯里已经点香了。>");
    cm.dispose();
  } else {
    cm.playerMessage(-1, "<不知道应该拿它做什么。>");
    cm.playerMessage(5, "<不知道应该拿它做什么。>");
    cm.dispose();
  }
}
function action800020007(f, W, U) {
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
      if (cm.getNumberFromQuestInfo(58726, "map7") > 0) {
        cm.playerMessage(-1, "<这个石灯里已经点香了。>");
        cm.playerMessage(5, "<这个石灯里已经点香了。>");
        cm.dispose();
        return;
      }
      cm.addNumberForQuestInfo(58726, 'map7', 1);
      cm.addNumberForQuestInfo(58726, "state", 1);
      cm.playerMessage(-1, '<在石灯里点香。>');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("#e#b正如你们迫害我的无数同胞一样，我一定会让人类血债血偿！#k#n", 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === V++) {
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}
function action800020010(f, W, U) {
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
      if (cm.getNumberFromQuestInfo(58726, "map10") > 0) {
        cm.playerMessage(-1, "<这个石灯里已经点香了。>");
        cm.playerMessage(5, "<这个石灯里已经点香了。>");
        cm.dispose();
        return;
      }
      cm.addNumberForQuestInfo(58726, "map10", 1);
      cm.addNumberForQuestInfo(58726, "state", 1);
      cm.playerMessage(-1, "<在石灯里点香。>");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("#e#b今日的痛苦遭遇都是因为你们太软弱才造成的#k#n", 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === V++) {
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}
function action800020009(f, W, U) {
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
      if (cm.getNumberFromQuestInfo(58726, 'map9') > 0) {
        cm.playerMessage(-1, "<这个石灯里已经点香了。>");
        cm.playerMessage(5, "<这个石灯里已经点香了。>");
        cm.dispose();
        return;
      }
      cm.addNumberForQuestInfo(58726, "map9", 1);
      cm.addNumberForQuestInfo(58726, "state", 1);
      cm.playerMessage(-1, "<在石灯里点香。>");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("#e#b动手吧，人类！我们也不会傻傻挨打的！#k#n", 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === V++) {
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}
function action800020008(f, W, U) {
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
      if (cm.getNumberFromQuestInfo(58726, "map8") > 0) {
        cm.playerMessage(-1, "<这个石灯里已经点香了。>");
        cm.playerMessage(5, "<这个石灯里已经点香了。>");
        cm.dispose();
        return;
      }
      cm.addNumberForQuestInfo(58726, 'map8', 1);
      cm.addNumberForQuestInfo(58726, "state", 1);
      cm.playerMessage(-1, "<在石灯里点香。>");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("#e#b我们要离开这里。我们才不要跟人类生活在一起！#k#n", 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else if (status === V++) {
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}