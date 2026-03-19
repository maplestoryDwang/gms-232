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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 700, -255);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400580, "oid=7539013", 640, -240, 55, 590, 690, 0, true, false);
      cm.npc_SetSpecialAction("oid=7539013", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=7539014", 600, -220, 56, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=7539014", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#… 如果沉睡森林外围出现了芬里斯… ", 37, 9400580, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#我估计攻击马上就要开始了。", 37, 9400582, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#如果能知道我们有多少时间的话… ", 37, 9400580, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b… 我们只能快点完成准备。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#弩炮已经完成，投石器也快… 完成了。", 37, 9400580, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b肯定会很有帮助的。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#现在… 只剩下修补城墙了…", 37, 9400580, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                          cm.npc_SetForceMove("oid=7539013", 1, 60, 70);
                          cm.npc_SetForceMove("oid=7539014", 1, 60, 70);
                          cm.inGameDirectionEvent_AskAnswerTime(900);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.onTeleport(0, 3, cm.getPlayer().getId(), 1420, -520);
                              cm.npc_LeaveField("oid=7539013");
                              cm.npc_LeaveField("oid=7539013");
                              cm.npc_LeaveField("oid=7539014");
                              cm.npc_LeaveField("oid=7539014");
                              cm.npc_ChangeController(9400580, "oid=7539066", 1380, -520, 46, 1330, 1430, 0, true, false);
                              cm.npc_SetSpecialAction("oid=7539066", "summon", 0, 0);
                              cm.npc_ChangeController(9400582, "oid=7539067", 1340, -520, 45, 1290, 1390, 0, true, false);
                              cm.npc_SetSpecialAction("oid=7539067", "summon", 0, 0);
                              cm.npc_ChangeController(9400600, "oid=7539068", 1560, -530, 47, 1510, 1610, 0, true, false);
                              cm.npc_SetSpecialAction("oid=7539068", "summon", 0, 0);
                              cm.npc_ChangeController(9400604, "oid=7539069", 1650, -530, 48, 1600, 1700, 1, true, false);
                              cm.npc_SetSpecialAction("oid=7539069", "summon", 0, 0);
                              cm.npc_ChangeController(9400604, "oid=7539070", 1720, -530, 48, 1670, 1770, 1, true, false);
                              cm.npc_SetSpecialAction("oid=7539070", 'summon', 0, 0);
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=7539068", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=7539068", -1, 50, 50);
                                      cm.sendNormalTalk_Bottom("啊，#h0# 你回来了。我听说你和古纳德村长出去打猎了，有什么收获吗？", 37, 9400600, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b是的，这一阵子的粮食可以不用操心了。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("是个好消息啊！", 37, 9400600, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b… 不过… ", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("… 不过什么？", 37, 9400600, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b在回来的路上，我们在森林外围遇到了芬里斯，芬里斯跑到森林外围的话… ", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("是不是马上就要攻击了？", 37, 9400600, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b是的，说明我们剩下的时间不多了。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b在卡夫塔佩，芬里斯也和暴走怪物一起攻过来的。", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#… 斯巴乐缇也是一样。", 37, 9400582, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("那我们抓紧时间吧。", 37, 9400600, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b城墙修补进展如何？", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("快结束了。一部分人员派出去做侦查，一部分又去制造投石器，剩下的人也不多。", 37, 9400600, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b那我也去帮忙吧。", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(9400586, "oid=7539116", 1260, -520, 45, 1210, 1310, 0, true, false);
                                                                    cm.npc_SetSpecialAction("oid=7539116", "summon", 0, 0);
                                                                    cm.npc_ChangeController(9400588, "oid=7539117", 1220, -520, 45, 1170, 1270, 0, true, false);
                                                                    cm.npc_SetSpecialAction("oid=7539117", "summon", 0, 0);
                                                                    cm.npc_ChangeController(9400601, "oid=7539118", 1180, -520, 45, 1130, 1230, 0, true, false);
                                                                    cm.npc_SetSpecialAction("oid=7539118", "summon", 0, 0);
                                                                    cm.npc_ChangeController(9400592, "oid=7539119", 1140, -520, 45, 1090, 1190, 0, true, false);
                                                                    cm.npc_SetSpecialAction("oid=7539119", "summon", 0, 0);
                                                                    cm.npc_ChangeController(9400598, "oid=7539120", 1100, -520, 45, 1050, 1150, 0, true, false);
                                                                    cm.npc_SetSpecialAction("oid=7539120", "summon", 0, 0);
                                                                    cm.sendNormalTalk_Bottom('我这老骨头也去帮忙。', 37, 9400586, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("我也去！", 37, 9400588, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("我也一起去！", 37, 9400601, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#b大家怎么知道的…？", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("我看到古纳德村长在到处宣传？", 37, 9400588, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("说斯洛克叔叔在森林外围碰到了芬里斯拔腿就跑… 还说芬里斯是攻击马上要开始的征兆…！", 37, 9400588, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#b啊… 还是…", 57, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_ChangeController(9400590, "oid=7539131", 1560, -520, 47, 1510, 1610, 1, true, false);
                                                                                  cm.npc_SetSpecialAction("oid=7539131", 'summon', 0, 0);
                                                                                  cm.npc_ChangeController(9400597, "oid=7539132", 1610, -520, 47, 1560, 1660, 1, true, false);
                                                                                  cm.npc_SetSpecialAction("oid=7539132", "summon", 0, 0);
                                                                                  cm.sendNormalTalk_Bottom("#face0#…我… 也去帮忙… ", 37, 9400590, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#好~！在芬里斯到来之前，一定要把城墙修的结结实实，咳呵呵", 37, 9400597, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("人多了就可以马上做完。", 37, 9400600, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("大家分区域去搬石头的话能更快完成。从这到那里是莎娜安的区域，阶梯下边是古纳德，再下边是郁兰，还有… ", 37, 9400600, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("修炼空地到城墙之前是 #h0# 的区域。", 37, 9400600, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#b是，维尔纳村长！感谢大家，趁这股劲我们尽快做完吧！", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                              cm.effect_NormalSpeechBalloon("好… 快点完成… ", 0, 0, 0, 2000, 9400590, cm.getPlayer().getId());
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                cm.effect_NormalSpeechBalloon("咳呵呵，这点程度！", 0, 0, 0, 2000, 9400597, cm.getPlayer().getId());
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                  cm.effect_NormalSpeechBalloon("大家一起做事多好。", 0, 0, 0, 2000, 9400586, cm.getPlayer().getId());
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                    cm.effect_NormalSpeechBalloon("好~！", 0, 0, 0, 2000, 9400588, cm.getPlayer().getId());
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                      cm.effect_NormalSpeechBalloon("是，遵命！", 0, 0, 0, 2000, 9400601, cm.getPlayer().getId());
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                        cm.effect_NormalSpeechBalloon("交给我们吧！", 0, 0, 0, 2000, 9400604, cm.getPlayer().getId());
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else if (status === V++) {
                                                                                                          cm.warp(867202311, 0, true);
                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                          cm.forceStartQuest(64127, '');
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;