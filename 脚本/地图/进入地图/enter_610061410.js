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
      cm.updateInfoQuest(61333, "act1=610061410");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.forceStartQuest(61341);
      cm.npc_ChangeController(9201546, "oid=2851526", -1280, 173, 26, -1330, -1230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2851526", "summon", 0, 0);
      cm.npc_ChangeController(9201547, "oid=2851527", -1280, 173, 26, -1330, -1230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2851527", "summon", 0, 0);
      cm.npc_ChangeController(9201548, "oid=2851528", -1280, 173, 26, -1330, -1230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2851528", "summon", 0, 0);
      cm.npc_ChangeController(9201549, "oid=2851529", -1280, 173, 26, -1330, -1230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2851529", "summon", 0, 0);
      cm.npc_ChangeController(9201536, "oid=2851530", -1280, 173, 26, -1330, -1230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2851530", 'summon', 0, 0);
      cm.npc_SetForceMove("oid=2851526", 1, 2000, 300);
      cm.npc_SetForceMove("oid=2851527", 1, 2000, 250);
      cm.npc_SetForceMove("oid=2851528", 1, 600, 200);
      cm.npc_SetForceMove("oid=2851529", 1, 500, 200);
      cm.npc_SetForceMove("oid=2851530", 1, 700, 200);
      cm.inGameDirectionEvent_AskAnswerTime(4200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
        cm.inGameDirectionEvent_AskAnswerTime(5200);
        cm.npc_LeaveField("oid=2851526");
        cm.npc_LeaveField("oid=2851527");
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=2851528", -1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=2851530", -1);
            cm.sendNormalTalk_Bottom("哎哟，差点就不行了！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.addPopupSay(9201537, 2000, "哈哈哈，你加把劲！\r\n这东西还在测试中呢。", '', 0);
              cm.inGameDirectionEvent_AskAnswerTime(4200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("测试？\r\n你都没做好就拿来用了？\r\n真是……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=2851526");
                  cm.npc_LeaveField("oid=2851527");
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("什么情况？\r\n他们不是很着急吗，为什么突然停下了？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.addPopupSay(9201537, 2000, "呃。不知道。靠近点儿看看。", '', 0);
                      cm.inGameDirectionEvent_AskAnswerTime(4200);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -750, 250);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("怎么了，利瑞尼？", 37, 9201548, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('我……', 37, 9201549, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('……', 37, 9201548, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("听着，我理解你的感受。\r\n要面对纳瑞坎这样的家伙确实很吓人。", 37, 9201536, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("但我们只有齐心协力，才能阻止他，利瑞尼。", 37, 9201536, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("别担心。\r\n我会保护你的。", 37, 9201548, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我只是想见到新的世界。\r\n我唯一知道的世界就是反转界。", 37, 9201549, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("我也没去过别的地方。\r\n或许摧毁幻日只是我为离开这里找的借口而已……", 37, 9201549, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("我想要离开#b守护者的要塞#k和#b克拉奇安#k，就这么一走了之。", 37, 9201549, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('这是我唯一的愿望。', 37, 9201549, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("她刚才是说守护者的要塞这三个字了吗？", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.addPopupSay(9201537, 2000, '说了！我还录下来了。', '', 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.addPopupSay(9201537, 2000, "他们提到克拉齐亚的守护者的要塞了。", '', 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(6200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.addPopupSay(9201537, 2000, "这就说明……", '', 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("但只要我们还身在冒险岛世界，我们就有义务守护幻日。", 37, 9201536, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("借助它的力量是为了更好地守护它。\r\n你比任何人都更清楚这点。", 37, 9201536, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("但我并不想把一生都花在这上面。", 37, 9201549, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("抱歉……但我没法承担守护一个世界的责任。", 37, 9201549, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_LeaveField("oid=2851529");
                                                                                  cm.npc_LeaveField("oid=2851529");
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("利瑞尼！", 37, 9201548, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("……我理解她。\r\n难道你们不理解？", 37, 9201548, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_setForceFlip("oid=2851530", 1);
                                                                                          cm.sendNormalTalk_Bottom("#face2#她背叛了我们的信任和绯红之心的期望。\r\n她必须付出代价。", 37, 9201536, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_setForceFlip("oid=2851528", 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetForceMove("oid=2851528", 1, 1000, 150);
                                                                                                    cm.npc_SetForceMove("oid=2851530", 1, 900, 200);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=2851530");
                                                                                                      cm.npc_LeaveField("oid=2851530");
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_LeaveField("oid=2851528");
                                                                                                        cm.npc_LeaveField("oid=2851528");
                                                                                                        cm.sendNormalTalk_Bottom("我不太明白……利瑞尼算懦夫吗？", 57, 0, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("绯红之心说只有我们齐心协力才能获胜。", 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("如果我没猜错的话……这个叫克拉奇安的地方，其实就是克拉齐亚？", 57, 0, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                              cm.updateInfoQuest(61368, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1");
                                                                                                              cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.eventSKill(0);
                                                                                                              cm.setInGameDirectionMode(false, true, false);
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