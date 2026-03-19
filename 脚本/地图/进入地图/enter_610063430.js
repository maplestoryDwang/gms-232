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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063430");
      cm.forceForfeitQuest(61348);
      cm.forceStartQuest(61342, '');
      cm.forceCompleteQuest(61342);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这儿不是守护者的要塞……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#欢迎来到反转界。", 37, 9201539, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('哈？', 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(9201539, "oid=2725057", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2725057", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#你应该知道吧，绯红之心、纳瑞坎和宗师们原本都居住在反转界。", 37, 9201539, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#冒险岛世界的平行世界。", 37, 9201539, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你以为这样就算排除我了吗！", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#当然算。你身处的并不是真正的反转界。\r\n而是我创造的一个虚拟世界。", 37, 9201539, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#我设计这个世界的目的就是为了让你见证那一天……一切都从那一天开始。", 37, 9201539, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("你说的是哪一天？\r\n那一天发生了什么事？", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#你很快就会看到。\r\n然后，你就能理解他的痛苦了。", 37, 9201539, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#纳瑞坎没让我这么做。\r\n但这是你从我们的角度看待这场冲突的唯一机会。", 37, 9201539, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.eventSKill(0);
                                            cm.warp(610063440, 0, true);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=2725057");
                                            cm.npc_LeaveField("oid=2725057");
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
      }
    }
  }
}