var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(32810)) {
    action1(f, E, e);
  } else {
    if (cm.isQuestActive(33050) && cm.getNumberFromQuestInfo(33050, "photo") == 0) {
      cm.openCamera(1, 0, [1530201], [], 0, -1, -1, 1);
    }
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.sendNormalTalk_Bottom("你们这次又有什么计划？因为我实在是太好奇了，所以才跟过来的。", 37, 1530030, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom("什么？搜集粉笔？我也很想看看这个世界的粉笔长什么样子！\r\n#b（在尘土地带获得粉笔吧。）#k", 37, 1530030, true, true);
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;