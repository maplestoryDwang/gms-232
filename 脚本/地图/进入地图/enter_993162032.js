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
      cm.npc_ChangeController(3001984, 'oid=434221', 4586, 120, 3, 4536, 4636, 1, false, 0, false);
      cm.npc_ChangeController(3001985, "oid=434222", 4505, 120, 3, 4455, 4555, 1, false, 0, false);
      cm.npc_ChangeController(3001986, 'oid=434223', 4210, 120, 2, 4160, 4260, 0, false, 0, false);
      cm.npc_ChangeController(3001973, "oid=434224", 4305, 120, 2, 4255, 4355, 1, false, 0, false);
      cm.npc_ChangeController(3001974, "oid=434225", 4806, 120, 3, 4756, 4856, 1, false, 0, false);
      cm.npc_ChangeController(3001983, "oid=434226", 4722, 120, 3, 4672, 4772, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001960, "oid=6539832", 3941, 100, 2, 3891, 3991, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6539832", "summon", 0, 0);
      cm.npc_ChangeController(3001952, "oid=6539833", 4000, 100, 2, 3950, 4050, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6539833", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 3700, -85);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 4331, -33);
            cm.effect_Text(["#fn黑体##fs18#同一时刻，伯爵宅邸", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(5500);
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
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 3935, 95);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face9#哈，伯爵这家伙……正如传闻所说，费了不少功夫啊。\r\n这晶光闪耀的，都快闪得我睁不开眼睛了。", 36, 3001952, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face9#后巷的百姓们每天都生活在水深火热之中……\r\n绝不能放任这种混蛋继续统治王国……", 36, 3001952, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#……你说呢，阿黛尔？", 36, 3001952, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#哦，嗯……", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(最近总觉得和他相处有点别扭……\r\n是我见到亚空间之后，大脑变奇怪了吗？)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(算了……眼下我该专心任务。\r\n反正等这次的事情结束……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我作为骑士的职责也到此为止。\r\n……之后，就不会再和他打交道了。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#布乌~！", 36, 3001960, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=6539832", "special4", 1500, 0);
                                                      cm.sendNormalTalk_Bottom("#face5#！？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('#face3#布乌！', 36, 3001960, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.setNpcSpecialActionReset("oid=6539832");
                                                          cm.npc_SetSpecialAction("oid=6539832", "special5", 2700, 0);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/jumpin", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_LeaveField("oid=6539832");
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#又走掉了……他是有什么不满吗？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#没办法，那家伙一向随心所欲。\r\n啊，先不说这个……我得去跟布鲁和拉迪见面，暂时离开一下。", 36, 3001952, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#所以，你先进去欣赏艺术品展览好吗？\r\n我会在假面舞会开始之前赶回来。", 36, 3001952, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#里面或许会有能唤起你记忆的线索……\r\n总、总之，一会儿舞会上见！", 36, 3001952, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                              cm.npc_LeaveField("oid=6539833");
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 3935, 95);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年将骑士假面交给我，就去找同伴了。\r\n这面具十分高级，看着很有品味的样子。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#等等，……他不是刚刚才见过那两人吗。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.forceCompleteQuest(39622);
                                                                                            cm.gainExp(6154);
                                                                                            cm.gainExp(718);
                                                                                            cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                                                                            cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=2");
                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                            cm.gainItem(1022291, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                } else if (status === V++) {
                                                                                                  cm.warp(410000340, 0, false);
                                                                                                  cm.setStandAloneMode(false);
                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                  cm.setInGameDirectionMode(false, true, false);
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