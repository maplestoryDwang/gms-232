var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(33512)) {
    action0(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action0(f, E, e) {
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
      cm.npc_ChangeController(1530220, "oid=30353", -449, 1557, 2, -449, -449, 1, false, false);
      cm.npc_ChangeController(1530171, 'oid=30354', 738, 669, 74, 688, 788, 1, false, false);
      cm.npc_ChangeController(1530064, 'oid=30355', 362, 425, 76, 312, 412, 1, true, false);
      cm.npc_ChangeController(1530077, 'oid=30356', 1260, 1857, 80, 1260, 1260, 1, true, false);
      cm.npc_ChangeController(1530116, "oid=30357", 361, 659, 72, 311, 411, 1, true, false);
      cm.npc_ChangeController(1530124, "oid=30358", 451, 659, 73, 401, 501, 1, true, false);
      cm.npc_ChangeController(1530131, 'oid=30359', 0, 723, 71, -50, 50, 0, true, false);
      cm.npc_ChangeController(1530401, 'oid=30360', 180, 722, 70, 130, 230, 1, true, false);
      cm.npc_ChangeController(1530191, "oid=30361", -740, 540, 75, -790, -690, 0, false, false);
      cm.npc_ChangeController(1530721, "oid=30362", 676, 680, 77, 626, 726, 1, false, false);
      cm.npc_ChangeController(1530571, 'oid=30363', -358, 932, 7, -408, -308, 1, false, false);
      cm.npc_ChangeController(1530659, "oid=30364", 1067, 921, 78, 1017, 1117, 1, false, false);
      cm.npc_ChangeController(1530660, "oid=30365", 771, 1460, 79, 721, 821, 1, false, false);
      cm.sendNormalTalk_Bottom("怎么办……王都桑大叔生气了……", 37, 1530607, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("那应该是机械故障吧？", 37, 1530090, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("没，没关系，以后等他的气消了，我会去正式道歉的。", 37, 1530604, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("那兼职就这么算了吧……", 37, 1530110, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('那我们现在去哪里呢？', 37, 1530120, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('嘤~', 37, 1530607, true, true);
              } else if (status === V++) {
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.forceCompleteQuest(33512);
                cm.dispose();
                cm.warp(330000000, 7);
              }
            }
          }
        }
      }
    }
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(1530220, 'oid=30353', -449, 1557, 2, -449, -449, 1, false, false);
      cm.npc_ChangeController(1530171, "oid=30354", 738, 669, 74, 688, 788, 1, false, false);
      cm.npc_ChangeController(1530064, "oid=30355", 362, 425, 76, 312, 412, 5, true, false);
      cm.npc_ChangeController(1530077, 'oid=30356', 1260, 1857, 80, 1260, 1260, 5, true, false);
      cm.npc_ChangeController(1530116, 'oid=30357', 361, 659, 72, 311, 411, 5, true, false);
      cm.npc_ChangeController(1530124, 'oid=30358', 451, 659, 73, 401, 501, 5, true, false);
      cm.npc_ChangeController(1530131, 'oid=30359', 0, 723, 71, -50, 50, 4, true, false);
      cm.npc_ChangeController(1530401, "oid=30360", 180, 722, 70, 130, 230, 5, true, false);
      cm.npc_ChangeController(1530191, 'oid=30361', -740, 540, 75, -790, -690, 0, false, false);
      cm.npc_ChangeController(1530721, "oid=30362", 676, 680, 77, 626, 726, 1, false, false);
      cm.npc_ChangeController(1530571, "oid=30363", -358, 932, 7, -408, -308, 1, false, false);
      cm.npc_ChangeController(1530659, 'oid=30364', 1067, 921, 78, 1017, 1117, 1, false, false);
      cm.npc_ChangeController(1530660, 'oid=30365', 771, 1460, 79, 721, 821, 1, false, false);
      cm.forceStartQuest(33515, '');
      cm.sendNormalTalk_Bottom("#face0#没有，没有。", 37, 1530110, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("已经都找过了啊。", 37, 1530090, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#工作的岗位这么少，怪不得青年的失业率这么高~", 37, 1530100, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("咻……现在怎么办？", 37, 1530120, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我的意见是！先去吃饭，然后边吃边想！", 37, 1530110, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("赞成！", 37, 1530100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("吃什么呢？", 37, 1530090, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("老奶奶家的炒年糕！", 37, 1530110, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("那……好！我来请！", 37, 1530120, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('GOGOGO！', 37, 1530100, true, true);
                      } else if (status === V++) {
                        cm.dispose();
                        cm.warp(330000000, 2);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;