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
      cm.sendNormalTalk_Bottom("现在还无法移动。", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#下命令吧。这仗该怎么打。", 36, 2570104, false, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom('……。', 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("哈丁、魁格负责后方。亚殷和瑞恩从侧面支援。", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#前方是？", 36, 2570104, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("由我负责吧。我一个人就能搞定。", 56, 0, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("(向#b右边#k移动，开始战斗。)", 56, 0, true, true, 1);
                } else if (status === v++) {
                  cm.forceStartQuest(37812, '');
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
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face2#不如就此……休息一下吧。", 36, 2570101, false, true, 1);
    } else if (status === v++) {
      cm.dispose();
      cm.warp(308090019, 0, false);
    }
  }
}