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
      cm.sendNormalTalk("什么！竟然未经允许就踏入我们的领地，不可饶恕！", 4, 2159454, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("不可饶恕！", 4, 2159455, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("不可！不可！", 4, 2159456, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("来，弟兄们！让我们狠狠教训一顿那个入侵者！", 4, 2159454, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('狠狠教训！', 4, 2159455, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("教训！教训！", 4, 2159456, true, true);
              } else {
                if (status === V++) {
                  cm.askAcceptDecline("啊啊，挺累的有必要和那些企鹅交手吗？不过要想见到战神的话，似乎还必须跟它们交手。\r\n\r\n#r(接收后将移动到任务地图，如果拒绝将移动到企鹅港口。)", 2, 2159454);
                } else if (status === V++) {
                  cm.dispose();
                  cm.updateInfoQuest(38048, '');
                  cm.forceStartQuest(38048, '');
                  cm.warp(914050002, 0, false);
                  cm.scheduleWarpTask(35, 914050007);
                }
              }
            }
          }
        }
      }
    }
  }
}