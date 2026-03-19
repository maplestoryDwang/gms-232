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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -20, 55);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(2570101, "oid=37935262", -220, -50, 8, -270, -170, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=37935262", 'summon', 0, 0);
        cm.npc_ChangeController(2570103, "oid=37935263", -126, 100, 14, -176, -76, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=37935263", "summon", 0, 0);
        cm.npc_ChangeController(2570130, "oid=37935264", -14, 100, 14, -64, 36, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=37935264", "summon", 0, 0);
        cm.npc_ChangeController(2570131, "oid=37935265", 53, 100, 15, 3, 103, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=37935265", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=37935264", 'down', -1, 1);
        cm.npc_SetSpecialAction("oid=37935263", "down", -1, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#伤势很重。我们来挡住敌人，你赶快逃出城。", 36, 2570103, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#瑞恩？你怎么……\r\n你不是被骑士团开除了吗？", 36, 2570130, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#是差点儿，但没有被开除。有人接收我了。", 36, 2570103, true, true, 1);
              } else {
                if (status === V++) {
                  cm.setNpcSpecialActionReset("oid=37935263");
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#可你……不是射伤了上级吗？", 36, 2570130, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4#你射伤了上级？", 36, 2570101, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face4#哦？！那，那个……", 36, 2570103, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#他，他活该。\r\n那是正义的一箭。对，就是这样。", 36, 2570103, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你胡说什么。只是手滑了而已。", 36, 2570130, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#喂！你非得把那说出来，心里才痛快吗！", 36, 2570103, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37935262"], [0, 0, -50, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#瑞恩！后面！", 36, 2570101, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/8/0", 0, 500, 0, -80, 0, 4, 1, -1, 0, 0, 0);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/arrow0", 100);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/dem_sword", 100);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/lumi_attack", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8230076/Die", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8230076/Die", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#嘁，吓我一跳。", 36, 2570103, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#不能大意。", 36, 2570101, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=37935262", "attack", -1, 1);
                                                  cm.npc_SetSpecialAction("oid=37935263", "attack", -1, 1);
                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.setNpcSpecialActionReset("oid=37935263");
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.setNpcSpecialActionReset("oid=37935262");
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#行了，别瞎扯了，赶紧逃出去要紧。", 36, 2570103, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#哦……谢，谢谢你。", 36, 2570130, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#谢谢你，骑士。", 36, 2570131, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#好，你小心点。", 36, 2570101, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.Npc_Fadeout("oid=37935264", 0, 700);
                                                                      cm.Npc_Fadeout("oid=37935265", 0, 700);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#你看到那家伙吃惊的表情了吗？看来我们进步很大。", 36, 2570103, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#没点成果可不好办。我好不容易才按捺住了每天都想逃跑的心情。", 36, 2570101, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#嗯……实际上我逃过几次……", 36, 2570103, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#对了，瑞恩。", 36, 2570101, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#嗯？", 36, 2570103, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#我很尊敬凯拉德团长。", 36, 2570101, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face5#你突然说什么呢？", 36, 2570103, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face3#所以，请你不要把箭头对准我们的团长。", 36, 2570101, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face4#哈……。", 36, 2570103, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else if (status === V++) {
                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                              cm.npc_LeaveField("oid=37935262");
                                                                                              cm.npc_LeaveField("oid=37935263");
                                                                                              cm.npc_LeaveField("oid=37935264");
                                                                                              cm.npc_LeaveField("oid=37935265");
                                                                                              cm.dispose();
                                                                                              cm.warp(308000180, 0, false);
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