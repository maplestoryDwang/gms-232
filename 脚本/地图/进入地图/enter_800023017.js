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
      cm.forceCompleteQuest(58767);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111007, "oid=3872661", 760, -40, 10, 710, 810, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3872661", "summon", 0, 0);
      cm.npc_ChangeController(9111002, "oid=3872662", 510, -40, 18, 460, 560, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3872662", 'summon', 0, 0);
      cm.npc_ChangeController(9111004, "oid=3872663", 405, -40, 19, 355, 455, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3872663", "summon", 0, 0);
      cm.npc_ChangeController(9111005, "oid=3872664", 305, -40, 20, 255, 355, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3872664", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("暗！泉奈有话要跟你说！", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#…………", 37, 9111006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#暗！我有话想跟你说！我们出来外面讲好不好？", 37, 9111007, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("出来吧，你听到泉奈说的了，之前你们之间好像有些误会。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……我不出去……不好意思，事情不是你们想的那样……。", 37, 9111006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我也很想跟你们一样，在外面和小伙伴见面，跟其他人一起生活。", 37, 9111006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#可是……可是……只要我一想到那天……", 37, 9111006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#呜咿咿咿咿咿！！", 37, 9111006, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3872661"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3872662"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3872663"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3872664"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.sendNormalTalk_Bottom("怎么了，暗。跟我们说说到底发生什么事了？", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#…………", 37, 9111006, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#5年前……", 37, 9111006, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我听说人类的村庄里有个半妖，就跟小伙伴们跑去看热闹……", 37, 9111006, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                  cm.sendNormalTalk_Bottom("#face0#我因为天生跑不快，所以落在了后面……", 37, 9111006, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#结果我在竹林里迷路了。", 37, 9111006, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3872661"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3872662"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3872663"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3872664"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.sendNormalTalk_Bottom("#face0#……路痴。", 37, 9111004, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#如果是因为这个的话不要紧！小伙伴们不会嘲笑你的！", 37, 9111007, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("是的，现在其他所有的狐妖都很崇拜你！", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……不是因为这个。", 37, 9111006, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#……不是因为这个！你们听我说完……", 37, 9111006, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……我在路上转悠了好久，找到一间寺庙。", 37, 9111006, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#那间建在竹林里的寺庙看起来很有灵气……", 37, 9111006, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#在那里我见到了终身难忘的场面！", 37, 9111006, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3872661"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3872662"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3872663"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3872664"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.sendNormalTalk_Bottom("#face0#我看见有个僧侣模样的大妖怪，把小童僧们诱骗来吃掉……！！！！", 37, 9111006, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……无语，你这家伙，你是妖怪还会害怕啊。", 37, 9111005, true, true);
                                                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……我，我不是害怕！", 37, 9111006, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……事，事实上……", 37, 9111006, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#我是在尽力隔绝自己……！", 37, 9111006, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#如果我见到那残忍的场面后感到害怕，我不会像这样把自己关起来。", 37, 9111006, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……反倒是", 37, 9111006, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#……我觉得那场面太刺激太精彩了。", 37, 9111006, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#我对自己那嗜恶的本能感到不寒而栗。", 37, 9111006, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我开始非常害怕自己……。", 37, 9111006, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#那种残忍的杀意，那正是狐妖的本质……", 37, 9111006, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#想要诱骗人类来将其吃掉的凶恶禀性……", 37, 9111006, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#我体内涌动着九尾狐之血……！", 37, 9111006, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3872661"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3872662"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3872663"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3872664"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.sendNormalTalk_Bottom("#face0#……为了防止那九尾狐之血蚕食我的意志，唤醒九尾狐，我把自己关了起来……", 37, 9111006, true, true);
                                                                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("……唔……", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#暗，你……", 37, 9111004, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#……你跟鵺大人很相似啊。难怪这么没出息。", 37, 9111005, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3872663"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                        cm.sendNormalTalk_Bottom("既然这样，你的恐惧就交给我来处理吧。", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#真，真的吗？", 37, 9111006, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("嗯，正好我也需要拿到地之五行……", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("如果我能战胜你心里的恐惧，将来你出现暴走时，我就可以随时阻止。这样你不就能安心过日子了？", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("……不过成功之后，请将你守护的五行借我用用", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#如果这个办法真的有效的话……", 37, 9111006, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#……看样子那人类也被鵺大人的王子病给传染了。", 37, 9111005, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#很抱歉，我不是故意的。", 37, 9111004, true, true);
                                                                                                      cm.forceForfeitQuest(49010);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                        cm.sendNormalTalk_Bottom("……总之，这事就包在我身上。", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_ChangeController(9111006, "oid=3873683", 985, -40, 5, 935, 1035, 1, true, 0, false);
                                                                                                          cm.npc_SetSpecialAction("oid=3873683", 'summon', 0, 0);
                                                                                                          cm.sendNormalTalk_Bottom("#face0#哦！他出来了。", 37, 9111004, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=3872661"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#暗！！", 37, 9111007, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3872664"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                              cm.sendNormalTalk_Bottom("#face0#……唔，比我想象的长得更可爱嘛。", 37, 9111005, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom('现在要怎么办？', 57, 0, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……愚蠢的人类。你进入他的内心世界不就行啦。", 37, 9111004, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("所，所以说我要怎么进去啊？", 57, 0, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face1#哼，你也有不行的时候吗，人类。", 37, 9111005, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……唉，我来帮你吧。我用我的魂魄之黑炎将你俩包裹起来就行。", 37, 9111004, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('……魂魄之黑炎？', 57, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#没错，这能使你跟这傻狐狸的魂魄相见。", 37, 9111004, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……友情提示一下，我的黑暗火焰具有将恐惧和绝望扩大至极致的力量。", 37, 9111004, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#所以平时我都将其封印起来……既然你这么有自信，应该知道该怎么做。", 37, 9111004, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("……什么，黑暗火焰真的有啊？", 57, 0, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#要不是你揪住鵺大人的小缺点做文章，我们怎么可能输。鵺大人的实力真的很强。", 37, 9111005, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("我晕……", 57, 0, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#那……就拜托了……！", 37, 9111006, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                        } else if (status === V++) {
                                                                                                                                          cm.warp(800023018, 0, false);
                                                                                                                                          cm.npc_LeaveField("oid=3872661");
                                                                                                                                          cm.npc_LeaveField("oid=3872661");
                                                                                                                                          cm.npc_LeaveField("oid=3872662");
                                                                                                                                          cm.npc_LeaveField("oid=3872662");
                                                                                                                                          cm.npc_LeaveField("oid=3872663");
                                                                                                                                          cm.npc_LeaveField("oid=3872663");
                                                                                                                                          cm.npc_LeaveField("oid=3872664");
                                                                                                                                          cm.npc_LeaveField("oid=3872664");
                                                                                                                                          cm.npc_LeaveField("oid=3873683");
                                                                                                                                          cm.npc_LeaveField("oid=3873683");
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
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}