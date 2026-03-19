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
      cm.npc_ChangeController(3004850, "oid=677507", -1100, -532, 8, -1150, -1050, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=677507', "summon", 0, 0);
      cm.npc_ChangeController(3004851, "oid=677508", -1167, -532, 8, -1217, -1117, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=677508", "summon", 0, 0);
      cm.npc_ChangeController(3004853, "oid=677509", -959, -480, 23, -1009, -909, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=677509', "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -827, -510);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1039, -410);
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
            cm.sendNormalTalk_Bottom("#face0#超越者怀里不会掉出引擎……\r\n估计是从坠毁的联盟运输机上掉下来的。", 36, 3004850, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#居然还在运转……这货造得真结实。", 36, 3004850, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#该停下来了。\r\n像这样把扳手伸进去拧一下……", 36, 3004850, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#啊，等等……", 36, 3004851, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier1", 100);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/sellas/engineOff", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction('oid=677509', "special", -1, 1);
                        cm.sendNormalTalk_Bottom("#face0#嗯？为什么？", 36, 3004850, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#我觉得……有点可怜。", 36, 3004851, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#它已经完成了自己的使命。\r\n如今再启动运转，只会干扰信号。", 36, 3004850, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#虽是这样……", 36, 3004851, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#沃莉，随随便便情绪化是很危险的，尤其是在海里。", 36, 3004850, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#呃……知道了。", 36, 3004851, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("接下来怎么办？", 56, 0, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#如果不在这附近……也可能是顺着海流，不知漂哪儿去了。\r\n我得重新启动声呐。", 36, 3004850, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#但是，在此之前……有件事要处理一下。", 36, 3004850, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(3004855, "oid=677694", -684, -513, 57, -734, -634, 0, false, 1000, false);
                                          cm.npc_SetSpecialAction("oid=677694", "summon", 0, 0);
                                          cm.npc_ChangeController(3004855, 'oid=677695', -1297, -513, 56, -1347, -1247, 0, false, 1000, false);
                                          cm.npc_SetSpecialAction("oid=677695", "summon", 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#啊，那些怪物什么时候……！", 36, 3004851, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#好像是被潜水艇的光吸引过来的。", 36, 3004850, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#抓紧时间吧。", 36, 3004850, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                  cm.forceCompleteQuest(37909);
                                                  cm.gainExp(132738181);
                                                  cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h1;21=h0;03=h0;04=h0;05=h0;41=h0;06=h1;24=h1;25=h1;17=h0;09=h0");
                                                  cm.npc_LeaveField('oid=677507');
                                                  cm.npc_LeaveField("oid=677508");
                                                  cm.npc_LeaveField("oid=677509");
                                                  cm.npc_LeaveField("oid=677694");
                                                  cm.npc_LeaveField("oid=677695");
                                                  cm.dispose();
                                                  cm.warp(450016060, 0, false);
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