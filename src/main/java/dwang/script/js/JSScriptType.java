package dwang.script.js;

public enum JSScriptType {
   NPC(-1),
   开始任务(0),
   结束任务(1),
   道具(-1),
   首位进入地图(-1),
   进入地图(-1),
   传送点(-2),
   反应堆(-2),
   事件(-2),
   依次对话任务(1);

   private final byte Field2894;

   public byte ALLATORIxDEMO_124() {
      return this.Field2894;
   }

   private JSScriptType(int var3) {
      this.Field2894 = (byte)var3;
   }
}
