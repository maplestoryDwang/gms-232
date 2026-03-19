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
      cm.npc_ChangeController(3001357, "oid=434337", 106, 18, 16, 56, 128, 1, false, 0, false);
      cm.npc_ChangeController(3001868, "oid=434338", -8, 18, 16, -58, 42, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我根据一位冒险家的目击之谈，赶往了勇士部落北部。\r\n在那片荒凉的石山之中，见到了平民翼人少年伊利温。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(那发着蓝光的……用机械装置制成的翅膀。\r\n一看到他的模样，我被掩盖的记忆就开始隐隐闪现。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年起初有点警惕，\r\n但没过一会儿就似乎解除了疑心，还邀请我去他创造出的空间做客。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -113, 71);
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
                      cm.fieldEffect_PlayBGM("Bgm47/CrystalAcademia", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我听说某个高等翼人正在寻找我们。\r\n你看上去似乎对我们没有敌意。", 36, 3001868, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我一看你的魔法回路已烧毁，就知道了。\r\n你不是吉伦·达尔莫尔的部下。", 36, 3001868, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#不管是你烧毁的魔法回路，还是你来找我这件事……\r\n都藏着很深厚的缘由吧。", 36, 3001868, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(我向平民翼人少年讲述了这段期间的经历，\r\n也坦白过来找他是为了寻回失落的记忆。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#先代神王的骑士……这是很久以前的事了。", 36, 3001868, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#关于这件事，利奥或许更……", 36, 3001868, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#先代神王因为人品出众，以贤王之名广受称颂。", 36, 3001300, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#……但不知从何时起，他忽然变成了一位暴君。", 36, 3001300, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#暴君？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……他企图对异种族发动残忍的侵略。", 36, 3001300, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#为什么？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#仅仅是因为……他认为翼人更优越。", 36, 3001868, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#试图以教化野蛮为名，逼迫异族屈服。", 36, 3001868, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我记忆中的神王，不是会提出那种主张的人。\r\n但是，他们的话总让我不断回想起记忆中的场景。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                        cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_Hero9(0, 1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                            cm.fieldEffect_Hero9(100, 500);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayBGM("Bgm53/ForEinherjar", 0, 0);
                                                              cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction18.img/effect/adele/illust/past/3/0", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                              cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", "new", '', '5'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                              cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", "new", '', '6'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer('99', "Effect/Direction18.img/effect/adele/illust/past/6/1", 0, 1000, 0, 0, 2, 4, 1, -1, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("“不能再对那些蛮族坐视不管了。”", 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("“不懂认主的猛兽，理应受到责罚。”", 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("“必须给他们树立个明确的典范！”", 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("\r\n曾经正直的眼神变成了傲慢，", 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("那坚决的口中，吐露出狠毒的话语。", 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("即使外头关于神王殿的传闻甚嚣尘上，", 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("对平民翼人的处置也日益严苛，", 0);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("我们始终毫不怀疑地遵循了他的指示。", 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("然而，神王的暴政终于突破底线，", 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("准备向整个格兰蒂斯", 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue('发出战争的信号弹。', 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("\r\n“你们都明白主君的意思了吧？”", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("\r\n“我们中的一部分人也要加入讨伐队。”", 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("\r\n被誉为贤王的那张面孔，", 0);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_Monologue("不知不觉地竟让人觉得似乎是个假象。", 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("\r\n“都做好上战场的准备！”", 0);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_Monologue("\r\n悄然之间", 0);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("……黑暗的阴影已渐渐降临艾因近卫骑士团。", 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('99', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                                                                        cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", 'new', '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                        cm.fieldEffect_取消复合图片动画('5', 0, 0);
                                                                                                        cm.fieldEffect_取消复合图片动画('6', 0, 0);
                                                                                                        cm.fieldEffect_Hero9(0, 1000);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                          cm.fieldEffect_Hero9(100, 500);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayBGM("Bgm47/CrystalAcademia", 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#外头都说先代神王是被平民翼人杀害的。\r\n但这全部是经过歪曲的说法。", 36, 3001300, false, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#那其实是谁干的？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#真相如何，至今还没有查明。\r\n只是平民翼人认为此事与达尔莫尔有关联。", 36, 3001300, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('#face5#！？', 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#每份文献对过去事件的叙述难免会有些出入。", 36, 3001868, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#但我确信，平民翼人不会干出那样野蛮的暴行。", 36, 3001868, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#确信这个词，是坚定相信的意思。", 36, 3001300, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#也许，真相就藏在你的记忆之中。", 36, 3001868, false, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#神王殿崩塌当日的真相。", 36, 3001868, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#平民翼人原本隐居在一个名叫阿叙隆的秘密空间。\r\n但由于高等翼人的间谍告密，该地已被火焚毁，消失了。", 36, 3001300, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#现在，我们一族就只剩下我和几个孩子。\r\n平民翼人之所以被逼到如此境地，正是背负了杀害神王的骂名。", 36, 3001868, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#骑士阿黛尔……我想问问你。", 36, 3001868, true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#杀害神王的凶手，真的是平民翼人吗？", 36, 3001868, true, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我想起了在神王殿前发生的战斗。\r\n当时在场的，分明只有长着红色翅膀的士兵。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(既然如此，我卷入的那场战争确实是内战。\r\n是在高等翼人之间爆发的事件。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#我的记忆中……并没有发蓝光的机械翅膀。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……好，有你这句话就够了。", 36, 3001868, true, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#由此，我想大家都得到了彼此想要的答案。\r\n我把你送回原先所在的地方吧。", 36, 3001868, true, true, 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#再过不久，格兰蒂斯将再次陷入混沌。\r\n在那天到来之前，你也必须要做出决定。", 36, 3001868, true, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#但愿……", 36, 3001868, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……我们不会以敌人的身份相见。", 36, 3001868, true, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.forceStartQuest(39665, '');
                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
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
                                                                                                                                                                          cm.warp(cm.getNumberFromQuestInfo(39665, "rMap"), 0, false);
                                                                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}