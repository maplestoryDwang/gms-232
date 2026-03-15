var 第8阶段_题库 = ["10.911-20+0.89x100.1-68+50-5+90 = ?", "300+180+45+53 = ?", "90+42+15+11 = ?", "120+410+57-20 = ?", "342+256-144+35 = ?"];
var 第8阶段_答案坐标系 = [[1, 0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 1, 1, 0], [1, 0, 0, 0, 1, 0, 0, 1, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1, 1]];
var status;
var partyLdr;
var chatState;
var party;
var preamble;
function start() {
  status = -1;
  preamble = null;
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
  boxStage(cm);
}
function clear(f) {
  em.getPlayers().forEach(function (W) {
    W.getAPI().fieldEffect_ScreenMsg(true, "quest/party/clear");
    W.getAPI().fieldEffect_PlayFieldSound(true, "Party1/Clear");
    W.getAPI().fieldEffect_SetObjectState(100, "gate");
  });
  em.setProperty("8stageclear", "true");
  cm.givePartyExp(5040, em.getPlayers());
}
function failstage() {
  em.getPlayers().forEach(function (f) {
    f.getAPI().fieldEffect_ScreenMsg(true, "quest/party/wrong_kor");
    f.getAPI().fieldEffect_PlayFieldSound(true, "Party1/Failed");
  });
}
function boxStage(f) {
  var w = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (f.isLeader()) {
    if (status == 0) {
      party = em.getPlayers();
      preamble = em.getProperty("leadereighthpreamble");
      if (preamble == null) {
        f.sendNormalTalk("我来说明一下第八关。这里有好几个踏板。这些踏板中，#b有3个和通往下一关的传送口#k相连。只要队员中的#b3人找到正确的踏板并站在上面#k就行。\r\n但是不要站在踏板的边缘，必须站在踏板中间，才能被认可为回答正确。敬请注意。必须只有3人踩在踏板上才行。队员踩在踏板上之后，队长#b双击我，就可以确认是否回答正确#k了。请加油吧！", 0, 2040043, false, true);
        em.setProperty("leadereighthpreamble", 'done');
        var N = Math.floor(Math.random() * 第8阶段_答案坐标系.length);
        em.setProperty("stageeighthcombo", N);
        em.getPlayers().forEach(function (k) {
          k.getAPI().showMapEffect(true, 5120018, 第8阶段_题库[N], 20, false);
        });
        f.dispose();
      } else {
        var u = em.getProperty("8stageclear");
        if (u != null) {
          em.getPlayers().forEach(function (k) {
            em.setProperty("8stageclear", "true");
            k.getAPI().warp(922010900, 0, false);
          });
        } else {
          var Q = 0;
          for (i = 0; i < w.length; i++) {
            var m = f.getMap().getNumPlayersItemsInArea(i);
            if (m != 0) {
              w[i] = w[i] + 1;
              Q = Q + 1;
            }
          }
          if (Q == 3 || false) {
            var c = 第8阶段_答案坐标系[parseInt(em.getProperty("stageeighthcombo"))];
            var B = true;
            for (i = 0; i < w.length; i++) {
              if (c[i] != w[i]) {
                B = false;
              }
            }
            if (B || false) {
              clear(8);
              if (em.getProperty("s8start") != null) {
                var F = em.getProperty('s8start');
                var e = new Date().getTime();
                if (e - F < 90000) {
                  em.setProperty("s8achievement", "true");
                }
              }
              f.dispose();
            } else {
              failstage();
              em.getPlayers().forEach(function (k) {
                k.getAPI().getMap().startMapEffect(第8阶段_题库[parseInt(em.getProperty("stageeighthcombo"))], 5120018);
              });
              f.dispose();
            }
          } else {
            f.sendNormalTalk("你还没找到3个正确的踏板啊？你把问题忘记了吗？我再告诉你一遍。\r\n#r" + 第8阶段_题库[parseInt(em.getProperty("stageeighthcombo"))] + " #k\r\n还有，必须只有三个人站在踏板上，而且必须站在踏板中间，才能被认为回答正确。希望你不要忘了。请加油吧！", 0, 2040043, false, true);
            em.getPlayers().forEach(function (k) {
              k.getAPI().showMapEffect(true, 5120018, 第8阶段_题库[parseInt(em.getProperty("stageeighthcombo"))], 20, false);
            });
            f.dispose();
          }
        }
      }
    } else {
      f.dispose();
    }
  } else {
    f.getTopMsgFont("让所属组队长跟我对话！", 3, 20, 4, 0, 0);
    f.dispose();
  }
}