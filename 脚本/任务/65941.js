var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！公告贴好了。一贴上去就吸引了很多人。", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##b太好了。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face8#但是，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '……', 36, 9401277, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0##b怎么了？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face8#在弟子们进来之前，好像应该先修理一下演武场和修炼馆。", 36, 9401277, true, true, 1);
            } else {
              if (status === v++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.sendNewEffects(12, [1000, 800, -150]);
              } else {
                if (status === v++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === v++) {
                    cm.sendNewEffects(12, [1000, -560, 200]);
                  } else {
                    if (status === v++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === v++) {
                        cm.sendNewEffects(14, [0, 2000, 1000]);
                      } else {
                        if (status === v++) {
                          cm.sendNewEffects(19, [0]);
                        } else {
                          if (status === v++) {
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.sendNormalTalk_Bottom("#face0##b……是我太漠不关心了。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face1#哎呀，这段时间哪有时间修炼。等我先喘口气再说。", 36, 9401277, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.askAcceptDecline_Bottom("#face1#抱歉，一来就让你做事！为了修理建筑，你能去帮我收集一些木材吗？", 36, 9401277, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face1#那就帮我收集10个#i4036721:##t4036721:#吧！会有多少弟子加入呢……应该不会不够吧？嘿嘿。", 36, 9401277, false, true, 1);
                                } else if (status === v++) {
                                  cm.forceStartQuest(65941, '');
                                  cm.OnStartNavigation(875000101, 0, '', 0);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face2#果然不愧是" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！这么快就回来了。", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#其他材料都收集到了！", 36, 9401277, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0##b哪里……该不会是商团主和你联系了吧？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face8#反正很快就会传到父亲耳朵里。\r\n所以还不如我先向他报个平安。", 36, 9401277, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#顺便弄点材料，嘿嘿。", 36, 9401277, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0##b总是麻烦商团主。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1#唉，父亲骨子里是个商人。他相信我们，并在我们身上投资。", 36, 9401277, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#你知道我父亲的眼光从来不会有错，对吧？\r\n呵呵！我们一定可以顺利度过难关。", 36, 9401277, true, true, 1);
                  } else if (status === v++) {
                    cm.dispose();
                    cm.warp(875003025, 0, false);
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