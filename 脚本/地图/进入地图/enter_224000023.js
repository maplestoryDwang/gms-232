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
      cm.npc_ChangeController(2074112, "oid=12771", 1592, 153, 6, 1542, 1642, 0, false, 0, false);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1896, 109);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 1845, 162);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074100, "oid=2595159", 1855, 127, 18, 1805, 1905, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2595159", "summon", 0, 0);
        cm.npc_ChangeController(2074110, "oid=2595160", 2000, 119, 27, 1950, 2050, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2595160", "summon", 0, 0);
        cm.sendNormalTalk_Bottom('青儿，是我做错了。', 37, 2074110, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("不需要什么供米，就算看不见我也没关系。", 37, 2074110, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我只要有你就行，青儿，我们回家吧。", 37, 2074110, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 2074100, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#哦，好像有点奇怪啊？", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#这是？", 37, 2074100, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('青儿！', 37, 2074110, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(2074115, "oid=2595164", 2030, 119, 27, 1980, 2080, 1, false, 500, false);
                          cm.npc_SetSpecialAction("oid=2595164", "summon", 0, 0);
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('喵？', 37, 2074115, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#船上只有猫……啊？", 37, 2074100, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("青儿呢？没有吗？", 37, 2074110, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(2074116, "oid=2595166", 1817, 119, 18, 1767, 1867, 0, false, 500, false);
                                    cm.npc_SetSpecialAction("oid=2595166", "summon", 0, 0);
                                    cm.npc_setForceFlip("oid=2595160", -1);
                                    cm.npc_setForceFlip("oid=2595159", -1);
                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595159"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595160"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595164"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                    cm.sendNormalTalk_Bottom("猫！是猫啊！！", 37, 2074116, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("喵呜！", 37, 2074115, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=2595164");
                                          cm.npc_ChangeController(2074115, "oid=2595170", 1844, 119, 18, 1794, 1894, 1, false, 500, false);
                                          cm.npc_SetSpecialAction("oid=2595170", 'summon', 0, 0);
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("还不算迟，是我对不起，是我……", 37, 2074116, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我不应该放你一个人的，\r\n我都不知道你会被绑架，是我对不起你。", 37, 2074116, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#那个……你是这只猫的主人吗？", 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("是，这是我养的猫，不过，\r\n从很久以前清朝商人就很感兴趣了。", 37, 2074116, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("当听说他们要用珍贵的白猫当#g祭物#k时，我还没有放在心上，\r\n谁能想到会有这种事情……真的要谢谢你，。", 37, 2074116, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#等一下，祭物是猫？那……\r\n青儿呢？", 37, 2074100, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("从清朝艄公那儿抢来的#b发带#k分明就是青儿的东西啊。", 37, 2074110, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("这么说来……青儿，青儿她到底在哪儿？", 37, 2074110, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("……额……那个……是我的啊……", 37, 2074112, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("吵死了！", 37, 2074110, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2595166", -1);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595166"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595159"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595160"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595164"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                  cm.sendNormalTalk_Bottom("那个，在那边！", 37, 2074113, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=2595159", 1);
                                                                      cm.sendNormalTalk_Bottom("#face2#额……看来还有剩下的一行人，\r\n我们还是先离开这里吧！", 37, 2074100, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.updateInfoQuest(30411, "gExpCheck=1");
                                                                          cm.forceStartQuest(30411, '');
                                                                          cm.gainExp(142059);
                                                                          cm.forceCompleteQuest(30411);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                        } else if (status === V++) {
                                                                          cm.dispose();
                                                                          cm.warp(224000000, 22, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;