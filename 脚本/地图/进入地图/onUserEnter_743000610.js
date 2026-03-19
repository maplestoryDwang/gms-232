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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(9330203, "oid=885066", -89, 67, 26, -139, -39, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=885066", "summon", 0, 0);
        cm.setSessionValue("Suha4th", '885066');
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(1096007, 'oid=885067', 102, 100, 27, 52, 152, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=885067", "summon", 0, 0);
        cm.setSessionValue("Kairin", "885067");
        cm.sendNormalTalk("这是，这雾是到底什么呢?!", 1, 9330217, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.npc_ChangeController(9330216, 'oid=885068', 389, 20, 22, 339, 439, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=885068", 'summon', 0, 0);
            cm.setSessionValue("Sunyo4th_0", "885068");
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('你，你是谁!!!', 1, 9330217, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你，你是!!!!", 3, 9330217, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("是幻觉。不要被骗了。凯琳，不要紧张。是假皇帝的术法。", 1, 9330203, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("呼呼，为了找出我和我的部下应该下了不少工夫。", 1, 9330216, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你们还是不能够阻止我。", 1, 9330216, true, true);
                    } else {
                      if (status === V++) {
                        cm.emotion(5, 10000);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk('父亲的仇人!!', 3, 9330216, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("你是说至尊宝吗？真可笑。你还是被他们的刀架在脖子上。", 1, 9330216, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("什么?!!!", 3, 9330216, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("不要被骗了。那个家伙的实体还在别处。不要管他在这里说些什么！", 1, 9330203, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("仇人在眼前，要怎么忍耐！在这里！", 3, 9330203, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("仇人？#h0#，还有秀禾那家伙把你们拖到海里，就是这个家伙吧？", 1, 9330217, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("真可笑，你觉得你阻挡得了我吗？", 1, 9330216, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("对！用这双手，在父亲的牺牲下活下来的我的人生！这样做！不要看不起行走侠义之路的人！", 3, 9330216, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("呼呼呼，那个女人调查了这么多事。你不知道吗？我在此地现身，就是不容许再接近的警告之意。", 1, 9330216, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("闭嘴!", 3, 9330216, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("请不要接近。请不要虚度被不幸追逐，辛辛苦苦才活到现在的生命…。呃哈哈哈…", 1, 9330216, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("站住!!!", 3, 9330216, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_MoveAction(2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(720);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=885068", "teleportation", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(720);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=885068");
                                                      cm.inGameDirectionEvent_MoveAction(0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(720);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("消失了....", 3, 9330203, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("请听我说。不要激动。我有个想去的地方。", 1, 9330203, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.npc_LeaveField("oid=885066");
                                                            cm.npc_LeaveField("oid=885067");
                                                            cm.dispose();
                                                            cm.warp(743000600, 0, false);
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