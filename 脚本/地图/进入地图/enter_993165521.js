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
      cm.npc_ChangeController(3005102, 'oid=622817', -250, 200, 1, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=622817", "summon", 0, 0);
      cm.npc_ChangeController(3005103, "oid=622818", 40, 200, 2, -10, 90, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=622818", "summon", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -20, 200);
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
            cm.effect_Text(["#fn黑体##fs18#同一时刻，甜蜜蜜工坊", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove('oid=622817', 1, 100, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#啦啦没来这里吗？", 37, 3005102, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#啊，啦啦吗？啦啦她……", 37, 3005103, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1700);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                      cm.sendNormalTalk_Bottom("#face0#我已经好几天没来这里，所以最近也好久都没见到了。", 37, 3005103, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……是吗？", 37, 3005102, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#看来为了找到摇响铃铛的方法，你一直在四处奔波啊。", 37, 3005103, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#自己一个人吗？", 37, 3005102, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你怎么这副表情？", 37, 3005103, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我的表情怎么了？", 37, 3005102, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你难道伤心了吗？", 37, 3005103, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#你疯了不成？我怎么会！", 37, 3005102, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#……所以找到什么了吗？", 37, 3005102, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#其实……", 37, 3005103, true, true, 1);
                                      } else if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.setStandAloneMode(false);
                                        cm.npc_LeaveField("oid=622817");
                                        cm.npc_LeaveField('oid=622818');
                                        cm.dispose();
                                        cm.warp(993165522, 0, true);
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