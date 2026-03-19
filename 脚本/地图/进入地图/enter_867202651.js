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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.updateInfoQuest(64019, "chk1=1");
      cm.npc_ChangeController(9400590, "oid=7533301", -300, 130, 10, -350, -250, 0, true, false);
      cm.npc_SetSpecialAction("oid=7533301", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=7533302", 0, 130, 16, -50, 50, 1, true, false);
      cm.npc_SetSpecialAction("oid=7533302", "summon", 0, 0);
      cm.npc_ChangeController(9400592, "oid=7533303", 150, 130, 18, 100, 200, 1, true, false);
      cm.npc_SetSpecialAction("oid=7533303", 'summon', 0, 0);
      cm.npc_ChangeController(9400596, "oid=7533304", 350, 130, 20, 300, 400, 1, true, false);
      cm.npc_SetSpecialAction("oid=7533304", "summon", 0, 0);
      cm.npc_ChangeController(9400635, "oid=7533305", 400, 130, 13, 350, 450, 1, true, false);
      cm.npc_SetSpecialAction("oid=7533305", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#face0#咳呃咳呃…", 37, 9400589, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#咳呃，呃呃…", 37, 9400590, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('#b哈啊…哈啊…', 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呵额呵额… ", 37, 9400590, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#… 偷了口粮的贼人，你还有什么脸面回来？！", 37, 9400589, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#什？什么！！？呵额呵额，哎呦，累死我了！你以为我回来是为了受这种待遇吗？", 37, 9400590, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#待遇？", 37, 9400589, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#对！这种待遇！你知道吗，啊？我怕你们半路会死，还特地跑到冰峰雪域山顶上又跑回来了！", 37, 9400590, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b那也不能偷走我们的口粮啊？", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#如果你们再继续这样，我就不告诉你们我所看到的啦！", 37, 9400590, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我是因为担心你们，才回来的！", 37, 9400590, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#看你平时的德行，实在让人难以相信。而且你这幅模样，谁看了都像是从森林里徘徊数天的人…", 37, 9400589, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#那是当然！因为我穿过了那危险的山！", 37, 9400590, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b那么你在山上倒地看到了什么？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#在山上可以看到阿布鲁的全貌！", 37, 9400590, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#那不是废话吗。爬到那么高的山上，肯定能看到阿布鲁的全貌。", 37, 9400589, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#不，不对。然后… 在那里… ", 37, 9400590, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b在那里…？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#看到了非常巨~~大的身影，和围绕在那身边的红色暴风雪！", 37, 9400590, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b…！", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#每当暴风雪肆虐的时候，周围就会出现上百，不对上千只怪物！", 37, 9400590, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#那群怪物移动时会产生更大的暴风雪！！！！！！", 37, 9400590, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#… 那个和卡夫塔佩受到攻击之前是相同的情况。", 37, 9400590, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我本来打算直接到冰峰雪域的，但是我是个软心肠的人，我觉得有必要告诉你们，就马不停蹄的跑过来了！", 37, 9400590, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#现在那个红色暴风雪，正在森林里到处肆虐！！", 37, 9400590, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我看马上就要到这里了… 那红色的雪和巨大的身影！那就是征兆！", 37, 9400590, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b(… 和我见到的很相似…) ", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#怎么样？现在你们还敢那样对待我吗？", 37, 9400590, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b(… 虽然夸张了点…) ", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#b暂且相信斯洛克… 的话把。感谢你特地跑来给我们传信。", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#对吧？很感谢我吧？", 37, 9400590, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#b但是偷了口粮的事情，则不可饶恕。", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#啊？什么… 算了！", 37, 9400590, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#如果非要把我当成小偷，就能不能把我当成义贼？", 37, 9400590, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我不是来告诉你们危险了吗？", 37, 9400590, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#… 就算你帮了我们吧，但真是那样的话，我们不能在这里浪费时间了。", 37, 9400589, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#我们快点回去吧。", 37, 9400589, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=7533302", 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=7533304", 1);
                                                                                    cm.npc_setForceFlip("oid=7533305", 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=7533305", 1, 300, 100);
                                                                                      cm.npc_SetForceMove("oid=7533304", 1, 300, 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=7533303", 1, 300, 100);
                                                                                        cm.npc_SetForceMove("oid=7533302", 1, 300, 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                                                                          cm.npc_SetForceMove("oid=7533301", 1, 300, 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        } else if (status === V++) {
                                                                                          cm.warp(867202304, 0, true);
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.forceCompleteQuest(64109);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;