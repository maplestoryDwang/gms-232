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
      cm.npc_ChangeController(3004431, "oid=63541877", 102, 192, 9, 52, 152, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63541877", "summon", 0, 0);
      cm.npc_ChangeController(3004436, "oid=63541878", -82, 152, 19, -132, -32, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63541878", "summon", 0, 0);
      cm.npc_ChangeController(3004435, "oid=63541879", -82, 245, 20, -132, -32, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63541879", "summon", 0, 0);
      cm.npc_ChangeController(3004481, "oid=63541880", 168, 154, 18, 118, 218, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=63541880", "summon", 0, 0);
      cm.npc_ChangeController(3004481, "oid=63541881", 250, 145, 18, 200, 300, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=63541881", 'summon', 0, 0);
      cm.npc_ChangeController(3004481, "oid=63541882", -200, 154, 19, -250, -150, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=63541882", 'summon', 0, 0);
      cm.npc_ChangeController(3004481, "oid=63541883", -200, 245, 24, -250, -150, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=63541883", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -148, 64);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(5000);
        cm.effect_Text(["#fn黑体##fs18#当天晚上，西城门。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
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
              cm.sendNormalTalk_Bottom("#face1#我尝试过说服塞伦，但失败了。", 37, 3004435, false, true);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 100, 190);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#没办法。身为一位怀疑太阳神的圣骑士……\r\n她当然无法相信自己能成为圣剑的主人了。", 37, 3004436, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#“我所相信、追随的神，是真实存在的吗？\r\n如果真的有神，那他拥有值得我追随的品质吗……”", 37, 3004431, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#她的信仰发生了根本上的动摇。", 37, 3004431, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#即便如此也无法放弃使命…… ", 37, 3004431, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#因为如果她的怀疑得到验证，\r\n那么之前人们的牺牲全都毫无意义。", 37, 3004431, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#尽管我能理解……但还是很不甘心。", 37, 3004436, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#明知毫无意义，\r\n却因为无法承认，或不愿承认已经发现的错误……", 37, 3004434, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#人们就是这样，不断重复同一个错误。", 37, 3004434, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(3004434, "oid=63545258", 160, 192, 9, 110, 210, 1, true, 1000, false);
                                          cm.npc_SetSpecialAction("oid=63545258", "summon", 0, 0);
                                          cm.npcMove(3004434, 0, 20, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
                                            cm.sendNormalTalk_Bottom("艾伦？", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#这就是为什么这块圣地，不，这整片大陆都无法停止无谓的纷争。", 37, 3004434, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#是我叫他来的。\r\n如果圣剑落到奇勒摩手上，身为高等翼人的他也会面临危险，\r\n因此我希望他能与我们一同前往冒险岛世界。", 37, 3004431, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#宁愿让纷争继续，也不愿承认错误……这是什么意思？", 37, 3004435, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#比如……\r\n太阳也有许多面貌。黎明的朝阳、正午的烈日，还有傍晚的夕阳。", 37, 3004434, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#古代人崇尚黎明朝阳中的希望，正午烈日中的正义，\r\n以及傍晚夕阳中的火焰与愤怒。", 37, 3004434, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#黎明和火焰……吗……？", 37, 3004436, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#古代神的时代落幕后，\r\n太阳神的教团在漫长的岁月中，逐渐分裂成了多个教派。", 37, 3004434, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#自从神的声音消失已经过去数百年了。\r\n在这漫长的岁月里，他们逐渐连应该在哪里向自己所追随的神明祈祷都忘记了。", 37, 3004434, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#你是说，难道……？", 37, 3004435, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#对，没错。", 37, 3004434, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#其实尼罗塔和斯皮萨都只是密特拉的别名而已。", 37, 3004434, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63541877"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63541878"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63541879"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("既然如此…… \r\n围绕圣地展开的，持续了数百年之久的战争，究竟有何意义呢……", 57, 0, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#真是……令人无语。", 37, 3004435, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#等等。如果这话属实，那么就算#r奇勒摩#k成为了圣剑主人，也根本没有必要继续排挤“异教徒”吧？", 37, 3004436, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#其实这些人全都信仰太阳神啊？", 37, 3004436, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#理性思考的话确实如此。\r\n但是……想想塞伦的遭遇吧。", 37, 3004434, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#没错，他不会接受的。\r\n不，应该说是不能接受。", 37, 3004431, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face2#打着为神而战的旗号战斗了几百年，\r\n到头来这一切竟然都是徒劳……", 37, 3004431, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#圣地里的所有人都涉身其中，怎么能就这样算了呢？", 37, 3004431, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#呃……！", 37, 3004436, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#果然如艾伦所言。这简直就是……", 37, 3004431, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("（难道说与无法接受战友们无谓的牺牲，而对神明产生了怀疑的塞伦一样吗……）  ", 57, 0, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63541877"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face4#等等，如果这是真的……", 37, 3004431, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face4#这么说，圣剑之主的人选……从一开始就已经定下来了吧……？", 37, 3004431, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#什么？这是什么意思……？", 37, 3004436, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face4#圣剑之主要团结众人，所以必须是高洁之人。", 37, 3004431, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face4#只有得到尼罗塔和斯皮萨教团支持的人，才能挥动蕴含太阳神之力的圣剑阿索尔。", 37, 3004431, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#如果是这样，那排斥他们的奇勒摩怎么会……？", 37, 3004435, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetForceMove("oid=63541877", 1, 120, 100);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#伊黛娜？你去哪儿？", 37, 3004436, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=63541877", -1);
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我需要确认一件事。", 37, 3004431, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#伊黛娜大人？撤离工作就快要准备就绪了……", 37, 3004481, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#请大家先撤退吧。我稍后就跟上你们。", 37, 3004431, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#还有艾伦。你最好和我们一起回到冒险岛世界……", 37, 3004431, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_setForceFlip("oid=63545258", 1);
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#虽然很感谢你，但我不能接受。", 37, 3004434, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#战争结束前，我想一直陪着这座图书馆。", 37, 3004434, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#……我知道了。", 37, 3004431, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_setForceFlip("oid=63541877", 0);
                                                                                                                                            cm.npc_SetForceMove("oid=63541877", 1, 200, 100);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.Npc_Fadeout("oid=63541877", 0, 500);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#她就这么走了？", 37, 3004435, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#怎……怎么办？我们真的要先离开吗？", 37, 3004436, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#伊黛娜不在时，由谁负责指挥？", 37, 3004435, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#虽然并没有明说，但是，唔……\r\n这种时候果然……", 37, 3004436, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#只有#h0#吧？", 37, 3004435, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.forceCompleteQuest(39914);
                                                                                                                                                            cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                                                                                                                                                            cm.updateInfoQuest(39900, "00=h0;10=h0;11=h0;13=h0;04=h0;05=h0;23=h0;06=h0;25=h0;07=h0;55=h0");
                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                            cm.eventSKill(0);
                                                                                                                                                            cm.warp(410000900, 0, true);
                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                            cm.npc_LeaveField("oid=63541877");
                                                                                                                                                            cm.npc_LeaveField("oid=63541877");
                                                                                                                                                            cm.npc_LeaveField("oid=63541878");
                                                                                                                                                            cm.npc_LeaveField("oid=63541878");
                                                                                                                                                            cm.npc_LeaveField("oid=63541879");
                                                                                                                                                            cm.npc_LeaveField("oid=63541879");
                                                                                                                                                            cm.npc_LeaveField("oid=63541880");
                                                                                                                                                            cm.npc_LeaveField("oid=63541880");
                                                                                                                                                            cm.npc_LeaveField("oid=63541881");
                                                                                                                                                            cm.npc_LeaveField("oid=63541881");
                                                                                                                                                            cm.npc_LeaveField("oid=63541882");
                                                                                                                                                            cm.npc_LeaveField("oid=63541882");
                                                                                                                                                            cm.npc_LeaveField("oid=63541883");
                                                                                                                                                            cm.npc_LeaveField("oid=63541883");
                                                                                                                                                            cm.npc_LeaveField("oid=63545258");
                                                                                                                                                            cm.npc_LeaveField("oid=63545258");
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
        }
      }
    }
  }
}