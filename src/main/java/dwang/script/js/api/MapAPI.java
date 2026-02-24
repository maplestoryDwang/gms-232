package dwang.script.js.api;


import net.swordie.ms.life.Reactor;

import java.awt.*;
import java.util.Iterator;
import java.util.List;

public interface MapAPI extends BasicParamAPI {


//   default void mapChangeTimer(int var1, int var2, int var3, boolean var4) {
//      List var5 = this.getClient().getChannelServer().getMapFactory().getMap(var1).getCharacters();
//      this.getClient().getChannelServer().getMapFactory().getMap(var1).broadcastMessage(fa.c(var3));
//      if (var4) {
//         this.getClient().getChannelServer().getMapFactory().getMap(var1).startMapEffect("You will be moved out of the map when the timer ends.", 5120041);
//      }
//
//      Timer.EventTimer.getInstance().schedule(new Runnable() {
//         @Override
//         public void run() {
//            ALLATORIxDEMO(var5, var2);
//         }
//      }, (long) (var3 * 1000));
//   }
//
//   default void ALLATORIxDEMO(int var1) {
//      this.戴米安飞箭(var1);
//   }
//
//   default Reactor spawnReactorOnGroundBelow(int var1, int var2, int var3) {
//      Reactor var4 = new Reactor(ReactorFactory.getReactor(var1), var1);
//      this.getPlayer().getMap().spawnReactorOnGroundBelow(var4, new Point(var2, var3));
//      return var4;
//   }
//
//   default void warp(int var1) {
//      MapleMap var4 = this.getMap(var1);
//
//      try {
//         this.getPlayer().changeMap(var4, var4.getPortal(RandomTool.ALLATORIxDEMO_59(var4.getPortals().size())));
//      } catch (Throwable var3) {
//         this.getPlayer().changeMap(var4, var4.getPortal(0));
//      }
//   }
//
//   default void warp(int var1, String var2) {
//      MapleMap var3 = this.getMap(var1);
//      if (var1 == this.getPlayer().getMapId()) {
//         if ((new Point(this.getPlayer().getMap().getPortal(var2).getPosition())).distanceSq(this.getPlayer().getTruePosition()) < 90000.0D) {
//            this.getPlayer().checkFollow();
//            this.getPlayer().getMap().movePlayer(this.getPlayer(), new Point(this.getPlayer().getMap().getPortal(var2).getPosition()));
//         } else {
//            this.getPlayer().changeMap(var3, var3.getPortal(var2));
//         }
//      } else {
//         this.getPlayer().changeMap(var3, var3.getPortal(var2));
//      }
//   }
//
//   default int getPlayerCount(int var1) {
//      return this.getClient().getChannelServer().getMapFactory().getMap(var1).getCharactersSize();
//   }
//
//   default void hitReactor(int var1, int var2) {
//      Iterator var3 = this.getClient().getChannelServer().getMapFactory().getMap(var1).getAllReactors().iterator();
//
//      Reactor var4;
//      do {
//         if (!var3.hasNext()) {
//            return;
//         }
//
//         var4 = (Reactor)((MapObject)var3.next());
//      } while(var4.getReactorId() != var2);
//
//      var4.hitReactor(this.getClient());
//   }
//
//   default void warp(int var1, int var2) {
//      this.warp(var1, var2, false);
//   }
//
//   default void forceStartReactor(int var1, int var2) {
//      Iterator var3 = this.getClient().getChannelServer().getMapFactory().getMap(var1).getAllReactors().iterator();
//
//      Reactor var4;
//      do {
//         if (!var3.hasNext()) {
//            return;
//         }
//
//         var4 = (Reactor)((MapObject)var3.next());
//      } while(var4.getReactorId() != var2);
//
//      var4.forceStartReactor(this.getClient());
//   }
//
//   default void warpParty(int var1) {
//      if (this.getPlayer().getParty() != null && this.getPlayer().getParty().getMembers().size() != 1) {
//         MapleMap var5 = this.getMap(var1);
//         int var2 = this.getPlayer().getMapId();
//         Iterator var3 = this.getPlayer().getParty().getMembers().iterator();
//
//         while(true) {
//            Character var6;
//            do {
//               do {
//                  if (!var3.hasNext()) {
//                     return;
//                  }
//
//                  MaplePartyCharacter var4 = (MaplePartyCharacter)var3.next();
//                  var6 = this.getPlayer().getChannelServer().getPlayerStorage().getCharacterById(var4.getId());
//               } while(var6 == null);
//            } while(var6.getMapId() != var2 && var6.getEventInstance() != this.getPlayer().getEventInstance());
//
//            var6.changeMap(var5, var5.getPortal(0));
//         }
//      } else {
//         this.warp(var1, 0);
//      }
//   }
//
//   default void warpParty(int var1, int var2) {
//      if (this.getPlayer().getParty() != null && this.getPlayer().getParty().getMembers().size() != 1) {
//         boolean var3 = var2 < 0;
//         MapleMap var9 = this.getMap(var1);
//         int var4 = this.getPlayer().getMapId();
//         Iterator var5 = this.getPlayer().getParty().getMembers().iterator();
//
//         while(true) {
//            Character var10;
//            do {
//               do {
//                  if (!var5.hasNext()) {
//                     return;
//                  }
//
//                  MaplePartyCharacter var6 = (MaplePartyCharacter)var5.next();
//                  var10 = this.getPlayer().getChannelServer().getPlayerStorage().getCharacterById(var6.getId());
//               } while(var10 == null);
//            } while(var10.getMapId() != var4 && var10.getEventInstance() != this.getPlayer().getEventInstance());
//
//            if (var3) {
//               try {
//                  var10.changeMap(var9, var9.getPortal(RandomTool.ALLATORIxDEMO_59(var9.getPortals().size())));
//               } catch (Throwable var8) {
//                  var10.changeMap(var9, var9.getPortal(0));
//               }
//            } else {
//               var10.changeMap(var9, var9.getPortal(var2));
//            }
//         }
//      } else if (var2 < 0) {
//         this.warp(var1);
//      } else {
//         this.warp(var1, var2);
//      }
//   }
//
//   default void warp(int var1, int var2, boolean var3) {
//      MapleMap var4 = this.getMap(var1);
//      this.getPlayer().changeMap(var4, var4.getPortal(var2), var3);
//   }
//
//   default void ALLATORIxDEMO(int var1, int var2, int var3, int var4) {
//      this.obstacleFallRepeat(var1, var2, var3, var4);
//   }
//
//   default void instantMapWarp(byte var1) {
//      this.getClient().announce(J.ALLATORIxDEMO(var1));
//   }
//
//   default MapleMap getMap() {
//      return this.getPlayer().getMap();
//   }
//
//   default MapleMap getMap(int var1) {
//      return ChannelServer.getInstance(this.getClient().getChannel()).getMapFactory().getMap(var1);
//   }
//
//   default void 戴米安飞箭(int var1) {
//      this.getPlayer().scheduleInMapTask(var1 * 1000, new Runnable() {
//         @Override
//         public void run() {
//            ALLATORIxDEMO(var1);
//         }
//      }, false);
//      this.getClient().announce(l.ALLATORIxDEMO());
//      this.getClient().announce(l.D());
//      this.getClient().announce(l.ALLATORIxDEMO(this.getPlayer()));
//   }
//
//
//
//   default boolean isAllReactorState(int var1, int var2) {
//      boolean var3 = false;
//      Iterator var4 = this.getMap().getAllReactors().iterator();
//
//      while(var4.hasNext()) {
//         Reactor var5 = (Reactor)var4.next();
//         if (var5.getReactorId() == var1) {
//            var3 = var5.getState() == var2;
//         }
//      }
//
//      return var3;
//   }
//
//   default  void ALLATORIxDEMO(List var0, int var1) {
//      if (var0 != null) {
//         Iterator var2 = var0.iterator();
//
//         while(var2.hasNext()) {
//            ((Character)var2.next()).changeMap(var1, 0);
//         }
//      }
//
//   }
//
//   default void destroyReactor(int var1, int var2) {
//      Iterator var3 = this.getClient().getChannelServer().getMapFactory().getMap(var1).getAllReactors().iterator();
//
//      Reactor var4;
//      do {
//         if (!var3.hasNext()) {
//            return;
//         }
//
//         var4 = (Reactor)((MapObject)var3.next());
//      } while(var4.getReactorId() != var2);
//
//      var4.hitReactor(this.getClient());
//   }
//
//   default void spawnPortal() {
//      this.getClient().announce(da.ALLATORIxDEMO(999999999, 999999999, 0, (Point)null));
//   }
//
//   default void 戴米安墓碑() {
//      this.getClient().announce(l.i());
//   }
//
//   default void obstacleFallRepeat(int var1, int var2, int var3, int var4) {
//      this.getPlayer().scheduleInMapTask(var4 * 1000, new Runnable() {
//         @Override
//         public void run() {
//            ALLATORIxDEMO(var1, var2, var3, var4);
//         }
//      }, false);
//      this.getClient().announce(Ga_0.ALLATORIxDEMO(var1, var2, var3, this.getMap()));
//   }
//
//   default void updateEventProgress(int var1) {
//      this.getPlayer().getMap().broadcastMessage(Ga_0.I(var1));
//   }
//
//   default int getMapId() {
//      return this.getPlayer().getMap().getMapId();
//   }
//
//   default void resetMap(int var1) {
//      this.getMap(var1).resetFully();
//   }



}
