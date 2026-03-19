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
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0##b（虽说是人际罕至的地方，但野兽和魔物的数量比平时多很多……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0##b（狂暴的野兽，在村里和玄山出现的山魔鬼，可疑的黑衣人，还有……玄山派……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNewEffects(17, [2000, 1000, 2000, -50, -150]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                  cm.sendNormalTalk_Bottom("#face0##b这是？！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3##b好像还没过多久。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3##b在村里见到的可疑黑衣人是沿着这条路去了玄山派……还是沿着这条路逃走了呢？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3##b把风形叫来吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9401278, "oid=2152667", 70, -150, 2, 20, 120, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2152667", "summon", 0, 0);
                            cm.npc_ChangeController(9401299, "oid=2152668", 700, 40, 34, 650, 750, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2152668", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.effect_Text(["#fn黑体##fs18##e片刻之后……", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#确实……是刚留下没多久的血迹。", 37, 9401278, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0##b这条路是玄山派为了平时的入门考试和修炼而修建的。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3##b外人不知道……的路……吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#嗯……原来如此……", 37, 9401278, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#现在下结论也许为时尚早……但敌人可能就在内部。", 37, 9401278, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3##b……大家都像家人一样。我……不想乱猜疑。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#那个怎么会不知道呢？但是……就连血脉相连的家人也无法了解彼此的心。", 37, 9401278, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#……要做好心理准备。", 37, 9401278, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#嗯哼！！！我会让部下们追踪这个线索。\r\n幸好发现了他们的踪迹。辛苦了。", 37, 9401278, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0##b谢谢你，风形。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#这是饭钱，饭钱。", 37, 9401278, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNewEffects(12, [500, 550, 120]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2152668", -1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#大哥！这里，痕迹一直延续到这里！", 37, 9401299, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#嗯？已经开始了吗？", 37, 9401278, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("我们也不能吃白饭啊！", 37, 9401299, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNewEffects(12, [2000, -50, -150]);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=2152668", 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#呵呵，看到了吧？就交给我能干的部下们吧，你先回玄山派去休息一下。\r\n素笑姑娘一定正在等你。", 37, 9401278, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.forceCompleteQuest(65940);
                                                                          cm.gainExp(14471);
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                cm.OnStartNavigation(875000001, 1, "9401316", 65941);
                                                                                cm.npc_LeaveField("oid=2152667");
                                                                                cm.npc_LeaveField("oid=2152668");
                                                                                cm.dispose();
                                                                                cm.warp(875000001, 0, false);
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
  }
}