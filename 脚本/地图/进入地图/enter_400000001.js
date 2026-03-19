var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestActive(39633)) {
    action35963(1, 0, 0);
  } else {
    action未修复(1, 0, 0);
  }
}
function action未修复(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.dispose();
  }
}
function action35963(f, E, e) {
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
      cm.sendNormalTalk_Bottom("#face0#精灵弓箭手赫丽娜，是为来到冒险岛世界的冒险家提供指引的向导。\r\n你到达那边后，最好先去见见她。", 36, 3000001, false, true, 1);
    } else {
      if (status === V++) {
        cm.askAcceptDecline_Bottom("#face0#那么，你现在可以进入次元传送口了。\r\n记得到达后直接去找弓箭手培训中心的赫丽娜。\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3000001, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#离开之前，我有件事想打听一下。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#之前还有谁穿过了次元传送口？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#这个嘛……等时机成熟，你们自然会相遇。", 36, 3000001, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#所有相遇都是有时机的……", 36, 3000001, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#谢谢你允许我穿过传送口。\r\n告辞。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(虽然有点波折，所幸终于可以前往其他次元。\r\n希望在那里能找到可以唤起我记忆的线索……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(993162052, 0, false);
                  } else {
                    cm.dispose();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}