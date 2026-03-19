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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004430, "oid=1056451", 190, 14, 2, 140, 240, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1056451", 'summon', 0, 0);
      cm.npc_ChangeController(3004431, "oid=1056452", 333, 14, 4, 283, 383, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1056452", "summon", 0, 0);
      cm.npc_ChangeController(3004434, "oid=1056453", 410, 14, 4, 360, 460, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1056453", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 290, 4);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("倘若三个月亮升起，暗红的阴霾笼罩天空，", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("太阳也会重新拾得光辉。", 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("#b太阳之标志#k将在被选中之人掌中荣耀。", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("这片土地上的所有生灵。", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("都要信他的行，奉他的义。", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("因他带来了你们所期盼的救赎。", 1);
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
                              cm.sendNormalTalk_Bottom("#face0#三个月亮升起……这指的是什么时候呢？", 37, 3004431, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#天空中已经升起了三个月亮。", 37, 3004434, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#什么？！", 37, 3004431, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#已经有十天了。\r\n再过两天，又会变成一个月亮了。", 37, 3004434, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#两天吗？\r\n那这两天过后，何时才会再升起三个月亮呢？", 37, 3004431, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#一百五十年后。", 37, 3004434, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1056451"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1056452"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#看来过不了多久，圣剑之主就要现身了。", 37, 3004430, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#那“暗红的阴霾”应该就是指#r“闪电使徒”#k，\r\n这和罗兰德所述相吻合。", 37, 3004430, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#撇开信仰的问题不说，他的话是不是也有一定的可信性呢。", 37, 3004430, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#看起来的确是那样。", 37, 3004431, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#可是怎么办呢？\r\n只有两天时间了，至今都没有其他天族出现的迹象……", 37, 3004431, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#这可能是……嗯……", 37, 3004431, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#你……你说我吗？", 37, 3004430, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#我不是说了吗。\n我不能飞，也没有证物。", 37, 3004430, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#与其坐等预言实现，不如人为使它成真。", 37, 3004431, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#先暗暗鼓励自己“我没问题的，我一定行！”，然后握住圣剑……", 37, 3004431, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                      cm.sendNormalTalk_Bottom("#face0#我不可能是那个#b天选之人#k。", 37, 3004430, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#不具备资格的人是不允许碰圣剑的，否则是对圣剑的大不敬。", 37, 3004430, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3004431, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#请不要担心。肯定还有其他天族。", 37, 3004430, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#我相信是这样的。", 37, 3004430, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else if (status === V++) {
                                                                                    cm.eventSKill(0);
                                                                                    cm.forceCompleteQuest(39909);
                                                                                    cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                                                                                    cm.updateInfoQuest(39900, "00=h0;11=h0;04=h0;05=h1;06=h1;07=h1;25=h1;55=h0");
                                                                                    cm.warp(410000690, 1, false);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.setStandAloneMode(false);
                                                                                    cm.npc_LeaveField("oid=1056451");
                                                                                    cm.npc_LeaveField("oid=1056451");
                                                                                    cm.npc_LeaveField("oid=1056452");
                                                                                    cm.npc_LeaveField("oid=1056452");
                                                                                    cm.npc_LeaveField("oid=1056453");
                                                                                    cm.npc_LeaveField("oid=1056453");
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