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
      cm.useItem(2210203, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1620, -24);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1501, -63);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#咦？冒险能量怎么降低了这么多？", 37, 2052004, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#阿琳？怎么了？", 37, 2052003, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face5#额……看来因为阿亮哥哥很是担心啊，那个……", 37, 2052004, true, true);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(2052029, "oid=38263614", 1725, -43, 47, 1675, 1775, 1, true, false);
                  cm.npc_SetSpecialAction("oid=38263614", "summon", 0, 0);
                  cm.npc_ChangeController(2052029, "oid=38263615", 1815, -43, 47, 1765, 1865, 1, true, false);
                  cm.npc_SetSpecialAction("oid=38263615", "summon", 0, 0);
                  cm.sendNormalTalk_Bottom("#face2#嘘，是放哨的！", 37, 2052000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#喂！我说你！怎么进来这里的？", 37, 2052029, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.sendNormalTalk_Bottom('#face1#额！', 37, 2052009, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#再这样下去会被发现的！", 37, 2052009, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#冷静点！周围没有可以藏的地方吗？", 37, 2052000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#没有！没有那种地方！", 37, 2052001, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#那就先……！", 37, 2052000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3##fs23##r把我们吃了！宅宅！放在嘴里！#k", 37, 2052005, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#额！我不要~", 37, 2052003, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/omegaSector/duck/1", 0, 500, 0, 0, 18, 4, 1);
                                      cm.sendNormalTalk_Bottom("#face1#啊呜！", 37, 2052009, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我问你怎么进来这里的？", 37, 2052029, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#我……我以为这里是洗手间……", 37, 2052009, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯？你说什么呢？这家伙可真是可疑？", 37, 2052029, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#嗯，不是那样的，洗手间……洗手间……嘟嘟囔囔", 37, 2052009, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#要是我数到三，你还回答不上来，我就联系控制室，一、二~", 37, 2052029, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#怎么办？要被发现了！", 37, 2052001, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#紧急状况！紧急状况！！", 37, 2052002, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#冒险勇士！！准备终极激光！", 37, 2052000, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#不，不要……", 37, 2052009, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#我数到三，你就张嘴，宅宅！", 37, 2052000, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('#face3#一！', 37, 2052000, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom('#face3#二~', 37, 2052000, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#三！！！！！", 37, 2052000, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#等一下！我的冒险能量降低得太多了，没法发射……啊！", 37, 2052004, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect3.img/omegaSector/badge/2/1", 0, 500, 0, 0, 19, 4, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('4', "Map/Effect3.img/omegaSector/badge/2/2", 0, 500, 0, 0, 21, 4, 1);
                                                                      cm.fieldEffect_ProcessOnOffLayer('5', "Map/Effect3.img/omegaSector/badge/2/3", 0, 500, 0, 0, 22, 4, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('6', "Map/Effect3.img/omegaSector/badge/1/1", 0, 500, 0, 0, 20, 4, 1);
                                                                        cm.sendNormalTalk_Bottom("#face2##fc0xFFAAAAAA#(徽章……要是用这个！)#k", 37, 2052004, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 500, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer('4', '', 2, 500, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer('5', '', 2, 500, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer('6', '', 2, 500, 0, 0, 0, 0, 0);
                                                                            cm.sendNormalTalk_Bottom("#face3#发射终极激光！！！", 37, 2052000, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#发射！！！！", 37, 2052003, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#发~射！！！", 37, 2052001, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#发~射啊啊啊啊！！！", 37, 2052005, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#发~射！！！", 37, 2052001, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect3.img/omegaSector/duck/2", 0, 100, 0, 0, 20, 4, 1);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/rhythmGame/0/laserParty", 200);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom('额啊啊啊啊！！', 37, 2052029, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/4230129/Die", 200);
                                                                                          cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 100, 0, 0, 0, 0, 0);
                                                                                          cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#哎哟，真是万幸，算是顺利过关了吗？", 37, 2052001, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#大部分都是#b粉狼能量#k嘛？", 37, 2052002, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#阿琳的能量有这么厉害吗？？", 37, 2052005, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#居然用小冒险勇士徽章就能有这么大的能量，\r\n看来你已经成长了一个台阶啊，阿琳。", 37, 2052000, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#不愧是我们的阿琳，该出手时就出手。", 37, 2052003, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face2#我说，这个徽章……", 37, 2052004, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#额，刚刚那个耗费了超出半数的冒险能量……", 37, 2052004, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else if (status === V++) {
                                                                                                          cm.updateInfoQuest(3484, "pass=2;enter=1");
                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                                                                                          cm.dispose();
                                                                                                          cm.warp(221030540, 2);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;