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
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(3003250, "oid=1759634", 170, -50, 1, 120, 220, 1, true, false);
      cm.npc_SetSpecialAction("oid=1759634", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=1759634", "stand2", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 80, 50);
    } else {
      if (status === V++) {
        cm.forceStartQuest(34331, '');
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face6#最终你还是来到了这里。", 37, 3003250, false, true);
            cm.effect_Voice("Voice3.img/Lucid/Q4/0", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你不要再折磨大家了！在你创造的世界里，没有人是幸福的！", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你片面地认为只是吃饱喝好，可以享受就是幸福，人们在你创造的世界里只是像鹦鹉一样，不断地重复说自己很幸福！", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face6#只要伟大的他可以回心转意，这些我都无所谓。", 37, 3003250, true, true);
                  cm.effect_Voice("Voice3.img/Lucid/Q4/2", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("！！你这是什么意思？？你不是在为黑魔法师做事？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("黑魔法师究竟有什么诡计啊？！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5#你会不会有一天可以明白他的心意呢？\r\n不，不会有那一天的。", 37, 3003250, true, true);
                        cm.effect_Voice("Voice3.img/Lucid/Q4/4", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face5#好了，那现在开始吧？", 37, 3003250, true, true);
                          cm.effect_Voice("Voice3.img/Lucid/Q4/6", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#我来跟你说件以前的事吧。", 37, 3003250, true, true);
                            cm.effect_Voice("Voice3.img/Lucid/Q4/7", 128);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3003251, "oid=1759652", -107, -5, 1, -157, -57, 0, true, 1000, false);
                              cm.npc_SetSpecialAction("oid=1759652", "summon", 0, 0);
                              cm.sendNormalTalk_Bottom("#face0#请小心！", 37, 3003251, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("防毒面具？！", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#梦的媒介物是她撒的蝴蝶粉末！\r\n如果你吸进去…………！！", 37, 3003251, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face5#真是可怜，可惜已经太晚了。", 37, 3003250, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=1759634", "special", 1, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/fog2/mist_003", 'animation', '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/butterfly1", 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("现在该怎么办？！", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#请打起精神，仔细听好，#ho#。\r\n我之所以不会被她的梦境迷惑，是因为我的面具是防毒面具。", 37, 3003251, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我是她的噩梦。我存在的理由就是为了妨碍她。", 37, 3003251, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#虽然你已经陷入了梦境，但如果你帮助我，就能毁掉这个梦。请按照我的指示去做。", 37, 3003251, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("(和防毒面具说话，去打倒#r路西德（剧情）#k。) ", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=1759634");
                                                        cm.npc_LeaveField("oid=1759652");
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.dispose();
                                                                cm.warp(450004000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;