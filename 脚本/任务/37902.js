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
      cm.sendNormalTalk_Bottom("#face2#你来了，#h0#。", 36, 1540451, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('什么事？', 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2##h0#，我请你过来，是因为在前往#r黑太阳#k之前，\r\n需要紧急开展一个#b特殊作战#k。", 36, 1540451, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("特殊作战？", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#沃莉，你能说明下当时的情况吗？", 36, 1540451, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face3#不久前，#b埃斯佩拉作战#k那次。", 36, 3003500, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face3#在打捞沉在水底的塔纳，不……\r\n是打捞#r光明超越者艾欧娜#k的时候。", 36, 3003500, true, true, 1);
                } else if (status === v++) {
                  cm.dispose();
                  cm.warp(993185002, 0, false);
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
      cm.sendNormalTalk_Bottom("#face2#你来了，#h0#。", 36, 1540451, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("什么事？", 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2##h0#，我请你过来，是因为在前往#r黑太阳#k之前，\r\n需要紧急开展一个#b特殊作战#k。", 36, 1540451, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("特殊作战？", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#沃莉，你能说明下当时的情况吗？", 36, 1540451, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face3#不久前，#b埃斯佩拉作战#k那次。", 36, 3003500, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face3#在打捞沉在水底的塔纳，不……\r\n是打捞#r光明超越者艾欧娜#k的时候。", 36, 3003500, true, true, 1);
                } else if (status === v++) {
                  cm.dispose();
                  cm.warp(993185002, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}