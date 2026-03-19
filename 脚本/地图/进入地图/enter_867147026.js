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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401127, "oid=39235384", -150, -180, 13, -200, -100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39235384", "summon", 0, 0);
      cm.npc_ChangeController(9401057, "oid=39235385", -20, -180, 5, -70, 30, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=39235385", 'summon', 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -100, -100]);
      cm.curNodeEventEnd(true);
      cm.onActionBarResult(6, -1);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 70);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Skill/520.img/skill/5201001/effect", "oid=39235384"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=39235385", "hit1", 0, 0);
                cm.sendNormalTalk_Bottom("砰～～～～呼！太简单了吧？", 37, 9401033, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Skill/520.img/skill/5201001/effect", "oid=39235384"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Skill/520.img/skill/5201001/effect", "oid=39235384"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.npc_SetSpecialAction("oid=39235385", "die1", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=39235385");
                        cm.npc_LeaveField("oid=39235385");
                        cm.sendNormalTalk_Bottom("感觉身体逐渐活动开了～呀哈哈哈", 37, 9401033, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(17, [1000, 2000, 1000, 150, -80]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(9401057, "oid=39237119", -70, 100, 16, -120, -20, 1, true, 0, false);
                              cm.npc_SetSpecialAction("oid=39237119", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(600);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(9401057, "oid=39237800", 355, 100, 21, 305, 405, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=39237800", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(9401057, "oid=39237405", 300, -230, 28, 250, 350, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=39237405", 'summon', 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(9401057, "oid=39237413", -280, 50, 14, -330, -230, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=39237413", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(9401057, "oid=39237414", 580, 50, 23, 530, 630, 1, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=39237414", "summon", 0, 0);
                                      cm.sendNormalTalk_Bottom("#b大家住手！", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b有点奇怪，敌人的数量太多了，我们还是回去，从别的路走吧。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=39235384", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=39235384", -1, 5, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("非要这样吗？怎么能丢下这么好的猎物就走呢！", 37, 9401033, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我们全力以赴，一定能突破的～走吧！朋友们！", 37, 9401033, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=39235384", 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=39235384", 1, 1000, 200);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b梅里耶，回来！", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b梅里耶！！！", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b没办法了，大家小心点，攻击！", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_LeaveField("oid=39235384");
                                                                  cm.npc_LeaveField("oid=39235384");
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=39237800");
                                                                    cm.npc_LeaveField("oid=39237800");
                                                                    cm.npc_LeaveField("oid=39237119");
                                                                    cm.npc_LeaveField("oid=39237119");
                                                                    cm.npc_LeaveField("oid=39237405");
                                                                    cm.npc_LeaveField("oid=39237405");
                                                                    cm.npc_LeaveField("oid=39237413");
                                                                    cm.npc_LeaveField("oid=39237413");
                                                                    cm.npc_LeaveField("oid=39237414");
                                                                    cm.npc_LeaveField("oid=39237414");
                                                                    cm.npc_ChangeController(9401123, "oid=39240126", 100, 40, 18, 50, 150, 1, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=39240126", "summon", 0, 0);
                                                                    cm.npc_ChangeController(9401124, "oid=39240127", 20, 40, 17, -30, 70, 1, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=39240127", "summon", 0, 0);
                                                                    cm.npc_ChangeController(9401126, "oid=39240128", -180, 40, 15, -230, -130, 0, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=39240128", "summon", 0, 0);
                                                                    cm.npc_ChangeController(9401125, "oid=39240129", 250, 40, 20, 200, 300, 1, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=39240129", "summon", 0, 0);
                                                                    cm.npc_ChangeController(9401127, "oid=39240130", 470, 40, 22, 420, 520, 0, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=39240130", "summon", 0, 0);
                                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 190, 40);
                                                                    cm.sendNormalTalk_Bottom("呵啊啊啊啊！", 37, 9401030, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("呃啊啊啊！！", 37, 9401032, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNewEffects(17, [0, 1000, 2000, 170, 100]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                  cm.sendNormalTalk_Bottom("#b大家都没事吧？！", 57, 0, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=39240130", -1);
                                                                                    cm.npc_SetForceMove("oid=39240130", -1, 10, 100);
                                                                                    cm.npc_setForceFlip("oid=39240127", 1);
                                                                                    cm.sendNormalTalk_Bottom("没有……死。", 37, 9401030, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=39240126", 1);
                                                                                      cm.sendNormalTalk_Bottom("哈，哈啊……", 37, 9401032, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=39240130"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("……没想到这里还有这样的通道。", 37, 9401033, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("因为我…… ", 37, 9401033, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("没关系，有时就是会这样，我理解！而且我也没像拉尔夫说的死了嘛！嘿嘿。", 37, 9401032, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#b……不过你以后最好还是不要独断行事。", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("呼唔……好的。我又犯错误了。", 37, 9401033, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=39240130"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("…… 没错……我的固执一直都是个问题，我会尽量不再做出同样的事情。", 37, 9401033, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("你不要太自责了。", 37, 9401030, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("是人都会失误。只要以后不重蹈覆辙就行了。", 37, 9401030, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("切记。", 37, 9401033, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.forceCompleteQuest(64784);
                                                                                                                cm.eventSKill(0);
                                                                                                                cm.dispose();
                                                                                                                cm.setNumberForQuestInfo(64789, "map", 867148300);
                                                                                                                var O = cm.getEventManager("深渊远征队");
                                                                                                                O.startInstance(cm.getPlayer());
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.npc_LeaveField("oid=39240126");
                                                                                                                cm.npc_LeaveField("oid=39240126");
                                                                                                                cm.npc_LeaveField("oid=39240127");
                                                                                                                cm.npc_LeaveField("oid=39240127");
                                                                                                                cm.npc_LeaveField("oid=39240128");
                                                                                                                cm.npc_LeaveField("oid=39240128");
                                                                                                                cm.npc_LeaveField("oid=39240129");
                                                                                                                cm.npc_LeaveField("oid=39240129");
                                                                                                                cm.npc_LeaveField("oid=39240130");
                                                                                                                cm.npc_LeaveField("oid=39240130");
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}