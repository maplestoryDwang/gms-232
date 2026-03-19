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
      cm.npc_ChangeController(3001626, "oid=375492", -793, -171, 0, -843, -769, 1, false, 0, false);
      cm.npc_ChangeController(3001602, 'oid=375493', 400, 32, 0, 350, 450, 1, false, 0, false);
      cm.npc_ChangeController(3001615, "oid=375494", 287, 32, 0, 237, 337, 0, false, 0, false);
      cm.npc_ChangeController(3001603, "oid=375495", -1774, 35, 12, -1824, -1724, 0, false, 0, false);
      cm.npc_ChangeController(3001656, 'oid=375496', -4, 35, 32, -54, 46, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.Hidden_background("doll", 1, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 730, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
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
              cm.npc_ChangeController(3001651, "oid=2945621", 750, 4, 66, 700, 800, 1, true, 0, false);
              cm.npc_SetSpecialAction("oid=2945621", "summon", 0, 0);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#离得那么远，一点都听不清在说什么嘛。", 37, 3001651, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=2945621", "special2", 1000, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=2945621");
                      cm.npc_LeaveField("oid=2945621");
                      cm.sendNormalTalk_Bottom("#face9#这种时候能够发光发热的就是这对野性的象征——老虎耳朵，\r\n让我稍微集中点精神。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（只见我瞳孔收缩后，眼里开始放光，\r\n我眨巴着眼睛，竖起了双耳，渐渐开始听到客人们的声音。）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 353, 30);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2500, 1000, 353, 80);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#故乡的滋味如何啊，流浪作家先生？", 37, 3001657, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#除，除了因为我牙痛，没办法用臼齿吃东西之外……\r\n呵呵，这味道倒是和从前一个样。", 37, 3001658, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#不说了，我们还是聊聊村里的事吧。\r\n毕竟隔了很长时间，我也挺好奇的，再说搞不好还能有不错的写作素材。", 37, 3001658, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我总不能白白帮你，饭钱就由你结吧。", 37, 3001657, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#就这么办！", 37, 3001658, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你也知道，我们村偶尔会发生一些怪事吧？\r\n就是会有怪物出现。", 37, 3001657, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#毕竟这里是自由之都，在格兰蒂斯也算得上是比较和平的地方了，\r\n不过确实也有很多奇妙的事情。", 37, 3001658, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#那个吧，近来发生了山体动摇、河水倒流一事，\r\n自那之后，村里就有传闻说怪物经常出没。", 37, 3001657, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（这……怎么感觉有点熟悉呢？）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#真是够古怪的。", 37, 3001658, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#村里有一群被称为解决师的厉害角色在，确实叫人安心不少……\r\n不过仍然无法完全放下心来……", 37, 3001657, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#解决师？", 37, 3001658, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#村里的情报商店几年前就开始雇佣解决师了，\r\n据我所知，那会儿估计换了店主……", 37, 3001657, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#这就算了，能仔细说说解决师的事吗？", 37, 3001658, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#不管大事小事，都能迅速帮忙解决，\r\n虽说要稍微花点委托费，不过这根本算不得什么。", 37, 3001657, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#一有骚乱就会出现帮忙解决，解决师\r\n可算是我们青云谷的大英雄。", 37, 3001657, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（解决师……村里的英雄？）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#虽然有趣，但感觉还差了点什么，得再来点……\r\n难道就没有更多那种让人眼睛放光、耳朵直竖的神奇故事了吗？", 37, 3001658, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#还有一个……有是有，不过……咳咳，咳咳……", 37, 3001657, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#喉咙里卡了鱼刺……要是……\r\n要是能喝上一碗刚从坛子里舀出来的新鲜甜米露，鱼刺应该就能松动了……", 37, 3001657, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.forceCompleteQuest(39514);
                                                                                cm.gainExp(626);
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
                                                                                      cm.setStandAloneMode(false);
                                                                                      cm.warp(410000200, 5, false);
                                                                                      cm.eventSKill(0);
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