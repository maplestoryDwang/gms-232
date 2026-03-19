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
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.setInGameDirectionMode(false, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.npc_ChangeController(3001301, 'oid=914829', 57, -42, 3, 7, 107, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=914829', 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNormalTalk_Bottom("#face0#好,特别活动马上开始了。", 37, 3001301, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3001323, "oid=914830", -243, -42, 4, -293, -193, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=914830", "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, -10, 1, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#先让我看看你的实力吧？", 37, 3001301, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#请攻击练习机器人！", 37, 3001301, true, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_OneTimeAction("魔链影士_突刺", 0);
              cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
              cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001001/Use", 100);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/hit", "oid=914830"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001001/Hit", 100);
                cm.npc_SetSpecialAction("oid=914830", "die", 0, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField('oid=914830');
                  cm.sendNormalTalk_Bottom("#face0#(呼……)", 37, 3001351, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#哦吼,不错嘛！", 37, 3001301, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#嗯,那这个如何？", 37, 3001301, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3001325, "oid=914842", -243, -42, 4, -293, -193, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=914842", "summon", 0, 0);
                        cm.sendNormalTalk_Bottom("#face0#(呃啊……这怪物看起来好强啊……)", 37, 3001351, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#好,赶快攻击！", 37, 3001301, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_OneTimeAction('魔链影士_突刺', 0);
                            cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001001/Use", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction('oid=914842', 'hit', -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.setNpcSpecialActionReset('oid=914842');
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#(完蛋了……完全没反应啊……？)", 37, 3001351, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#请全身心关注水晶魔力的力量。", 37, 3001301, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -40, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#放下恐惧和疑惑,保持谦虚、坚定的意志很重要。", 37, 3001301, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#(抛开恐惧……坚定信念……)", 37, 3001351, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#好,如果准备好了,就向前方的目标物发动攻击吧。", 37, 3001301, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_OneTimeAction("魔链影士_突刺", 0);
                                                    cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001001/Use", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/hit", "oid=914842"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                      cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001001/Hit", 100);
                                                      cm.npc_SetSpecialAction("oid=914842", "die", 0, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=914842");
                                                        cm.sendNormalTalk_Bottom("#face0#……！！", 37, 3001351, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#干得漂亮！太了不起了。", 37, 3001301, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#只要持续练习,一定能熟练使用水晶魔力。鼓起勇气,相信你自己。", 37, 3001301, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#阿加特大人……", 37, 3001351, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 50, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#早晚我也会……", 37, 3001351, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 50, 30);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#那能变得像阿加特大人一样强大吗？", 37, 3001351, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#当然了,伊利温。", 37, 3001301, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#凭你的实力,很快就能超越我。", 37, 3001301, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -40, 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('1', "Effect/Direction14.img/illium/tuto/1", 0, 1500, 0, -80, 0, 4, 1, -1, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#(和阿加特大人的#b特别活动#k开始了。)", 37, 3001351, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('2', "Effect/Direction14.img/illium/tuto/2", 0, 1500, 0, -80, 0, 4, 1, -1, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#(每天放学后跟阿加特大人一起修炼,是学院生活最大的乐趣。)", 37, 3001351, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_ProcessOnOffLayer('3', "Effect/Direction14.img/illium/tuto/3", 0, 1500, 0, -80, 0, 4, 1, -1, 0, 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#(多亏了阿加特大人,我终于稍稍能控制自己的魔法能力了。)", 37, 3001351, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_ChangeController(3001325, 'oid=914998', -243, -42, 4, -293, -193, 0, true, 0, false);
                                                                                                  cm.npc_SetSpecialAction("oid=914998", "summon", 0, 0);
                                                                                                  cm.npc_ChangeController(3001325, "oid=914999", -323, -42, 4, -373, -273, 0, true, 0, false);
                                                                                                  cm.npc_SetSpecialAction("oid=914999", "summon", 0, 0);
                                                                                                  cm.npc_ChangeController(3001325, "oid=915000", -403, -42, 4, -453, -353, 0, true, 0, false);
                                                                                                  cm.npc_SetSpecialAction("oid=915000", 'summon', 0, 0);
                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.effect_REPEAT("Effect/Direction14.img/illium/text/0", 1, 1, 1, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.effect_REPEAT("Effect/Direction14.img/illium/text/0", 1, 0, 0, 0, 0);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#好,就是现在！", 37, 3001301, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_OneTimeAction("魔链影士_突刺", 0);
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001001/Use", 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/hit", "oid=914998"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/hit", "oid=914999"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Skill/15200.img/skill/152001001/hit", "oid=915000"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001001/Hit", 100);
                                                                                                            cm.npc_SetSpecialAction("oid=914998", 'die', 0, 1);
                                                                                                            cm.npc_SetSpecialAction('oid=914999', "die", 0, 1);
                                                                                                            cm.npc_SetSpecialAction("oid=915000", "die", 0, 1);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_LeaveField("oid=914998");
                                                                                                              cm.npc_LeaveField("oid=914999");
                                                                                                              cm.npc_LeaveField("oid=915000");
                                                                                                              cm.sendNormalTalk_Bottom("#face0#哇……！！", 37, 3001351, false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#了不起！竟然瞬间就消灭了！！", 37, 3001301, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#短时间内竟然有这么大进步,果然了不起。", 37, 3001301, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这全是阿加特大人的功劳……谢谢。", 37, 3001351, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#哈哈,这多亏了伊利温的全力配合。", 37, 3001301, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#好,那今天就到此为止吧？", 37, 3001301, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.updateInfoQuest(34806, "scene=1;train=1;item1=1;item2=1;exp=1");
                                                                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                            } else if (status === V++) {
                                                                                                                              cm.npc_LeaveField("oid=914829");
                                                                                                                              cm.dispose();
                                                                                                                              cm.warp(402000521, 14, true);
                                                                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                              cm.setStandAloneMode(false);
                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
          }
        }
      }
    }
  }
}