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
      cm.sendNormalTalk("这里是禁止出入的地区。请回去。", 0, 9000075, false, true);
    } else {
      if (status === V++) {
        if (cm.getQuestStatus(3870) > 0) {
          cm.sendNormalTalk("听说白毛公猴消失在这里。我有件东西必须要找回来。请让我进去。", 2, 9000075, true, true);
        } else {
          cm.sendOkSNoESC(4, 9000075, 0, 0, "好像没什么好的理由。先去其他地方看看吧。#b(需要接受他人的请求任务才能进入。)", '', 257, 0, 2, 0, 0, 0);
          cm.dispose();
        }
      } else {
        if (status === V++) {
          cm.sendNormalTalk("这个地区非常危险……不过……看你的样子，应该没问题。我这次就睁一只眼闭一只眼，你进去找到东西后赶紧出来。如果过了5分钟你还没回来，我就进去找你。", 0, 9000075, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("谢谢。我会尽快回来。", 2, 9000075, true, true);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(925120000, 3);
          }
        }
      }
    }
  }
}