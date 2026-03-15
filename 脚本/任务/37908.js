var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1#这个嘛……请求救援！是请求救援的意思。\r\n（休麦，快肯定我的说法！）", 36, 3004851, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#哈哈，多亏丑丑的#h0#帮忙消灭了许多怪物，\r\n现在重新查看声呐吧。", 36, 3004850, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#额……", 36, 3004851, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#依然搜不到信号。", 36, 3004850, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#发出信号干扰声波的怪物好像就在附近。", 36, 3004850, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#沃莉，我们这次来学习用打光表达的信号吧。\r\n在昏暗的地方，这比手势信号更实用。", 36, 3004850, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1#这回真的别恶作剧了……", 36, 3004851, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.askYesNo_Bottom("#face0#拜托了，#h0#。\r\n这回也是，消灭#b100只#k左右，就能搜到信号了。", 36, 3004850, 1);
                  } else if (status === v++) {
                    cm.forceStartQuest(37908, '');
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else if (status == v++) {
    cm.forceCompleteQuest();
    cm.dispose();
  }
}