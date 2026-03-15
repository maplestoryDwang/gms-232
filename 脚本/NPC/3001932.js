var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#里斯托尼亚广场是艺术与浪漫流连之地。\r\n许多有趣的故事也伴着旋律被传递出来。", 36, 3001978, false, true, 1);
    } else {
      if (status === V++) {
        cm.askAcceptDecline_Bottom("#face0#喂，过路的年轻人……你在音乐方面的天赋怎么样？\r\n如果不清楚，要不过来测试一下？", 36, 3001978, 1);
      } else {
        if (status === V++) {
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(true, false, false);
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#来，轻轻敲我钢琴的键盘。\r\n用哆、来、咪这几个音组合起来，能演奏出什么歌曲呢？", 36, 3001978, false, true, 1);
          } else {
            if (status === V++) {
              cm.askMenu_Bottom("#face0#你要演奏哪个音？\r\n#b#L0#哆#l\r\n#L1#来#l\r\n#L2#咪#l", 37, 3001978, 1);
            } else {
              if (status === V++) {
                if (U == 0) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/do", 100);
                } else if (U == 1) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/re", 100);
                } else {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/mi", 100);
                }
                cm.askMenu_Bottom("#face0#好，接下来要演奏哪个音呢？\r\n#b#L0#哆#l\r\n#L1#来#l\r\n#L2#咪#l", 37, 3001978, 1);
              } else {
                if (status === V++) {
                  if (U == 0) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/do", 100);
                  } else if (U == 1) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/re", 100);
                  } else {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/mi", 100);
                  }
                  cm.askMenu_Bottom("#face0#很好，最后一个呢，要演奏哪个音？\r\n#b#L0#哆#l\r\n#L1#来#l\r\n#L2#咪#l", 37, 3001978, 1);
                } else {
                  if (status === V++) {
                    if (U == 0) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/do", 100);
                    } else if (U == 1) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/re", 100);
                    } else {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/mi", 100);
                    }
                    cm.sendNormalTalk_Bottom("#face0#哎呀呀……这完全不成曲调。\r\n不如你再想想其他组合吧？", 36, 3001978, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                      cm.setInGameDirectionMode(false, true, false);
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