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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 6908, 273);
      cm.npc_ChangeController(3005110, 'oid=388527', 7141, 279, 8, 7091, 7191, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=388527", "summon", 0, 0);
      cm.npc_ChangeController(3005111, 'oid=388528', 7249, 279, 8, 7199, 7299, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=388528", 'summon', 0, 0);
      cm.npc_ChangeController(3005112, "oid=388529", 7328, 279, 12, 7278, 7378, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=388529', 'summon', 0, 0);
      cm.npc_ChangeController(3005104, "oid=388530", 7000, 279, 8, 6950, 7050, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=388530', "summon", 0, 0);
      cm.Npc_Fadeout("oid=388530", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 7102, 272);
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
            cm.sendNormalTalk_Bottom("#face0#咂咂，所、所以呢？为了摇响铃铛到底要怎么做？", 37, 3005112, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#怎么能这么专注，傻瓜！", 37, 3005110, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#说是目前还无人知晓！", 37, 3005100, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#什么？！你竟说不知道？！", 37, 3005111, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#那是因为迄今为止能让铃铛发光的人只有我而已。", 37, 3005100, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#可以明确的一点真相是……", 37, 3005100, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#可能是多亏了铃铛的影响，那些小山灵一直跟着我。", 37, 3005100, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#小山灵？", 37, 3005110, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.Npc_Fadeout("oid=388530", 255, 1000);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#是元素灵！", 37, 3005100, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#只不过是不太显眼罢了，风水宝地总是会有一些元素灵的。", 37, 3005100, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#元、元素灵……我从没见过啊。", 37, 3005110, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#该……该不会是要攻击我们吧？", 37, 3005111, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3005104, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('#face0#呼……', 37, 3005104, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("Voice6.img/lara/1/Female/8", 100);
                                            cm.sendNormalTalk_Bottom("#face1#哈欠……", 37, 3005104, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.Npc_Fadeout("oid=388530", 0, 1000);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=388527"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=388528"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=388529"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#嘿嘿，那些小山灵确实是被铃铛的气息所吸引才跟着我的，可是，", 37, 3005100, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#目前似乎还不太听我的话。", 37, 3005100, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#没事的！时间久了，总有一天能和我变得亲近吧？", 37, 3005100, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3005110, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3005111, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3005112, true, true, 1);
                                                          } else if (status === V++) {
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.npc_LeaveField("oid=388527");
                                                            cm.npc_LeaveField("oid=388528");
                                                            cm.npc_LeaveField("oid=388529");
                                                            cm.npc_LeaveField("oid=388530");
                                                            cm.dispose();
                                                            cm.warp(993165504, 0, true);
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