package dwang.script.js.npc;

public enum NPCTalkMode {
   默认样式(0),
   不可退出(1),
   右侧显示自己(2),
   右侧显示NPC(4),
   NPC脸反向(8),
   自己脸朝右(16),
   第二对话风格(32),
   特殊文字不跟随UI(64),
   加高底部对话框(128);

   private final byte type;

   public byte getNPCTalkModeType() {
      return this.type;
   }

   private NPCTalkMode(int var3) {
      this.type = (byte)var3;
   }

   public static byte addTalkModeMask(NPCTalkMode... var0) {
      byte var1 = 0;
      NPCTalkMode[] var2 = var0;
      int var3 = var0.length;

      for(int var4 = 0; var4 < var3; ++var4) {
         NPCTalkMode var5 = var2[var4];
         var1 |= var5.getNPCTalkModeType();
      }

      return var1;
   }
}
