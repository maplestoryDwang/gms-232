var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(j, L, w) {
  if (status == 0 && j == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = w;
  var N = -1;
  if (status <= N++) {
    cm.dispose();
  } else {
    if (status === N++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.sendNormalTalk_Illus_II("这次要让你去越后执行任务。详细的任务内容都在这个秘书上。", 9130116, 5, false, true, 9130116);
      cm.curNodeEventEnd(true);
    } else {
      if (status === N++) {
        cm.sendNormalTalk_Illus_II("您要让我一直执行这种无聊的任务吗？", 9130106, 5, true, true, 9130106);
      } else {
        if (status === N++) {
          cm.sendNormalTalk_Illus_II("………", 9130116, 5, true, true, 9130116);
        } else {
          if (status === N++) {
            cm.sendNormalTalk_Illus_II("只要完成这件事，那么……", 9130116, 5, true, true, 9130116);
          } else {
            if (status === N++) {
              cm.sendNormalTalk_Illus_II("我就能相信你。", 9130116, 5, true, true, 9130116);
            } else {
              if (status === N++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === N++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                  if (status === N++) {
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === N++) {
                      cm.inGameDirectionEvent_Monologue("那天，她的表情十分奇怪。", 0);
                    } else {
                      if (status === N++) {
                        cm.inGameDirectionEvent_Monologue("而织田军的士兵开始秘密行动后，我知道有点不对劲了。", 0);
                      } else {
                        if (status === N++) {
                          cm.inGameDirectionEvent_Monologue("所以我违反了她的命令，追着织田军去了本能寺。", 0);
                        } else {
                          if (status === N++) {
                            cm.inGameDirectionEvent_Monologue("在本能寺，织田信长将樱乃公主作为祭品，正在举行魔王降临的仪式，为了阻止他，我和织田军展开了不断的战斗。", 1);
                          } else {
                            if (status === N++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                              if (status === N++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === N++) {
                                cm.warp(811000012, 0, false);
                                cm.eventSKill(0);
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