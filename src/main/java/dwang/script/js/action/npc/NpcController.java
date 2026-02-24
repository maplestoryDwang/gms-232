package dwang.script.js.action.npc;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.npc.Npc;
import org.apache.commons.lang3.StringUtils;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * @author dwang
 * @date 2026/2/21
 * @description NPC在脚本的控制
 */
public class NpcController {

    /**
     * 自定义序号
    */
   private int npcCounter = 20000000;

    /**
     * 自定义tag或NPCid
    */
   private final Map<Char, HashMap<String, Npc>> npcTagMap = new HashMap();

    /**
     * objIDmap
    */
   private final Map<Char, HashMap<Integer, Npc>> npcObjectIdMap = new HashMap();

   public Npc get(Char var1, String npcTag) {
      this.init(var1);
      if (StringUtils.isEmpty(npcTag)) {
         return null;
      } else {
         Npc var3 = (Npc)((HashMap)this.npcTagMap.get(var1)).get(npcTag);
         if (var3 == null && npcTag.startsWith("oid=")) {
            String var4 = npcTag.substring(4);
            var3 = (Npc)((HashMap)this.npcTagMap.get(var1)).get(var4);
            if (var3 == null) {
               try {
                  // 去地图里面找NPC
                  Optional<Npc> first = var1.getField().getNpcs().stream().filter(npc -> npc.getObjectId() == Integer.parseInt(var4)).findFirst();
                  if (first.isPresent()) {
                     var3 = (Npc)first.get();
                  }
//                  var3 = var1.getPlayer().getMap().getNPCById(Integer.parseInt(var4));
               } catch (NumberFormatException var5) {
                  var3 = null;
               }
            }
         }

         if (var3 == null) {
            ((HashMap)this.npcTagMap.get(var1)).remove(npcTag);
         }

         return var3;
      }
   }

   public void put(Char var1, String npcTag, Npc Npc) {
      this.init(var1);
      (this.npcTagMap.get(var1)).put(npcTag, Npc);
      (this.npcObjectIdMap.get(var1)).put(Npc.getObjectId(), Npc);
   }

   public void init(Char var1) {
      if (!this.npcTagMap.containsKey(var1)) {
         this.npcTagMap.put(var1, new HashMap());
         this.npcObjectIdMap.put(var1, new HashMap());
      }

   }

   public void remove(Char var1, String var2) {
      this.init(var1);
      ((HashMap)this.npcObjectIdMap.get(var1)).remove(((Npc)((HashMap)this.npcTagMap.get(var1)).get(var2)).getObjectId());
      ((HashMap)this.npcTagMap.get(var1)).remove(var2);
   }

   public Npc getByOid(Char var1, int var2) {
      this.init(var1);
      Npc var3 = (Npc)((HashMap)this.npcObjectIdMap.get(var1)).get(var2);
      if (var3 == null) {
         ((HashMap)this.npcObjectIdMap.get(var1)).remove(var2);
      }

      return var3;
   }

   public int getCount() {
      return this.npcCounter++;
   }
}
