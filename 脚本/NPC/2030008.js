var status = -1;
var select = -1;
var zakumMode = -1;
var completeQuest;
function start() {
  if (cm.getPlayer().getLevel() >= 50) {
    cm.askMenu("哦......很好。看来你们已经完全具备了资格。你们打算做什么呢? \r\n#b#L0#去调查废矿洞穴。#l\r\n#b#L1#探察扎昆洞穴。#l\r\n#b#L2#领取要献给扎昆的祭品。#l\r\n#b#L3#移动到冰峰雪域。#l");
  } else {
    cm.sendOk("按照你目前的情况，你还不能满足进行这项任务的能力，当你变的强大的时候，再来找我吧！");
    cm.dispose();
  }
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status < 1) {
      cm.dispose();
      return;
    } else {
      if (status == 3) {
        if (zakumMode == 1) {
          cm.sendOk("那好吧......不过你得明白, 没有#b#t4001017##k的话, 是无法见到BOSS的。");
          cm.dispose();
          return;
        }
      }
    }
    status--;
  }
  if (status == 0) {
    if (select == -1) {
      select = U;
    }
    if (select == 0) {
      if (cm.getParty() == null) {
        cm.sendNext("你没有处于组队状态啊。你必须组成组队才能进行挑战。");
        cm.dispose();
        return;
      } else {
        if (!cm.isLeader()) {
          cm.sendNext("你不是组队长，请让你的组队长和我谈话。");
          cm.dispose();
          return;
        } else {
          var V = cm.getParty().getMembers();
          mapId = cm.getMapId();
          var w = true;
          for (var N = 0; N < V.size(); N++) {
            if (V.get(N).getLevel() < 50 || V.get(N).getAPI().getMapId() != mapId) {
              w = false;
            }
          }
          if (w) {
            var u = cm.getEventManager("跳跳_扎昆洞穴");
            if (u == null) {
              cm.sendOk("我不能让你进入这个未知的世界，因为管理员还没有准备好开放。");
            } else {
              var Q = u.getNumberProperty("state");
              if (Q === '0' || Q == null) {
                u.startInstance(cm.getParty(), cm.getMap());
              } else {
                cm.sendOk("另一个组队已经开始了调查任务，请稍后再来。");
              }
            }
            cm.dispose();
          } else {
            cm.sendNext("请确保你所有组队员都达到50级以上。");
            cm.dispose();
          }
        }
      }
    } else {
      if (select == 1) {
        cm.sendNext("很好!现在开始，你们将会移动到充满许多艰难险阻的地图。祝你们好运!!");
      } else {
        if (select == 2) {
          cm.askMenu("你需要把祭品献给哪个扎昆呢? \r\n#b#L0#简单扎昆#l\r\n#L1#普通/进阶扎昆#l");
        } else if (select == 3) {
          cm.sendNext("那么, 让我来送你去冰峰雪域吧。");
        }
      }
    }
  } else {
    if (status == 1) {
      if (select == 1) {
        cm.warp(280020000, 0);
        cm.dispose();
      } else {
        if (select == 2) {
          if (zakumMode == -1) {
            zakumMode = U;
          }
          if (zakumMode == 0) {
            if (cm.haveItem(4001796)) {
              cm.sendOk("你已经拥有要献给简单扎昆的祭品#b#t4001796##k了啊......等你用完了再来告诉我吧。");
              cm.dispose();
            } else {
              cm.sendNext("必须有需要献给简单扎昆的祭品才行啊......");
            }
          } else if (zakumMode == 1) {
            completeQuest = false;
            cm.sendNext("谢谢你!那么，按照约定，我会给你#b火焰的眼#k。");
            cm.gainItem(4000080, -10);
            cm.gainItem(4001017, 1);
            cm.forceCompleteQuest(100203);
            completeQuest = true;
          }
        } else if (select == 3) {
          cm.sendNextPrev("如过你想再次来到这里，那就请和冰峰雪域的长老对话吧。");
        }
      }
    } else {
      if (status == 2) {
        if (select == 2) {
          if (zakumMode == 0) {
            cm.sendNextPrev("不过, 我有很多在召唤扎昆时所需的祭品--#b#t4001796##k, 所以就给你一些吧。");
          } else if (zakumMode == 1) {
            if (completeQuest) {
              cm.sendNextPrev("把这个放入扎昆的祭坛中, 就可以了。");
              cm.dispose();
            } else {
              cm.sendNextPrev("不过, 我所拥有的可在召唤普通/进阶扎昆时使用的祭品--#b#t4001017##k并不是很多, 就这么给你的话有点......");
            }
          }
        } else if (select == 3) {
          cm.warp(211000000);
          cm.dispose();
        }
      } else {
        if (status == 3) {
          if (select == 2) {
            if (zakumMode == 0) {
              cm.sendNextPrev("你把这个放入简单扎昆的祭坛中, 就可以了。");
            } else if (zakumMode == 1) {
              cm.askYesNo("你能帮我带来#b10个#t4000080##k吗? 只要你能拿来的话, 我立马给你#b#t4001017##k。");
            }
          }
        } else {
          if (status == 4) {
            if (select == 2) {
              if (zakumMode == 0) {
                cm.gainItem(4001796, 1);
                cm.dispose();
              } else if (zakumMode == 1) {
                cm.forceStartQuest(100203);
                cm.sendNext("谢谢你。#b#t4000080##k可以从#b#o8140500##k的身上获得。");
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}