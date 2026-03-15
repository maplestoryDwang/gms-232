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
      if (cm.isQuestFinished(64932)) {
        cm.askMenu_Bottom("你好，#b#h0##k。\r\n刚结束上一件事情，但看来要做的事情还是很多啊。\r\n#b要我送你去哪里吗？#k\r\n\r\n#r#e#L0# #e附近森林整顿工作#l#k#n", 132, 9401072);
      } else {
        if (cm.getQuestStatus(64929) > 0) {
          cm.askMenu_Bottom("拯救杰斯，刻不容缓。\r\n快点前往#b阿特利埃附近森林#k吧。\r\n#r#e#L0# #e附近森林整顿工作#l#k#n", 132, 9401072);
        } else if (cm.getQuestStatus(64911) > 0) {
          cm.askMenu_Bottom("你好，#b#h0##k。\r\n我已经更新简历准备再就业了。不过貌似又发生了些麻烦事呢。\r\n#b要我送你去哪里吗？#k\r\n\r\n#r#e#L1# #e通过森林进入阿特利埃#l#k#n\r\n#r#e#L2# #e立即进入阿特利埃#l#k#n", 132, 9401072);
        } else {
          cm.sendOk_Bottom("你好，#b#h0##k。\r\n我已经更新简历准备再就业了。不过貌似又发生了些麻烦事呢。", 9401072);
          cm.dispose();
        }
      }
    } else {
      if (status === V++) {
        if (selectionLog[1] == 0) {
          if (cm.isQuestFinished(64932)) {
            cm.sendNormalTalk_Bottom("#b#h0##k，阿特利埃崩溃后，有很多#b兵器机器人#k在周边徘徊。\r\n把它们全部消灭后，应该会有帮助的。", 36, 9401072, 0, 1);
          } else {
            cm.sendNormalTalk_Bottom("要想拯救杰斯，需要大量#b#i4036644# #t4036644##k 和#b#i4036645# #t4036645##k。", 36, 9401072, 0, 1);
          }
        } else if (selectionLog[1] == 1) {
          cm.sendNormalTalk_Bottom("#b#h0##k，你想通过#b附近森林#k直接进入#b阿特利埃#k啊。\r\n虽然有点麻烦，但如果整顿周围的话，应该会有帮助的。", 36, 9401072, 0, 1);
        } else {
          cm.sendNormalTalk_Bottom("#b#h0##k，我立即送你到#b阿特利埃地下1层#k。\r\n那里比以前更危险了，所以你一定要小心。", 36, 9401072, 0, 1);
        }
      } else {
        if (status === V++) {
          if (selectionLog[1] == 0) {
            cm.warp(867144200, 0, false);
          } else if (selectionLog[1] == 1) {
            cm.warp(867143100, 0, false);
          } else {
            cm.warp(867143400, 0, false);
          }
          cm.dispose();
        }
      }
    }
  }
}