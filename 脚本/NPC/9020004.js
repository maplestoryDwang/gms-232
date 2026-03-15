var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  if (cm.getMapId() == 923040100) {
    action100(f, W, U);
  } else {
    if (cm.getMapId() == 923040200) {
      cm.dispose();
    } else {
      if (cm.getMapId() == 923040300) {
        cm.dispose();
      } else if (cm.getMapId() == 923040400) {
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}
function action100(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (em.getProperty("rescue") === '1') {
        if (cm.haveItem(2022040, 10)) {
          if (em.getProperty("escort_1") === '0') {
            cm.showMapEffect(true, 5120052, "咻，真是差点就要出大事了。现在氧气充足，我们快到安全的地方去吧。", 10, false);
            cm.npc_LeaveField(9020004);
            cm.spawnMobLimit(9300460, 1, 201, 1810, 1);
            em.setProperty('escort_1', '1');
            cm.dispose();
            cm.getClock(18);
            em.getPlayers().forEach(function (w) {
              w.getAPI().addPopupSay(9020004, 4000, "等我爬上去！");
            });
            cm.scheduleOpenNpcTask(17, 0, "组队任务_坎特护送");
          } else {
            cm.dispose();
          }
        } else {
          cm.sendNormalTalk("氧气瓶中空气不够了……这样下去会难以呼吸。请搜集一些空气泡泡！", 0, 9020004, false, true);
        }
      } else {
        cm.effect_NormalSpeechBalloon("请帮帮我……请把我从这里救出去吧……", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9020004, null, cm.getPlayer().getId());
        cm.dispose();
      }
    } else if (status === V++) {
      cm.sendNormalTalk("我发现了受难船，正在调查的时候，被残骸埋住了……本来说不定能找到探险队长坦克的痕迹……", 0, 9020004, true, true);
      cm.dispose();
    }
  }
}
function action200(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function action300(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function action400(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
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