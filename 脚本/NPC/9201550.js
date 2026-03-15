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
      cm.askYesNo_Bottom("是本古老的旧书，有些书页都缺失了。要阅读吗？", 56, 0);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("'“幻日……带到了冒险岛世界。\r\n绯红之心，在宗师们的协助下……这座城堡……安全……”不行，看不懂。", 57, 9201550, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("“这里的……带来了贡品……说他们是从克拉奇安而来……绯红之心决定与他们分享幻日的力量……报答了他们。”", 57, 9201550, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("“爵士……被人追杀，来到这里……克拉奇安人……被人看见……使用黑魔法……”", 57, 9201550, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("啊啊，字都糊了，完全看不清。", 57, 9201550, true, true);
            } else if (status === V++) {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}