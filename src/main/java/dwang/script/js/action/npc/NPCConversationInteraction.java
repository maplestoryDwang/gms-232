package dwang.script.js.action.npc;

import dwang.script.js.JSScriptType;
import dwang.script.js.action.AbstractPlayerInteraction;
import dwang.script.js.manager.extend.NPCScriptManager;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.ScriptMan;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.scripts.ScriptType;

import javax.script.Invocable;

import static net.swordie.ms.life.npc.NpcMessageType.AskMenu;
import static net.swordie.ms.life.npc.NpcMessageType.AskYesNo;


/**
 * @author dwang
 * @date 2026/2/21
 * @description 
 */
public class NPCConversationInteraction extends AbstractPlayerInteraction {
   private final JSScriptType scriptType;
   private Invocable invocable;
   private String npcText;

   public void dispose() {
      NPCScriptManager.getInstance().dispose(this.mapleClient);
   }

   public JSScriptType getType() {
      return this.scriptType;
   }

   public String getText() {
      return this.npcText;
   }

   public void setText(String var1) {
      this.npcText = var1;
   }

   public NPCConversationInteraction(Account client, int npcId, int questId, String script, JSScriptType scriptType, Invocable invocable) {
      super(client, script, npcId, questId);
      this.scriptType = scriptType;
      this.invocable = invocable;
   }

   public Invocable getIv() {
      return this.invocable;
   }

   public void setIv(Invocable var1) {
      this.invocable = var1;
   }



   @Override
   public AbstractPlayerInteraction getAPI() {
      return this;
   }


   public void askYesNo(String text) {
      sendGeneralSay(text, AskYesNo);
   }

   private void sendGeneralSay(String text, NpcMessageType nmt) throws NullPointerException {
      NpcScriptInfo npcScriptInfo = new NpcScriptInfo();
      npcScriptInfo.setText(text);
      npcScriptInfo.setMessageType(nmt);

      getPlayer().write(ScriptMan.scriptMessage(npcScriptInfo, nmt));

   }

}
