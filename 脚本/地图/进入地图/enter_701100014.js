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
      cm.npc_ChangeController(9310561, "oid=96107", 1135, -5, 106, 1085, 1185, 1, false, false);
      cm.npc_ChangeController(9310540, "oid=41609712", -962, -8, 16, -1012, -912, 1, false, false);
      cm.npc_SetSpecialAction("oid=41609712", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -900, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("嗯？冯克庵不在啊。暂时走开了吗……我要不等他一会儿吧？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_NormalSpeechBalloon('…', 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_NormalSpeechBalloon('…(3小时后……)', 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("请问，你有没有看到一直待在这里的那个道士呢？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("道士？我可不知道什么道士，我只知道这里有一个乞丐", 37, 9310537, true, true);
                    } else {
                      if (status === V++) {
                        cm.emotion(5, 3000);
                        cm.sendNormalTalk_Bottom("乞丐？！那么，那个乞丐上哪儿去了？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我也不知道啊。", 37, 9310537, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                            cm.sendNormalTalk_Bottom("这……！我的钱！！！！！#p9310540#！！！！！！！", 57, 0, true, true);
                          } else if (status === V++) {
                            cm.forceCompleteQuest(62146);
                            cm.updateInfoQuest(62146, "chk=1");
                            cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                            cm.dispose();
                            cm.warp(701100000, 3);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;