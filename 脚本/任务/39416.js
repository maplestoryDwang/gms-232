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
      cm.sendNormalTalk_Bottom("#face0#该隐？你怎么来这里了……", 36, 3004916, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#我在找#b变色龙兄妹#k。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#上次不也是这样的吗？", 36, 3004916, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#这件事很重要，\r\n听说让他们两个藏进德拉卡兹据点的是#r头目#k，\r\n你知道这是什么人吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#哎呀……", 36, 3004916, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#有人以西区为中心不断培植势力，\r\n说是要向德拉卡兹报仇雪恨……", 36, 3004916, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#我听说正因为此，才会到处收集有关德拉卡兹的情报，\r\n利用孩子们的人也极有可能是此人。", 36, 3004916, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#西区……就是那些逃亡者藏身的地方吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#这地方因为水雾弥漫，连呼吸都困难，\r\n能藏身在那种地方，大概……", 36, 3004916, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#他们是从德拉卡兹那里逃走的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#头目是一方面，不过追随他的那些人也一定对德拉卡兹有着滔天的恨意。", 36, 3004916, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#你一个人没问题吗？", 36, 3004916, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#无所谓，现在可不是挑三拣四的时候。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.askAcceptDecline_Bottom("#face0#要想找到兄妹两个，就要去#b西一区#k。", 36, 3004916, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#话说回来，奶奶到底是什么来头？怎么无所不知呢？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#我嘛，不过就是个随处可见的生意人，\r\n要说区别也就是……我主要经手情报。", 36, 3004916, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#嗯…… ", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                      } else if (status === v++) {
                                        cm.forceStartQuest(39416, '');
                                        cm.updateInfoQuest(39400, "60=h1;51=h0;61=h0;52=h0;62=h0;80=h0;53=h0;63=h0;81=h0;54=h0;64=h1;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h0;77=h0");
                                        cm.updateInfoQuest(39400, "60=h1;51=h0;61=h0;52=h0;62=h0;80=h0;53=h0;63=h0;81=h0;54=h0;64=h1;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h0;77=h0;78=h1");
                                        cm.OnStartNavigation(410000420, 0, "3004964", 39416);
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
      cm.sendNormalTalk_Bottom("#face0#（为兄妹两个递上了热乎乎的饺子。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#饺子！！", 36, 3004915, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(39416);
        cm.getPlayer().levelUp();
        cm.dispose();
      }
    }
  }
}