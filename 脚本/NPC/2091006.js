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
      cm.askMenu("#e<公告>#n\r\n有意挑战武陵道场的勇敢年轻人们请到武陵道场来。-武公-\r\n\r\n#b#L0#尝试挑战武陵道场。#l\r\n#L1#再仔细阅读公告。#l", 0, 2091006);
    } else {
      if (status === V++) {
        if (U == 1) {
          cm.sendNormalTalk("#e<公告：去挑战吧！>#n\r\n我是武陵道场的主人武公，很久以前为了成为仙人，我便开始在武陵进行修炼，现在我的内功已经达到了一定境界，武陵道场的主人是个懦弱无能的人，所以从今天起，武陵道场就由我来接手。最强大的人便有资格获得武陵道场。\r\n如果有人想要接受我的教诲，欢迎随时挑战！就算是有人想要向我挑战也无妨，我会让你彻底地感受到自己的懦弱的。", 0, 2091006, false, false);
          cm.dispose();
        } else if (U == 0) {
          cm.askYesNo("#b(刚一碰触公告，就有一股神秘的气息开始包裹住了我。)#k\r\n\r\n要就此前往武陵道场吗？", 0, 2091006);
        }
      } else if (status === V++) {
        cm.setNumberForQuestInfo(5050505050, "map", cm.getMapId());
        cm.warp(925020000, 0, false);
        cm.dispose();
      }
    }
  }
}