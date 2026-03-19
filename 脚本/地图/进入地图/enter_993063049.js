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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM2_tothe3rd/0", 0, 0, 0, 0, 12, 4, 1, -1, 0, 0, 0);
      cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BM1_review/11", 0, 0, 0, 0, 12, 4, 1, -1, 0, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction20.img/effect/BM2_na/0", 0, 1500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#很久以前，王国里有一位巫女。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#她比任何巫女都要美丽，比任何巫女都要聪明。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n她有着一头火焰般的红发和美丽的外表，让每个人都情不自禁地爱上她。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#所有人都以她为傲并信赖她。", 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#沙漠中的灿烂红宝石。", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("#fs30##fn黑体#\r\n\r\n#r             阿斯旺的大巫女希拉。#k", 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#她自己也很清楚。", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#自己到底有多美，有多强大。", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n大家都仰望他，为她欢呼。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#只为她一人而来的那些天使……", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n她总是理所当然地享受着这一切。", 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#但是……", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#花开终会凋谢，月有阴晴圆缺。", 0);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction20.img/effect/BM2_na/1", 0, 1500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n最先察觉到变化的是她自己。", 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#虽然对她的欢呼，信赖和热爱不曾改变", 0);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction20.img/effect/BM2_na/2", 0, 1500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n但她自己已经无法像以前一样爱自己了。", 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#一天，两天……", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#时间过得越久，她越萎靡不振。", 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#慢慢地……慢慢地……", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n她无法再承受这一切的时候", 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#她的心中出现一条小小的裂缝之时", 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction20.img/effect/BM2_na/3", 0, 1500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("#fs28##fn黑体#\r\n\r\n\r\n#r他出现了。#k", 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#永恒的生命，永远的美貌，迫切渴求但又求之不得的东西。", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#他可以轻易地赐予他人。", 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer('06', "Effect/Direction20.img/effect/BM2_na/4", 0, 1500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n明白自己真正应该侍奉的人是谁的那一瞬间，", 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#她必须要让他看到自己的觉悟。", 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#她把自己曾经爱过，但如今没有价值的一切都献给了他。", 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('07', "Effect/Direction20.img/effect/BM2_na/0", 0, 1500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                          cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                          cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                          cm.fieldEffect_ProcessOnOffLayer('05', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                          cm.fieldEffect_ProcessOnOffLayer('06', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n没有天使再来拜访她了。", 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('08', "Effect/Direction20.img/effect/BM2_na/5", 0, 1500, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#世人怨恨并诅咒她。", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n但她却不在意这些。", 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n因为她已经得到了自己渴求的东西。", 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#她知道自己的力量来自哪里。", 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#也很清楚，背叛了他自己会是怎样的下场。", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n所以她根本不敢对他有一丝的忤逆之心", 0);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#他给了她最想要的东西，她只需要报答他就可以了。", 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_Monologue("#fs30##fn黑体#\r\n\r\n\r\n#r黑魔法师军团长红魔女希拉。#k", 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("#fs21##fn黑体#\r\n\r\n\r\n那是她的新名字。", 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('07', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('08', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.setAmbience("SoundEff.img/BM2/voiceWstand", 80, 100);
                                                                                                    cm.sendNormalTalk_Bottom("#face0#起来。#h0#。", 37, 3003768, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#别忘了。我们。", 37, 3003768, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.playSoundEffDirectly("SoundEff.img/BM2/voiceWstand");
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                } else if (status === V++) {
                                                                                                                  cm.forceCompleteQuest(35726);
                                                                                                                  cm.gainExp(170671356);
                                                                                                                  cm.dispose();
                                                                                                                  cm.warp(450011320, 4, true);
                                                                                                                  cm.setStandAloneMode(false);
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
      }
    }
  }
}