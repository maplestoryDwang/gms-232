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
      cm.updateInfoQuest(33506, "enter=1");
      cm.fieldEffect_PlayBGM("Bgm42.img/TheBeast2", 0, 0);
      cm.npc_ChangeController(1530646, "oid=39819200", 1156, -201, 7, 1106, 1206, 1, false, false);
      cm.npc_SetSpecialAction("oid=39819200", 'summon', 0, 0);
      cm.npc_ChangeController(1530647, "oid=39819201", 1034, -90, 5, 984, 1084, 1, false, false);
      cm.npc_SetSpecialAction("oid=39819201", "summon", 0, 0);
      cm.npc_ChangeController(1530648, "oid=39819202", 1223, -120, 11, 1173, 1273, 1, false, false);
      cm.npc_SetSpecialAction("oid=39819202", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(10, 2000, 10, 700, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.setAmbience("Ambience.img/thunder2", 100, 60);
        cm.inGameDirectionEvent_ChangeEquipment([1302335]);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我似乎听到了吉他的声音……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(1530605, "oid=39821904", 300, 30, 19, 250, 350, 0, true, false);
                    cm.npc_SetSpecialAction("oid=39821904", 'summon', 0, 0);
                    cm.npc_ChangeController(1530606, "oid=39821905", 300, 30, 19, 250, 350, 0, true, false);
                    cm.npc_SetSpecialAction("oid=39821905", "summon", 0, 0);
                    cm.npc_ChangeController(1530607, "oid=39821906", 300, 30, 19, 250, 350, 0, true, false);
                    cm.npc_SetSpecialAction("oid=39821906", "summon", 0, 0);
                    cm.npc_SetForceMove("oid=39821904", 1, 230, 100);
                    cm.npc_SetForceMove("oid=39821905", 1, 170, 100);
                    cm.npc_SetForceMove("oid=39821906", 1, 110, 100);
                    cm.sendNormalTalk_Bottom("一起走吧~#h0#~你为什么总是一个人消失啊~", 37, 1530110, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("什么啊，那不是吉他吗？\r\n我就知道，你会成为胡克乐队的王牌！", 37, 1530100, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你们居然来到了这里，挺厉害的嘛。", 37, 1530646, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39821904"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39821905"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39821906"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.sendNormalTalk_Bottom('谁啊？！', 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#吉他不错啊。你应该不是来这里玩的吧？", 37, 1530621, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 1170, -130);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 700, 0);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(1530626, "oid=39826009", 1156, -201, 7, 1106, 1206, 1, true, false);
                                    cm.npc_SetSpecialAction("oid=39826009", "summon", 0, 0);
                                    cm.npc_ChangeController(1530627, "oid=39826010", 1034, -90, 5, 984, 1084, 1, true, false);
                                    cm.npc_SetSpecialAction("oid=39826010", 'summon', 0, 0);
                                    cm.npc_ChangeController(1530628, "oid=39826011", 1223, -120, 11, 1173, 1273, 1, true, false);
                                    cm.npc_SetSpecialAction("oid=39826011", 'summon', 0, 0);
                                    cm.npc_ChangeController(1530624, "oid=39826012", 1295, -34, 4, 1245, 1345, 1, true, false);
                                    cm.npc_SetSpecialAction("oid=39826012", 'summon', 0, 0);
                                    cm.npc_ChangeController(1530632, "oid=39826013", 1165, 0, 3, 1115, 1215, 1, false, false);
                                    cm.npc_SetSpecialAction("oid=39826013", 'summon', 0, 0);
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 1170, -20);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#来一局吧。", 37, 1530621, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.gainExp(Math.pow(cm.getLevel(), 3));
                                              cm.forceCompleteQuest(33506);
                                              cm.dispose();
                                              cm.warp(330002626, 0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;