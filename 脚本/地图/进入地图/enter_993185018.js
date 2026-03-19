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
      cm.gainSkillBuff(80002984);
      cm.npc_ChangeController(3004850, "oid=2307456", 178, -20, 3, 128, 228, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2307456", 'summon', 0, 0);
      cm.npc_ChangeController(3004851, "oid=2307457", -45, 72, 1, -95, 5, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2307457", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -295, -307);
      cm.npc_SetSpecialAction("oid=2307456", "special4", -1, 1);
      cm.npc_SetSpecialAction("oid=2307457", 'special5', -1, 1);
      cm.teachSkill(80002984, 0, -1);
      cm.teachSkill(80002984, 1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -70, -273);
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
            cm.npcMove(3004851, 0, -400, 6000);
            cm.npcMove(3004850, 0, -350, 6000);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#啊，远处是海蜇号……。它沉没了。", 36, 3004851, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#最后一点动力也耗尽了。", 36, 3004850, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……但用不着伤心。", 36, 3004850, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("休麦，这个，是不是有人丢失的？", 56, 0, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……。", 36, 3004850, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#没错。谢谢你，#h0#。", 36, 3004850, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 9000, 0);
                          cm.sendNormalTalk_Bottom("#face0#休麦，那是我没学过的手势信号吗？", 36, 3004851, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯……我觉得应该道个别。", 36, 3004850, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我大概能猜到什么意思。", 36, 3004851, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#不是“任务完成”吗？", 36, 3004851, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……。", 36, 3004850, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你们俩，都好好记住这副光景。", 36, 3004850, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#虽然我厌恶大海……但有时候不得不叹服于它的壮丽。", 36, 3004850, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                            cm.sendNormalTalk_Bottom("#face0#总部……这里是……海蜇号。", 36, 3004861, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#（嗞嗞）作战……", 36, 3004861, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#这次也成功了。", 36, 3004861, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我们将我们之中最杰出的队员送了上去……。", 36, 3004861, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#好好照顾她。", 36, 3004861, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                      cm.sendNormalTalk_Bottom("#face0#……。", 36, 3004861, true, true, 1);
                                                    } else if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                      cm.teachSkill(80002984, -1, 0);
                                                      cm.forceCompleteQuest(37920);
                                                      cm.gainExp(132738181);
                                                      cm.forceStartQuest(37921, '');
                                                      cm.updateInfoQuest(37900, "10=h0;11=h0;12=h0;13=h0;14=h0;15=h0;16=h1;17=h0;00=h0;20=h0;01=h0;21=h0;02=h1;41=h0;03=h0;04=h1;24=h1;05=h0;w2=open;25=h1;06=h0;w3=open;07=h0;08=h1;09=h0");
                                                      cm.updateInfoQuest(37900, "10=h1;11=h0;12=h0;13=h0;14=h0;15=h0;16=h1;17=h0;00=h0;20=h0;01=h0;21=h0;02=h1;41=h0;03=h0;04=h1;24=h1;05=h0;w2=open;25=h1;06=h0;w3=open;07=h0;08=h1;09=h0");
                                                      cm.updateInfoQuest(37900, "10=h1;11=h0;12=h0;13=h0;14=h0;15=h0;16=h1;17=h0;00=h0;20=h0;01=h0;21=h0;02=h1;41=h0;03=h0;04=h1;24=h1;05=h0;w2=open;25=h1;06=h0;w3=open;07=h0;08=h0;09=h0");
                                                      cm.updateInfoQuest(37900, "10=h1;11=h0;12=h0;13=h0;14=h0;15=h0;16=h1;17=h0;00=h0;20=h0;01=h1;21=h0;02=h1;41=h0;03=h0;04=h1;24=h1;05=h0;w2=open;25=h1;06=h0;w3=open;07=h0;08=h0;09=h0");
                                                      cm.updateInfoQuest(37900, "10=h1;11=h0;12=h0;13=h0;14=h0;15=h0;16=h1;17=h0;00=h0;20=h0;01=h1;21=h0;02=h0;41=h0;03=h0;04=h1;24=h1;05=h0;w2=open;25=h1;06=h0;w3=open;07=h0;08=h0;09=h0");
                                                      cm.updateInfoQuest(37900, "10=h1;11=h0;12=h0;13=h0;14=h0;15=h0;16=h0;17=h0;00=h0;20=h0;01=h1;21=h0;02=h0;41=h0;03=h0;04=h1;24=h1;05=h0;w2=open;25=h1;06=h0;w3=open;07=h0;08=h0;09=h0");
                                                      cm.npc_LeaveField("oid=2307456");
                                                      cm.npc_LeaveField("oid=2307457");
                                                      cm.dispose();
                                                      cm.warp(450007040, 0, false);
                                                      cm.dispelBuff(80002984);
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
}