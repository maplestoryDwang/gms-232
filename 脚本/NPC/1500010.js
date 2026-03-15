var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, W, U) {
  status++;
  var V = cm.getMapId();
  var w = -1;
  if (cm.getQuestStatus(32100) == 0 && cm.getQuestStatus(32101) == 0 && cm.getQuestStatus(32156) == 0) {
    cm.sendOkS("这里好像通往不欢迎人类的妖精们居住的地方。没有得到许可的话，还是不要乱闯了。");
    cm.dispose();
    return;
  }
  if (status <= w++) {
    cm.dispose();
  } else {
    if (status === w++) {
      if (V == 101030000) {
        cm.askYesNo("你要进入#e#b[主题副本:妖精学院艾利涅]#k#n吗，喵？", 1040002);
      } else if (V == 101070000 || V == 101070001 || V == 101070010) {
        cm.askYesNo("你要回到魔法密林：巨大的树吗，喵？", 1040002);
      } else {
        cm.dispose();
      }
    } else {
      if (status === w++) {
        if (V == 101030000) {
          if (!cm.isQuestActive(32156) && !cm.isQuestFinished(32101)) {
            if (!cm.isQuestFinished(32101)) {
              cm.forceStartQuest(32101, '');
            }
          }
          cm.warp(101074000, 0);
        } else if (V == 101070000 || V == 101070001 || V == 101070010) {
          cm.warp(101074001, 0);
        }
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}