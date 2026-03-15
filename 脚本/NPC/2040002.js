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
      if (!cm.isQuestActive(3230)) {
        cm.sendOk("海贼王我当定了！");
        cm.dispose();
        return;
      } else {
        cm.askYesNo("嗯……听旁边的#b#p2040001##k说，你想帮我解决烦恼？嗯……好吧。这里面藏着非常危险的家伙。因为那个家伙，我现在非常为难……你能帮我找到那个家伙吗？", 0, 2040002);
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("哦～真的非常感谢。你真是位亲切而善良的人。看来#p2040001#看人的眼光还不错。我来告诉你需要帮我干什么吧。", 0, 2040002, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("不久前通过时间裂缝入侵这里的其他世界的怪物，偷走了玩具城时间塔的钟摆，并在这扇门后面的房间里变成了娃娃之家。但是它们看上去全都一模一样，没办法找出那个家伙。", 0, 2040002, true, true);
        } else {
          if (status === V++) {
            cm.askYesNo("因为找不到那个家伙，现在我们非常头疼。上面的人命令我们尽快找到他……你能帮我找到那个家伙吗？要找的话，必须进入房间。", 0, 2040002);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("很好！在我送你去的房间里，有好几个娃娃之家。请你找出其中一个稍微有点不同的娃娃之家，然后把它打碎。如果正确的话，在里面应该能找到#b#t4031145##k。如果错了，就会强制移动到外面。这一点一定要注意。", 0, 2040002, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("里面还有怪物，受到变成娃娃之家的异次元怪物的力量的影响，它们变得非常强，几乎不可能打倒。在限定时间内找到#b#t4031145##k，交给里面的#b#p2040028##k，就可以完成任务。那就拜托你了。", 0, 2040002, true, true);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(922000010, 0, false);
                cm.resetMap(cm.getMapId());
                cm.scheduleWarpTask(600, 221023200);
              }
            }
          }
        }
      }
    }
  }
}