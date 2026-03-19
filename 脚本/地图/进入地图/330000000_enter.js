var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.isQuestActive(32779)) {
    action1(f, E, e);
  } else {
    if (cm.isQuestFinished(33511) && !cm.isQuestFinished(33515)) {
      action2(f, E, e);
    } else if (cm.isQuestFinished(33517) && !cm.isQuestFinished(33518) && cm.getNumberFromQuestInfo(33533, "enter") == 0) {
      action3(f, E, e);
    } else {
      action0(f, E, e);
    }
  }
}
function action0(f, E, e) {
  cm.cancelItem(2210132);
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
      if (cm.isQuestFinished(32721) && !cm.isQuestFinished(32722)) {
        cm.npc_ChangeController(1530220, 'oid=28251', -449, 1557, 2, -449, -449, 1, false, false);
        cm.npc_ChangeController(1530171, "oid=28252", 738, 669, 74, 688, 788, 1, false, false);
        cm.npc_ChangeController(1530064, "oid=28253", 362, 425, 76, 312, 412, 5, true, false);
        cm.npc_ChangeController(1530077, "oid=28254", 1260, 1857, 80, 1260, 1260, 5, true, false);
        cm.npc_ChangeController(1530116, "oid=28255", 361, 659, 72, 311, 411, 5, true, false);
        cm.npc_ChangeController(1530124, "oid=28256", 451, 659, 73, 401, 501, 5, true, false);
        cm.npc_ChangeController(1530131, "oid=28257", 0, 723, 71, -50, 50, 4, true, false);
        cm.npc_ChangeController(1530401, "oid=28258", 180, 722, 70, 130, 230, 5, true, false);
        cm.npc_ChangeController(1530191, "oid=28259", -740, 540, 75, -790, -690, 0, false, false);
        cm.npc_ChangeController(1530721, 'oid=28260', 676, 680, 77, 626, 726, 1, false, false);
        cm.npc_ChangeController(1530571, "oid=28261", -358, 932, 7, -408, -308, 1, false, false);
        cm.npc_ChangeController(1530659, 'oid=28262', 1067, 921, 78, 1017, 1117, 1, false, false);
        cm.npc_ChangeController(1530660, "oid=28263", 771, 1460, 79, 721, 821, 1, false, false);
      } else if (cm.isQuestActive(32741) || cm.isQuestActive(32742) || cm.isQuestActive(32743) || cm.isQuestActive(32744) || cm.isQuestActive(32745)) {
        cm.onHireTutorById(1, 80001556, 330000000);
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function action1(f, E, e) {
  cm.cancelItem(2210132);
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
      cm.npc_ChangeController(1530220, "oid=28251", -449, 1557, 2, -449, -449, 1, false, false);
      cm.npc_ChangeController(1530171, "oid=28252", 738, 669, 74, 688, 788, 1, false, false);
      cm.npc_ChangeController(1530064, "oid=28253", 362, 425, 76, 312, 412, 5, true, false);
      cm.npc_ChangeController(1530077, "oid=28254", 1260, 1857, 80, 1260, 1260, 5, true, false);
      cm.npc_ChangeController(1530116, "oid=28255", 361, 659, 72, 311, 411, 5, true, false);
      cm.npc_ChangeController(1530124, "oid=28256", 451, 659, 73, 401, 501, 5, true, false);
      cm.npc_ChangeController(1530131, "oid=28257", 0, 723, 71, -50, 50, 4, true, false);
      cm.npc_ChangeController(1530401, "oid=28258", 180, 722, 70, 130, 230, 5, true, false);
      cm.npc_ChangeController(1530191, "oid=28259", -740, 540, 75, -790, -690, 0, false, false);
      cm.npc_ChangeController(1530721, "oid=28260", 676, 680, 77, 626, 726, 1, false, false);
      cm.npc_ChangeController(1530571, "oid=28261", -358, 932, 7, -408, -308, 1, false, false);
      cm.npc_ChangeController(1530659, 'oid=28262', 1067, 921, 78, 1017, 1117, 1, false, false);
      cm.npc_ChangeController(1530660, "oid=28263", 771, 1460, 79, 721, 821, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 200, 0, 712);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1612);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我心情不太好，想一个人走走。今天不是没有别的安排吗？", 37, 1530130, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("……那么，你为什么还要叫我来？", 37, 1530400, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("要是没人来接奥尔卡的话，让别人看到多掉价啊？现在你可以回家了，经纪人。", 37, 1530130, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2500, 1530401, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你还不清楚奥尔卡的性格？让我再说第二遍？", 37, 1530130, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon("……OK. ", 1, 0, 0, 2500, 1530401, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这个世界的经纪人真不是个好干的职业……在奥尔卡消失前赶紧拍照吧。", 57, 0, false, true);
                        } else if (status === V++) {
                          cm.getTopMsgFont("打开智能手机就可以拍照了. ", 3, 20, 20, 0);
                          cm.setInGameDirectionMode(false, true, false);
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
function action2(f, E, e) {
  cm.cancelItem(2210132);
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(1530220, 'oid=28251', -449, 1557, 2, -449, -449, 1, false, false);
    cm.npc_ChangeController(1530171, "oid=28252", 738, 669, 74, 688, 788, 1, false, false);
    cm.npc_ChangeController(1530064, "oid=28253", 362, 425, 76, 312, 412, 5, true, false);
    cm.npc_ChangeController(1530077, "oid=28254", 1260, 1857, 80, 1260, 1260, 5, true, false);
    cm.npc_ChangeController(1530116, "oid=28255", 361, 659, 72, 311, 411, 5, true, false);
    cm.npc_ChangeController(1530124, "oid=28256", 451, 659, 73, 401, 501, 5, true, false);
    cm.npc_ChangeController(1530131, "oid=28257", 0, 723, 71, -50, 50, 4, true, false);
    cm.npc_ChangeController(1530401, 'oid=28258', 180, 722, 70, 130, 230, 5, true, false);
    cm.npc_ChangeController(1530191, "oid=28259", -740, 540, 75, -790, -690, 0, false, false);
    cm.npc_ChangeController(1530721, "oid=28260", 676, 680, 77, 626, 726, 1, false, false);
    cm.npc_ChangeController(1530571, "oid=28261", -358, 932, 7, -408, -308, 1, false, false);
    cm.npc_ChangeController(1530659, "oid=28262", 1067, 921, 78, 1017, 1117, 1, false, false);
    cm.npc_ChangeController(1530660, 'oid=28263', 771, 1460, 79, 721, 821, 1, false, false);
    cm.setPartner(1, 1530714, 80001728, 0);
    cm.setPartner(1, 1530609, 80001729, 0);
    cm.setPartner(1, 1530610, 80001730, 0);
    cm.setPartner(1, 1530607, 80001731, 0);
    cm.dispose();
  }
}
function action3(f, E, e) {
  cm.cancelItem(2210132);
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
      cm.npc_ChangeController(1530220, "oid=28251", -449, 1557, 2, -449, -449, 1, false, false);
      cm.npc_ChangeController(1530171, "oid=28252", 738, 669, 74, 688, 788, 1, false, false);
      cm.npc_ChangeController(1530064, 'oid=28253', 362, 425, 76, 312, 412, 5, true, false);
      cm.npc_ChangeController(1530077, "oid=28254", 1260, 1857, 80, 1260, 1260, 5, true, false);
      cm.npc_ChangeController(1530116, "oid=28255", 361, 659, 72, 311, 411, 5, true, false);
      cm.npc_ChangeController(1530124, "oid=28256", 451, 659, 73, 401, 501, 5, true, false);
      cm.npc_ChangeController(1530131, "oid=28257", 0, 723, 71, -50, 50, 4, true, false);
      cm.npc_ChangeController(1530401, 'oid=28258', 180, 722, 70, 130, 230, 5, true, false);
      cm.npc_ChangeController(1530191, "oid=28259", -740, 540, 75, -790, -690, 0, false, false);
      cm.npc_ChangeController(1530721, "oid=28260", 676, 680, 77, 626, 726, 1, false, false);
      cm.npc_ChangeController(1530571, 'oid=28261', -358, 932, 7, -408, -308, 1, false, false);
      cm.npc_ChangeController(1530659, "oid=28262", 1067, 921, 78, 1017, 1117, 1, false, false);
      cm.npc_ChangeController(1530660, "oid=28263", 771, 1460, 79, 721, 821, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_Text(["#fn黑体##fs26#第二天"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -60, 350);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.addPopupSay(1530030, 1500, "哦哦~\r\n庆典终于要开始了吗？", '', 0);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                  } else if (status === V++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.updateInfoQuest(33533, "enter=1");
                    cm.dispose();
                    cm.warp(330000000, 0);
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