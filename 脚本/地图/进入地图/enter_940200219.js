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
      cm.forceCompleteQuest(34490);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003350, "oid=1832772", -360, 50, 2, -410, -310, 0, true, false);
        cm.npc_SetSpecialAction("oid=1832772", 'summon', 0, 0);
        cm.npc_ChangeController(3003365, "oid=1832773", 260, 50, 5, 210, 310, 1, false, false);
        cm.npc_SetSpecialAction("oid=1832773", "summon", 0, 0);
        cm.npc_ChangeController(3003357, "oid=1832774", 490, 50, 10, 440, 540, 1, true, false);
        cm.npc_SetSpecialAction("oid=1832774", "summon", 0, 0);
        cm.npc_ChangeController(3003372, "oid=1832775", 780, 50, 14, 730, 830, 1, true, false);
        cm.npc_SetSpecialAction("oid=1832775", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=1832773", "stand2", -1, 1);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我应该早就说过让你赶紧离开这里的，你到底在这儿磨蹭什么呢？", 37, 3003309, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#异邦人，之前还装作不是，看来你也跟它是一伙的……", 37, 3003309, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, 180, 50);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=1832772", 1, 350, 140);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 380);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我们不过是想要让树枝竖琴复活罢了！现在有星光照射进来了，很快就能活过来的！", 37, 3003301, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……如果真是你说的那样，它也未免太蔫了吧？", 37, 3003309, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#既然你无视了我们的最后一次警告，异邦人，看来你得就此消失了。", 37, 3003309, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/arcana_tree/0", "oid=1832772"], [800, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(700);
                          } else {
                            if (status === V++) {
                              cm.effect_OnUserEff("Effect/Direction19.img/effect/arcana_tree/0");
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/arcana_tree/1", "oid=1832772"], [180000, 0, 0, 1, 0, 1, 0, 0]);
                              cm.sendNormalTalk_Bottom("#face0#不行，小伙伴们！", 37, 3003328, false, true);
                            } else {
                              if (status === V++) {
                                cm.effect_LastingEff("Effect/Direction19.img/effect/arcana_tree/1", 1, 180000, 0);
                                cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, 230, 50);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=1832775", -1, 130, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#看看那边！树枝竖琴不是复活了嘛！", 37, 3003328, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=1832773");
                                      cm.npc_SetSpecialAction("oid=1832773", "change", 0, 1);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/harp", 200);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.forceStartQuest(34490, '');
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#啊，那是它原来的动听声音……", 37, 3003301, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3003309, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(940200216, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;