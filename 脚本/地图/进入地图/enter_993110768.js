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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3004116, "oid=2425745", 663, 12, 1, 613, 713, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2425745", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 596, 63);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#几日后，飞花院"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), 420, 100);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你做到了一件非凡的事。", 37, 3004116, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#虽然我早就对你的强大有所耳闻，\r\n但没想到你居然能亲自击败黑魔法师……", 37, 3004116, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我代表飞花院衷心地感谢你，\r\n感谢你守护了这个世界，也感谢你传扬了暗影双刀之名，还有……", 37, 3004116, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#还要感谢你，这场战斗应该非常艰难，感谢你能安然无恙地回来。", 37, 3004116, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("身为暗影双刀，这不过是理所应当的事情而已。", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我明白你的意思了，然而如今我们对这世界的变化知之甚少。", 37, 3004116, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#一直以来都生活在自己最为熟悉的暗影中，在阳光下抛头露面对我们来说实在是有些艰难。", 37, 3004116, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#不过通过#h0#我也明白了，所谓的变化并不一定都是坏事。", 37, 3004116, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#其实……我最近也常去那家爵士酒吧。", 37, 3004116, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("那里的话……", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#没错，那是我曾经凭借一己之见认定的仇家所在的地方。", 37, 3004116, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#看来鸡尾酒这东西也并没有我想的那么糟糕。", 37, 3004116, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我们双刀客也像我一样，会一点点地发生变化，\r\n就像是你带来的那种有些教人犹疑、却又让人悸动的变化。", 37, 3004116, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#看样子，又有新的冒险在等着我了。", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#去吧，我会等着你凯旋的消息的。", 37, 3004116, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_Hero9(0, 3000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                  cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                  } else if (status === V++) {
                                                                    cm.forceStartQuest(39701, '');
                                                                    cm.dispose();
                                                                    cm.warp(993120000, 5, false);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.npc_LeaveField("oid=2425745");
                                                                    cm.npc_LeaveField("oid=2425745");
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}