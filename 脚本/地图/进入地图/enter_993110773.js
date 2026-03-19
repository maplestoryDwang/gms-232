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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3004129, "oid=2359544", -432, 26, 3, -482, -382, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2359544", 'summon', 0, 0);
      cm.npc_ChangeController(3004131, "oid=2359545", 42, 26, 4, -8, 92, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2359545", "summon", 0, 0);
      cm.npc_ChangeController(3004132, "oid=2359546", -380, 26, 3, -430, -330, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2359546", "summon", 0, 0);
      cm.npc_ChangeController(3004133, "oid=2359547", -266, 26, 3, -316, -216, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2359547", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -5, -532);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 1000, 2500, -5, -63);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
              cm.effect_Text(["#fn黑体##fs18#据点"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#伊利温！不是说这次是为了守护世界的嘛？\r\n既然我们与联盟相处这么融洽，万一格兰蒂斯面临危险，应该也能得到不少的帮助吧？", 36, 3001308, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#是啊，真是万幸。\r\n不过并不单纯是因为功利性的原因而助阵的。", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我也曾经在某一瞬间……真心喜欢上了冒险岛世界。", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#没错！冒险岛世界真是个好地方！", 36, 3001310, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#最近我正在冒险岛世界四处探寻这附近找不到的食材！\r\n总有一天，我要在格兰蒂斯出一本关于料理的书。", 36, 3001310, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#坦白说，我也在冒险岛世界交了不少新朋友，\r\n等有机会了，再介绍给你认识。", 36, 3001308, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#我也一样！我也找到了很多超厉害的玩具，\r\n我去了趟地球防御本部，那里有这~~么大的机器人……", 36, 3001307, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#嗯~好啊好啊，\r\n不过#h0#，还有不少等着我们去解决的问题吧？", 36, 3001308, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#你倒是也听我说两句……", 36, 3001307, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4#卡尼里恩说得没错。", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#虽然已经度过了重大难关，但眼下庆祝还为时过早。", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#因为阿加特老师将水晶交给我的同时，也将平民翼人的未来交给了我。", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face4#想要负起这桩使命前行，路途就依然漫长而且充满险阻。", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#我也会竭尽所能来帮你的，#h0#。", 36, 3001308, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#我，我也是能……帮上忙的吗？我可以吗？", 36, 3001310, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#坦白说我也有点害怕……\r\n事到如今又在想是不是为了什么事情被迫去战斗。", 36, 3001307, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#迪恩、莫里奥，想想看。", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#当原以为能够永恒维持的平衡在一瞬间化为乌有时，我们抱着怎样的心情……", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#我不能眼睁睁看着冒险岛世界和格兰蒂斯沦落成我的故乡今日的这幅样子。", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#也对……确实如此。\r\n我也不愿见到其他孩子像我们一样失去家人或朋友……", 36, 3001307, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#等到一切顺利解决，是不是我们就能够回归阿叙隆了呢？", 36, 3001310, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#这里固然好……可我依然没办法忘记故乡。", 36, 3001310, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#一定能寻回的，\r\n冒险岛世界和格兰蒂斯的安宁。", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#好，我感觉已经稍微有了点勇气，\r\n走吧！", 36, 3001307, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=2359547", "lightup", -1, 1);
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/rhyo_ready", 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      cm.effect_NormalSpeechBalloon('！', 1, 0, 0, 1000, 1, 0, -10, 0, 4, 3004133, null, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#那么现在开始导航。", 37, 3004133, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#不过……目的地是哪里？", 37, 3004133, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#一切的起点，我们启程的地方……", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#去格兰蒂斯。", 36, cm.getPlayer().getGender() == 0 ? 3001353 : 3001354, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_Hero9(0, 3000);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk('喳喳！！', 4, 3004150, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                  cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.warp(993120000, 5, false);
                                                                                                    cm.forceStartQuest(39701, '');
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.npc_LeaveField("oid=2359544");
                                                                                                    cm.npc_LeaveField("oid=2359544");
                                                                                                    cm.npc_LeaveField("oid=2359545");
                                                                                                    cm.npc_LeaveField("oid=2359545");
                                                                                                    cm.npc_LeaveField("oid=2359546");
                                                                                                    cm.npc_LeaveField("oid=2359546");
                                                                                                    cm.npc_LeaveField("oid=2359547");
                                                                                                    cm.npc_LeaveField("oid=2359547");
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