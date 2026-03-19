var status = -1;
var selectionLog = [];
function action(f, E, e) {
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
      cm.npc_ChangeController(9400682, "oid=204922", -1397, -105, 63, -1735, -1359, 1, false, false);
      cm.npc_ChangeController(9400682, "oid=204923", -1080, 155, 4, -1729, 1189, 1, false, false);
      cm.npc_ChangeController(9400682, 'oid=204924', -687, 155, 30, -1729, 1189, 1, false, false);
      cm.npc_ChangeController(9400682, "oid=204925", -1559, 71, 65, -1735, -1359, 1, false, false);
      cm.npc_ChangeController(9400682, 'oid=204926', -1534, -216, 60, -1735, -1359, 1, false, false);
      cm.npc_ChangeController(9400682, 'oid=204927', -207, 155, 14, -1729, 1189, 1, false, false);
      cm.npc_ChangeController(9400682, "oid=204928", 266, -105, 49, -1729, 1189, 1, false, false);
      cm.npc_ChangeController(9400682, "oid=204929", 464, -105, 49, -1729, 1189, 1, false, false);
      cm.npc_ChangeController(9400682, "oid=204930", 649, -109, 38, -1729, 1189, 1, false, false);
      cm.npc_ChangeController(9400682, "oid=204931", 739, -253, 42, -1729, 1189, 1, false, false);
      cm.npc_ChangeController(9400682, 'oid=204932', 294, 73, 52, -1729, 1189, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNewEffects(12, [6000, -1060, 45, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b(… 红色的雪… 攻击的征兆…) ", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b(什么时候恶心的粉红触手也出现了…) ", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNewEffects(19, [0]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(1, 600);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b(可以用来当做绳子的…) ", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(17, [2000, 1000, 2000, -300, -240]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b(… 之前艾丽卡陷入地洞的时候，我用恶心的粉红触手救了她上来过…) ", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b(不知道那个行不行？) ", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b(要回去告诉大家攻击的征兆，没有时间了，收集10个之后快点回去吧！)", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.sendNewEffects(19, [0]);
                                  } else if (status === V++) {
                                    cm.warp(867202810, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.updateInfoQuest(64133, "dir1=1");
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;