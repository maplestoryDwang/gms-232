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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401277, "oid=78386940", 760, 90, 25, 710, 810, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=78386940", "summon", 0, 0);
      cm.setNPC_Fadein(9401277, 1);
      cm.npc_ChangeController(9401297, "oid=78386941", 1000, 90, 25, 950, 1050, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=78386941", 'summon', 0, 0);
      cm.setNPC_Fadein(9401297, 1);
      cm.Npc_Fadeout("oid=78386941", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 900, 120]);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18##e河津市，医馆", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
              cm.sendNormalTalk_Bottom("#face0#在吗？医生！", 37, 9401277, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.Npc_Fadeout("oid=78386941", 255, 1000);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你们是谁……", 37, 9401297, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我是玄山派的素笑，医生！", 37, 9401277, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##b我是玄山派墨玄。有个灵物倒在地上，我把它带来了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("灵物？呵呵，灵物吗……让我看看……这不是林达尔吗？", 37, 9401297, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##b是的，倒在水边。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/rindal1", 100);
                              cm.sendNormalTalk_Bottom("让我看看……", 37, 9401297, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('嗯哼……', 37, 9401297, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("嗯嗯嗯嗯？！", 37, 9401297, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("嗯……", 37, 9401297, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face8#不会有事吧？", 37, 9401277, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("嗯哼…………", 37, 9401297, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face8#医生？！", 37, 9401277, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("真是怪事……气血好像有点扭曲……", 37, 9401297, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3##b气血？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("没错，不光是你们这样拥有内功的学武之人，对运用气息的灵物来说，气血扭曲也是非常致命的……", 37, 9401297, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3##b灵物的气血发生扭曲，之前从来没有听说过。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("呵呵呵……", 37, 9401297, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0##b能治好吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("完全没有外伤……我先尽我所能为它救治。", 37, 9401297, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("让我看看……", 37, 9401297, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("其他材料都有……但是摩沙的鳍刚好用完了……\r\n你们去帮我收集一些。", 37, 9401297, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#是！！！", 37, 9401277, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("还有……你们发现它倒在水边？", 37, 9401297, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0##b是。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("嗯……能把那里的水也取回来一些吗？", 37, 9401297, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0##b确实有可能是喝了水之后倒下的。\r\n好的，明白了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNewEffects(19, [0]);
                                                                          } else if (status === V++) {
                                                                            cm.forceCompleteQuest(65932);
                                                                            cm.gainExp(608);
                                                                            cm.gainExp(1248);
                                                                            cm.updateInfoQuest(65932, "obj=1");
                                                                            cm.npc_LeaveField("oid=78386940");
                                                                            cm.npc_LeaveField("oid=78386941");
                                                                            cm.dispose();
                                                                            cm.warp(875001000, 4, false);
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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