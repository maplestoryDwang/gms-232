var status = -1;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("天空作美。今天天气很合适决战。", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(120);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("下雨天可怜兮兮的等人，可不是什么好习惯。", 1, 2159353, false, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(2159353, "oid=85241249", 1210, 10, 7, 1160, 1260, 1, false, 0, false);
              cm.npc_SetSpecialAction("oid=85241249", 'summon', 0, 0);
              cm.npc_SetSpecialAction("oid=85241249", 'summon', 0, 1);
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_AskAnswerTime(30);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.sendNormalTalk("你来晚了。即使是世界上最棒的怪盗，也无法偷取时间啊。", 17, 2159353, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("嗯，反正对方还没来，你这家伙算是来的早了。漫长的战斗今天就要结束了，有什么好着急的呢？怎么样。有信心吗？", 1, 2159353, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("自信不是要获胜后才能感觉的嘛。", 17, 2159353, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("这种时候还耍嘴皮子。就是因为这样，一开始才不喜欢你啊。", 1, 2159353, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("你这狡猾的家伙，还真是不会说话。", 17, 2159353, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("也是，反正我们之间唯一的共同点就是互相不顺眼了。话说回来，让我们来的弗里德那家伙究竟是怎么回事。他，是不是有什么不顺心的事啊？", 1, 2159353, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("不过是头疼怎么才能让5个人配合的最好罢了。也有可能和每个人关系都太好了，希望所有人能够高兴。", 17, 2159353, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("就算这样，弗里德不是还没分配好嘛。不过我觉得，弗里德没我想象的那么简单。", 1, 2159353, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("也许吧。闲聊到此为止。空气凝结起来了。", 17, 2159353, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("有趣的家伙。好吧，不扯闲话了。下次见的时候一起去问问弗里德吧。前提是不要在这里耽误太久。", 1, 2159353, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=85241249", "teleportation", 0, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(840);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=85241249");
                                        cm.npc_LeaveField("oid=85241249");
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk('现在就剩最后一步了。', 17, 2159353, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_MoveAction(1);
                                            cm.curNodeEventEnd(true);
                                            cm.npc_ChangeController(2159354, "oid=85242431", 128, 10, 3, 78, 178, 0, false, 0, false);
                                            cm.npc_SetSpecialAction("oid=85242431", "summon", 0, 0);
                                            cm.sendNormalTalk("站住。这里是你我的战场。", 1, 2159354, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(0, 450, -200, 18);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1938);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_MoveAction(1);
                                                  cm.curNodeEventEnd(true);
                                                  cm.sendNormalTalk("你所具备的光之力量，对精灵来说就好像温暖的阳光一样。所以一想到我必须在这里干掉你，心里很不是滋味啊。", 1, 2159354, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("这话可不像是你这种给黑魔法师冲锋陷阵，破坏世界的疯狂精灵说的。", 3, 2159354, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("如果全心全意追求自己的梦想是疯了的话，那么我就是疯了。但是你，还有这世界上的一切，不是都疯了吗？", 1, 2159354, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("不要狡辩啦。#p2159354#。", 3, 2159354, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("真是对牛弹琴。那就拿出你的本事来吧。", 1, 2159354, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=85242431", "special", 0, 1);
                                                              cm.fieldEffect_PlayFieldSound("LuminousTuto/Special1", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
                                                                cm.fieldEffect_PlayFieldSound("LuminousTuto/Special2", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2280);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_ChangeController(2159355, "oid=85246440", 0, 10, 2, -50, 50, 0, false, 0, false);
                                                                  cm.npc_SetSpecialAction("oid=85246440", "summon", 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=85242431");
                                                                    cm.npc_LeaveField("oid=85242431");
                                                                    cm.sendNormalTalk("你，还得感谢你让事情变得简单了呢，谢谢啊。", 9, 2159355, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("#p2159355#！连同伴都要伤害吗？", 3, 2159355, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_OneTimeAction(444, 540);
                                                                        cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111100/prepare"], [540, -40, -25, 0, 0, 0, 0, 0]);
                                                                        cm.fieldEffect_PlayFieldSound("LuminousTuto/Use", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(90);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=85246440", "barrier", 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(450);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_OneTimeAction(445, 3000);
                                                                            cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111100/keydown"], [3000, -40, -25, 0, 0, 0, 0, 0]);
                                                                            cm.fieldEffect_PlayFieldSound("LuminousTuto/Loop", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/lightning/guard", "oid=85246440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                              cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(270);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/lightning/guard", "oid=85246440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(270);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/lightning/guard", "oid=85246440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(270);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/lightning/guard", "oid=85246440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.fieldEffect_PlayFieldSound("LuminousTuto/Loop", 100);
                                                                                    cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(270);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/lightning/guard", "oid=85246440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                      cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit", 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(270);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/lightning/guard", "oid=85246440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                        cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(270);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/lightning/guard", "oid=85246440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(270);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/lightning/guard", "oid=85246440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                            cm.fieldEffect_PlayFieldSound("LuminousTuto/Loop", 100);
                                                                                            cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit", 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(270);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/lightning/guard", "oid=85246440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                              cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit", 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(270);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/normalEffect/lightning/guard", "oid=85246440"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                cm.fieldEffect_PlayFieldSound("LuminousTuto/Hit", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(540);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/2711.img/skill/27111101/keyedownend"], [0, -40, -25, 0, 0, 0, 0, 0]);
                                                                                                  cm.fieldEffect_PlayFieldSound("LuminousTuto/End", 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk("这种程度算什么。不过时间到了。可惜啊，只能下次再解决你这家伙了。", 9, 2159355, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk('什么声音？', 3, 2159355, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk("没时间和你玩了。这世界上，已经没什么我要做的了，哈哈哈。", 9, 2159355, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetSpecialAction("oid=85246440", "teleportation", 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(450);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_LeaveField("oid=85246440");
                                                                                                            cm.npc_LeaveField("oid=85246440");
                                                                                                            cm.sendNormalTalk("吸收古瓦洛的力量后，离开战斗了……？还说什么#b'这世界'#k，一定有阴谋。不过多亏了你，我省的麻烦了。现在就集中解决黑魔法师吧。先出发的同伴们应该已经到时间神殿那头了吧。我们必须尽快与他们会合。", 3, 2159355, false, true);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                            cm.eventSKill(0);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.dispose();
                                                                                                            cm.warp(927020010, 0, false);
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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