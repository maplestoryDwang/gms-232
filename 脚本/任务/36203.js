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
      cm.sendNormalTalk_Bottom("#face0#你……什么情况？", 36, 3005102, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#那些元素灵怎么会……", 36, 3005102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#这是在若无其事地无视我们吧？诶？", 36, 3005111, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#你们还没走啊？", 36, 3005102, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#你们想上就上吧，我对打架还是挺有信心的。", 36, 3005102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#额……实在是不能忍了，这次绝不会善罢甘休，觉悟吧！", 36, 3005110, true, true, 1);
              } else {
                if (status === v++) {
                  cm.askYesNo_Bottom("#face1#怎，怎么办？那几位好像暴跳如雷，要不要先安抚一下？", 36, 3005100, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#别太过分了，小心点……", 36, 3005100, false, true, 1);
                  } else if (status === v++) {
                    cm.dispose();
                    cm.openNpc(9110002, "啦啦10级任务_生气是不好的哦");
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
      cm.monadForceMove("spriteFlower", 0, 0);
      cm.onSetMapObjectMove("spineFlower", [1, 255, 0]);
      cm.sendNormalTalk_Bottom("#face0#先、先撤吧！等着瞧！", 36, 3005110, false, true, 1);
    } else {
      if (status === v++) {
        cm.updateInfoQuest(36200, "50=h1;51=h0;76=h0;set=1");
        cm.updateInfoQuest(36200, "50=h1;51=h0;76=h0;77=h0;set=1");
        cm.updateInfoQuest(36200, "50=h1;51=h0;76=h0;77=h0;78=h0;set=1");
        cm.sendNormalTalk_Bottom("#face1#啊，我的背包给你！人已经不见了呢……", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.effect_Voice("Voice6.img/lara/3/Female/13", 100);
          cm.sendNormalTalk_Bottom("#face0#好神奇啊，和你在一起之后，我好像能更娴熟地操控那些小山灵了！", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.effect_Voice("Voice6.img/lara/3/Female/14", 100);
            cm.sendNormalTalk_Bottom("#face0#干什么……别靠过来！", 36, 3005102, true, true, 1);
          } else {
            if (status === v++) {
              cm.effect_Voice("Voice6.img/lara/3/Female/15", 100);
              cm.sendNormalTalk_Bottom("#face6#谢谢你的帮忙！这个铃铛对我来说真的很重要。", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.effect_Voice("Voice6.img/lara/3/Female/21", 100);
                cm.sendNormalTalk_Bottom("#face0#大家都是阿尼玛，难道不该互帮互助吗？", 36, 3005102, true, true, 1);
              } else {
                if (status === v++) {
                  cm.effect_Voice("Voice6.img/lara/3/Female/16", 100);
                  cm.sendNormalTalk_Bottom("#face3#哇！那你会做我的朋友吗？", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.effect_Voice("Voice6.img/lara/3/Female/17", 100);
                    cm.sendNormalTalk_Bottom("#face0#朋……朋友？", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.effect_Voice("Voice6.img/lara/3/Female/18", 100);
                      cm.sendNormalTalk_Bottom("#face6#我叫啦啦！你叫什么？", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.effect_Voice("Voice6.img/lara/3/Female/19", 100);
                        cm.sendNormalTalk_Bottom("#face0#……格里。", 36, 3005102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.effect_Voice("Voice6.img/lara/3/Female/20", 100);
                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（说起来我有多久没有……亲自介绍过自己叫什么名字了？）", 36, 3005102, true, true, 1);
                        } else if (status === v++) {
                          cm.forceCompleteQuest(36203);
                          cm.gainExp(1079);
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