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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064040");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2743737", 433, 275, 22, 383, 483, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2743737", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2743737", "hurt", -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你不能就此停手吗？", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
          cm.inGameDirectionEvent_AskAnswerTime(2200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("不要管纳瑞坎，回冒险岛过你正常的生活。", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我并不责怪你。\r\n纳瑞坎实在太过强大。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你只是被他卷进了这一切。\r\n我知道的。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……呵呵。", 37, 9201539, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('？', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#真那么简单该多好。", 37, 9201539, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你……", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face5#一开始，我只是享受这种被他人需要的感觉。", 37, 9201539, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face5#我从儿时开始，就没有家人，也没有朋友。\r\n我拥有的，只有我的书，长大之后，就只有我的研究。", 37, 9201539, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face5#我在这个世界上是孤身一人。", 37, 9201539, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face5#我很固执、很讨厌输，无法容忍他人的缺点。", 37, 9201539, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#我一生都在追求渊博的知识，但所有人都瞧不起我！", 37, 9201539, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#和纳瑞坎在一起……我终于感到了快乐。", 37, 9201539, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#终于有人会注意到我……会需要我。", 37, 9201539, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5#你永远都无法理解。\r\n你……拥有关爱他人的力量。", 37, 9201539, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face5#而我没有。\r\n我需要关爱。", 37, 9201539, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("我很同情你的孤独，但是……\r\n我相信如果你不想征服世界，大家一定会认可你的。", 57, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("我知道你会加入纳瑞坎是因为你认可他的想法……但你现在看清真相了吧？", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face5#这不重要，我只想对他好。\r\n我现在只在乎他一个人。", 37, 9201539, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face5#他的存在、他的话语还有他的心……", 37, 9201539, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("听着，你得把他忘了。\r\n你我心里都清楚你有多聪明，跟你战斗的这段时间，我也清楚了你有多强。", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("回冒险岛世界吧，你可以从头开始的。", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("我会告诉大家你失踪了。\r\n他们没必要知道这事的。", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("我的意思是，反正纳瑞坎也完了。\r\n绯红之心肯定会阻止他。你快走吧。", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#抱歉……我不能这么做。", 37, 9201539, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('？', 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#我已经把自己改造成了活体炸弹以防万一。\r\n看来……我是到此为止了。", 37, 9201539, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("什么？！", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#就算我阻止不了绯红之心，至少能和你同归于尽。", 37, 9201539, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#你破坏了我所有的心血。\r\n要不是有你在……我的计划就成功了。", 37, 9201539, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#只要按下这个按钮，你就死定了。\r\n而我，将得到解脱……", 37, 9201539, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.setAmbience("Ambience.img/warning", 100, 60);
                                                                                      cm.sendNormalTalk_Bottom("住——住手！你疯了吗！", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#我能做的只有这个了。\r\n无论如何，我很抱歉必须这样结束这场战斗。", 37, 9201539, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("哎哟！", 57, 0, true, true);
                                                                                        } else if (status === V++) {
                                                                                          cm.forceCompleteQuest(61360);
                                                                                          cm.eventSKill(0);
                                                                                          cm.warp(610064050, 0, true);
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.npc_LeaveField("oid=2743737");
                                                                                          cm.npc_LeaveField("oid=2743737");
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