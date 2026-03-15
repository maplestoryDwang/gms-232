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
  } else if (status == v++) {
    cm.forceStartQuest();
    cm.dispose();
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
      cm.askYesNo("你带来10个启动外貌变更系统所需的#e#t4033451##n了吗? ", 0, 9075201);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("变形成和看门怪物相同的外貌。请在变形成看门人的状态下，通过看门怪物，接近控制装置。", 0, 9075201, false, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("如果变形状态解除，只要放弃该程序，然后重新开始即可。", 0, 9075201, true, true);
        } else if (status === v++) {
          cm.useItem(2210091);
          cm.forceCompleteQuest(1821);
          cm.forceStartQuest(1822, '');
          cm.playerMessage(5, "外貌已变成看门怪物的形态。");
          cm.gainItem(4033451, -10);
          cm.dispose();
        }
      }
    }
  }
}