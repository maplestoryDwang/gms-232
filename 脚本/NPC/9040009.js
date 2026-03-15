var status = -1;
var stage;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getName() === em.getProperty("leader")) {
    if (cm.getMap().getReactorByName("statuegate").getState() > 0) {
      cm.sendOk('Proceed.');
      cm.dispose();
    } else {
      if (status == 0) {
        if (em.getProperty("stage1status") == null || em.getProperty("stage1status") === "waiting") {
          if (em.getProperty("stage1phase") == null) {
            stage = 1;
            em.setProperty("stage1phase", stage);
          } else {
            stage = parseInt(em.getProperty("stage1phase"));
          }
          if (stage == 1) {
            cm.sendOk("In this challenge, I shall show a pattern on the statues around me. When I give the word, repeat the pattern to me to proceed.");
          } else {
            cm.sendOk("I shall now present a more difficult puzzle for you. Good luck.");
          }
        } else {
          if (em.getProperty("stage1status") === 'active') {
            stage = parseInt(em.getProperty("stage1phase"));
            if (em.getProperty("stage1combo") === em.getProperty("stage1guess")) {
              if (stage == 3) {
                cm.getMap().getReactorByName("statuegate").hitReactor(cm.getClient());
                cm.sendOk("Excellent work. Please proceed to the next stage.");
                cm.fieldEffect_ScreenMsg(true, "quest/party/clear");
                cm.fieldEffect_PlayFieldSound(true, "Party1/Clear");
                var V = em.setProperty("stage1clear", "true", true);
                if (V == null) {
                  cm.gainGP(900);
                }
              } else {
                cm.sendOk("Very good. You still have more to complete, however. Talk to me again when you're ready.");
                em.setProperty("stage1phase", stage + 1);
                cm.mapMessage("You have completed part " + stage + " of the Gatekeeper Test.");
              }
            } else {
              cm.sendOk("You have failed this test.");
              cm.mapMessage("You have failed the Gatekeeper Test.");
              em.setProperty("stage1phase", '1');
            }
            em.setProperty("stage1status", "waiting");
            cm.dispose();
          } else {
            cm.sendOk("Please wait.");
            cm.dispose();
          }
        }
      } else {
        if (status == 1) {
          var w = getReactors();
          var N = makeCombo(w);
          cm.mapMessage("Please wait while the combination is revealed.");
          for (var Q = 0; Q < N.length; Q++) {
            cm.getMap().getReactorByOid(N[Q]).delayedHitReactor(cm.getClient(), 5000 + 3500 * Q);
          }
          em.setProperty("stage1status", "display");
          em.setProperty("stage1combo", '');
          cm.dispose();
        }
      }
    }
  } else {
    cm.sendOk("I need the leader of your party to speak with me, nobody else.");
    cm.dispose();
  }
}
function getReactors() {
  var f = new Array();
  var W = cm.getMap().getAllReactorsThreadsafe().iterator();
  while (W.hasNext()) {
    var U = W.next();
    if (U.getName() !== "statuegate") {
      f.push(U.getObjectId());
    }
  }
  return f;
}
function makeCombo(f) {
  var W = new Array();
  while (W.length < stage + 3) {
    var U = f[Math.floor(Math.random() * f.length)];
    var V = false;
    if (W.length > 0) {
      for (var w = 0; w < W.length; w++) {
        if (W[w] == U) {
          V = true;
          break;
        }
      }
    }
    if (!V) {
      W.push(U);
    }
  }
  return W;
}