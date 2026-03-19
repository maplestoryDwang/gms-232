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
      cm.updateInfoQuest(37120, "enter=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004001, "oid=7159172", 140, 113, 4, 90, 190, 0, true, false);
      cm.npc_SetSpecialAction("oid=7159172", "summon", 0, 0);
      cm.npc_ChangeController(3001259, "oid=7159173", 400, 113, 6, 350, 450, 1, false, false);
      cm.npc_SetSpecialAction("oid=7159173", 'summon', 0, 0);
      cm.npc_ChangeController(3004002, "oid=7159174", 500, 113, 7, 450, 550, 1, true, false);
      cm.npc_SetSpecialAction("oid=7159174", "summon", 0, 0);
      cm.npc_ChangeController(3004000, "oid=7159175", 300, 113, 6, 250, 350, 1, true, false);
      cm.npc_SetSpecialAction("oid=7159175", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 290, 140);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=7159172", "special2", -1, 1);
        cm.npc_SetSpecialAction("oid=7159175", "special", -1, 1);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1120, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 220, 155);
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
              cm.sendNormalTalk_Bottom("#face0#咳……", 37, 3004000, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#看来你太小瞧我了，没想到我有这能耐吧？", 37, 3004001, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……", 37, 3001259, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#呃呃……", 37, 3004002, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#还没……结束……", 37, 3004000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#我很好奇，侦探，你为什么会做到这一步？", 37, 3004001, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#这里的人反正都是罪犯，\r\n按照普通人的想法，他们都该死，不是吗？", 37, 3004001, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#face0#……', 37, 3004000, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0##fs16#人之初，性本善。人生来是善良的，只不过是在这个残忍污浊的世界上沾染了恶习而已。", 37, 3004000, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0##fs16#所以……不要向这个世界低头。", 37, 3004000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我和考尔保还是奴隶的时候，救我们的人这样对我说的。", 37, 3004000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#嗯……", 37, 3004001, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#说得真好！我应该记下来。", 37, 3004001, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                            cm.sendNormalTalk_Bottom("黑鸦！！", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(200, 2000, 200, 1118, 155);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#华生！", 37, 3004000, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#呼，无敌助手来了，这下你也完蛋了。", 37, 3004000, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(200, 2000, 200, 290, 155);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#嗯……无敌……\r\n听你这么一说，我很想挑战一下，不过好像到时间了。", 37, 3004001, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#好好保重，侦探。", 37, 3004001, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#拉宝拉，送我去飞艇。", 37, 3004001, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#发送。", 37, 3004015, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#不行……！", 37, 3001259, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/teleport", 250);
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction21.img/SavageT/effect/2"], [0, 140, 170, 1, 0, 1, 1, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_LeaveField("oid=7159172");
                                                                        cm.npc_LeaveField("oid=7159172");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#消失了……这下……就没办法了吗？", 37, 3001259, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#不是的，水位正在降低。", 37, 3004000, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#！！", 37, 3001259, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#什么？真的吗？", 37, 3004002, true, true);
                                                                              } else if (status === V++) {
                                                                                cm.dispose();
                                                                                cm.warp(402000003, 0);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.setStandAloneMode(false);
                                                                                cm.updateInfoQuest(37120, "MPclear=1;enter=1");
                                                                                cm.forceStartQuest(37120, '');
                                                                                cm.updateInfoQuest(37100, "40=h1;31=h0;41=h1;50=h1;32=h1;42=h1;51=h1;33=h1;43=h1;52=h1;dir=off;44=h1;53=h1;35=h1;45=h1;36=h1;46=h1;37=h1;47=h0;38=h1;39=h1;49=h0");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;