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
      cm.npc_ChangeController(9400580, "oid=204602", -54, -175, 24, -104, -20, 0, true, false);
      cm.npc_ChangeController(9400600, "oid=204603", 109, -175, 36, 59, 159, 1, true, false);
      cm.npc_ChangeController(9400638, "oid=204604", 31, -175, 35, 20, 81, 1, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400582, "oid=7540663", -110, -70, 18, -160, -60, 1, true, false);
      cm.npc_SetSpecialAction("oid=7540663", "summon", 0, 0);
      cm.npc_ChangeController(9400602, "oid=7540664", -170, -70, 18, -220, -120, 1, true, false);
      cm.npc_SetSpecialAction("oid=7540664", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('#face0#咳呵…', 37, 9400602, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#艾伊纳尔，你不能就这么倒下。\r\n有很多人都在为你加油。", 37, 9400582, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#是 …莎娜安婆婆… 的委托吗？", 37, 9400602, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#当然。", 37, 9400582, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#所以你们才对我好吗？", 37, 9400602, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#不！莎娜安婆婆的委托，是不要对你有特殊的待遇，和对待别人一样对待你… ", 37, 9400582, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                        cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400602, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b莎娜安婆婆很担心你。", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#我知道…\r\n我欠了她很多。", 37, 9400602, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#为了感恩我一定要… ", 37, 9400602, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#这件盔甲也是莎娜安婆婆送给我的… ", 37, 9400602, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#你们也听说了我是一个多么无药可救的家伙吧？", 37, 9400602, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#不，没有。没有人说你无药可救。你为什么会这么认为？", 37, 9400582, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b你现在不是已经很努力了吗？怎么会无药可救呢。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0##h0#，我在屋里听到你们的谈话。其他的话我没怎么听… 但是你说的一句话… ‘我原以为全都是自己做的，但其实是很多人帮了我’… ", 37, 9400602, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#我觉得说的很对，没有村里人我早已死掉了。", 37, 9400602, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#… 你们能听听我的故事吗？", 37, 9400602, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('#b可以。', 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#不过给你3分钟，我们还有继续训练！训练的时候不能说太多话，那会浪费你的体力！", 37, 9400582, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b凯恩…？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我体力很充沛，你可以尽情的讲，艾伊纳尔。", 37, 9400582, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#… 从小我的家人只有我的妹妹，朱莉埃塔。我们年龄相差较大，因为朱莉埃塔还是婴儿的时候父母就… ", 37, 9400602, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#为了养活妹妹，我只能去做村里的各种杂货。\r\n但是对于小小年纪的我，能做的事情并不多。砍树、修理屋顶、搬运货物、打扫仓库… \r\n现在能做的也只有这些…", 37, 9400602, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#但是不知道从哪一天开始，去森林的人回来越来越少了…", 37, 9400602, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我很害怕，我甚至都没狩猎过花花象。但是我不得不去砍树卖柴火，就把妹妹留在了家里独自前往。", 37, 9400602, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#正要出城的时候，村长发现了，并给我其他的差事… 所以就没有出城… ", 37, 9400602, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#但是，我的妹妹朱莉埃塔并不知道这个情况，她以为我在森林里，就拿着中饭跑去森林找我… ", 37, 9400602, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#咳啊… 这都怪我，都怪我妹妹才失踪了。", 37, 9400602, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#父母双亡也怪我，妹妹失踪也是我的错。都是因为我是个没用的倒霉孩子。", 37, 9400602, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#哪里的事。", 37, 9400582, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#你知道更要命的是什么吗？", 37, 9400602, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#我都没想过要去告诉妹妹。如果那天我没有出去的话… 不，如果那天我在家里的话… 或者我直接去森林砍柴火的话… 不对，如果提前告诉朱莉埃塔我没有去森林的话… 如果那样的话… ", 37, 9400602, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#我每天都在懊悔。如果不是每天送饭的艾尔巴大婶，如果不是村长让我打起精神的话… ", 37, 9400602, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#如果没有送我这件盔甲…还做了朱莉埃塔的项链给我的莎娜安婆婆…", 37, 9400602, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MONAD1/spine/scene3/d2", '0', '', 'scene3'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                      cm.sendNormalTalk_Bottom("#face0#我肯定会把自己关在家里，陷入懊悔和负罪感，在那里虚度光阴了。", 37, 9400602, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#这是你妹妹？你们俩长的不像啊。", 37, 9400582, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#b… ", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0##h0# 说的对，因为大家都在帮我，所以我才能活到现在。", 37, 9400602, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#真是很感谢让我早点明白这个道理，所以我想为大家贡献出一份力量。只有这样我才能报答村里的人，我才能对寻找朱莉埃塔不会感到愧疚。", 37, 9400602, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#那么！我就重新开始吧，要多练练才能增强你的实力，不是吗？", 37, 9400582, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_取消复合图片动画("scene3", 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetForceMove("oid=7540663", -1, 120, 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=7540663", 1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0##h0#、艾伊纳尔，准备好了吗？", 37, 9400582, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#是… 请多多关照！", 37, 9400602, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#b我也准备好了。", 57, 0, true, true);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.warp(867202500, 0);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.forceCompleteQuest(64129);
                                                                                                            cm.forceStartQuest(64130, '');
                                                                                                            cm.npc_LeaveField("oid=7540663");
                                                                                                            cm.npc_LeaveField("oid=7540663");
                                                                                                            cm.npc_LeaveField("oid=7540664");
                                                                                                            cm.npc_LeaveField("oid=7540664");
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