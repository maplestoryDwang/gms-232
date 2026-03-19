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
      cm.setStandAloneMode(true);
      cm.forceForfeitQuest(64167);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -2700, 215);
      cm.npc_ChangeController(9400582, "oid=4211651", -2650, 220, 8, -2700, -2600, 0, true, false);
      cm.npc_SetSpecialAction("oid=4211651", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=4211652", -2580, 220, 9, -2630, -2530, 0, true, false);
      cm.npc_SetSpecialAction("oid=4211652", "summon", 0, 0);
      cm.npc_SetForceMove("oid=4211652", 1, 300, 100);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=4211651", 1, 300, 100);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 320);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
            cm.effect_NormalSpeechBalloon("哎呀，我心爱的胸针不见了！估计是掉在森林里了。", 1, 0, 0, 2000, 9400582, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/PL_MONAD1/3", "oid=4211651"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=4211652", -1);
                cm.inGameDirectionEvent_AskAnswerTime(3500);
                cm.effect_NormalSpeechBalloon("嗬嗬，那片森林可是恶名昭彰，里头有个家伙特别喜欢这种东西。", 1, 0, 0, 2000, 9400589, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=4211651", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                  cm.effect_NormalSpeechBalloon("家伙？什么意思？说你吗，#h0#？", 1, 0, 0, 2000, 9400582, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_NormalSpeechBalloon("#b我？", 1, 0, 0, 2000, 0, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(250);
                      cm.effect_NormalSpeechBalloon("因为你说不费吹灰之力，我就没管它们了。", 1, 0, 0, 2000, 9400589, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(9400592, "oid=4212218", -1700, 350, 13, -1750, -1650, 1, true, false);
                        cm.npc_SetSpecialAction("oid=4212218", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=4212218", -1, 340, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNewEffects(17, [2000, 1000, 2000, -2150, 375]);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b（那是我在大本营见到的酒鬼。他平安回来了。）", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#噢！佩图尔，嗝。咱们村英明的顾问！嗝，不对……应该叫导师？对，导师！呵呵……你有没有藏着好酒跟我分享下？嗝", 37, 9400592, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=4211652", 1);
                                      cm.npc_setForceFlip("oid=4211651", 1);
                                      cm.sendNormalTalk_Bottom("#face0#阿尔西，你又喝酒了！", 37, 9400589, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=4211652", 1, 20, 100);
                                        cm.sendNormalTalk_Bottom("#face0#啊啊-我没醉，嗝", 37, 9400592, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#不对，我醉了！嗝，这严酷的寒冬……嗝，不喝点酒怎么挺得过去。呵呵呵", 37, 9400592, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#燃烧的~~村庄~~~黑蒙蒙的烟雾~~~嗝，伸手~~~不见五指的雪雾~~~还有在那雾中若隐若现的巨大黑影~~！", 37, 9400592, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation");
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b巨大黑影？", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_ChangeController(9400588, "oid=4212412", -1507, 354, 15, -1557, -1457, 1, true, false);
                                                      cm.npc_SetSpecialAction("oid=4212412", "summon", 0, 0);
                                                      cm.forceStartQuest(64161, '');
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#呵呵，你不也看见了吗？嗝", 37, 9400592, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#它在雾中~~时隐~~时现~~", 37, 9400592, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b（酒鬼大叔也跟我一样看见了那东西。）", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#……哦，阿尔西……", 37, 9400589, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=4211652", -1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#凯恩，#h0#，我得把阿尔西送回去再来，咱们一会儿到刚才那屋子前面碰头。", 37, 9400589, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#好的，你去吧！", 37, 9400582, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=4211652", 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=4211652", 1, 50, 50);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=4212218", 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=4212218", 1, 1000, 60);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=4211652", 1, 1000, 60);
                                                                                    cm.npc_SetForceMove("oid=4212412", -1, 600, 80);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#b（等他酒醒了再问个清楚。）", 57, 0, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.updateInfoQuest(64020, "chk1=1");
                                                                                        cm.playerMessage(-1, "去和酒醒的阿尔西对话。");
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("唉！那大叔又那样了……！", 37, 9400588, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("啊-！你们好，凯恩！还有……#h0#……！", 37, 9400588, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#b你一切都好吧。", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("托你的福……嘿嘿。请忘了我之前哭哭啼啼的糗样。我本不是那种软弱的人……当时是急糊涂了……唉", 37, 9400588, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#哎~~谁说不是，你当初见到我的时候也是一把鼻涕一把泪的。", 37, 9400582, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetForceMove("oid=4212412", -1, 50, 80);
                                                                                                    cm.sendNewEffects(17, [2000, 2000, 2000, -2250, 375]);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("我什么时候那样了？", 37, 9400588, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("话说回来，阿尔西大叔原先也不是那副模样……", 37, 9400588, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("只是……一下子发生太多难以承受的事情，让他有些精神失常了。", 37, 9400588, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#再怎么说，精神失常这个词有点严重了吧？", 37, 9400582, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("可乡亲们都是这么说的，说他有妄想症！他动不动就说谎，见人家不相信，就喝酒撒泼。", 37, 9400588, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("尽管他几次尝试过戒酒……可你们也看见了，尝试全都失败了。", 37, 9400588, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("也就只有佩图尔大叔才会对他那样和颜悦色了。", 37, 9400588, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯", 37, 9400582, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#b他也失去了亲人吗？", 57, 0, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("……嘿嘿，你在这村里恐怕很难找到一个没失去亲人的人。", 37, 9400588, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("对了！我在找我的小石和小纯。你们有没有见到一头小不点花花象，和一只系着蝴蝶结的花花象？", 37, 9400588, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#没见过。", 37, 9400582, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#b我也没有，只见过那些暴躁地横冲直撞的花花象。", 57, 0, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("唉，它们跑哪儿去了。那我先走啦！", 37, 9400588, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_setForceFlip("oid=4212412", -1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_SetForceMove("oid=4212412", -1, 1000, 90);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_setForceFlip("oid=4211651", -1);
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##h0#，咱们也走吧。", 37, 9400582, false, true);
                                                                                                                                      } else if (status === V++) {
                                                                                                                                        cm.forceCompleteQuest(64022);
                                                                                                                                        cm.warp(867200400, 2, true);
                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.npc_LeaveField("oid=4211651");
                                                                                                                                        cm.npc_LeaveField("oid=4211651");
                                                                                                                                        cm.npc_LeaveField("oid=4211652");
                                                                                                                                        cm.npc_LeaveField("oid=4211652");
                                                                                                                                        cm.npc_LeaveField("oid=4212218");
                                                                                                                                        cm.npc_LeaveField("oid=4212218");
                                                                                                                                        cm.npc_LeaveField("oid=4212412");
                                                                                                                                        cm.npc_LeaveField("oid=4212412");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;