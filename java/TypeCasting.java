public class TypeCasting {
    public static void main(String[] args) {
        double doubleValue = 9.78;
        int intValue = (int) doubleValue;
        System.out.println("Double to int: " + intValue);
        
        int anotherInt = 100;
        double anotherDouble = anotherInt;
        System.out.println("Int to double: " + anotherDouble);
    }
}