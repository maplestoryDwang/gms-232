package net.swordie.ms.world.field.fieldeffect;

public class RecordIndex {
   private int intArrIndex;
   private int strArrIndex;

   public String getNextStr(String[] var1) {
      return var1.length > this.strArrIndex ? var1[this.strArrIndex++] : null;
   }

   public int getNextInt(int[] var1) {
      return var1.length > this.intArrIndex ? var1[this.intArrIndex++] : 0;
   }
}
