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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1150, -40);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400580, "oid=7538870", 1210, -40, 40, 1160, 1260, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538870", "summon", 0, 0);
      cm.npc_ChangeController(9400582, "oid=7538871", 1270, -40, 40, 1220, 1320, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538871", 'summon', 0, 0);
      cm.npc_ChangeController(9400586, "oid=7538872", 1100, 0, 33, 1050, 1150, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538872", "summon", 0, 0);
      cm.npc_ChangeController(9400601, "oid=7538873", 1360, -40, 40, 1310, 1410, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538873", "summon", 0, 0);
      cm.npc_ChangeController(9400588, "oid=7538874", 900, 0, 33, 850, 950, 0, true, false);
      cm.npc_SetSpecialAction("oid=7538874", "summon", 0, 0);
      cm.npc_ChangeController(9400587, "oid=7538875", 850, 0, 33, 800, 900, 0, true, false);
      cm.npc_SetSpecialAction("oid=7538875", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=7538876", 800, 0, 33, 750, 850, 0, true, false);
      cm.npc_SetSpecialAction("oid=7538876", "summon", 0, 0);
      cm.npc_ChangeController(9400592, "oid=7538877", 750, 0, 33, 700, 800, 0, true, false);
      cm.npc_SetSpecialAction("oid=7538877", "summon", 0, 0);
      cm.npc_ChangeController(9400617, "oid=7538878", 700, 0, 33, 650, 750, 0, true, false);
      cm.npc_SetSpecialAction("oid=7538878", "summon", 0, 0);
      cm.npc_ChangeController(9400596, "oid=7538879", 650, 0, 32, 600, 700, 0, true, false);
      cm.npc_SetSpecialAction("oid=7538879", "summon", 0, 0);
      cm.npc_ChangeController(9400619, "oid=7538880", 600, 0, 32, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=7538880", "summon", 0, 0);
      cm.npc_ChangeController(9400618, "oid=7538881", 550, 0, 31, 500, 600, 0, true, false);
      cm.npc_SetSpecialAction("oid=7538881", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你们有什么事情吗？这么多人… ", 37, 9400586, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("婆…婆婆… 呜… ", 37, 9400588, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("郁兰？你怎么突然哭起来了？", 37, 9400586, true, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=7538872", -1, 50, 50);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNewEffects(17, [2000, 1000, 2000, 950, 40]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=7538874", 1, 50, 50);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("婆…婆婆…对不起… ", 37, 9400588, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("是因为我们你才去了森林… 我们也没有拦住你… 还有布兰茜姐姐的事情… ", 37, 9400588, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('…。', 37, 9400586, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=7538875", 1, 50, 50);
                              cm.sendNormalTalk_Bottom("#face0#莎娜安，本应该早点道歉… 对不起，真的… ", 37, 9400587, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#那时候我以为那样做是为了村子，为了孩子们好。现在想想那是多么幼稚而愚蠢的选择。", 37, 9400587, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#从那之后，虽然也有时间去挽回，但是谁也没有请求你的原谅。… 对不起。", 37, 9400587, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#想起那段时间你和布兰茜两个人孤独的生活在森林里… 真不知道该如何向你道歉… ", 37, 9400587, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("不，没关系。已经是过去的事情了… 我早已忘记！不过还是感谢你那么说，道歉没有早晚之分… ", 37, 9400586, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("布…布兰茜姐姐？… ", 37, 9400588, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("郁兰，那不是你的错。我也没有责怪过你们，放心吧。", 37, 9400586, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#… 虽然为时已晚… ", 37, 9400587, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#等这次事态过去之后，请你回到卡夫塔佩吧… 可以吗？莎娜安…？", 37, 9400587, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("… 现在还不行，万一孙女要回来呢… ", 37, 9400586, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我们所有人都失去了亲人。在过去的半年里大家都在拼命的寻找，不过也有人早已绝望，而曾想过剩下的人也要活下去。", 37, 9400587, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#但是，事实已经证明了阿尔西的话说的没错… 而且我们也找到了头绪。所以大家还是决定要去寻找他们。", 37, 9400587, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#莎娜安，如果我们再失去你的话… ", 37, 9400587, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("… 我会考虑的。", 37, 9400586, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("就如你所说，我们都有一个寻找亲人的共同目标。", 37, 9400586, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("那是我们阿布鲁所有人的目标。", 37, 9400586, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("… 那以后我们好好相处吧。", 37, 9400586, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("婆…婆婆…对不起… ", 37, 9400588, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("呜呜呜呜呜… 真的很对不起！！", 37, 9400588, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("知道了，知道了，不要再哭了！", 37, 9400586, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNewEffects(12, [2000, 1200, 40, 0, 0]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#可汗村长的道歉越来越多了？", 37, 9400582, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                                                              cm.npc_setForceFlip("oid=7538870", 1);
                                                                              cm.sendNormalTalk_Bottom("#face0#…凯恩，能不能别打岔。", 37, 9400580, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#…知道了，为了不破坏这份感动我们也走吧。话说我们也有需要和好的事情吧？", 37, 9400582, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.sendNormalTalk_Bottom("#b啊，遗失物品！", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNewEffects(12, [1000, 1290, 40, 0, 0]);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=7538871", 1);
                                                                                        cm.npc_setForceFlip("oid=7538870", 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#艾尔巴，#h0# 去了趟森林又发现了遗失物品。", 37, 9400580, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("啊，都给我吧。上一次放在这里的有一半都已经被领走了。", 37, 9400601, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#哇！真的吗？那真是太好了。", 37, 9400580, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("对，其中还有… 艾伊纳尔妹妹的项链。", 37, 9400601, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#b艾伊纳尔… 是那个盔甲的主人…？", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("是的，我刚好可以和盔甲一起送给他… 他… 哭的好厉害。", 37, 9400601, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("希望他也能有所改变… ", 37, 9400601, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.forceCompleteQuest(64126);
                                                                                                            cm.warp(867202310, 0);
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