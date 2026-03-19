var status = -1;
var selectionLog = [];
var quit = 0;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.sendNormalTalk("果然不出我所料，前面到处都是障碍物。估计这一路都不会太平，想想就让人兴奋，哈哈！", 5, 2210002, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("对了。到那边的岔路口去，也许就能绕过那些障碍物。如果你需要，我可以帮你把方向定到那边！", 5, 2210002, true, true);
      } else {
        if (status === V++) {
          cm.askYesNo("怎么样，朋友？你想一直往前走吗？如果你想和我卡布一起享受骑乘的刺激，就选这个！", 5, 2210002);
        } else {
          if (status === V++) {
            quit = f == 0;
            if (quit) {
              cm.sendNormalTalk("没关系，等你准备好了再来吧！", 5, 2210002, false, true);
            } else {
              cm.sendNormalTalk("哈哈！我早就猜到了！你跟我一样，都是好奇心很强的人。好的，抓好了，我们马上就要越过障碍物了！", 5, 2210002, false, true);
            }
          } else if (status === V++) {
            cm.dispose();
            if (quit) {
              cm.warp(240090000, 0, false);
              cm.setInGameDirectionMode(false, false, false);
            } else {
              cm.warp(924030100, 0, false);
            }
          }
        }
      }
    }
  }
}