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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9401283, "oid=2154751", 1250, 70, 139, 1200, 1300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154751", "summon", 0, 0);
      cm.npc_ChangeController(9401364, "oid=2154752", 1600, 70, 145, 1550, 1650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154752", "summon", 0, 0);
      cm.setNPC_Fadein(9401283, 1);
      cm.setNPC_Fadein(9401364, 1);
      cm.sendNewEffects(17, [0, 1000, 1500, 1400, 120]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.sendNormalTalk_Bottom("#face0#大侠，谢谢你能抽出时间。", 37, 9401283, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0##b这话该我说才对。\r\n得到了这么多的帮助，我的心里一直有点过意不去。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哎呀呀，千万别这么说！分舵主绝不是会白干活的人。因为墨玄大侠之前帮了很多忙，他才肯站出来。", 37, 9401283, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#我要去向分舵主报告！孩子，你家在哪儿？我顺便把你送回去！", 37, 9401283, true, true, 1);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=2154751", 1, 100, 100);
                  cm.inGameDirectionEvent_ForcedFlip(1);
                  cm.sendNewEffects(12, [1000, 1500, 120]);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哎呀，我在这个村里住了10多年了！哪条路更安全，我比你更清楚！", 37, 9401364, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#想想确实也是。不过还是让人很担心。", 37, 9401283, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3##b（……孩子一个人捡松果卖，总觉得很奇怪。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3##b我也有点担心。\r\n虽然你知道安全的路，但没人保证不会发生今天一样的事……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……我也知道，但是赚钱的办法只有这一个。切……", 37, 9401364, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("对了！勇士，你是从玄山派来的吗？", 37, 9401364, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0##b你是怎么知道的？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2154752", -1, 10, 100);
                                  cm.sendNormalTalk_Bottom("哇！真的吗？\r\n刚才救我的时候，看你使用的是拳法，我还在猜呢！最近你可是大名人！", 37, 9401364, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#啊哈，这孩子还挺聪明的嘛？", 37, 9401283, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("嘿嘿，经常有人这么说。\r\n加入玄山派，就能变得像你一样强吗？", 37, 9401364, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1##b你为什么想要变强？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("要是我变得更强，就能收集野狼毛卖，不用再捡松果了！\r\n那样就不用担心饿肚子了……但是像我这样的孩子没办法加入玄山派，对吧？", 37, 9401364, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0##b你要……和我一起去？\r\n但是成为玄山的弟子之后，除了填饱我自己的肚子之外，还必须负责填饱弱者们的肚子。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("真的？！真的吗？！我一定不会辜负你的期望！", 37, 9401364, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1##b当然。不过在这之前必须得到父母的同意。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("那个不用担心！因为我只有一个人！", 37, 9401364, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0##b是吗？真的不会后悔？训练真的很辛苦哦。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('我的体力绝对没问题！', 37, 9401364, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1##b不错嘛。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#孩子，你运气真好！\r\n成为像玄山派这样名门正派弟子的机会可不是谁都能遇到的！", 37, 9401283, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("谢谢，谢谢你！勇士！", 37, 9401364, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#再见面的时候，我该叫你师父了吗？", 37, 9401283, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#墨玄大侠！我会顺便把孩子在送到玄山派。", 37, 9401283, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("墨玄……师父！我要去努力修炼了！", 37, 9401364, true, true, 1);
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
                                                                        cm.forceCompleteQuest(65969);
                                                                        cm.npc_LeaveField("oid=2154751");
                                                                        cm.npc_LeaveField("oid=2154752");
                                                                        cm.dispose();
                                                                        cm.warp(211000000, 13, false);
                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.teachSkill(170000001, 5, 10);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/skillUp", 100);
                                                                        cm.getTopMsgFont("<玄山气势>技能的等级提升。", 3, 20, 20, 0, 0);
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}