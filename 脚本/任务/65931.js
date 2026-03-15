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
      cm.sendNormalTalk_Bottom("#face2#啊，那些木杂鬼一般都附身在陈年古木上。\r\n大部分都是很结实、品质很好的木材，刚好可以用来制作篱笆。", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#既能消灭木杂鬼，又能重建篱笆！可谓一箭双雕，不是吗？呵呵呵。", 36, 9401278, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3#原来如此！风乞丐大叔果然无所不知。", 36, 9401277, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1#咯咯咯，过奖过奖。那你就去消灭木杂鬼，收集10个陈年古木来，供我制作围墙吧。听说最近#m875001106#出现了不少木杂鬼，你可以去那边看看。", 36, 9401278, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face4#好的！墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！我们出发吧！', 36, 9401277, true, true, 1);
            } else if (status === v++) {
              cm.OnStartNavigation(875001106, 0, "goRight", 65931);
              cm.forceStartQuest(65931, '');
              cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face1#这么快就来啦？", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##b你怎么在树荫下休息……？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#呵呵呵，我这个叫花子能干什么。\r\n你不知道老实待着就能做贡献吗？", 36, 9401278, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1##b是是，要是话没那么多，也许就不会招人厌了。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#呵呵呵，突然想起了刚遇到大侠的时候~~！", 36, 9401278, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face3#就在我倒在路边的时候，" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "一下子跑过来，一边向我伸出手，一边问道。\r\n“你没事吧？能拉着我的手站起来吗？”", 36, 9401278, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face2#果然不愧是墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！看到倒下的人，绝不会见死不救。", 36, 9401277, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face3#当时刚好墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "身后的阳光照得我睁不开眼睛，却能清晰地看到" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "的脸。\r\n庄严的面庞，大胆而又坚毅的眉毛，明亮的双眼，挺拔的鼻梁！性情必定也非常刚正、善良！\r\n这种地方怎么会有如此灿烂的人物！", 36, 9401278, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face1#啊！太帅了！", 36, 9401277, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#那还是第一个晚上。从墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "脸上放出的光彩让我误以为是早上的太阳。", 36, 9401278, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face2##b……我想起来了。那时你说的第一句话就是让我请吃饭。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face4#呵呵，是吗？", 36, 9401278, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#不管怎样，今天多谢了。你想马上回玄山派吗？", 36, 9401278, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face1##b是的，确实叮嘱过让我早点回去。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face1#是啊，这是素笑姑娘的初次修行，担心也是难免的。回去的时候小心点。", 36, 9401278, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face1##b好的，后会有期，风形。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face2#再见，风乞丐大叔！", 36, 9401277, true, true, 1);
                                    } else if (status === v++) {
                                      cm.updateInfoQuest(65931, "fence=2");
                                      cm.forceCompleteQuest(65931);
                                      cm.gainExp(1713);
                                      cm.gainItem(4036713, -10);
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