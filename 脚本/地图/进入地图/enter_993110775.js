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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -107, 5);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#魔法师协会"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('……', 36, 1531002, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('好吧，是这样的啊。', 36, 1531002, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("虽然你现在身处的世界里那个黑魔法师消亡了，可是……", 36, 1531002, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("可是那家伙在这边世界的……某个角落依然存在吧？", 36, 1531002, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4#如果你在说那个白惨惨的家伙，应该没错，\r\n搞不好他如今正在什么地方策划着惊人的阴谋呢。", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/wind", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#（风声？）", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#抱，抱歉，我突然开始感觉到和那家伙生活在同一个世界是多么令人毛骨悚然……", 36, 1531002, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#现阶段还不能好好地控制能力。", 36, 1531002, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#唔……看样子从今往后都不太方便随心所欲地捉弄你了。", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("总之，勤加训练，下次见面时我会检查你的成果。", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#下次……？这么说……短时间内你是不会回来这边了啊。", 36, 1531002, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#……", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#可即便如此……还，还是偶尔回来看看吧。", 36, 1531002, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#毕竟……偶尔……就只是偶尔喔！我似乎也会想见见你……", 36, 1531002, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#嗯？等一下，信号不太好……", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("刚刚你说了什么？", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('#face0#……', 36, 1531002, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#算了！现在换杰跟你讲话。", 36, 1531002, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("所以，你真的不回来了？", 36, 1531001, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("嗯，毕竟眼下这边也挺忙的。", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("对了，尤娜还在旁边吧？", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#帮我转告她，如果有时间的话我也很想回去看看。", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/BM1_wind", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/windowcrash1", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#哇，这次的反应好厉害啊？", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face6#哈……这种事不能直接跟她说吗？\r\n我的新显示器差点就被砸了个稀巴烂。", 36, 1531001, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("啊，尤娜逃走了。", 36, 1531001, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("凯内西斯，那里不孤单吗？", 36, 1531001, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#这个嘛……", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_ChangeController(3004137, "oid=2244957", 268, 28, 40, 218, 318, 1, true, 1500, false);
                                                                                    cm.npc_SetSpecialAction("oid=2244957", "summon", 0, 0);
                                                                                    cm.npc_ChangeController(3004138, "oid=2244958", 187, 28, 40, 137, 237, 1, false, 1500, false);
                                                                                    cm.npc_SetSpecialAction("oid=2244958", "summon", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 80, 5);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#凯内西斯！快来分享你的冒险故事啦！\r\n我怕一时半会说不完，连零食都带来了呢！", 36, 1531003, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "刚刚结束了一项崇高的宿命，征尘未洗。", 36, 1531004, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#虽然一直缠着对方，要" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "风轻云淡地讲述经历有些无礼……", 36, 1531004, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#不过旁听一下倒也不错，\r\n我就顺便期待下这一路上的故事好了。", 36, 1531004, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -107, 5);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#想了想，这地方好像也不赖嘛。", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#和尤娜一起过来玩怎么样？\r\n这地方超赞的……（瞥）只不过空气中会稍微有点漂浮的猫毛和狼毛？", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face6#唔，我是绝对不会去连清洁剂都没有的世界的……", 36, 1531001, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face8#我先挂了，\r\n多亏了你，房间里变得乱七八糟的……", 36, 1531001, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom('知道了。', 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face3#保重……", 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom('#face3#大家。', 36, cm.getPlayer().getGender() == 0 ? 1531000 : 1531052, true, true);
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
                                                                                                                            cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
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
                                                                                                                                      cm.forceStartQuest(39701, '');
                                                                                                                                      cm.dispose();
                                                                                                                                      cm.warp(993120000, 5, false);
                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                      cm.npc_LeaveField("oid=2244957");
                                                                                                                                      cm.npc_LeaveField("oid=2244957");
                                                                                                                                      cm.npc_LeaveField("oid=2244958");
                                                                                                                                      cm.npc_LeaveField("oid=2244958");
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}