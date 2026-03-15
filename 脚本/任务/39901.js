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
      cm.sendNormalTalk("#h0#，你现在能立刻来一趟#r塞尔提乌#k吗？", 4, 3004431, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk('有什么事吗？', 2, 3004431, true, true);
      } else {
        if (status === v++) {
          cm.askYesNo("事关重大，具体情况等见了面再说。\r\n\r\n#r（※ 接受后，立即前往塞尔提乌。） \r\n（※ 建议开启背景音乐。）", 4, 3004431);
        } else if (status === v++) {
          cm.forceStartQuest(39901, '');
          cm.updateInfoQuest(100295, "rMap=" + cm.getMapId());
          cm.dispose();
          cm.warp(993151000, 0, false);
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
  } else if (status == v++) {
    cm.warp(993151000, 0, false);
    cm.dispose();
  }
}