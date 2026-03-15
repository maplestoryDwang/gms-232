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
      cm.sendNormalTalk_Bottom("#face0#所以，我打算周游冒险岛世界，搞清楚铃铛的事！", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#毕竟刚开始旅行，我还不清楚要去哪儿。", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#关于这个部分，我应该可以帮忙。", 36, 1032001, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#我会和冒险家代表、转职教官赫丽娜说好你的事的。", 36, 1032001, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#赫丽娜和我一样是转职教官，也有教导冒险家的经验。", 36, 1032001, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#在冒险的开始，恐怕再也没有比得上赫丽娜的帮手了。", 36, 1032001, true, true, 1);
              } else {
                if (status === v++) {
                  cm.askAcceptDecline_Bottom("#face0#怎么样？感兴趣吗？", 36, 1032001, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#好，那我这就送你去射手村弓箭手培训中心。", 36, 1032001, false, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#祝你们好运，不管是你，还是你的那个铃铛……", 36, 1032001, true, true, 1);
                    } else if (status === v++) {
                      cm.forceStartQuest(36246, '');
                      cm.dispose();
                      cm.warp(100000201, 0, false);
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
      cm.sendNormalTalk_Bottom("#face0#你好，你是赫丽娜吗？", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("啊，你就是啦啦吗？", 36, 3003658, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("我听汉斯说，你刚开始在冒险岛世界冒险。", 36, 3003658, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(36246);
          cm.dispose();
        }
      }
    }
  }
}