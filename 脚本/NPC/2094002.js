var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  var V = cm.getEventManager("组队任务_海盗船");
  if (V == null) {
    cm.sendNext("配置文件出错，请联系管理员。");
    cm.dispose();
    return;
  }
  if (cm.getMapId() == 925100700) {
    cm.removeAll(4001117);
    cm.removeAll(4001120);
    cm.removeAll(4001121);
    cm.removeAll(4001122);
    cm.warp(251010404, 0, false);
    cm.dispose();
    return;
  } else {
    if (cm.getMapId() == 925100000) {
      action1(f, W, U);
    } else {
      if (cm.getMapId() == 925100100) {
        if (!cm.isLeader()) {
          cm.sendNext('请队长与我对话。');
          cm.dispose();
          return;
        }
        if (V.getProperty('stage2') === '0') {
          if (cm.haveItem(4001120, 20)) {
            cm.sendNext("非常好,抓紧时间前往下一阶段吧!");
            cm.gainItem(4001120, -20);
            V.setProperty("stage2", '1');
          } else {
            cm.sendNext("为了突破海盗船，请依次收集20个 初 中 高 级别通行证。然后请队长通过传送门。");
          }
        } else {
          if (V.getProperty("stage2") === '1') {
            if (cm.haveItem(4001121, 20)) {
              cm.sendNext("非常好,现在抓紧时间收集20个#b#v4001121##z4001121##k（#c4001121#/20）交给我吧。");
              cm.gainItem(4001121, -20);
              V.setProperty("stage2", '2');
            } else {
              cm.sendNext("为了突破海盗船，请依次收集20个 初 中 高 级别通行证。然后请队长通过传送门。");
            }
          } else if (V.getProperty("stage2") === '2') {
            if (cm.haveItem(4001122, 20)) {
              cm.sendNext("非常好,现在抓紧时间收集20个#b#v4001122##z4001122##k（#c4001122#/20）交给我吧。");
              cm.gainItem(4001122, -20);
              V.setProperty("stage2", '3');
            } else {
              cm.sendNext("为了突破海盗船，请依次收集20个 初 中 高 级别通行证。然后请队长通过传送门。");
            }
          } else {
            cm.sendNext("大门已经打开,你们可以前往下一关了,抓紧时间。");
          }
        }
        cm.dispose();
        return;
      } else {
        if (cm.getMapId() == 925100200 || cm.getMapId() == 925100300) {
          cm.sendNext("突破海盗船的袭击。");
          cm.dispose();
          return;
        } else {
          if (cm.getMapId() == 925100201 || cm.getMapId() == 925100301) {
            cm.sendNext("处决这些恶徒！");
            cm.dispose();
            return;
          } else {
            if (cm.getMapId() == 925100202 || cm.getMapId() == 925100302) {
              cm.sendNext("这些船长和克鲁斯把他们的一生献给海盗勋爵。#b他们的死活其实无所谓了。#k");
              cm.dispose();
              return;
            } else {
              if (cm.getMapId() == 925100400) {
                action2(f, W, U);
              } else {
                if (cm.getMapId() == 925100500) {
                  if (cm.getMap().getNumMonsters() == 0 && cm.allMembersHere() && cm.isLeader()) {
                    cm.warpParty(925100600);
                  } else {
                    cm.getTopMsgFont("请队长集合所有队员，并消灭老海盗船长！", 3, 20, 4, 0, 0);
                  }
                  cm.dispose();
                  return;
                } else {
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
function action1(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("我是侍奉桔梗之王无恙的仆人 久翁。看到药草田里的桔梗们了吗？现在都变成了残暴的怪物正在攻击无辜的人们。可是那并不是我们桔梗们的本意。这都是因为邪恶的#b老海盗#k。", 0, 2094002, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b老海盗#k劫持了桔梗们的大王#b#p2094001##k，肆意的使唤着我们。我们桔梗因为得顾及#b#p2094001##k的生命安全，所以不得不屈服于它的命令。", 0, 2094002, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk("拜托你一定要把#b#p2094001##k从邪恶的#b老海盗#k手里救出来啊。唯有那样，才能为我们桔梗和百草村找回和平。老海盗和无恙所乘坐的海盗船马上就要出发了！赶快搭上最东边的船吧！", 0, 2094002, true, true);
        cm.dispose();
      }
    }
  }
}
function action2(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("你们上了海盗船的事情已经被所有的海盗发觉了。就连那些最隐蔽的家伙都涌向这里。照这样下去会没完没了，应该先想办法把海盗出来的门关掉了。", 0, 2094002, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk("关门所需的#b#t4001117##k在海盗们身上，消灭他们，关闭海盗船的门吧！", 0, 2094002, true, true);
      cm.dispose();
    }
  }
}
function randomNum(f, W) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (W - f + 1) + f, 10);
    default:
      return 0;
  }
}