var status = -1;
var selectionLog = [];
function start(h, Y, m) {
  if (status == 0 && h == 0) {
    cm.dispose();
    return;
  }
  if (h == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = m;
  var B = -1;
  if (status <= B++) {
    cm.dispose();
  } else if (status == B++) {
    if (cm.getMeso() >= 2000) {
      cm.gainMeso(-2000);
      cm.forceStartQuest();
    } else {
      cm.sendOk("去去去，没钱搞什么乱啊。");
    }
    cm.dispose();
  }
}
function stage0(h, Y, m) {
  if (status == 0 && h == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = m;
  var B = -1;
  if (status <= B++) {
    cm.dispose();
  } else {
    if (status == B++) {
      cm.askYesNo("");
    } else if (status == B++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(h, Y, m) {
  if (status == 0 && h == 0) {
    cm.dispose();
    return;
  }
  if (h == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = m;
  var B = -1;
  if (status <= B++) {
    cm.dispose();
  } else if (status == B++) {
    cm.dispose();
    cm.gainMeso(-2000);
    cm.gainItem(4031582, 1);
    cm.forceCompleteQuest();
  }
}