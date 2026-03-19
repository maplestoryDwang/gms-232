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
      cm.npc_ChangeController(3004818, "oid=373191", -126, 734, 1, -176, -76, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004851, 'oid=679622', -256, 667, 3, -306, -206, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=679622', "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 20, 685);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, -141, 763);
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
            cm.sendNormalTalk_Bottom("#face3#……。", 36, 3004851, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3##h0#。", 36, 3004851, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('嗯？', 56, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#休麦他，自从刚才撞到遇难船的残骸后，\r\n不知怎么地……有点……", 36, 3004851, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('为什么？', 56, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.askMenu_Bottom("说起来休麦他……\r\n#b#L0# 似乎在隐瞒什么？ #l\r\n#L1# 显得很悲伤？ #l\r\n#L2# 似乎很疼的样子？", 57, 0, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#嗯，那个……", 37, 3004851, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#好像在隐瞒什么……", 37, 3004851, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#没，没什么。可能是我的错觉。", 36, 3004851, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#就算他有难以启齿的事情，也是和作战相关的。\r\n怎么可能会对一同执行作战的同伴有所隐瞒。\r\n休麦绝不是这样的人。", 36, 3004851, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("那个……嗯……应该是。", 56, 0, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#而且，我和休麦曾一起闯过神秘河，\r\n是过命的交情。", 36, 3004851, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("对了沃莉……至今为止，休麦有讲过从前的事吗？", 56, 0, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("比如说……在潜水部队服役过之类的？", 56, 0, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……。", 36, 3004851, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('#face4#……。', 36, 3004851, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("沃莉？！", 56, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#其实……我也第一次听说这事……", 36, 3004851, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4#仔细想想，休麦好像从没说过自己的事情。", 36, 3004851, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#我把我因为闹肚子，差点儿没通过骑士考试的事都说了……", 36, 3004851, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("你因为闹肚子，差点儿没通过骑士考试啊？", 56, 0, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#额……总之……！", 36, 3004851, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#或许……他是信不过我，才无法吐露心中的难处。", 36, 3004851, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("嗯？难道……", 56, 0, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face4#当然我不认为是那个原因……", 36, 3004851, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("(回想起来……\r\n他之前像是马上要离开埃斯佩拉似的，\r\n接着却跟着沃莉突然加入队伍……)", 56, 0, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("(还有他只向沃莉传授了手势信号和潜水艇驾驶方法……)", 56, 0, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.askMenu_Bottom("嗯……\r\n\r\n#b#L0# 他应该是信不过你。 #l\r\n#L1# 会不会是为了保护你？", 57, 0, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#是吗……", 37, 3004851, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#这里没看到什么有用的东西。", 36, 3004851, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face4#我觉得我们该去找其他残骸。", 36, 3004851, true, true, 1);
                                                                            } else if (status === V++) {
                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                              cm.forceCompleteQuest(37913);
                                                                              cm.gainExp(265476362);
                                                                              cm.npc_LeaveField("oid=679622");
                                                                              cm.dispose();
                                                                              cm.warp(450016120, 0, true);
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