package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.trunk.TrunkDlg;
import net.swordie.ms.connection.packet.NpcPool;
import net.swordie.ms.connection.packet.ShopDlg;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.loaders.NpcData;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;
import net.swordie.ms.world.shop.NpcShopDlg;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * @author dwang
 * @date 2026/2/27
 * @description 生命相关
 */
public interface PyNPCAPI extends DwangScriptBaseApi {


   Logger log = LogManager.getLogger(PyNPCAPI.class);

   // NPC methods

   default void spawnNpc(int npcId, int x, int y) {
      Npc npc = NpcData.getNpcDeepCopyById(npcId);
      Position position = new Position(x, y);
      npc.setPosition(position);
      npc.setCy(y);
      npc.setRx0(x + 50);
      npc.setRx1(x - 50);
      Foothold fh = getField().findFootHoldBelow(new Position(x, y - 2));
      if (fh != null) {
         npc.setFh(getField().findFootHoldBelow(new Position(x, y - 2)).getId());
      }
      npc.setNotRespawnable(true);

      getField().spawnLife(npc, getChr());
   }


   default void npc_ChangeController(int npcId, String npcTag, int x, int y, short fh, short rx0, short rx1, int faceLeft, boolean canMove, short fadeInTime, boolean forceSpawnNew) {
      Npc npc = NpcData.getNpcDeepCopyById(npcId);

      if (npc != null) {
         npc.setPosition(new Position(x, y));
         npc.setCy(y);
         npc.setMove(canMove);
         npc.setRx0(rx0);
         npc.setRx1(rx1);
         npc.setFlip(faceLeft == 0);
         npc.setFh(fh);
         npc.setObjectId(NpcData.getCount());
         npc.setNotRespawnable(true);

         getField().spawnLife(npc, getChr());


      }
   }


   default void spawnNpc(int npcId, int x, int y, boolean flip) {
      Npc npc = NpcData.getNpcDeepCopyById(npcId);
      Position position = new Position(x, y);
      npc.setPosition(position);
      npc.setCy(y);
      npc.setRx0(x + 50);
      npc.setRx1(x - 50);
      npc.setFlip(flip);
      Foothold fh = getField().findFootHoldBelow(new Position(x, y - 2));
      if (fh != null) {
         npc.setFh(getField().findFootHoldBelow(new Position(x, y - 2)).getId());
      }
      npc.setNotRespawnable(true);
      if (npc.getField() == null) {
         npc.setField(getInitData().getField());
      }

      getField().spawnLife(npc, getChr());
   }


   default void removeNpc(int npcId) {
      var npc = getField().getNpcs().stream()
              .filter(n -> n.getTemplateId() == npcId)
              .findFirst()
              .orElse(null);
      if (npc instanceof Npc) {
         getField().removeLife(npc);
      }
   }


   default void openNpc(int npcId) {
      Npc npc = NpcData.getNpcDeepCopyById(npcId);
      String script;
      if (npc.getScripts().size() > 0) {
         script = npc.getScripts().get(0);
      } else {
         script = String.valueOf(npc.getTemplateId());
      }
      getChr().getScriptManager().startScript(npc.getTemplateId(), npcId, script, ScriptType.Npc, null);
   }


   default void openShop(int shopID) {
      NpcShopDlg nsd = NpcData.getShopById(shopID);
      if (nsd != null) {
         if (getChr().getShop() == null) {
            getChr().setShop(nsd);
            if (shopID == 9001212) {
               getChr().write(ShopDlg.shopCollectorInit());
            }

            getChr().write(ShopDlg.openShop(getChr(), 0, nsd));
         }
      } else {
         chat(String.format("Could not find shop with id %d.", shopID));
         log.error(String.format("Could not find shop with id %d.", shopID));
      }
   }


   default void openTrunk(int npcTemplateID) {
      if (getChr() == null || getChr().isOnline() == false) {
         log.error(String.format("[CharId: %d] tried to open trunk while being offline.",  getInitData().getChr().getId()));
         return;
      }
      getChr().write(FieldPacket.trunkDlg(TrunkDlg.open(npcTemplateID, getChr().getAccount().getTrunk())));
   }


   default void setSpeakerID(int templateID) {
      NpcScriptInfo nsi = getInitData().getNpcScriptInfo();
      nsi.removeParam(NpcScriptInfo.Param.PlayerAsSpeaker);
      nsi.removeParam(NpcScriptInfo.Param.PlayerAsSpeakerFlip);
      boolean isNotCancellable = nsi.hasParam(NpcScriptInfo.Param.NotCancellable);
      nsi.setTemplateID(templateID);
      if (isNotCancellable) {
         nsi.addParam(NpcScriptInfo.Param.NotCancellable);
      }
   }

   default void setInnerOverrideSpeakerTemplateID(int templateID) {
      getInitData().getNpcScriptInfo().setInnerOverrideSpeakerTemplateID(templateID);
   }


   default void setSpeakerType(byte speakerType) {
      NpcScriptInfo nsi = getInitData().getNpcScriptInfo();
      nsi.setSpeakerType(speakerType);
   }

   default void hideNpcByTemplateId(int npcTemplateId, boolean hide) {
      hideNpcByTemplateId(npcTemplateId, hide, hide);
   }


   default void hideNpcByTemplateId(int npcTemplateId, boolean hideTemplate, boolean hideNameTag) {
      Field field = getField();
      Life life = field.getLifeByTemplateId(npcTemplateId);
      if (!(life instanceof Npc)) {
         log.error(String.format("[hideNpcByTemplateId] npc %d is null or not an instance of Npc", npcTemplateId));
         return;
      }
      getChr().write(NpcPool.npcViewOrHide(life.getObjectId(), !hideTemplate, !hideNameTag));
   }

   default void hideNpcByObjectId(int npcObjId, boolean hide) {
      hideNpcByObjectId(npcObjId, hide, hide);
   }


   default void hideNpcByObjectId(int npcObjId, boolean hideTemplate, boolean hideNameTag) {
      Field field = getField();
      Life life = field.getLifeByObjectID(npcObjId);
      if (!(life instanceof Npc)) {
         log.error(String.format("[hideNpcByObjectId] npc %d is null or not an instance of Npc", npcObjId));
         return;
      }
      getChr().write(NpcPool.npcViewOrHide(life.getObjectId(), !hideTemplate, !hideNameTag));
   }


   default void moveNpcByTemplateId(int npcTemplateId, boolean left, int distance, int speed) {
      Field field = getField();
      Life life = field.getLifeByTemplateId(npcTemplateId);
      if (!(life instanceof Npc)) {
         log.error(String.format("[moveNpcByTemplateId] npc %d is null or not an instance of Npc", npcTemplateId));
         return;
      }
      getChr().write(NpcPool.npcSetForceMove(life.getObjectId(), left, distance, speed));
   }


   default void moveNpcByObjectId(int npcObjId, boolean left, int distance, int speed) {
      Field field = getField();
      Life life = field.getLifeByObjectID(npcObjId);
      if (!(life instanceof Npc)) {
         log.error(String.format("[moveNpcByObjectId] npc %d is null or not an instance of Npc", npcObjId));
         return;
      }
      getChr().write(NpcPool.npcSetForceMove(life.getObjectId(), left, distance, speed));
   }


   default void flipNpcByTemplateId(int npcTemplateId, boolean left) {
      Field field = getField();
      Life life = field.getLifeByTemplateId(npcTemplateId);
      if (!(life instanceof Npc)) {
         log.error(String.format("[flipNpcByTemplateId] npc %d is null or not an instance of Npc", npcTemplateId));
         return;
      }
      getChr().write(NpcPool.npcSetForceFlip(life.getObjectId(), left));
   }


   default void flipNpcByObjectId(int npcObjId, boolean left) {
      Field field = getField();
      Life life = field.getLifeByObjectID(npcObjId);
      if (!(life instanceof Npc)) {
         log.error(String.format("[flipNpcByObjectId] npc %d is null or not an instance of Npc", npcObjId));
         return;
      }
      getChr().write(NpcPool.npcSetForceFlip(life.getObjectId(), left));
   }

   default void showNpcSpecialActionByTemplateId(int npcTemplateId, String effectName) {
      showNpcSpecialActionByTemplateId(npcTemplateId, effectName, 0);
   }


   default void showNpcSpecialActionByTemplateId(int npcTemplateId, String effectName, int duration) {
      Field field = getField();
      Life life = field.getLifeByTemplateId(npcTemplateId);
      if (!(life instanceof Npc)) {
         log.error(String.format("[showNpcSpecialActionByTemplateId] npc %d is null or not an instance of Npc", npcTemplateId));
         return;
      }
      getChr().write(NpcPool.npcSetSpecialAction(life.getObjectId(), effectName, duration));
   }

   default void showNpcSpecialActionByObjectId(int npcObjId, String effectName) {
      showNpcSpecialActionByObjectId(npcObjId, effectName, 0);

   }


   default void showNpcSpecialActionByObjectId(int npcObjId, String effectName, int duration) {
      Field field = getField();
      Life life = field.getLifeByObjectID(npcObjId);
      if (!(life instanceof Npc)) {
         log.error(String.format("[showNpcSpecialActionByObjectId] npc %d is null or not an instance of Npc", npcObjId));
         return;
      }
      getChr().write(NpcPool.npcSetSpecialAction(life.getObjectId(), effectName, duration));
   }

   default void resetNpcSpecialActionByTemplateId(int templateId) {
      Field field = getField();
      Life life = field.getLifeByTemplateId(templateId);
      if (!(life instanceof Npc)) {
         log.error(String.format("[resetNpcSpecialActionByTemplateId] npc %d is null or not an instance of Npc", templateId));
         return;
      }
      resetNpcSpecialActionByObjectId(life.getObjectId());
   }

   default void resetNpcSpecialActionByObjectId(int objectId) {
      getChr().write(NpcPool.npcResetSpecialAction(objectId));
   }

   default int getNpcObjectIdByTemplateId(int npcTemplateId) {
      Field field = getField();
      Life life = field.getLifeByTemplateId(npcTemplateId);
      if (!(life instanceof Npc)) {
         log.error(String.format("[getNpcObjectIdByTemplateId] npc %d is null or not an instance of Npc", npcTemplateId));
         return 0;
      }
      return life.getObjectId();
   }

}
