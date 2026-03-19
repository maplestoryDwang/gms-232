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
      cm.npc_ChangeController(1540795, "oid=59177", 1162, -868, 10, 1131, 1212, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350132000");
      cm.setAmbience("Ambience.img/flyingdeck", 50, 60);
      cm.updateInfoQuest(33991, "20=1;17=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 2050, -900]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1540802, "oid=306491871", 1910, -942, 4, 1860, 1960, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=306491871", "summon", 0, 0);
        cm.npc_ChangeController(1540805, "oid=306491872", 2006, -942, 4, 1956, 2056, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=306491872", 'summon', 0, 0);
        cm.npc_ChangeController(1540807, "oid=306491873", 2143, -942, 4, 2093, 2193, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=306491873", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("联络晚了啊……", 37, 1540802, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face6#该不会到这里了还在吵吧？", 37, 1540805, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#你说幻影和夜光法师吗？不会吧，他们又不是小孩子。", 37, 1540802, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face6#我听隐月说的，他们原本可是势不两立的关系，幸好有个不错的领袖，才能够并肩作战。", 37, 1540805, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你又不自信了，你做得已经很好了。", 37, 1540802, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("等一切结束了，我们也能帮忙解开隐月的诅咒吧？", 37, 1540805, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#什么？你说只要次元移动，就会从记忆中遗忘？", 37, 1540805, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#没错，所以我……次元移动会有点……等你们回到冒险岛世界，到时候我会再次加入的。", 37, 1540806, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你是哪位啊？", 37, 1540802, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4#……", 37, 1540806, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#啊哈哈，开玩笑的啦！你还会摆出那种表情啊？", 37, 1540802, true, true);
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
                                        cm.sendNormalTalk_Bottom("#face2#每当越过次元结界，所有人都会被下遗忘诅咒，这种诅咒实在是太荒唐了，你说是不是？", 37, 1540802, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face6#战神……这对隐月来说真的是个很严肃的问题。", 37, 1540805, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#我知道，所以作为朋友，我就得在旁边开开玩笑糊弄过去。", 37, 1540802, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#我认为既然是朋友，就要深有同感，就要陪着一起伤心才是！", 37, 1540805, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#这由你来做就好。", 37, 1540802, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#……啊。", 37, 1540805, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#我的意思是，虽然我们都是不一样的人，但也有着各自的角色，所以你也不用太过勉强自己努力去追赶弗里德。", 37, 1540802, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=306491871", -1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("……等一下，我好像听到了奇怪的声音。\r\n去左边，到阿布拉克萨斯的里面去看看。", 37, 1540802, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNewEffects(19, [1000]);
                                                        } else if (status === V++) {
                                                          cm.npc_LeaveField("oid=306491871");
                                                          cm.npc_LeaveField("oid=306491871");
                                                          cm.npc_LeaveField("oid=306491872");
                                                          cm.npc_LeaveField("oid=306491872");
                                                          cm.npc_LeaveField("oid=306491873");
                                                          cm.npc_LeaveField("oid=306491873");
                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.mapleHeroSetList([1, 4]);
                                                          cm.setNumberForQuestCustomData(33900, 1);
                                                          cm.showMapleHero();
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;