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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1800, 22);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(2570102, "oid=37943965", 1892, 9, 1, 1842, 1942, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=37943965", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=37943965", "down", -1, 1);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1733, 26);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("亚殷，你没事吧？", 56, 0, false, true, 1);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=37943965");
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=37943965", -1);
                cm.sendNormalTalk_Bottom("#face0#嗯。只是……暂时有点累了。目前还挺轻松的。", 36, 2570102, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#其他人呢？", 36, 2570102, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("大家没事。一会儿就会来会合。", 56, 0, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#我早料到是这样。\r\n说是落选者，但大伙儿的实力都是很优秀的。", 36, 2570102, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……你早就知道了吗？", 56, 0, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#那个嘛……\r\n哈丁是因为不服从上级的无理命令，所以落选了吧？", 36, 2570102, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#瑞恩总是在关键时刻失误，想必是因为这个原因，\r\n魁格嘛，压根儿没法沟通，所以在团队合作中被淘汰……。", 36, 2570102, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#艾德就不用说了。他违反了保持体面的规定。", 36, 2570102, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("很准确……。", 56, 0, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你是故意让我落选的吧？为了让我加入这个骑士团。", 36, 2570102, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#大家脑子都不好使，总得找个有头脑的人吧。", 36, 2570102, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("那个……嗯……", 56, 0, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#不是吗？", 36, 2570102, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('就当是那样吧。', 56, 0, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#等等，我真的没被选上吗？", 36, 2570102, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4#不是，到底为什么？！", 36, 2570102, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("啊，正巧大家都来了。", 56, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#到底为什么？！", 36, 2570102, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else if (status === V++) {
                                                    cm.updateInfoQuest(37800, "01=h1;02=h0;03=h0;q1=clear;04=h0;q2=clear;05=h0;06=h0;dir00=end;dir02=end");
                                                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=h0;q1=clear;04=h0;q2=clear;05=h0;06=h0;dir00=end;dir02=end");
                                                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h0;q2=clear;05=h0;06=h0;dir00=end;dir02=end");
                                                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h0;06=h0;dir00=end;dir02=end");
                                                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;dir00=end;dir02=end");
                                                    cm.updateInfoQuest(37800, "01=h1;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;q4=clear;dir00=end;dir02=end");
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.npc_LeaveField("oid=37943965");
                                                    cm.dispose();
                                                    cm.warp(308000005, 0, false);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setStandAloneMode(false);
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
}