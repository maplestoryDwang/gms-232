package dwang.script.js.api;


import dwang.script.js.action.AbstractPlayerInteraction;
import dwang.script.js.action.npc.NpcController;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;

public interface BasicParamAPI {
   Account getClient();

   int getNpc();

   Char getPlayer();

   NpcController getNpcController();

   AbstractPlayerInteraction getAPI();

   int getQuest();

   String getScript();
}
