public class PatternMatchingSwitch {
    public static void checkType(Object obj) {
        switch (obj) {
            case String s -> System.out.println("String: " + s);
            case Integer i -> System.out.println("Integer: " + i);
            case Double d -> System.out.println("Double: " + d);
            default -> System.out.println("Unknown type");
        }
    }
    
    public static void main(String[] args) {
        checkType("Hello");
        checkType(42);
        checkType(3.14);
    }
}