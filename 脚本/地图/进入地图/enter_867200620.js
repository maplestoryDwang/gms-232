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
      cm.npc_ChangeController(9400585, "oid=4229765", -725, 340, 1, -775, -675, 0, true, false);
      cm.npc_SetSpecialAction("oid=4229765", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=4229766", -680, 340, 1, -730, -630, 0, true, false);
      cm.npc_SetSpecialAction("oid=4229766", "summon", 0, 0);
      cm.npc_ChangeController(9400616, "oid=4229767", -600, 340, 1, -650, -550, 0, true, false);
      cm.npc_SetSpecialAction("oid=4229767", "summon", 0, 0);
      cm.npc_ChangeController(9400592, "oid=4229768", -550, 340, 1, -600, -500, 0, true, false);
      cm.npc_SetSpecialAction("oid=4229768", 'summon', 0, 0);
      cm.npc_ChangeController(9400591, "oid=4229769", -490, 340, 1, -540, -440, 0, true, false);
      cm.npc_SetSpecialAction("oid=4229769", "summon", 0, 0);
      cm.npc_ChangeController(9400581, "oid=4229770", -380, 340, 1, -430, -330, 0, true, false);
      cm.npc_SetSpecialAction("oid=4229770", "summon", 0, 0);
      cm.npc_ChangeController(9400587, "oid=4229771", -300, 340, 1, -350, -250, 0, true, false);
      cm.npc_SetSpecialAction("oid=4229771", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=4229772", -220, 340, 1, -270, -170, 1, true, false);
      cm.npc_SetSpecialAction("oid=4229772", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=4229773", -164, 340, 1, -214, -114, 1, true, false);
      cm.npc_SetSpecialAction("oid=4229773", 'summon', 0, 0);
      cm.npc_ChangeController(9400589, "oid=4229774", -85, 340, 2, -135, -35, 1, true, false);
      cm.npc_SetSpecialAction("oid=4229774", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 130);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=4229772", 1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=4229772", 1, 250, 80);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=4229773", 1);
              cm.npc_setForceFlip("oid=4229774", 1);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0##h0#！你回来了！", 37, 9400580, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#噢，大家辛苦了。", 37, 9400589, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=4229774", 1, 30, 50);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#有没有受伤？", 37, 9400589, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b没事，幸好怪物数量不多。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯……#h0#，很抱歉你刚回来就提这个，我们想求你件事。", 37, 9400580, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你去讨伐怪物期间……我们谈了很多。", 37, 9400589, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#关于谁来领导这支大篷车队伍。", 37, 9400589, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我就直说了，#h0#……你来领导大篷车队伍好吗？", 37, 9400580, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#不管是巴特勒副团长，可汗村长，还是佩图尔大叔和我，", 37, 9400580, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我们谁都不敢说可以在刚才那样的情况下做出更客观明智的决断。", 37, 9400580, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#由于我们比任何人都更清楚我们自己的情况，所以难免会片面地把对我们有利的抉择当做是最佳选择。", 37, 9400580, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=4229772", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              cm.effect_NormalSpeechBalloon('……', 0, 0, 0, 2000, 9400581, cm.getPlayer().getId());
                                              cm.effect_NormalSpeechBalloon('……', 0, 0, 0, 2000, 9400587, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0##h0#，你愿意帮助我们吗？", 37, 9400580, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=4229772", 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b我不知道自己能否做得好。我对阿布鲁和派遣团都不了解。", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#地理环境方面可汗村长会帮忙，军事方面巴特勒副团长会协助你的。", 37, 9400580, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你只需要做出让大家都觉得公平的最佳决定即可。拜托了。", 37, 9400580, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=4229772", -1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNewEffects(17, [1000, 1000, 2000, -282, 300]);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  cm.effect_NormalSpeechBalloon('……', 0, 0, 0, 2000, 9400587, cm.getPlayer().getId());
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNewEffects(17, [1000, 2000, 2000, -320, 300]);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      cm.effect_NormalSpeechBalloon('……', 0, 0, 0, 2000, 9400581, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNewEffects(19, [1000]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#b各位都同意吗？", 57, 0, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#……反正就半天。", 37, 9400581, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#同意。", 37, 9400587, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#b为了让大家平平安安地，一个不少地去到下个村庄……我一定尽全力不辱使命。", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#用不着尽全力，做得好才要紧。", 37, 9400581, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=4229770", -1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=4229770", -1, 500, 200);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_setForceFlip("oid=4229771", -1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_setForceFlip("oid=4229771", 1);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetForceMove("oid=4229771", 1, 70, 100);
                                                                                                cm.sendNormalTalk_Bottom("#face0#……唉……你先熟悉一下路线。", 37, 9400587, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTutoBack/0", 1, 1, 1, 0, 0);
                                                                                                  cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTuto/0", 1, 1, 1, 0, 0);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#从卡夫塔佩到河对岸的村庄，足足得花上半天时间，中途还得经过冰河。", 37, 9400587, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTuto/0", 1, 0, 0, 0, 0);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.playerMessage(-1, "通过上方正中央的数值条，可以看到行程进度。");
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                        cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTuto/1", 1, 1, 1, 0, 0);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTuto/1", 1, 0, 0, 0, 0);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#行进过程中最需要花心思的是食物。", 37, 9400587, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.playerMessage(-1, "可以查看目前剩余的食物。");
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                              cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTuto/2", 1, 1, 1, 0, 0);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#如果没有食物，没几个人能挺过这艰难的行程。", 37, 9400587, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#可汗……不是还有更重要的事吗？", 37, 9400589, true, true);
                                                                                                                  cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTuto/2", 1, 0, 0, 0, 0);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……对，食物是为村民们准备的，你最需要关心的就是村民们。", 37, 9400587, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.playerMessage(-1, "可以查看目前大篷车队伍的人数。");
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                      cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTuto/3", 1, 1, 1, 0, 0);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#呵呵呵，我能笑一会儿吗？可汗村长口中竟会说出关心村民这种话，太令人意外了。", 37, 9400590, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#斯洛克！你别找茬！", 37, 9400589, true, true);
                                                                                                                          cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTuto/3", 1, 0, 0, 0, 0);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#就像刚才一样，同样的话，同样的决定，在每个村民听来感觉都不一样。有的人高兴，有的人气愤，还有的人会伤心。", 37, 9400587, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.playerMessage(-1, "可以查看各村民小组的友好度。（※友好度降低的话，村民就会退出队伍。）");
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                              cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTuto/4", 1, 1, 1, 0, 0);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#为他人负责不是件容易事。心里虽然想满足所有人的期望，但事实上却是不可能的。", 37, 9400587, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTutoBack/0", 1, 0, 0, 0, 0);
                                                                                                                                  cm.effect_REPEAT("Effect/DirectionPL.img/effect/PL_Abrup_CaravanTuto/4", 1, 0, 0, 0, 0);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.playerMessage(5, "[A组]巴特勒和权威主义者：无法忍受别人不听从自己的意见。");
                                                                                                                                    cm.playerMessage(5, "[B组]斯洛克和功利主义者：他们只把自己的安全摆在最首位。");
                                                                                                                                    cm.playerMessage(5, "[C组]艾丽卡和支持者：该组人积极捍卫正义。");
                                                                                                                                    cm.playerMessage(5, "[D组]述拉和村民：只要不让他们饿着，就能形成积极的舆论。");
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#b做出让所有村民满意的决定，以及去到河对岸的村庄，上述两点就是我的职责对吧。", 57, 0, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#是的。但随着行进时间增加，村民们会渐渐疲惫，这时候就会对你产生不满。", 37, 9400587, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#要是再加上肚子饿，将更快出现不满情绪。因此我才跟你说食物是最重要的。", 37, 9400587, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#一下子说太多你也不好理解，其余事项就到时再给你一一说明吧。", 37, 9400587, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#为了防止村民们不再遵从你的选择并离开……希望你尽力好好干。", 37, 9400587, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else if (status === V++) {
                                                                                                                                                  cm.setNumberForQuestInfo(64006, 'Ec', 2);
                                                                                                                                                  cm.warp(867200500, 1);
                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                  cm.npc_LeaveField("oid=4229765");
                                                                                                                                                  cm.npc_LeaveField("oid=4229765");
                                                                                                                                                  cm.npc_LeaveField("oid=4229766");
                                                                                                                                                  cm.npc_LeaveField("oid=4229766");
                                                                                                                                                  cm.npc_LeaveField("oid=4229767");
                                                                                                                                                  cm.npc_LeaveField("oid=4229767");
                                                                                                                                                  cm.npc_LeaveField("oid=4229768");
                                                                                                                                                  cm.npc_LeaveField("oid=4229768");
                                                                                                                                                  cm.npc_LeaveField("oid=4229769");
                                                                                                                                                  cm.npc_LeaveField("oid=4229769");
                                                                                                                                                  cm.npc_LeaveField("oid=4229770");
                                                                                                                                                  cm.npc_LeaveField("oid=4229770");
                                                                                                                                                  cm.npc_LeaveField("oid=4229771");
                                                                                                                                                  cm.npc_LeaveField("oid=4229771");
                                                                                                                                                  cm.npc_LeaveField("oid=4229772");
                                                                                                                                                  cm.npc_LeaveField("oid=4229772");
                                                                                                                                                  cm.npc_LeaveField("oid=4229773");
                                                                                                                                                  cm.npc_LeaveField("oid=4229773");
                                                                                                                                                  cm.npc_LeaveField("oid=4229774");
                                                                                                                                                  cm.npc_LeaveField("oid=4229774");
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
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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