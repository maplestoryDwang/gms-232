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
      cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
      cm.sendNormalTalk_Bottom("#face1#说是要通过实战去领悟学会的东西，没让他们练就自己练上了。\r\n是不是很自觉？", 37, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/12', 100);
        cm.sendNormalTalk_Bottom('#face2#' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，我们的故事……现在才刚刚开始！", 37, 9401277, true, true, 1);
      } else {
        if (status === v++) {
          cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
          cm.sendNormalTalk_Bottom("#face2##b哈哈哈哈，素笑。没想到你还挺会说肉麻话的嘛。 ", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/14", 100);
            cm.sendNormalTalk_Bottom("#face2#嘿嘿！笑了！" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，你是在笑吧？", 37, 9401277, true, true, 1);
          } else {
            if (status === v++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/15", 100);
              cm.sendNormalTalk_Bottom("#face2##b没见过我笑吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === v++) {
                cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/16", 100);
                cm.sendNormalTalk_Bottom("#face1#当然！哈！哈！哈！哈！好久没笑得这么畅快了。", 37, 9401277, true, true, 1);
              } else {
                if (status === v++) {
                  cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/17', 100);
                  cm.sendNormalTalk_Bottom("#face1##b我还从没见过人笑成那样。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.effect_Voice("VoiceWz2.img/Mukhyun/I/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                    cm.sendNormalTalk_Bottom("#face2#跟我来。\r\n#fs30#哈！哈！哈！哈！", 37, 9401277, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face2#对了，风乞丐大叔在片渊阁附近晃来晃去。你是不是应该去见见他？", 37, 9401277, true, true, 1);
                    } else if (status === v++) {
                      cm.forceStartQuest(65987, '');
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
      cm.sendNormalTalk_Bottom("#face2#啊哈，切，这个建筑是什么？", 37, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("是片渊阁。", 37, 9401293, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#啊哈！整理和研究吗？真不错啊！\r\n但是，一个人生活不寂寞吗，大师？", 37, 9401278, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("我没事。", 37, 9401293, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#呵呵，原来如此。", 37, 9401278, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face3#墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "，院子还挺气派的嘛！有人负责打扫吗？ ", 37, 9401278, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1##b……弟子们在转来转去。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face3#喂！岂有此理！竟让本该埋头修炼的弟子们那样！", 37, 9401278, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face1##b有话请直说。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#我从丐帮出来了！让我住院子也没关系，只要管饭就行！ ", 37, 9401278, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face1##b如果你要来玄山派，那就太欢迎了。\r\n刚好我迫切地感受到了情报的必要性。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face1#哈哈哈，我们墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "果然很豪放！哈哈，谢谢。\r\n以后请多多关照。", 37, 9401278, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0##b但是风形离开丐帮的话，谁来当河津的分舵主呢……？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face1#小兰！一切都交给那个孩子了。呵呵，她是我从小养大的孩子。\r\n今后丐帮的情报我还是会了如指掌。", 37, 9401278, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face1##b那样都行吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face1#我是谁啊！我可是风形！哈哈。", 37, 9401278, true, true, 1);
                                  } else if (status === v++) {
                                    cm.teachSkill(170000001, 10, 10);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/skillUp", 100);
                                    cm.getTopMsgFont("<玄山气势>技能的等级提升。", 3, 20, 20, 0, 0);
                                    cm.forceCompleteQuest(65987);
                                    cm.updateInfoQuest(65999, "f4=1;f6=1;f8=1;f9=1;training=3;right=3;main=2;entrance=2;left=2;f1=7");
                                    cm.updateInfoQuest(65999, "f4=1;f6=1;f8=1;f9=1;training=3;right=3;main=3;entrance=2;left=2;f1=7");
                                    cm.updateInfoQuest(65999, "f4=1;f6=1;f8=1;f9=1;training=3;f10=1;right=3;main=3;entrance=2;left=2;f1=7");
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