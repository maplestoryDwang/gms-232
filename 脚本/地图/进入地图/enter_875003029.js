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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401277, "oid=2152997", -400, 325, 15, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152997", "summon", 0, 0);
      cm.npc_ChangeController(9401287, "oid=2152998", -165, 325, 15, -215, -115, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152998", 'summon', 0, 0);
      cm.npc_ChangeController(9401288, "oid=2152999", -30, 325, 15, -80, 20, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152999", 'summon', 0, 0);
      cm.npc_ChangeController(9401366, "oid=2153000", -1050, 330, 15, -1100, -1000, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2153000", "summon", 0, 0);
      cm.npc_ChangeController(9401366, "oid=2153001", -950, 330, 15, -1000, -900, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2153001", "summon", 0, 0);
      cm.npc_ChangeController(9401366, "oid=2153002", -850, 330, 15, -900, -800, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2153002", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_SetSpecialAction("oid=2152998", "special", -1, 0);
      cm.npc_SetSpecialAction("oid=2152999", 'special', -1, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -150, 370]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNewEffects(12, [4000, -1000, 370]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4##b（那天之后……一股熟悉而又充盈的气息在沿着气脉流动。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4##b（只有能熟练运用这种气，才能超越过去的我……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4##b（但是……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001002/Use", 100);
                        cm.inGameDirectionEvent_OneTimeAction(2128, 0);
                        cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001002/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601664/Damage", 80);
                          cm.npc_SetSpecialAction("oid=2153000", "hit", 0, 0);
                          cm.npc_SetSpecialAction("oid=2153001", "hit", 0, 0);
                          cm.npc_SetSpecialAction("oid=2153002", "hit", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001003/Use", 100);
                            cm.inGameDirectionEvent_OneTimeAction(2136, 0);
                            cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601664/Damage", 80);
                              cm.npc_SetSpecialAction("oid=2153000", "hit", 0, 0);
                              cm.npc_SetSpecialAction("oid=2153001", "hit", 0, 0);
                              cm.npc_SetSpecialAction("oid=2153002", 'hit', 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.playerMessage(5, "[神功：破碎拳]可与[玄山：第1式]衔接使用。");
                                cm.getPlayer().getTopMsgByItem(3801596, "[神功：破碎拳]可与[玄山：第1式]衔接使用。");
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4##b（虽然现在已经很熟悉了，但是还不够。必须能够运用自如才行。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4##b（与玄山派的招式配合，彼此相辅相成……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4##b（不能让气息中断……！）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001002/Use", 100);
                                          cm.inGameDirectionEvent_OneTimeAction(2128, 0);
                                          cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001002/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601664/Damage", 80);
                                            cm.npc_SetSpecialAction("oid=2153000", 'hit', 0, 0);
                                            cm.npc_SetSpecialAction("oid=2153001", "hit", 0, 0);
                                            cm.npc_SetSpecialAction("oid=2153002", "hit", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175001003/Use", 100);
                                              cm.inGameDirectionEvent_OneTimeAction(2136, 0);
                                              cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/special"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/destroy", 100);
                                                cm.npc_SetSpecialAction("oid=2153000", "die", 0, 0);
                                                cm.npc_SetSpecialAction("oid=2153001", "die", 0, 0);
                                                cm.npc_SetSpecialAction("oid=2153002", 'die', 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.playerMessage(5, "使用神功宏，可以用一个按钮使用最多4个技能。");
                                                  cm.getTopMsgFont("使用神功宏，可以用一个按钮使用最多4个技能。", 3, 20, 20, 0, 0);
                                                  cm.playerMessage(5, "将技能拖放到宏指令栏中之后，可以为宏图标设置快捷键或者添加到快捷栏中使用。");
                                                  cm.getTopMsgFont("将技能拖放到宏指令栏中之后，可以为宏图标设置快捷键或者添加到快捷栏中使用。", 3, 20, 20, 0, 0);
                                                  cm.playerMessage(5, "通过神功宏快捷键，可以自动发动当前招式对应的神功技能。");
                                                  cm.getTopMsgFont("通过神功宏快捷键，可以自动发动当前招式对应的神功技能。", 3, 20, 20, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4##b（必须努力修炼，直到可以自然地连接为止。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_ChangeController(9401299, "oid=2153008", -650, 325, 15, -700, -600, 1, true, 0, false);
                                                      cm.npc_SetSpecialAction("oid=2153008", "summon", 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=2153008", -1, 100, 100);
                                                        cm.sendNormalTalk_Bottom("呼，呼……大、大侠！大侠！", 37, 9401299, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
                                                          cm.sendNewEffects(12, [2000, -800, 370]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0##b出什么事了？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#魔、魔物们跑到村里来了！", 37, 9401299, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face4##b魔物？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#是的，是的！从河边来了很多山魔鬼，足有好几十个！！！！", 37, 9401299, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNewEffects(12, [2000, -320, 370]);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face5##b我……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face5##b（……会不会在我离开玄山派的时候，又……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=2152997", -1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face4#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！在想什么呢！", 37, 9401277, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=2152997", -1, 150, 100);
                                                                                    cm.npc_setForceFlip("oid=2153008", 1);
                                                                                    cm.sendNewEffects(12, [1000, -600, 370]);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face4#必须给弟子们做好榜样！之前" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "不是说了吗？", 37, 9401277, false, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0##b……面对需要帮助的人，决不能袖手旁观。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#快去看看吧！", 37, 9401277, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face4##b我先走了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNewEffects(19, [0]);
                                                                                                      } else if (status === V++) {
                                                                                                        cm.forceCompleteQuest(65943);
                                                                                                        cm.gainExp(18812);
                                                                                                        cm.npc_LeaveField("oid=2152997");
                                                                                                        cm.npc_LeaveField("oid=2152998");
                                                                                                        cm.npc_LeaveField("oid=2152999");
                                                                                                        cm.npc_LeaveField("oid=2153000");
                                                                                                        cm.npc_LeaveField("oid=2153001");
                                                                                                        cm.npc_LeaveField("oid=2153002");
                                                                                                        cm.npc_LeaveField("oid=2153008");
                                                                                                        cm.dispose();
                                                                                                        cm.warp(875000001, 2, false);
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