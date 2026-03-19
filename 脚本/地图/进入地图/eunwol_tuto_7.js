var status = -1;
function action(f, E, e) {
  status++;
  if (cm.getInfoQuest(38900) === '4') {
    var V = -1;
    if (status <= V++) {
      cm.dispose();
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, true);
        cm.setStandAloneMode(true);
        cm.npc_ChangeController(3002100, 200, -145, 1);
        cm.npc_SetSpecialAction(3002100, "summon");
        cm.npc_ChangeController(3002001, -30, -145, 0);
        cm.npc_SetSpecialAction(3002001, "summon");
        cm.npc_ChangeController(3002002, -100, -145, 0);
        cm.npc_SetSpecialAction(3002002, "summon");
        cm.npc_ChangeController(3002003, 260, -145, 1);
        cm.npc_SetSpecialAction(3002003, "summon");
        cm.npc_ChangeController(3002004, 40, -145, 0);
        cm.npc_SetSpecialAction(3002004, 'summon');
        cm.sendNextSNoESC("你在干什么呢？");
      } else {
        if (status === V++) {
          cm.sendNextNoESC("哎呀，真的没有尾巴！", 3002004);
        } else {
          if (status === V++) {
            cm.sendNextNoESC("你真坏。妈妈说，不能拿别人的缺陷开玩笑。", 3002002);
          } else {
            if (status === V++) {
              cm.sendNextSNoESC("哈……这个情况，到底是……");
            } else {
              if (status === V++) {
                cm.sendNextNoESC("阿琅，我们先回村里去了。你带着他过来吧。", 3002003);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField(3002001);
                  cm.npc_LeaveField(3002002);
                  cm.npc_LeaveField(3002003);
                  cm.npc_LeaveField(3002004);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC("我们也走吧，人类。", 3002100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else if (status === V++) {
                      cm.npc_LeaveField(3002100);
                      cm.curNodeEventEnd(true);
                      cm.setInGameDirectionMode(false, true);
                      cm.setStandAloneMode(false);
                      cm.dispose();
                      cm.warp(940200060, 0);
                    } else {
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
  } else {
    var V = -1;
    if (status <= V++) {
      cm.dispose();
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, true);
        cm.setStandAloneMode(true);
        cm.npc_ChangeController(3002100, 200, -145, 1);
        cm.npc_SetSpecialAction(3002100, 'summon');
        cm.npc_ChangeController(3002001, -30, -145, 0);
        cm.npc_SetSpecialAction(3002001, "summon");
        cm.npc_ChangeController(3002002, -100, -145, 0);
        cm.npc_SetSpecialAction(3002002, "summon");
        cm.npc_ChangeController(3002003, 260, -145, 1);
        cm.npc_SetSpecialAction(3002003, "summon");
        cm.npc_ChangeController(3002004, 40, -145, 0);
        cm.npc_SetSpecialAction(3002004, "summon");
        cm.inGameDirectionEvent_MoveAction(4);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/0"], [0, 20, -80]);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(3);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNextSNoESC('这，这里是……？');
            } else {
              if (status === V++) {
                cm.sendNextNoESC("哦，站起来了，站起来了。", 3002003);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC("太好了，说话了。看来他还会说话！", 3002002);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC("看到了吗？看到了吗？眼珠子圆圆的！", 3002004);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC("非常大！该不会吃了我们吧？", 3002001);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC("呃……", 3002001);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC("哎呀，他好像有什么地方疼。你去问问他疼不疼。", 3002004);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC("干嘛老是让我去。我害怕。", 3002001);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC("这些胆小鬼！都给我让开。你！哪里疼吗？", 3002001);
                            } else {
                              if (status === V++) {
                                cm.sendNextSNoESC("不，现在没事了。头稍微有点晕。这是什么地方？你们是……");
                              } else {
                                if (status === V++) {
                                  cm.sendNextNoESC("我们是尖耳狐狸。这里是我们生活的地方。你是谁？你是怎么到这里来的？这里是我们的土地。", 3002001);
                                } else {
                                  if (status === V++) {
                                    cm.sendNextSNoESC("(尖耳狐狸？估计是不为人知的异族。长着耳朵和尾巴，真的和狐狸很像。)");
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextSNoESC("我是人类。我是从时间神殿附近来的，这个地方在哪里？");
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextNoESC("人类？时间神殿？还是头一次听说。", 3002001);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextSNoESC("(不知道时间神殿吗？我到底来到了什么地方？这里到底是……)");
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction2.img/effect/chat/nugu/0"], [2000, 0, -80, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNextSNoESC("月，月亮怎么有两个？！");
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNextNoESC("……？月亮本来就有两个。人类，你很痛苦吗？", 3002001);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNextSNoESC("月亮本来就有两个？怎么可能！而且，我的等级……#r#e10级#k#n？！到底发生了什么事……！");
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNextNoESC("没有耳朵就已经很奇怪了。头脑也好像有点不太正常。", 3002001);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNextNoESC("所以才被抛弃了吗？唉，真可怜……", 3002002);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNextNoESC("真可怜。我们先把他带回村里去吧。", 3002000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNextNoESC("不过随便把陌生人带回去的话，会被大人们骂的。", 3002001);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNextNoESC("但是又不能把他扔在这里。一切由我负责。走吧！", 3002000);
                                                            } else if (status === V++) {
                                                              cm.npc_LeaveField(3002100);
                                                              cm.npc_LeaveField(3002001);
                                                              cm.npc_LeaveField(3002002);
                                                              cm.npc_LeaveField(3002003);
                                                              cm.npc_LeaveField(3002004);
                                                              cm.updateInfoQuest(38900, '4');
                                                              cm.curNodeEventEnd(true);
                                                              cm.setInGameDirectionMode(false, true);
                                                              cm.setStandAloneMode(false);
                                                              cm.dispose();
                                                              cm.warp(940200000, 0);
                                                            } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;