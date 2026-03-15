var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
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
      cm.sendNormalTalk_Bottom("#face2#这里……你难道不觉得这个洞穴特别奇怪吗？\r\n#g以这里为中心，周围的树都变成了灰烬#k啊。\r\n进去看看吧。", 37, 2074100, false, true);
    } else if (status === V++) {
      cm.updateInfoQuest(30450, 'm1=1');
      cm.forceStartQuest(30926, '1');
      cm.forceCompleteQuest(30926);
      cm.forceForfeitQuest(30926);
      cm.updateInfoQuest(30926, '');
      cm.dispose();
      cm.warp(224000090, 0, true);
    }
  }
}