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
      cm.npc_ChangeController(9400635, "oid=204544", -1176, 106, 5, -1226, -1126, 0, true, false);
      cm.npc_ChangeController(9400636, "oid=204545", -1244, 103, 5, -1294, -1194, 0, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400597, "oid=7536962", -270, -80, 18, -320, -220, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536962", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -370, -80);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400632, "oid=7536963", -450, -80, 18, -500, -400, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536963", 'summon', 0, 0);
      cm.npc_ChangeController(9400633, "oid=7536964", -520, -80, 18, -570, -470, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536964", 'summon', 0, 0);
      cm.npc_ChangeController(9400583, "oid=7536965", -150, -80, 18, -200, -100, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536965", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=7536966", -100, -80, 18, -150, -50, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536966", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#face0#呵额…呵额，哎哟妈呀，累死了。", 37, 9400597, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#做的很好！", 37, 9400583, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b是真的，我连动都动不了。", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我们也是！", 37, 9400585, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#咳呃，是吗~？！", 37, 9400597, true, true);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(9400586, "oid=7536979", 150, -180, 36, 100, 200, 1, true, false);
                cm.npc_SetSpecialAction("oid=7536979", "summon", 0, 0);
                cm.npc_ChangeController(9400601, "oid=7536980", 220, -180, 36, 170, 270, 1, true, false);
                cm.npc_SetSpecialAction("oid=7536980", "summon", 0, 0);
                cm.npc_ChangeController(9400590, "oid=7536981", 300, -180, 37, 250, 350, 1, true, false);
                cm.npc_SetSpecialAction("oid=7536981", 'summon', 0, 0);
                cm.npc_SetForceMove("oid=7536979", -1, 250, 70);
                cm.npc_SetForceMove("oid=7536980", -1, 250, 70);
                cm.npc_SetForceMove("oid=7536981", -1, 250, 70);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#h0#… 我们的粮食快没有了… ", 37, 9400586, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这样下去我们维持不了几天，因为看不到维尔纳村长，就先过来找你了。", 37, 9400586, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b… 那么要赶紧去狩猎，得补充粮食了。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#古纳德村长，暴走怪的体型比较大，可能会更加吃力。所以最好能利用几个普通怪物，练练实战手感。", 37, 9400583, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是… 是吗？", 37, 9400597, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#这次是个好机会。", 37, 9400583, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#真的吗？", 37, 9400597, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#粮食不够？", 37, 9400597, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("是的，人比较多，因此粮食消耗的比预想的还快…", 37, 9400601, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("剩下的粮食我们最多撑不过两天。", 37, 9400601, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#咳呃，那是很重要的事情吧？", 37, 9400597, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("是的，没有粮食我们就没法坚持下去。", 37, 9400601, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#咳呃！重要的事情！由我们去解决！", 37, 9400597, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b真的吗？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("哈，那样就太好了，我们可以放下心了。", 37, 9400601, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400590, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=7536981", -1, 200, 70);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#古纳德村长对地形不熟！就由我来带路吧！", 37, 9400590, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#… 你？", 37, 9400597, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b斯洛克？我还没有拜托你… ", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNewEffects(17, [1000, 1000, 2000, -280, -160]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#除了我还有谁？我也得帮上一点忙吧，不是吗？", 37, 9400590, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=7536981", 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=7536981"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("大家… 真是太感谢你们了。", 37, 9400601, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=7536981"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=7536981", -1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNewEffects(19, [0]);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#不，就我们几个去就够了？#h0#？吉莉骑士？你们不一起去吗？", 37, 9400597, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#我还得要训练士兵，恐怕去不了。", 37, 9400583, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#b我当然会一起去，不过有斯洛克带路的话我会更加放心。", 57, 0, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#b好歹他也是狩猎专家，对森林的地形也非常熟悉。", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#看吧？呵呵呵。不，不是。", 37, 9400590, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#听到了吧，古纳德村长？我可是能帮上大忙的人。", 37, 9400590, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#咳…咳呃！", 37, 9400597, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#b那么我们就出发吧？", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("你们一路小心。", 37, 9400586, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#不用担心！", 37, 9400590, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#那我们抓紧出发吧！", 37, 9400590, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetForceMove("oid=7536981", -1, 300, 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else if (status === V++) {
                                                                                                      cm.forceCompleteQuest(64120);
                                                                                                      cm.forceStartQuest(64121, '');
                                                                                                      cm.forceStartQuest(64158, '');
                                                                                                      cm.warp(867202660, 1);
                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                      cm.npc_LeaveField("oid=7536962");
                                                                                                      cm.npc_LeaveField("oid=7536962");
                                                                                                      cm.npc_LeaveField("oid=7536963");
                                                                                                      cm.npc_LeaveField("oid=7536963");
                                                                                                      cm.npc_LeaveField("oid=7536964");
                                                                                                      cm.npc_LeaveField("oid=7536964");
                                                                                                      cm.npc_LeaveField("oid=7536965");
                                                                                                      cm.npc_LeaveField("oid=7536965");
                                                                                                      cm.npc_LeaveField("oid=7536966");
                                                                                                      cm.npc_LeaveField("oid=7536966");
                                                                                                      cm.npc_LeaveField("oid=7536979");
                                                                                                      cm.npc_LeaveField("oid=7536979");
                                                                                                      cm.npc_LeaveField("oid=7536980");
                                                                                                      cm.npc_LeaveField("oid=7536980");
                                                                                                      cm.npc_LeaveField("oid=7536981");
                                                                                                      cm.npc_LeaveField("oid=7536981");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;