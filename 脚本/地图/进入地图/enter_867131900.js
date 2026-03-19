var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = "action" + (cm.getMapId() - 867131000);
  eval(V)(f, E, e);
}
function action603(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk("\r\n吃糖果游戏要开始了。\r\n#r（3分钟内得到从上面落下来的糖果，达成200分以上吧。）#k", 5, 9100025, false, true);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.updateInfoQuest(64665, "rMap=102000000;M1=1;M2=1;M3=1;D=1;q1=1;q2=1;q3=1;q4=1;q5=1;qSetDate=20/04/17;s=1");
      cm.setStandAloneMode(false);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.eventSKill(0);
      cm.warp(867131900, 0, false);
      cm.setInGameDirectionMode(false, true, false);
      cm.dispose();
      cm.sportsMeetDrop();
      cm.setNumberForQuestInfo(64665, "Candy", 0);
      cm.setNumberForQuestInfo(64665, "total", 0);
    }
  }
}
function action900(f, E, e) {
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
    cm.fieldEffect_Clear("defense/count");
    cm.fieldEffect_Clear("kite/start");
    cm.dispose();
  }
}