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
      cm.npc_ChangeController(1530060, "oid=21094641", 447, 58, 1, 397, 497, 1, true, false);
      cm.npc_SetSpecialAction("oid=21094641", "summon", 0, 0);
      cm.npc_ChangeController(1530070, "oid=21094642", 347, 58, 1, 297, 397, 0, true, false);
      cm.npc_SetSpecialAction("oid=21094642", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/schoolbell", 100, 60);
        cm.sendNormalTalk_Bottom("南哈特，南哈特？", 37, 1530060, false, true);
        cm.effect_Text(["#fn黑体##fs26#放学后, 办公室"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('今天又有什么事呢。', 37, 1530070, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("发生了一件非常不可思议的事情。你听说有关命运之转学生新的传闻了吗？", 37, 1530060, true, true);
          } else {
            if (status === V++) {
              cm.playSoundEffDirectly("Ambience.img/schoolbell");
              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1600);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("你们原来想的都错了. ", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("事实上, 命运之转学生是个男生, 而且嘴唇长得很厚. ", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("如果神兽集团的独生女不和命运之转学生接吻的话, 这所学校就会面临倒闭的. ", 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=21094642"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("……小姐，你听到这个传闻不觉得很奇怪吗？", 37, 1530070, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("是呢，我也觉得很奇怪。", 37, 1530060, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#h0#是个女孩子……而且她的嘴唇也不是很厚啊。", 37, 1530060, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("不是，问题不在这儿……", 37, 1530070, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('真是怪事儿了……', 37, 1530060, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=21094641"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b（这样下去不行，小姐。不管怎样，如果不采取什么措施的话……）#k", 37, 1530070, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
                                        cm.forceCompleteQuest(32746);
                                        cm.dispose();
                                        cm.warp(330000100, 0);
                                        cm.inGameDirectionEvent_SetHideEffect(0);
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