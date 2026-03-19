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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530305, "oid=39082777", 860, 62, 3, 810, 910, 0, false, false);
      cm.npc_SetSpecialAction("oid=39082777", "summon", 0, 0);
      cm.npc_ChangeController(1530306, "oid=39082778", 730, 62, 2, 680, 780, 0, false, false);
      cm.npc_SetSpecialAction("oid=39082778", 'summon', 0, 0);
      cm.npc_ChangeController(1530272, "oid=39082779", 600, 62, 2, 550, 650, 0, false, false);
      cm.npc_SetSpecialAction("oid=39082779", "summon", 0, 0);
      cm.npc_ChangeController(1530282, "oid=39082780", 470, 62, 1, 420, 520, 0, false, false);
      cm.npc_SetSpecialAction("oid=39082780", "summon", 0, 0);
      cm.npc_ChangeController(1530370, "oid=39082781", 1203, 62, 3, 1153, 1253, 1, true, false);
      cm.npc_SetSpecialAction("oid=39082781", "summon", 0, 0);
      cm.npc_ChangeController(1530000, "oid=39082782", 1100, -6, 3, 1050, 1150, 1, true, false);
      cm.npc_SetSpecialAction("oid=39082782", "summon", 0, 0);
      cm.npc_ChangeController(1530230, "oid=39082783", 270, 62, 1, 220, 320, 0, true, false);
      cm.npc_SetSpecialAction("oid=39082783", 'summon', 0, 0);
      cm.npc_ChangeController(1530140, "oid=39082784", 350, 62, 1, 300, 400, 0, true, false);
      cm.npc_SetSpecialAction("oid=39082784", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 900, -6);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(169);
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
              cm.inGameDirectionEvent_AskAnswerTime(2500);
              cm.effect_Text(["#fn黑体##fs26#几天后\r\n#fs14# 1年级教室"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("好了，全体注意！来了名新的转校生。", 37, 1530370, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("大，大家好…很高兴见到你们。我们以后好好相处吧。", 37, 1530000, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 120, 500, -6);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3835);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你叫什么名字？", 37, 1530300, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('你有什么爱好啊？', 37, 1530310, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("不知为何，我不太喜欢这个转校生。我得让他随我来后院一趟。", 37, 1530230, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(0, 300, 900, -6);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1834);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39082782"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=39082781"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#fs20#还是你跟我来教务室一趟吧，你这个家伙！", 37, 1530370, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fs18#  #fNpc/1012003.img/stand/0##fn黑体#  Casting\r\n#fs18##fn黑体#――――――――――――――――――――――――――\r\n#fs18##fn黑体# 学生主任角色 #fn黑体#：长老斯坦", 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(330002515, 0);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;