var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.sendNormalTalk_Bottom("围绕获得的证物，整理下思绪。", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("这是鵺的日记本……似乎被闲置了很长时间，皱巴巴的……", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("xxxx年xx月xx日。\r\n今天无头鬼夸我做得好。我多少算是被认可了吗", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("xxxx年xx月xx日。\r\n我今天也没出去。外面的世界是什么样的呢？", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("xxxx年xx月xx日。\r\n我偶尔会哭鼻子。有时候觉得无法忍住泪水的自己真没用……能放声大哭真好", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("xxxx年xx月xx日。\r\n我能感觉到有股力量在我体内耸动。咳，有时我会觉得这股难以抑制的黑暗火焰会把我的灵魂都燃烧殆尽", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("唔……越往后翻就发现日记里充满了青春期的骚动，而且逐渐出现中二病的倾向。这些能否成为牵制鵺的利器呢？", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这是黑色圣水配方。千钧一发的瞬间，我丢掉了账本，却把配方带了出来。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("呵呵，让我瞧瞧圣水里有什么秘方！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("嗯……一支存了20年的乌鸦羽毛、两根狐妖的胡须，还有1升黑蛇毒……", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("……不就是黑蛇毒吗！！", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("这配方跟我在#m800022004#遇到的阴沉亡灵的配方一样嘛……", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("……只要好好利用，这配方能成为我揭露鵺真面目的武器。", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("好，思路整理到此为止。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("去找鵺算账吧！", 57, 0, true, true);
                                } else if (status === V++) {
                                  cm.forceCompleteQuest(58748);
                                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                                  cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                                  cm.dispose();
                                  cm.warp(800022008, 0, false);
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