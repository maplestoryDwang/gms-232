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
      cm.sendNormalTalk_Bottom("#face0#昨天的战斗之后，士兵们的武器受损严重。\r\n有些要修理，有些要重铸，可现在我们没有足够的铁。", 36, 3004435, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#所以战斗结束后，就来收集些剩下的材料。", 36, 3004435, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#但是这边的#r怪物海鸥#k也快成灾了。\r\n明明冒险岛世界的海鸥很可爱来着，这里的海鸥为什么都凶巴巴的？", 36, 3004435, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#噶啊！！！", 36, 3004462, true, true);
          } else {
            if (status === v++) {
              cm.askYesNo_Bottom("#face0#哎呀，我的耳朵。\r\n怎么样，你能帮忙吗？", 36, 3004435);
            } else if (status === v++) {
              cm.forceStartQuest(39905, '');
              cm.OnStartNavigation(410000580, 0, "west00", 39905);
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
      cm.sendNormalTalk_Bottom("#face0#还好有你，事情才能顺利解决。", 36, 3004435, false, true);
    } else if (status === v++) {
      cm.forceCompleteQuest(39905);
      cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
      cm.dispose();
    }
  }
}