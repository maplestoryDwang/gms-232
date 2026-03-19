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
      cm.npc_ChangeController(9400677, "oid=3698984", 1650, 320, 22, 1600, 1700, 1, true, false);
      cm.npc_SetSpecialAction("oid=3698984", "summon", 0, 0);
      cm.npc_ChangeController(9400678, "oid=3698985", 1500, 320, 20, 1450, 1550, 1, true, false);
      cm.npc_SetSpecialAction("oid=3698985", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=3698986", 1400, 320, 23, 1350, 1450, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698986", 'summon', 0, 0);
      cm.npc_ChangeController(9400617, "oid=3698987", 1340, 320, 18, 1290, 1390, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698987", 'summon', 0, 0);
      cm.npc_ChangeController(9400580, "oid=3698988", 1300, 320, 18, 1250, 1350, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698988", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=3698989", 1250, 320, 15, 1200, 1300, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698989", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3698990", 850, 320, 8, 800, 900, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698990", "summon", 0, 0);
      cm.npc_ChangeController(9400618, "oid=3698991", 800, 320, 6, 750, 850, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698991", "summon", 0, 0);
      cm.npc_ChangeController(9400619, "oid=3698992", 750, 320, 6, 700, 800, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698992", "summon", 0, 0);
      cm.npc_ChangeController(9400679, "oid=3698993", 500, 320, 5, 450, 550, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698993", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3698994", 350, 320, 2, 300, 400, 0, true, false);
      cm.npc_SetSpecialAction("oid=3698994", "summon", 0, 0);
      cm.npc_ChangeController(9400587, "oid=3698995", 1150, 320, 16, 1100, 1200, 1, true, false);
      cm.npc_SetSpecialAction("oid=3698995", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=3698996", 680, 320, 13, 630, 730, 1, true, false);
      cm.npc_SetSpecialAction("oid=3698996", 'summon', 0, 0);
      cm.npc_SetForceMove("oid=3698984", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698985", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698986", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698987", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698988", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698989", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698990", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698991", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698992", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698993", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698994", 1, 1000, 70);
      cm.npc_SetForceMove("oid=3698996", 1, 400, 70);
      cm.npc_setForceFlip("oid=3698995", -1);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0##h0#……谢谢你。刚才一阵慌乱，没来得及跟你道谢。", 37, 9400589, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=3698995", 1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=3698995", 1, 100, 100);
              cm.sendNormalTalk_Bottom("#face0#可汗！", 37, 9400589, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#可汗，我没事。", 37, 9400589, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#哈啊……我想着你估计在担忧我的状况……", 37, 9400589, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3698995"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你没话要跟我说吗？", 37, 9400589, false, true);
                            cm.npc_LeaveField("oid=3698984");
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#……我，我只是做了我该做的选择。", 37, 9400587, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#话一说出口就收不回了，我只担心将来你会后悔。", 37, 9400589, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true);
                                  cm.npc_LeaveField("oid=3698985");
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3698995"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      cm.npc_LeaveField("oid=3698986");
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=3698995", 1, 900, 70);
                                        cm.sendNormalTalk_Bottom("#face0#……可汗……", 37, 9400589, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#可汗也在半年前失去了妻子。", 37, 9400589, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('#b……我听说了。', 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#当时……包括我在内的村里的青壮年，不止，应该是对打猎有帮助的所有人都到远处去打猎了。因为村里有条默认的规矩是“不能让村庄处于无防备状态。”，所以很少出现这样所有人全体出动的情况，但那时候我们没有别的选择。", 37, 9400589, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#那段时期和往常不一样。明明还没到冬天，附近却遍寻不到猎物的踪迹了。", 37, 9400589, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b冬天……", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#在寒冷的阿布鲁也是有冬天的，也就是沉睡森林的气息停歇的时期。可汗村长想着，趁情况变得更糟之前，得到更远处去，哪怕让村子变得无人防守……也要动员更多的人去打猎，才能度过冬天。", 37, 9400589, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#所以在大家外出打猎的那段期间，村里只剩下小孩，和照顾孩子的母亲。", 37, 9400589, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#然而森林深处的情况也没有两样，根本没看见猎物……不能空手回去的我们比预定的在森林里徘徊了更长时间，最后终于捕到了20头巨大的花花象。", 37, 9400589, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#然后回到了村里，可村子已经……。", 37, 9400589, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b这么说……可汗执着于规矩的原因就是……", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#他那时肯定比谁都伤心，估计现在也是。可他没有时间去面对自己的伤感。因为他得去抚慰其他人，还得重新领导村里的大局。", 37, 9400589, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#他无数次地责备自己违反了村里的规矩，好不容易让村子在表面上恢复了原样……然而却再次发生了这样的事情。", 37, 9400589, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#尽管大家都说他自私，说他自以为是……可我在他身边看到了这所有的经过，至少我该理解他。", 37, 9400589, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=3698996", 1, 300, 70);
                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                                      cm.sendNormalTalk_Bottom("#face0#他没有做错什么。", 37, 9400589, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#只是……他以为严守规定，尽可能保住大多数人是自己能做到的最佳选择罢了……", 37, 9400589, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetForceMove("oid=3698996", 1, 300, 70);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else if (status === V++) {
                                                                            cm.setNumberForQuestInfo(64006, 'Ec', 17);
                                                                            cm.warp(867200550, 16);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=3698984");
                                                                            cm.npc_LeaveField("oid=3698984");
                                                                            cm.npc_LeaveField("oid=3698985");
                                                                            cm.npc_LeaveField("oid=3698985");
                                                                            cm.npc_LeaveField("oid=3698986");
                                                                            cm.npc_LeaveField("oid=3698986");
                                                                            cm.npc_LeaveField("oid=3698987");
                                                                            cm.npc_LeaveField("oid=3698987");
                                                                            cm.npc_LeaveField("oid=3698988");
                                                                            cm.npc_LeaveField("oid=3698988");
                                                                            cm.npc_LeaveField("oid=3698989");
                                                                            cm.npc_LeaveField("oid=3698989");
                                                                            cm.npc_LeaveField("oid=3698990");
                                                                            cm.npc_LeaveField("oid=3698990");
                                                                            cm.npc_LeaveField("oid=3698991");
                                                                            cm.npc_LeaveField("oid=3698991");
                                                                            cm.npc_LeaveField("oid=3698992");
                                                                            cm.npc_LeaveField("oid=3698992");
                                                                            cm.npc_LeaveField("oid=3698993");
                                                                            cm.npc_LeaveField("oid=3698993");
                                                                            cm.npc_LeaveField("oid=3698994");
                                                                            cm.npc_LeaveField("oid=3698994");
                                                                            cm.npc_LeaveField("oid=3698995");
                                                                            cm.npc_LeaveField("oid=3698995");
                                                                            cm.npc_LeaveField("oid=3698996");
                                                                            cm.npc_LeaveField("oid=3698996");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;