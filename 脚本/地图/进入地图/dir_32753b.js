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
      cm.npc_ChangeController(1530120, "oid=21282465", 650, 128, 11, 600, 700, 1, true, false);
      cm.npc_SetSpecialAction("oid=21282465", "summon", 0, 0);
      cm.npc_ChangeController(1530230, "oid=21282466", 580, 128, 12, 530, 630, 0, true, false);
      cm.npc_SetSpecialAction("oid=21282466", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=21282466", 'die', -1, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 100, 609, 128);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2501);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("自古以来最不能得罪的就是脾气暴躁的女人和欲壑难填的女人。", 37, 1530120, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH1_04/5", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("可你就在刚才让一个欲壑难填的女人脾气暴躁了。", 37, 1530120, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH1_04/6", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……！", 37, 1530230, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH1_04/4", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("以后你可要小心了。", 37, 1530120, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH1_04/7", 100);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=21282465", -1, 800, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=21282465");
                      cm.npc_LeaveField("oid=21282465");
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我第一次抱有这种感情……这是一种什么样的感情呢？", 37, 1530230, false, true);
                        cm.effect_Voice("Voice2.img/Friends/CH1_05/1", 100);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("脾气暴躁的女人和欲壑难填的女人是最不能得罪的~以后你可要小心了，哈哈~", 37, 1530120, false, true);
                            cm.effect_Voice("Voice2.img/Friends/CH1_05/2", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("妈妈……我已经爱上别的女人了。", 37, 1530230, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH1_05/3", 100);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(330002118, 0);
                              cm.setInGameDirectionMode(false, true, false);
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