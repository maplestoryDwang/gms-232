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
      cm.npc_ChangeController(3003669, 'oid=275749', 1223, 162, 7, 1173, 1273, 1, true, 0, false);
      cm.npc_ChangeController(3003669, 'oid=275750', 1112, 161, 7, 1062, 1162, 1, true, 0, false);
      cm.npc_ChangeController(3003669, "oid=275751", 1004, 152, 6, 954, 1054, 1, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275752", 2537, 204, 10, 2487, 2587, 1, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275753", 2456, 206, 10, 2406, 2506, 1, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275754", 2374, 207, 10, 2324, 2424, 1, true, 0, false);
      cm.npc_ChangeController(3003660, 'oid=275755', 2296, 209, 10, 2246, 2346, 1, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275756", 2216, 204, 9, 2166, 2266, 1, true, 0, false);
      cm.npc_ChangeController(3003672, "oid=275757", 1792, 162, 8, 1742, 1842, 0, true, 0, false);
      cm.npc_ChangeController(3003675, "oid=275758", 1387, 163, 7, 1337, 1437, 0, true, 0, false);
      cm.npc_ChangeController(3003676, "oid=275759", 1558, 164, 8, 1508, 1608, 0, true, 0, false);
      cm.npc_ChangeController(3003677, "oid=275760", 1461, 163, 7, 1411, 1511, 0, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 2677, 230);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003651, "oid=2201551", 2682, 174, 10, 2632, 2732, 1, true, 1000, false);
          cm.npc_SetSpecialAction("oid=2201551", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, 1937, 230);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2201551", -1, 640, 150);
              cm.inGameDirectionEvent_AskAnswerTime(5000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#出征的时间……即将临近。\r\n是吧，南哈特？", 37, 3003672, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#没错。来，在出征之前，请收下这个联盟证物。", 37, 3003651, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#又要在联盟的旗帜下赶赴战场了。", 37, 3003672, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#虽然埃德尔斯坦解放了，但世界却笼罩在了黑幕之下……\r\n只要黑魔法师还在，我们就无法获得完全的自由。", 37, 3003672, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#虽然我们曾经反目成仇，但现在却都是同甘共苦的联盟成员。", 37, 3003672, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#在遇到困难的时候，这个证物就会成为我们心中的力量。\r\n因为……这是我们来之不易的……信任。", 37, 3003672, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#在这次战争中还请你多多关照，吉格蒙特。", 37, 3003651, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 1520, 230);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#跨越次元的远征……真让人兴奋。\r\n不是吗，贝尔？", 37, 3003677, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#韩利泰，这不是去郊游。\r\n你能稍微严肃一点吗？", 37, 3003676, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#总比瑟瑟发抖强吧？\r\n越是这样，心就越要放宽。", 37, 3003677, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1730, 230);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#你们还是老样子，呵呵。就像一对蟋蟀。", 37, 3003651, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#哼！你想怎样！？", 37, 3003676, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哈，哈哈……南哈特？", 37, 3003677, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#呃啊……大家最好冷静点！！", 37, 3003675, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#哎呀，开个玩笑。", 37, 3003651, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#我……能发火吗！？", 37, 3003676, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#哈……哈哈……", 37, 3003675, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#好了，我先回白色之矛去了。", 37, 3003651, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#韩利泰，贝尔，切奇。\r\n以及反抗者的所有人……拜托你们了。", 37, 3003651, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#祝你好运。", 37, 3003672, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#请多多关照。", 37, 3003677, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#我要让他们尝尝反抗者的厉害。", 37, 3003676, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#哦哦哦！！", 37, 3003675, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.npc_LeaveField("oid=2201551");
                                                                                                    cm.npc_LeaveField("oid=2201551");
                                                                                                    cm.dispose();
                                                                                                    cm.warp(993060074, 0, false);
                                                                                                    cm.setStandAloneMode(false);
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}