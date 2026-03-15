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
      cm.sendNormalTalk_Bottom("#face0#好像是受伤了。", 36, 3004916, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#没什么的，等回去治疗就好。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我多少能帮忙做点急救措施的，\r\n因为我想至少要报答一下德拉卡兹的人。", 36, 3004916, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#报答？我们有资格得到那些吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#正因为你们，这座城市的治安才能维持这个样子嘛。", 36, 3004916, true, true, 1);
            } else {
              if (status === v++) {
                cm.askAcceptDecline_Bottom("#face0#来，别推辞了，跟我来吧，我的店就在这附近。", 36, 3004916, 1);
              } else {
                if (status === v++) {
                  cm.forceStartQuest(39409, '');
                  cm.updateInfoQuest(39400, "51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h0;77=h0");
                  cm.updateInfoQuest(39400, "60=h1;51=h0;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h0;77=h0");
                  cm.OnStartNavigation(410000419, 1, "3004960", 39409);
                  cm.sendNormalTalk_Bottom("#face0#喂，奶奶？！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                  } else if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#虽然算是跟到半途脱离了作战地区……\r\n不过那什么，应该没所谓吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
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
      cm.sendNormalTalk_Bottom("#face0#（好像是个杂货店……可总感觉不一般。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#把手伸出来，我给你上药。", 36, 3004916, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#（……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#你在找#b变色龙兄妹#k啊。", 36, 3004916, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#对，你知道什么吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#那些捣蛋鬼……在这附近一带可是很出名的。", 36, 3004916, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#毕竟之前就到处偷东西再转手卖掉，以此来维系生计，手艺好了，最近貌似也在巴伊托兹中间有了点名气。", 36, 3004916, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#我听说有人给了那对兄妹吃的，让他们去偷东西。", 36, 3004916, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face1#因为吃的？\r\n就因为这种理由藏进了德拉卡兹的据点？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#还真是胆大包天啊。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#因为那是孩子们，\r\n眼下除了饥饿，还有什么比这更可怕。", 36, 3004916, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom('#face0#……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#看样子那些小孩应该是闯了大祸……\r\n这些可怜的孩子无父无母，一直以来勉强度日，还请一定要宽大处理。", 36, 3004916, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#这个嘛，就算和我说……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                              } else if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#对德拉卡兹来说没有例外。", 36, 3004907, true, true, 1);
                                cm.forceCompleteQuest(39409);
                                cm.getPlayer().levelUp();
                                cm.updateInfoQuest(39400, "60=h1;51=h0;61=h1;52=h0;80=h0;53=h0;81=h0;54=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h0;77=h0");
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