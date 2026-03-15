var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("#b#h0##k！\r\n好久不见！", 4, 9062345, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("我想邀请你参加一场#r#e特别的派对#n#k。", 4, 9062345, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#r#e妖精学院艾利涅#n#k迎来了每100年一次的满月日。\r\n那里的夜空中升起了#b#e又大又圆的蓝色满月#n#k！", 4, 9062345, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("为了纪念蓝色满月，我们特地在艾利涅召开了一场#r#e特别的派对#n#k！", 4, 9062345, true, true);
          } else {
            if (status === v++) {
              cm.askYesNo("唔，#e#b#h0##k#n。\r\n这是孩子们用心准备的派对！\r\n你想要邀请函吗？\r\n\r\n\r\n #r※ 领取后前往活动地图。", 4, 9062345);
            } else if (status === v++) {
              cm.updateInfoQuest(100657, "point=0;date=0;today=0");
              cm.updateInfoQuest(100658, "point=0;date=0;today=0");
              cm.updateInfoQuest(100659, "point=0;date=0;today=0");
              cm.forceCompleteQuest(100655);
              cm.setNumberForQuestInfo(100655, "rMap", cm.getMapId());
              cm.dispose();
              cm.warp(993186001, 0, false);
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}