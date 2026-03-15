var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
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
      var w = "你想离开这个地方吗？想去哪里？\r\n\r\n";
      if (cm.isQuestActive(32160) || cm.isQuestFinished(32160)) {
        w += "#L1##b移动到#e主题副本：列娜海峡#n。（费用：0金币)\r\n#l";
      }
      if (cm.isQuestActive(38047)) {
        cm.dispose();
        cm.warp(914050000, 0, false);
        return;
      }
      w += "#L2##b移动到金银岛。（费用：800金币)#l";
      cm.askYesNo(w);
    } else {
      if (status === V++) {
        if (selectionLog[1] == 1) {
          cm.askYesNo("哦哦，你想成为穿越冰川的航海家啊？好吧，那就免费载你去列海峡吧！快上来。");
        } else if (cm.getMeso() >= 800) {
          cm.gainMeso(-800);
          cm.askYesNo("我们马上就要开船了。上来吧！");
        } else {
          cm.sendOk("船费是800金币，有足够的金币在来找我吧。");
          cm.dispose();
        }
      } else if (status === V++) {
        cm.dispose();
        if (selectionLog[1] == 1) {
          cm.warp(141000100, 0);
        } else {
          cm.warp(200090070, 0, false);
          cm.scheduleWarpTask(30, 104000000, 0);
        }
      } else {
        cm.dispose();
      }
    }
  }
}