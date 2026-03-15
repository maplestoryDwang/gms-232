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
      if (cm.isQuestFinished(39801)) {
        cm.askMenu("你想去哪里？\r\n#L2# #r旧前哨基地#l\r\n#L3# #r新前哨基地#l\r\n#L4# #b塞尔提乌#l", 3004220);
      } else {
        if (cm.getQuestStatus(39701) > 0) {
          cm.askMenu("你想去哪里？\r\n#L2# #r旧前哨基地#l\r\n#L3# #r新前哨基地#l", 3004220);
        } else if (cm.getQuestStatus(35601) > 0) {
          cm.askMenu("你想去哪里？\r\n#L1# #r前哨基地#l", 3004220);
        } else {
          cm.sendOk("有什么事吗？");
          cm.dispose();
        }
      }
    } else {
      if (status === V++) {
        if (selectionLog[1] == 1) {
          cm.askYesNo("确定要去#r前哨基地#k吗？", 3004220);
        } else {
          if (selectionLog[1] == 2) {
            cm.askYesNo("确定要去#r旧前哨基地#k吗？", 3004220);
          } else if (selectionLog[1] == 3) {
            cm.askYesNo("确定要去#r新前哨基地#k吗？", 3004220);
          } else {
            cm.askYesNo("确定要去#b塞尔提乌#k吗？", 3004220);
          }
        }
      } else {
        if (selectionLog[1] == 1 || selectionLog[1] == 2) {
          cm.warp(450009050, 11);
        } else if (selectionLog[1] == 3) {
          cm.warp(993120000, 6);
        } else {
          cm.warp(410000500, 0);
        }
        cm.dispose();
      }
    }
  }
}