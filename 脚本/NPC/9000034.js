var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0 && status == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askMenu("#e[Sexy System]#bSelect something bro I don't have all day.#k\r\n#L88##rBuy NX Cash ");
    } else {
      if (U == 80) {
        cm.askMenu("Pick a Category #e#d#k\r\n#L0##rMagican Shoes#k\r\n#L1##rMagican Overalls#k\r\n#L2##rMagican Gloves#k\r\n#L3##rMagican Hats#k\r\n#L4##rMagican Shields#k\r\n#L5##rMagican and Common Wands#k\r\n#L6##rMagican and Common Staffs");
      } else {
        if (U == 81) {
          cm.askMenu("Pick a Category #e#d#k\r\n#L7##bThief Shoes#k\r\n#L8##bThief Bottoms#k\r\n#L9##bThief Tops#k\r\n#L10##bThief Overalls#l\r\n#L11##bThief Gloves#l\r\n#L12##bThief Hats#l\r\n#L13##bThief Shields#l\r\n#L14##bThief and Common Daggers#k\r\n#L15##bThief and Common Claws#k\r\n#L16##bThief Throwing Stars");
        } else {
          if (U == 82) {
            cm.askMenu("Pick a Category #e#d#k\r\n#L17##dWarrior Shoes#k\r\n#L18##dWarrior Bottom#k\r\n#L19##dWarrior Top#k\r\n#L20##dWarrior Overalls#k\r\n#L21##dWarrior Gloves#k\r\n#L22##dWarrior Hats#k\r\n#L23##dWarrior Shields#k\r\n#L24##dWarrior and Common One-Handed Axes#k\r\n#L25##dWarrior and Common Two-Handed Axes#k\r\n#L26##dWarrior and Common One-Handed BWs#k\r\n#L27##dWarrior and Common Two-Handed BWs#k\r\n#L28##dWarrior and Common One-Handed Swords#k\r\n#L29##dWarrior and Common Two-Handed Swords#k\r\n#L30##dWarrior and Common Spears#k\r\n#L31##dWarrior and Common Pole Arms");
          } else {
            if (U == 83) {
              cm.askMenu("Pick a Category #e#d#k\r\n#L32##gArcher Shoes#k\r\n#L33##gArcher Overalls#k\r\n#L34##gArcher Gloves#k\r\n#L35##gArcher Hats#k\r\n#L36##gArcher and Common Bows#k\r\n#L37##gArcher and Common Crossbows#k\r\n#L38##gArcher Arrows");
            } else {
              if (U == 84) {
                cm.askMenu("Pick a Category #e#d#k\r\n#L76##bPirate Hats#k\r\n#L71##bPirate Weapons#k\r\n#L72##bPirate Bullets and Capsules#k\r\n#L73##bPirate Overalls#k\r\n#L74##bPirate Gloves#k\r\n#L75##bPirate Shoes");
              } else {
                if (U == 85) {
                  cm.askMenu("Pick a Category #e#d#k\r\n#L39#Maple Weapons\r\n#L40#Earrings\r\n#L41#Necklaces and Face Accessories\r\n#L42#Capes\r\n#L43#Common Shoes\r\n#L45#Common Gloves\r\n#L46#Common Overalls\r\n#L47#Common Shields\r\n#L48#Level 0 Weapons");
                } else {
                  if (U == 86) {
                    cm.askMenu("Pick a Category #e#d\r\n#L50#Super Megaphones, Gachapon Tickets, Rocks, and Morphs\r\n#L51#Buffs and Potions\r\n#L52#Boss Pieces\r\n#L57#Chairs\r\n#L53#Mounts\r\n#L54#All scrolls!");
                  } else {
                    if (U == 87) {
                      cm.sendOk("This feature has been disabled. Please buy NX Cash instead and use the Cash Shop. Thank You");
                    } else {
                      if (U == 0) {
                        cm.openShop(10000);
                        cm.dispose();
                      } else {
                        if (U == 1) {
                          cm.openShop(10001);
                          cm.dispose();
                        } else {
                          if (U == 2) {
                            cm.openShop(10002);
                            cm.dispose();
                          } else {
                            if (U == 3) {
                              cm.openShop(10003);
                              cm.dispose();
                            } else {
                              if (U == 4) {
                                cm.openShop(10004);
                                cm.dispose();
                              } else {
                                if (U == 5) {
                                  cm.openShop(10005);
                                  cm.dispose();
                                } else {
                                  if (U == 6) {
                                    cm.openShop(10006);
                                    cm.dispose();
                                  } else {
                                    if (U == 7) {
                                      cm.openShop(10007);
                                      cm.dispose();
                                    } else {
                                      if (U == 8) {
                                        cm.openShop(10008);
                                        cm.dispose();
                                      } else {
                                        if (U == 9) {
                                          cm.openShop(10009);
                                          cm.dispose();
                                        } else {
                                          if (U == 10) {
                                            cm.openShop(10010);
                                            cm.dispose();
                                          } else {
                                            if (U == 11) {
                                              cm.openShop(10011);
                                              cm.dispose();
                                            } else {
                                              if (U == 12) {
                                                cm.openShop(10012);
                                                cm.dispose();
                                              } else {
                                                if (U == 13) {
                                                  cm.openShop(10013);
                                                  cm.dispose();
                                                } else {
                                                  if (U == 14) {
                                                    cm.openShop(10014);
                                                    cm.dispose();
                                                  } else {
                                                    if (U == 15) {
                                                      cm.openShop(10015);
                                                      cm.dispose();
                                                    } else {
                                                      if (U == 16) {
                                                        cm.openShop(10038);
                                                        cm.dispose();
                                                      } else {
                                                        if (U == 17) {
                                                          cm.openShop(10016);
                                                          cm.dispose();
                                                        } else {
                                                          if (U == 18) {
                                                            cm.openShop(10017);
                                                            cm.dispose();
                                                          } else {
                                                            if (U == 19) {
                                                              cm.openShop(10018);
                                                              cm.dispose();
                                                            } else {
                                                              if (U == 20) {
                                                                cm.openShop(10019);
                                                                cm.dispose();
                                                              } else {
                                                                if (U == 21) {
                                                                  cm.openShop(10020);
                                                                  cm.dispose();
                                                                } else {
                                                                  if (U == 22) {
                                                                    cm.openShop(10021);
                                                                    cm.dispose();
                                                                  } else {
                                                                    if (U == 23) {
                                                                      cm.openShop(10022);
                                                                      cm.dispose();
                                                                    } else {
                                                                      if (U == 24) {
                                                                        cm.openShop(10023);
                                                                        cm.dispose();
                                                                      } else {
                                                                        if (U == 25) {
                                                                          cm.openShop(10024);
                                                                          cm.dispose();
                                                                        } else {
                                                                          if (U == 26) {
                                                                            cm.openShop(10025);
                                                                            cm.dispose();
                                                                          } else {
                                                                            if (U == 27) {
                                                                              cm.openShop(10026);
                                                                              cm.dispose();
                                                                            } else {
                                                                              if (U == 28) {
                                                                                cm.openShop(10027);
                                                                                cm.dispose();
                                                                              } else {
                                                                                if (U == 29) {
                                                                                  cm.openShop(10028);
                                                                                  cm.dispose();
                                                                                } else {
                                                                                  if (U == 30) {
                                                                                    cm.openShop(10029);
                                                                                    cm.dispose();
                                                                                  } else {
                                                                                    if (U == 31) {
                                                                                      cm.openShop(10030);
                                                                                      cm.dispose();
                                                                                    } else {
                                                                                      if (U == 32) {
                                                                                        cm.openShop(10031);
                                                                                        cm.dispose();
                                                                                      } else {
                                                                                        if (U == 33) {
                                                                                          cm.openShop(10032);
                                                                                          cm.dispose();
                                                                                        } else {
                                                                                          if (U == 34) {
                                                                                            cm.openShop(10033);
                                                                                            cm.dispose();
                                                                                          } else {
                                                                                            if (U == 35) {
                                                                                              cm.openShop(10034);
                                                                                              cm.dispose();
                                                                                            } else {
                                                                                              if (U == 36) {
                                                                                                cm.openShop(10035);
                                                                                                cm.dispose();
                                                                                              } else {
                                                                                                if (U == 37) {
                                                                                                  cm.openShop(100320);
                                                                                                  cm.dispose();
                                                                                                } else {
                                                                                                  if (U == 38) {
                                                                                                    cm.openShop(10037);
                                                                                                    cm.dispose();
                                                                                                  } else {
                                                                                                    if (U == 39) {
                                                                                                      cm.openShop(10051);
                                                                                                      cm.dispose();
                                                                                                    } else {
                                                                                                      if (U == 40) {
                                                                                                        cm.openShop(10039);
                                                                                                        cm.dispose();
                                                                                                      } else {
                                                                                                        if (U == 41) {
                                                                                                          cm.openShop(10040);
                                                                                                          cm.dispose();
                                                                                                        } else {
                                                                                                          if (U == 42) {
                                                                                                            cm.openShop(10041);
                                                                                                            cm.dispose();
                                                                                                          } else {
                                                                                                            if (U == 43) {
                                                                                                              cm.openShop(10042);
                                                                                                              cm.dispose();
                                                                                                            } else {
                                                                                                              if (U == 44) {
                                                                                                                cm.openShop(10043);
                                                                                                                cm.dispose();
                                                                                                              } else {
                                                                                                                if (U == 45) {
                                                                                                                  cm.openShop(10044);
                                                                                                                  cm.dispose();
                                                                                                                } else {
                                                                                                                  if (U == 46) {
                                                                                                                    cm.openShop(10045);
                                                                                                                    cm.dispose();
                                                                                                                  } else {
                                                                                                                    if (U == 47) {
                                                                                                                      cm.openShop(10046);
                                                                                                                      cm.dispose();
                                                                                                                    } else {
                                                                                                                      if (U == 48) {
                                                                                                                        cm.openShop(10047);
                                                                                                                        cm.dispose();
                                                                                                                      } else {
                                                                                                                        if (U == 49) {
                                                                                                                          cm.openShop(10048);
                                                                                                                          cm.dispose();
                                                                                                                        } else {
                                                                                                                          if (U == 50) {
                                                                                                                            cm.openShop(10048);
                                                                                                                            cm.dispose();
                                                                                                                          } else {
                                                                                                                            if (U == 51) {
                                                                                                                              cm.openShop(10049);
                                                                                                                              cm.dispose();
                                                                                                                            } else {
                                                                                                                              if (U == 52) {
                                                                                                                                cm.openShop(10050);
                                                                                                                                cm.dispose();
                                                                                                                              } else {
                                                                                                                                if (U == 53) {
                                                                                                                                  cm.openShop(10052);
                                                                                                                                  cm.dispose();
                                                                                                                                } else {
                                                                                                                                  if (U == 54) {
                                                                                                                                    cm.openShop(10053);
                                                                                                                                    cm.dispose();
                                                                                                                                  } else {
                                                                                                                                    if (U == 55) {
                                                                                                                                      cm.openShop(10054);
                                                                                                                                      cm.dispose();
                                                                                                                                    } else {
                                                                                                                                      if (U == 56) {
                                                                                                                                        cm.openShop(10055);
                                                                                                                                        cm.dispose();
                                                                                                                                      } else {
                                                                                                                                        if (U == 57) {
                                                                                                                                          cm.openShop(10056);
                                                                                                                                          cm.dispose();
                                                                                                                                        } else {
                                                                                                                                          if (U == 58) {
                                                                                                                                            cm.openShop(10057);
                                                                                                                                            cm.dispose();
                                                                                                                                          } else {
                                                                                                                                            if (U == 59) {
                                                                                                                                              cm.openShop(10058);
                                                                                                                                              cm.dispose();
                                                                                                                                            } else {
                                                                                                                                              if (U == 60) {
                                                                                                                                                cm.openShop(10059);
                                                                                                                                                cm.dispose();
                                                                                                                                              } else {
                                                                                                                                                if (U == 61) {
                                                                                                                                                  cm.openShop(10060);
                                                                                                                                                  cm.dispose();
                                                                                                                                                } else {
                                                                                                                                                  if (U == 62) {
                                                                                                                                                    cm.openShop(10061);
                                                                                                                                                    cm.dispose();
                                                                                                                                                  } else {
                                                                                                                                                    if (U == 63) {
                                                                                                                                                      cm.openShop(10062);
                                                                                                                                                      cm.dispose();
                                                                                                                                                    } else {
                                                                                                                                                      if (U == 64) {
                                                                                                                                                        cm.openShop(10063);
                                                                                                                                                        cm.dispose();
                                                                                                                                                      } else {
                                                                                                                                                        if (U == 65) {
                                                                                                                                                          cm.openShop(10064);
                                                                                                                                                          cm.dispose();
                                                                                                                                                        } else {
                                                                                                                                                          if (U == 66) {
                                                                                                                                                            cm.openShop(10065);
                                                                                                                                                            cm.dispose();
                                                                                                                                                          } else {
                                                                                                                                                            if (U == 67) {
                                                                                                                                                              cm.openShop(10066);
                                                                                                                                                              cm.dispose();
                                                                                                                                                            } else {
                                                                                                                                                              if (U == 68) {
                                                                                                                                                                cm.openShop(10067);
                                                                                                                                                                cm.dispose();
                                                                                                                                                              } else {
                                                                                                                                                                if (U == 69) {
                                                                                                                                                                  cm.openShop(10068);
                                                                                                                                                                  cm.dispose();
                                                                                                                                                                } else {
                                                                                                                                                                  if (U == 70) {
                                                                                                                                                                    cm.openShop(10069);
                                                                                                                                                                    cm.dispose();
                                                                                                                                                                  } else {
                                                                                                                                                                    if (U == 71) {
                                                                                                                                                                      cm.openShop(13035);
                                                                                                                                                                      cm.dispose();
                                                                                                                                                                    } else {
                                                                                                                                                                      if (U == 72) {
                                                                                                                                                                        cm.openShop(13001);
                                                                                                                                                                        cm.dispose();
                                                                                                                                                                      } else {
                                                                                                                                                                        if (U == 73) {
                                                                                                                                                                          cm.openShop(13002);
                                                                                                                                                                          cm.dispose();
                                                                                                                                                                        } else {
                                                                                                                                                                          if (U == 74) {
                                                                                                                                                                            cm.openShop(13003);
                                                                                                                                                                            cm.dispose();
                                                                                                                                                                          } else {
                                                                                                                                                                            if (U == 75) {
                                                                                                                                                                              cm.openShop(13004);
                                                                                                                                                                              cm.dispose();
                                                                                                                                                                            } else {
                                                                                                                                                                              if (U == 76) {
                                                                                                                                                                                cm.openShop(13005);
                                                                                                                                                                                cm.dispose();
                                                                                                                                                                              } else {
                                                                                                                                                                                if (U == 88) {
                                                                                                                                                                                  cm.askMenu("#eYou Currently have(#r" + cm.getPlayer().getVotePoints() + "#k) Vote Points." + "#k\r\n#eHow much would you like?" + "#k\r\n#L89##r5k NX Cash for 1 Vote Point" + "#k\r\n#L90##r10k NX Cash for 2 Vote Point" + "#k\r\n#L91##r20k NX Cash for 3 Vote Point" + "#k\r\n#L92##r30k NX Cash for 4 Vote Point" + "#k\r\n#L93##r45k NX Cash for 5 Vote Point");
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (U == 89) {
                                                                                                                                                                                    var V = 5000000;
                                                                                                                                                                                    if (cm.getPlayer().getVotePoints() > 0) {
                                                                                                                                                                                      cm.getPlayer().gainVotePoints(-1);
                                                                                                                                                                                      cm.getPlayer().modifyCSPoints(1, 10000);
                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                    } else {
                                                                                                                                                                                      cm.sendOk("#eYou do not have enough vote points!");
                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                    }
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (U == 90) {
                                                                                                                                                                                      var V = 10000000;
                                                                                                                                                                                      if (cm.getPlayer().getVotePoints() > 1) {
                                                                                                                                                                                        cm.getPlayer().gainVotePoints(-2);
                                                                                                                                                                                        cm.getPlayer().modifyCSPoints(1, 20000);
                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                      } else {
                                                                                                                                                                                        cm.sendOk("#eYou do not have enough vote points!");
                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                      }
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (U == 91) {
                                                                                                                                                                                        var V = 15000000;
                                                                                                                                                                                        if (cm.getPlayer().getVotePoints() > 2) {
                                                                                                                                                                                          cm.getPlayer().gainVotePoints(-3);
                                                                                                                                                                                          cm.getPlayer().modifyCSPoints(1, 40000);
                                                                                                                                                                                          cm.dispose();
                                                                                                                                                                                        } else {
                                                                                                                                                                                          cm.sendOk("#eYou do not have enough vote points!");
                                                                                                                                                                                          cm.dispose();
                                                                                                                                                                                        }
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (U == 92) {
                                                                                                                                                                                          var V = 20000000;
                                                                                                                                                                                          if (cm.getPlayer().getVotePoints() > 3) {
                                                                                                                                                                                            cm.getPlayer().gainVotePoints(-4);
                                                                                                                                                                                            cm.getPlayer().modifyCSPoints(1, 60000);
                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                          } else {
                                                                                                                                                                                            cm.sendOk("#eYou do not have enough vote points!");
                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                          }
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (U == 93) {
                                                                                                                                                                                            if (cm.getPlayer().getVotePoints() > 4) {
                                                                                                                                                                                              cm.getPlayer().gainVotePoints(-5);
                                                                                                                                                                                              cm.getPlayer().modifyCSPoints(1, 90000);
                                                                                                                                                                                              cm.dispose();
                                                                                                                                                                                            } else {
                                                                                                                                                                                              cm.sendOk("#eYou do not have enough vote points!");
                                                                                                                                                                                              cm.dispose();
                                                                                                                                                                                            }
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (U = 94) {
                                                                                                                                                                                              cm.askMenu("#eYou Currently have(#r" + cm.getPlayer().getVotePoints() + "#k) Vote Points." + "#k\r\n#eWhat cube would you want?" + "#k\r\n#L95##r1 Super Miracle Cube for 1 Vote Point" + "#k\r\n#L96##r2 Super Miracle Cubes for 2 Vote Point" + "#k\r\n#L97##r4 Super miracle Cubes for 3 Vote Point" + "#k\r\n#L98##r6 Super Miracle Cubes for 4 Vote Point" + "#k\r\n#L99##r8 Super Miracle Cubes for 5 Vote Points");
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (U == 95) {
                                                                                                                                                                                                if (cm.getPlayer().getVotePoints() > 0) {
                                                                                                                                                                                                  cm.getPlayer().gainVotePoints(-1);
                                                                                                                                                                                                  cm.gainItem(2001502, 1);
                                                                                                                                                                                                  cm.dispose();
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  cm.sendOk("#eYou do not have enough vote points!");
                                                                                                                                                                                                  cm.dispose();
                                                                                                                                                                                                }
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (U == 96) {
                                                                                                                                                                                                  if (cm.getPlayer().getVotePoints() > 1) {
                                                                                                                                                                                                    cm.getPlayer().gainVotePoints(-2);
                                                                                                                                                                                                    cm.gainItem(5062002, 2);
                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    cm.sendOk("#eYou do not have enough vote points!");
                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                  }
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (U == 97) {
                                                                                                                                                                                                    if (cm.getPlayer().getVotePoints() > 2) {
                                                                                                                                                                                                      cm.getPlayer().gainVotePoints(-3);
                                                                                                                                                                                                      cm.getPlayer().gainItem(5062002, 1);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      cm.sendOk("#eYou do not have enough vote points!");
                                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                                    }
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (U == 98) {
                                                                                                                                                                                                      if (cm.getPlayer().getVotePoints() > 3) {
                                                                                                                                                                                                        cm.getPlayer().gainVotePoints(-4);
                                                                                                                                                                                                        cm.gainItem(5062002, 6);
                                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        cm.sendOk("#eYou do not have enough vote points!");
                                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                                      }
                                                                                                                                                                                                    } else if (U == 99) {
                                                                                                                                                                                                      if (cm.getPlayer().getVotePoints() > 4) {
                                                                                                                                                                                                        cm.getPlayer().gainVotePoints(-5);
                                                                                                                                                                                                        cm.gainItem(5062002, 8);
                                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        cm.sendOk("#eYou do not have enough vote points!");
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
      }
    }
  }
}