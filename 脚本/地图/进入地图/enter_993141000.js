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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 16, 272);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004323, "oid=501735", -186, 292, 5, -236, -136, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=501735', "summon", 0, 0);
        cm.npc_ChangeController(3004322, 'oid=501736', -113, 291, 5, -163, -63, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=501736', "summon", 0, 0);
        cm.npc_ChangeController(3004433, "oid=501737", 511, 298, 9, 461, 561, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=501737", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#你们好，各位。", 37, 3004433, false, true);
          cm.effect_Voice("Voice5.img/CH2/Carlyle/103", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#我一直在等你们。", 37, 3004433, true, true);
            cm.effect_Voice("Voice5.img/CH2/Carlyle/104", 128);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#不久前，世界边界"], [100, 1200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(1);
                  cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 424, 272);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.onSetBackEffect("fog", 1, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm52/Borderless", 0, 0);
                        cm.sendNormalTalk_Bottom("#face0#原来您就是对抗者#b#h0##k大人。", 37, 3004433, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你是谁？", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我是塞尔提乌的王子，卡莱尔。\r\n特地跨越遗忘之海来见您一面。", 37, 3004433, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('跨越海洋吗……', 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#你看起来并没有困惑，是因为你早就知道世界会合并吗？", 37, 3004323, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我有一位精通神学和史学的朋友，他给了我一些建议。", 37, 3004433, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#既然已经知道超越者空缺会导致的后果，所以也可以预见，过不了多久，封印就会被解除。", 37, 3004433, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3004323, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('是有什么事找我们吗？', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#自然是有事相托。", 37, 3004433, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#说起来，诸位不向我介绍一下冒险岛联盟吗？", 37, 3004433, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else if (status === V++) {
                                                  cm.warp(993141001, 0, false);
                                                  cm.npc_LeaveField("oid=501735");
                                                  cm.npc_LeaveField("oid=501735");
                                                  cm.npc_LeaveField("oid=501736");
                                                  cm.npc_LeaveField('oid=501736');
                                                  cm.npc_LeaveField("oid=501737");
                                                  cm.npc_LeaveField("oid=501737");
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
    }
  }
}