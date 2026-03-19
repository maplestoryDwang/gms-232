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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062370");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201546, "oid=2682139", 195, 200, 44, 145, 245, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2682139", "summon", 0, 0);
      cm.npc_ChangeController(9201534, "oid=2682140", 500, 200, 46, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2682140", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("他到底要去哪啊？\r\n这儿已经离守护者的要塞很远了。", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 500, 329, 250);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1947);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你终于来了。", 37, 9201546, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 1800, -641, 176);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(540);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("哈？\r\n那是——咦！", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 550);
                            cm.inGameDirectionEvent_AskAnswerTime(3200);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 200, 200);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                  cm.sendNormalTalk_Bottom("好久不见，兄弟。", 37, 9201534, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("纳瑞坎！\r\n为什么苏巴尼要跟纳瑞坎碰头？", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#太久了，事实上，我都怀疑你是不是忘了我们之间的小秘密了。", 37, 9201534, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#我们能够通过梦境互相交流吗，我并没有忘记……", 37, 9201534, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("我也想跟你谈谈，纳瑞。", 37, 9201546, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#我的话你应该会听吧。", 37, 9201546, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2682140", -1, 50, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#你是我唯一能够信任的人……这你知道吧？", 37, 9201534, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#是的，有什么事你说好了。", 37, 9201546, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#如果你诚心改过自新，父亲一定会原谅你的。", 37, 9201546, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#你得理解，我当时既愤怒又困惑……", 37, 9201534, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#我感觉自己做出了无法挽回的事。", 37, 9201534, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("浪子回头金不换，纳瑞。\r\n跟我回家吧。", 37, 9201546, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我们一起回去。", 37, 9201546, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("还有件事，兄弟……", 37, 9201534, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('哈？', 37, 9201546, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('我果然没看错你。', 37, 9201534, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetSpecialAction("oid=2682140", "attack", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=2682139", "hurt", -1, 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#啊啊……纳瑞……为什么……", 37, 9201546, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("啊！\r\n不行，不能冲动……太危险了！", 57, 0, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("我也不愿意出此下策……\r\n但你会成为我最大的障碍。", 37, 9201534, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("如果排除你我才能成功，那也没有别的办法了。", 37, 9201534, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#纳瑞……求你，别这样……\r\n我们是兄弟啊……", 37, 9201546, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#你是我的家人啊！", 37, 9201546, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("我并不想要家人。\r\n获得家人的喜悦也好……失去家人的痛苦也好……\r\n都是你们强加于我的。", 37, 9201534, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("没有你们，我就不会如此痛苦。", 37, 9201534, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("所以我需要幻日。\r\n我要终结这种悲剧。", 37, 9201534, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我再也不用……失去重要的人了。", 37, 9201534, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetSpecialAction("oid=2682140", "attack2", -1, 1);
                                                                                                      cm.fieldEffect_BackgroundCanvas(4, 125, 125, 125, 2000, 0, 0);
                                                                                                      cm.fieldEffect_BackgroundCanvas(5, 125, 125, 125, 2000, 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 2000, 0, 0);
                                                                                                        cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 2000, 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#纳瑞……不……", 37, 9201546, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("我讨厌你那样叫我。", 37, 9201534, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                                                                                                cm.sendNormalTalk_Bottom('给我住手！', 57, 0, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_ScreenMsg("Map/EffectGL.img/MBlockbuster/n_attack");
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                } else if (status === V++) {
                                                                                                                  cm.setNpcSpecialActionReset("oid=2682140");
                                                                                                                  cm.eventSKill(0);
                                                                                                                  cm.warp(610062380, 0, true);
                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                  cm.npc_LeaveField("oid=2682139");
                                                                                                                  cm.npc_LeaveField("oid=2682139");
                                                                                                                  cm.npc_LeaveField("oid=2682140");
                                                                                                                  cm.npc_LeaveField("oid=2682140");
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