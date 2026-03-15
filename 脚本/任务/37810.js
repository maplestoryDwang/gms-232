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
      cm.sendNormalTalk_Bottom("#face0#但现在还不能轻易断定", 36, 2570102, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#有没有可能……我们并没有逆转时间，\r\n而是被困在了形似如此的幻象之中？", 36, 2570102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#那我们该怎么应对？", 36, 2570102, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 2570103, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#要是想得那么深，最终就什么都不相信了。\r\n首先第一个就要怀疑身边的同伴们是否是真实的。", 36, 2570101, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#难以相信的是，靠瑞恩的射击实力就足够了。", 36, 2570105, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face4#你想方设法偏要跟我过不去是吧。", 36, 2570103, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("正如哈丁说的，\r\n如果不相信同伴，我们是没法打赢这场仗的。", 56, 0, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("所以，先暂且保留亚殷的假设吧。", 56, 0, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#那接下来要做的……只有重新再战。", 36, 2570103, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("嗯，任务和之前相同。\r\n即不断消灭恶魔，直到发生对情况有意义的变化为止。", 56, 0, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("你们谁有空就仔细观察那#r日晕#k，有变化就告诉我。", 56, 0, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#接下来……拼的就是耐心了。", 36, 2570101, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("(向#b右边#k移动，继续战斗。)", 56, 0, true, true, 1);
                              } else if (status === v++) {
                                cm.forceStartQuest(37810, '');
                                cm.npc_LeaveField('oid=23618');
                                cm.npc_LeaveField("oid=23619");
                                cm.npc_LeaveField("oid=23620");
                                cm.npc_LeaveField('oid=23621');
                                cm.npc_LeaveField("oid=23622");
                                cm.npc_LeaveField("oid=23623");
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
      cm.sendNormalTalk_Bottom("#face2#我已经……到极限了……", 36, 2570102, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("全都停下。暂时休息一会儿。", 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("我和哈丁、魁格负责警戒周围。", 56, 0, true, true, 1);
        } else if (status === v++) {
          cm.dispose();
          cm.warp(308090014, 0, false);
        }
      }
    }
  }
}