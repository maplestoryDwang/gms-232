function start() {
  if (cm.getName() === em.getProperty("leader")) {
    if (cm.getMap().getReactorByName("watergate").getState() > 0) {
      cm.sendOk("You may proceed.");
    } else {
      var f = em.getProperty("stage3combo");
      if (f == null || f === "reset") {
        var W = makeCombo();
        em.setProperty("stage3combo", W);
        em.setProperty("stage3attempt", '1');
        cm.sendOk("This fountain guards the secret passage to the throne room. Offer items in the area to the vassals to proceed. The vassals shall tell you whether your offerings are accepted, and if not, which vassals are displeased. You have seven attempts. Good luck.");
      } else {
        var U = parseInt(em.getProperty("stage3attempt"));
        var V = parseInt(f);
        var w = getGroundItems();
        if (w != null) {
          if (V == w) {
            cm.getMap().getReactorByName("watergate").hitReactor(cm.getC());
            cm.sendOk("You may proceed.");
            cm.fieldEffect_ScreenMsg(true, "quest/party/clear");
            cm.fieldEffect_PlayFieldSound(true, "Party1/Clear");
            var N = em.setProperty("stage3clear", "true", true);
            if (N == null) {
              cm.gainGP(1500);
            }
          } else {
            if (U < 7) {
              var u = parsePattern(V);
              var Q = parsePattern(w);
              var m = compare(u, Q);
              var c = '';
              if (m[0] != 0) {
                if (m[0] == 1) {
                  c += "1 vassal is pleased with their offering.\r\n";
                } else {
                  c += m[0] + " vassals are pleased with their offerings.\r\n";
                }
              }
              if (m[1] != 0) {
                if (m[1] == 1) {
                  c += "1 vassal has recieved an incorrect offering.\r\n";
                } else {
                  c += m[1] + " vassals have recieved incorrect offerings.\r\n";
                }
              }
              if (m[2] != 0) {
                if (m[2] == 1) {
                  c += "1 vassal has recieved an unknown offering.\r\n";
                } else {
                  c += m[2] + " vassals have recieved unknown offerings.\r\n";
                }
              }
              c += "This is your ";
              switch (U) {
                case 1:
                  c += "1st";
                  break;
                case 2:
                  c += "2nd";
                  break;
                case 3:
                  c += "3rd";
                  break;
                default:
                  c += U + 'th';
                  break;
              }
              c += " attempt.";
              cm.spawnMob(9300036, -350, 150);
              cm.spawnMob(9300037, 400, 150);
              cm.sendOk(c);
              em.setProperty("stage3attempt", U + 1);
            } else {
              em.setProperty("stage3combo", "reset");
              cm.sendOk("You have failed the test. Please compose yourselves and try again later.");
              for (var B = 0; B < 5; B++) {
                cm.spawnMob(9300036, -350 + Math.floor(Math.random() * 750), 150);
                cm.spawnMob(9300037, -350 + Math.floor(Math.random() * 750), 150);
              }
            }
          }
        } else {
          cm.sendOk("Please make sure your attempt is properly set in front of the vassals and talk to me again.");
        }
      }
    }
  } else {
    cm.sendOk("Please have your leader speak to me.");
  }
  cm.dispose();
}
function action(f, W, U) {}
function makeCombo() {
  var f = 0;
  for (var W = 0; W < 4; W++) {
    f += Math.floor(Math.random() * 4) * Math.pow(10, W);
  }
  return f;
}
function getGroundItems() {
  var f = cm.getMap().getItemsInRange(cm.getPlayer().getPosition(), java.lang.Double.POSITIVE_INFINITY);
  var W = new Array(-1, -1, -1, -1);
  if (f.size() != 4) {
    cm.playerMessage("There are too many items in the map. Please remove some");
    return null;
  }
  var U = f.iterator();
  while (U.hasNext()) {
    var V = U.next();
    var w = V.getItem().getItemId();
    if (w < 4001027 || w > 4001030) {
      cm.playerMessage("Some items in the map are not part of the 4 items needed");
      return null;
    } else {
      for (var N = 0; N < 4; N++) {
        if (cm.getMap().getArea(N).contains(V.getPosition())) {
          W[N] = w - 4001027;
          break;
        }
      }
    }
  }
  if (W[0] == -1 || W[1] == -1 || W[2] == -1 || W[3] == -1) {
    cm.playerMessage("Please place these in correct positions: " + (W[0] == -1 ? "Statue 1, " : '') + (W[1] == -1 ? "Statue 2, " : '') + (W[2] == -1 ? "Statue 3, " : '') + (W[3] == -1 ? "Statue 4. " : ''));
    return null;
  }
  return W[0] * 1000 + W[1] * 100 + W[2] * 10 + W[3];
}
function parsePattern(f) {
  var W = f;
  var U = new Array(-1, -1, -1, -1);
  for (var V = 0; V < 4; V++) {
    U[V] = Math.floor(W / Math.pow(10, 3 - V));
    W = W % Math.pow(10, 3 - V);
  }
  return U;
}
function compare(f, W) {
  var U = 0;
  var V = 0;
  for (var w = 0; w < f.length; w) {
    if (f[w] == W[w]) {
      U++;
      if (w != f.length - 1) {
        f[w] = f[f.length - 1];
        W[w] = W[W.length - 1];
      }
      f.pop();
      W.pop();
    } else {
      w++;
    }
  }
  var N = new Array(0, 0, 0, 0);
  var u = new Array(0, 0, 0, 0);
  for (var Q = 0; Q < f.length; Q++) {
    var m = f[Q];
    var c = W[Q];
    N[m]++;
    u[c]++;
  }
  for (var B = 0; B < N.length; B++) {
    var F = Math.min(N[B], u[B]);
    V += F;
  }
  return new Array(U, V, 4 - U - V);
}
function randX() {
  return -350 + Math.floor(Math.random() * 750);
}
var status = -1;