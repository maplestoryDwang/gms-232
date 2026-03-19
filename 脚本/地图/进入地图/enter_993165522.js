var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.Hidden_background("night", 1, 0, 0, 0);
      cm.monadForceMove("night", 0, 0);
      cm.npc_ChangeController(3005103, 'oid=622824', 40, 200, 2, -10, 90, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=622824", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -20, 200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs18#片刻后，甜蜜蜜工坊", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#……所以铃铛这东西会对邪恶器物产生反应啊。", 37, 3005103, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，可我不知道所谓邪恶的器物到底是什么。", 37, 3005100, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#话说我好像已经好几天没见过格里了，他出什么事了呢？", 37, 3005100, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#这个嘛，既然他整天把拥有自由之身就离开村庄挂在嘴边上，\r\n现在应该是在做准备吧？", 37, 3005103, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#那要不在这之前，我再去找他一起去玩吧？", 37, 3005100, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这可是好不容易才得来的自由啊，他应该会需要独处的时间吧。", 37, 3005103, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（格里能重获自由，这很让人开心，可怎么一提到他要准备离开，我就这么伤心呢？）", 37, 3005100, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#今天你能来再来一次工坊吗？", 37, 3005103, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#听了你说的话，我倒是想到一个摇响铃铛的法子。", 37, 3005103, true, true, 1);
                            } else if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.setStandAloneMode(false);
                              cm.forceStartQuest(36233, '');
                              cm.forceCompleteQuest(36233);
                              cm.gainExp(3787);
                              cm.npc_LeaveField("oid=622824");
                              cm.dispose();
                              cm.warp(410004000, 0, true);
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