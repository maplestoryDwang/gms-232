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
      cm.sendNormalTalk_Bottom("#face0#您好，奶奶！不过他不叫可鲁，叫格里！", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#……他不是叫错名字了，是把我误当成了我哥。", 36, 3005102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#哦，好，可鲁，你带朋友过来了啊。", 36, 3005113, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#你还在找被领主抢走的遗物吗？", 36, 3005113, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#……我哥现在已经不在了啊，你又忘了吗？", 36, 3005102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#是这样吗？我最近总是稀里糊涂的，所以……", 36, 3005113, true, true, 1);
              } else {
                if (status === v++) {
                  cm.askYesNo_Bottom("#face0#还是先搜搜这里的东西吧，这里这么多东西，总该有一样能用的吧。", 36, 3005102, 1);
                } else if (status === v++) {
                  cm.OnStartNavigation(410004002, 1, '3005174', 36213);
                  cm.forceStartQuest(36213, '');
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
      cm.sendNormalTalk_Bottom("#face3#哇~瞧瞧这条鱼！它还活着吧！", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#你该不会以为鱼嘴里会有线索吧？", 36, 3005102, true, true, 1);
      } else if (status === v++) {
        cm.updateInfoQuest(36213, "NpcSpeech=30051741");
        cm.OnStartNavigation(410004002, 1, "3005175", 36213);
        cm.dispose();
      }
    }
  }
}
function stage1(g, w, a) {
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
      cm.sendNormalTalk_Bottom("#face3#线索会不会就在这个瓷器里面？快看看里面！", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#……额！！", 36, 3005102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#哇，好神奇啊！这只虫子好像长了十二条腿，不对，难道是十三条？", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#快放回去！！！", 36, 3005102, true, true, 1);
          } else if (status === v++) {
            cm.updateInfoQuest(36213, "NpcSpeech=30051741/30051752");
            cm.OnStartNavigation(410004002, 1, "3005158", 36213);
            cm.dispose();
          }
        }
      }
    }
  }
}
function stage2(g, w, a) {
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
      cm.sendNormalTalk_Bottom("#face0#啊！把那边高处的书拿下来如何？", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#让开，你这个身高碰不到的，我先取出来……", 36, 3005102, true, true, 1);
      } else {
        if (status === v++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/willbreak", 100);
          cm.sendNormalTalk_Bottom("#face0#啊，碗……！", 36, 3005100, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(36213);
          cm.gainExp(1782);
          cm.gainExp(3257);
          cm.dispose();
        }
      }
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}