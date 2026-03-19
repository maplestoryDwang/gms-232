function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      if (cm.getQuestStatus(65940) == 1) {
        cm.sendNormalTalk_Bottom("#face0##b（……这条路真的好久没走了。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
      } else {
        cm.dispose();
        cm.warp(875000103, 1, false);
      }
    } else {
      if (status === R++) {
        cm.sendNormalTalk_Bottom("#face0##b（我和兄弟们只是为了不落人后而爬上了山，掌门人却从我们的一举一动中看出了韧性和意志、决断力和侠义之心……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === R++) {
          cm.sendNormalTalk_Bottom("#face6##b（我也……能做到吗？）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === R++) {
            cm.askAcceptDecline_Bottom("#face0##b（……出发吧。) \r\n\r\n#r（※接受时，自动移动到任务地图。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 1);
          } else if (status === R++) {
            cm.dispose();
            cm.openNpc("墨玄_清理考试路");
          }
        }
      }
    }
  }
}