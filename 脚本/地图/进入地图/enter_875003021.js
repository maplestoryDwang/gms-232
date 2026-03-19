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
      cm.npc_ChangeController(9401277, "oid=2750656", 820, 75, 25, 770, 870, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2750656", "summon", 0, 0);
      cm.npc_ChangeController(9401278, "oid=2750657", 1000, 75, 25, 950, 1050, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2750657", "summon", 0, 0);
      cm.npc_ChangeController(9401299, "oid=2750658", 1270, 75, 26, 1220, 1320, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2750658", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 887, 89);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNewEffects(17, [0, 1000, 2000, 915, 130]);
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
            cm.npc_SetForceMove("oid=2750658", -1, 150, 100);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=2750657", 1);
              cm.sendNormalTalk_Bottom("#face0#分舵主，你吩咐的事情我打听过了。", 37, 9401299, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#有什么事。", 37, 9401278, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#那天之后没有可疑的人乘船离开这里。", 37, 9401299, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#没错，一定还躲在河津或者翻过山离开了。", 37, 9401278, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#辛苦了。", 37, 9401278, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#然后……醒了……过来。", 37, 9401299, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#……知道了。我马上就去。", 37, 9401278, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2750658", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(600);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=2750658", 1, 1000, 100);
                                cm.npc_setForceFlip("oid=2750657", -1);
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "，素笑姑娘。", 37, 9401278, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0##b是。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#调查最好由我继续进行。好像会……花费不少时间。", 37, 9401278, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0##b我愿意和你们一起。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#不，这种事情我们是专家，就交给我们好了。", 37, 9401278, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#比起那个……", 37, 9401278, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#你不是说要重建玄山派吗？\r\n如果不想关门大吉，最好先去招收弟子，重建门派。", 37, 9401278, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5##b……都还没……来得及哀悼。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#你们两个太年轻，没有体验过江湖的残酷……要是让其他门派知道玄山派被毁的消息，那些热衷于争权夺利的人会让重建难上加难。", 37, 9401278, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face5#正派之间……难道不该互相帮助吗？", 37, 9401277, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#这也是不可避免的。事实……真的很残酷。\r\n虽然我相信你们两个可以重建玄山派，但是在其他人看来……", 37, 9401278, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#哈，正派……说得好听，但其实彼此之间产生间隙已经很久了。\r\n在众多门派依靠武力榨取民脂民膏的世界上，行侠仗义早已变成往事。", 37, 9401278, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#要是听说了玄山派的消息，他们不但不会出手相助，还会为了占据河津而挣红了眼。唉，说起这些只会让人不快。", 37, 9401278, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4##b虽然希望纯属臆测，但万一是真的……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face4#首先必须招募弟子，传授玄山派的武学。", 37, 9401277, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你果然很聪明！素笑姑娘！", 37, 9401278, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face4#谢谢你的建议，风乞丐大叔。", 37, 9401277, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#要是有什么新消息，我会去找你们。你们两个……加油。", 37, 9401278, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=2750657", 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=2750657", 1, 1000, 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                cm.npc_LeaveField("oid=2750656");
                                                                                cm.npc_LeaveField("oid=2750657");
                                                                                cm.npc_LeaveField("oid=2750658");
                                                                                cm.dispose();
                                                                                cm.warp(875003022, 0, false);
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