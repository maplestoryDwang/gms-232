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
      cm.sendNormalTalk("#h0#！你在用心制作冒险岛水晶球吗？可是……", 5, 9010010, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("自从收到冒险岛水晶球之后，你已经连续访问冒险岛世界#r#e10天#k#n啦！", 5, 9010010, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("你的耐性和韧劲真的很了不起，真的。", 5, 9010010, true, true);
        } else {
          if (status === v++) {
            cm.askYesNo("我要送你一件虽然不贵重，但日后一定！会需要的礼物，你会收下的吧？", 4, 9010010);
          } else {
            if (status === v++) {
              cm.forceCompleteQuest(65909);
              cm.sendNormalTalk("吼吼……为了让你的冒险岛水晶球能够给别人坐下休息，我把#b#e#i2632588:# #t2632588:##k#n送给你了！\r\n希望你能喜欢！", 5, 9010010, false, false);
              cm.gainItem(2632588, 1);
            } else if (status === v++) {
              cm.dispose();
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