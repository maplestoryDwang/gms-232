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
      cm.npc_ChangeController(2460015, "oid=27035", -405, 192, 471, -455, -355, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("玛加提亚……这次要有真正的女神之泪才行啊。我不想再见到影子骑士团制造出来的牺牲者了……", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你怎么从刚刚开始表情就那么阴沉？我不是说了嘛。重新寻找第四个女神之泪就行了。看你那么无精打采，我好像也泄气了。打起精神来。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……#p2400005#。", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("为什么？", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk('你不觉得奇怪吗？', 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("什么？", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#r影子骑士团……他们是怎么知道我们要去埃德尔斯坦……还准备了假的女神之泪？#k", 41, 2400006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("因为他们早就已经知道我们在寻找女神之泪了啊。然后以假的女神之泪为饵，把我们引到埃德尔斯坦的呗。", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("但是……我们也可能不去埃德尔斯坦啊。", 41, 2400006, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face11#……我们可能会为了寻找真正的女神之泪，而去了别的村庄啊……不是吗？", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk('嗯。', 41, 2400006, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#face11#……你说得对。女神之泪又不是有几十个……只有五个啊。如果我们去寻找真正的女神之泪的话，就算他们制造出了假的，也是毫无意义的……即便如此，他们仍然冒险准备了假的？", 41, 2400005, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#face11#我知道你想说什么了。这次的事情确实很奇怪。不是追在我们后面，而是提前挖好了陷阱……#r就好像事先知道了我们的路线#k。", 41, 2400005, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#face7#……！！", 41, 2400005, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#face11#……所以你的表情才这么阴沉啊。如果他们知道我们路线的话，那这次的女神之泪也可能是假的…… 不，不仅如此。如果他们知道了我们的路线，那就意味着……。", 41, 2400005, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("那边的两位，你们打算让我等到什么时候？等到现在已经够无聊了……", 33, 2460000, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_MoveAction(1);
                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_MoveAction(1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_MoveAction(0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("终于见到你们了。我已经等了你们很久了。时间超越者，即将成为我的主人的人。见到你们真开心。", 33, 2460000, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("在这里我的名字是#p2460000#。玛加提亚人们也喊我时间之炼金术士。看来是我拥有的时间之力让他们这么认为的。", 33, 2460000, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("但是我从未忘记过我的身份。作为女神之泪，我一直在盼望着两位的到来。", 33, 2460000, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("但是我的自尊心很强，我不想就这么乖乖地跟着两位走。我想用我的方式测试下两位是否有资格做我的主人。", 33, 2460000, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("怎么样，两位？有信心吗？", 33, 2460000, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else if (status === V++) {
                                                              cm.dispose();
                                                              cm.warp(326000000, 11, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;