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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 70, 12);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004431, "oid=1047433", -20, 12, 2, -70, 30, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1047433", "summon", 0, 0);
      cm.npc_ChangeController(3004434, "oid=1047434", 152, 14, 2, 102, 202, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1047434", "summon", 0, 0);
      cm.setNPC_Fadein(3004434, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 94, 35);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust3/5", 0, 1000, -90, -80, 1, 4, 0, -1, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#世界的意志为了对抗古代神", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("\t\t铸造了名为#fc0xFF000000#“神枪”的兵器。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#兵器与智慧体融合后，成了半神，", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#他们与神明的对峙宣告着古代战争开启。", 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#（中间尽是些战争情景的描述……）", 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#为了发动“神枪”的力量，", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#需要多数智慧体的“心愿”。", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#也许是为了防止蕴含神之力的物品", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#被特定的某个人“独占”。", 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("\t\t#fc0xFF000000#“与圣遗物挑选主人的方式”相似。", 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3004431, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#这是重要的线索。", 37, 3004431, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#书上说那个人是在各方面都受到认可的人。\r\n所以“拥有使用神明物品的资格。”", 37, 3004431, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#也就是说，因此只有#b高洁之人#k才可以驾驭圣剑。", 37, 3004431, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0##b塞伦#k的话，首先符合被密特拉，尼罗塔，斯皮萨三个教团认可的条件。", 37, 3004431, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#话说回来，没想到#b“高洁之人拯救了世界”#k\r\n这么浪漫的传说之下，居然有这样的现实……", 37, 3004431, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#塞伦要是听说了这事，她的反应一定会很有趣，好可惜啊。", 37, 3004431, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('#face0#嘘。', 37, 3004434, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#什么？", 37, 3004431, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_ChangeController(3004430, "oid=1049519", -122, 12, 2, -172, -72, 0, true, 1000, false);
                                                          cm.npc_SetSpecialAction("oid=1049519", "summon", 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=1047433", -1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face5#呃……", 37, 3004431, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face4#为什么……这么大惊小怪的？", 37, 3004430, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/ghostGone", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face7#不、不、不是这样的……咳咳！！", 37, 3004431, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face4#伊、伊黛娜大人，你没事吧？", 37, 3004430, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face5#啊，这……看样子用了圣水也没能立刻恢复。", 37, 3004431, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else if (status === V++) {
                                                                          cm.eventSKill(0);
                                                                          cm.forceCompleteQuest(39908);
                                                                          cm.warp(410000690, 1, false);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.setStandAloneMode(false);
                                                                          cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                                                                          cm.updateInfoQuest(39900, "00=h0;11=h0;04=h1;05=h1;06=h1;07=h0;25=h1;55=h0");
                                                                          cm.updateInfoQuest(39900, "00=h0;11=h0;04=h0;05=h1;06=h1;07=h0;25=h1;55=h0");
                                                                          cm.npc_LeaveField("oid=1047433");
                                                                          cm.npc_LeaveField("oid=1047433");
                                                                          cm.npc_LeaveField("oid=1047434");
                                                                          cm.npc_LeaveField("oid=1047434");
                                                                          cm.npc_LeaveField("oid=1049519");
                                                                          cm.npc_LeaveField("oid=1049519");
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