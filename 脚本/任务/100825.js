var status = -1;
var selectionLog = [];
function start(l, f, u) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = u;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else {
    if (status == y++) {
      cm.sendNormalTalk("你……难道……", 4, 9010010, false, true, 0);
    } else {
      if (status === y++) {
        cm.sendNormalTalk("你想当#r#e#fs20#超级巨星#n#k#fs12#吗？", 4, 9010010, true, true, 0);
      } else {
        if (status === y++) {
          cm.sendNormalTalk("……什么？", 2, 0, true, true, 0);
        } else {
          if (status === y++) {
            cm.askMenu("你绝对#r#e够格当明星#n#k！\r\n\r\n#L0##b（询问对方怎么突然提到什么超级巨星。）#l\r\n#L1#（表示知道了，希望对方言归正传。）#l", 4, 9010010);
          } else {
            if (status === y++) {
              cm.sendNormalTalk("果然！你还有#r#e旺盛的好奇心#n#k！\r\n绝对够格当明星啊！", 4, 9010010, false, true, 0);
            } else {
              if (status === y++) {
                cm.sendNormalTalk("那我们就言归正传！你见过这种机器吗？\r\n\r\n#fUI/UIWindow5.img/2021WaterGunGame/tuto/6#", 4, 9010010, true, true, 0);
              } else {
                if (status === y++) {
                  cm.sendNormalTalk("……这是……什么？", 2, 0, true, true, 0);
                } else {
                  if (status === y++) {
                    cm.sendNormalTalk("呵呵！这便会将你打造成#r#e超级巨星#n#k！", 4, 9010010, true, true, 0);
                  } else {
                    if (status === y++) {
                      cm.sendNormalTalk("唔……还是亲眼见证比较好！", 4, 9010010, true, true, 0);
                    } else {
                      if (status === y++) {
                        cm.askYesNo("#e#b#h0##k#n！快用用这个装置！\r\n\r\n #r※接受时前往活动地图。", 4, 9010010);
                      } else if (status === y++) {
                        cm.updateInfoQuest(100828, "point=0");
                        cm.updateInfoQuest(100828, "point=0;today=0");
                        cm.updateInfoQuest(100828, "point=0;today=0;lastDate=22/02/02");
                        cm.updateInfoQuest(501468, "point=0");
                        cm.updateInfoQuest(501468, "point=0;week=0");
                        cm.updateInfoQuest(501468, "point=0;lastWeek=3;week=0");
                        cm.updateInfoQuest(501468, "reward=000000000000000000000000000;point=0;lastWeek=3;week=0");
                        cm.updateInfoQuest(501470, "grade=0");
                        cm.updateInfoQuest(501470, "grade=0;weeklyF=0");
                        cm.updateInfoQuest(501470, "dailyF=0;grade=0;weeklyF=0");
                        cm.updateInfoQuest(501470, "dailyF=0;grade=0;weeklyF=0;lastDate=22/02/02");
                        cm.updateInfoQuest(501470, "follower=0;dailyF=0;grade=0;weeklyF=0;lastDate=22/02/02");
                        cm.updateInfoQuest(501470, "reward=000000000000000000;follower=0;dailyF=0;grade=0;weeklyF=0;lastDate=22/02/02");
                        cm.updateInfoQuest(501470, "reward=000000000000000000;follower=0;dailyF=0;booster=0;grade=0;weeklyF=0;lastDate=22/02/02");
                        cm.updateInfoQuest(501469, "mapTuto=0");
                        cm.updateInfoQuest(501469, "mapTuto=0;month=1");
                        cm.forceStartQuest(501558, '');
                        cm.updateInfoQuest(501470, "reward=000000000000000000;start=1;follower=0;dailyF=0;booster=0;grade=0;weeklyF=0;lastDate=22/02/02");
                        cm.forceCompleteQuest(100825);
                        cm.updateInfoQuest(100825, "rMap=" + cm.getMapId());
                        cm.dispose();
                        cm.warp(993194001, 0, false);
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
function stage0(l, f, u) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = u;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else {
    if (status == y++) {
      cm.askYesNo("");
    } else if (status == y++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(l, f, u) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = u;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else {
    if (status == y++) {
      var n = cm.getQuest();
      cm.askYesNo("");
    } else if (status == y++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}