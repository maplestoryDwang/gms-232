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
      cm.updateInfoQuest(61333, "act1=610061460");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201547, "oid=2858008", 1610, 96, 33, 1560, 1660, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2858008", "summon", 0, 0);
      cm.npc_ChangeController(9201548, "oid=2858009", 1680, 96, 34, 1630, 1730, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2858009", "summon", 0, 0);
      cm.npc_ChangeController(9201536, "oid=2858010", 1724, 96, 31, 1674, 1774, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2858010", "summon", 0, 0);
      cm.npc_ChangeController(9201534, "oid=2858011", 2080, 96, 37, 2030, 2130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2858011", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 500, 1923, 210);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4727);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('那是纳瑞坎吗？', 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 1700);
                      cm.inGameDirectionEvent_AskAnswerTime(5200);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1923, 140);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2858008", 1, 120, 150);
                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("纳瑞坎，你这是干什么？\r\n你疯了吗？", 37, 9201547, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你对幻日之力的渴求让你走火入魔了！", 37, 9201547, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("冷静，戴尔格兰德。\r\n父亲不是经常教导你要控制住你自己的情绪吗？", 37, 9201534, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=2858010", 1, 50, 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('你居然还敢叫他父亲！', 37, 9201536, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("你们是阻止不了我的，来几个都一样。", 37, 9201534, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("幻日在手，天下我有。", 37, 9201534, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("等等……", 37, 9201534, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=2858011", 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=2858011", -1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("我的大哥，苏巴尼去哪了？", 37, 9201534, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("他是又像小时候一样，藏在父亲的斗篷里哭鼻子了吗？", 37, 9201534, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_ChangeController(9201546, "oid=2859117", 2183, 96, 41, 2133, 2233, 1, true, 0, false);
                                                                  cm.npc_SetSpecialAction("oid=2859117", 'summon', 0, 0);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/12thMiniGame/getMesso3", "oid=2859117"], [0, 0, 80, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('不。', 37, 9201546, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=2858011", 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('哈？', 37, 9201534, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=2859117", "attack", 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/12thMiniGame/getMesso3", "oid=2858011"], [0, 0, 80, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=2858011", "catch1", -1, 0);
                                                                                  cm.sendNormalTalk_Bottom("卢坎，动手！", 37, 9201546, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=2858011", -1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetSpecialAction("oid=2858010", "ready", -1, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_setForceFlip("oid=2858011", 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#你想干什么？\r\n你可赢不了我，兄弟。", 37, 9201534, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("你连将幻日据为己有的胆子都没有……又怎么知道如何用它来击败我？", 37, 9201534, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#我们可不想把幻日据为己有。\r\n我们的目的可不像你的那般自私。", 37, 9201546, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("那你想怎么样？", 37, 9201534, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#趁现在，进攻！", 37, 9201536, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_setForceFlip("oid=2858011", -1);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_ScreenMsg("Map/EffectGL.img/MBlockbuster/whiteout");
                                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_ScreenMsg("Map/EffectGL.img/MBlockbuster/illust2");
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetSpecialAction("oid=2858010", 'attack', -1, 0);
                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 2210, 140);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=2858011", 1);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face2#住——住手！\r\n你们这帮蠢货，这样你们也会死的！", 37, 9201534, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("这不重要。\r\n我们愿意为拯救世界献出生命。", 37, 9201546, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom('我……我也想帮他们！', 57, 0, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.addPopupSay(9201537, 2000, "不可能的。\r\n你仅仅是个旁观者。", '', 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.addPopupSay(9201537, 2000, "这一切都是多年之前的记忆。", '', 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("那我也不能干站着看啊！", 57, 0, false, true);
                                                                                                                                        } else if (status === V++) {
                                                                                                                                          cm.eventSKill(0);
                                                                                                                                          cm.warp(610061470, 0, true);
                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                          cm.npc_LeaveField("oid=2858008");
                                                                                                                                          cm.npc_LeaveField("oid=2858008");
                                                                                                                                          cm.npc_LeaveField("oid=2858009");
                                                                                                                                          cm.npc_LeaveField("oid=2858009");
                                                                                                                                          cm.npc_LeaveField("oid=2858010");
                                                                                                                                          cm.npc_LeaveField("oid=2858010");
                                                                                                                                          cm.npc_LeaveField("oid=2858011");
                                                                                                                                          cm.npc_LeaveField("oid=2858011");
                                                                                                                                          cm.npc_LeaveField("oid=2859117");
                                                                                                                                          cm.npc_LeaveField("oid=2859117");
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