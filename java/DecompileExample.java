public class DecompileExample {
    private String message;
    
    public DecompileExample(String message) {
        this.message = message;
    }
    
    public void print() {
        System.out.println(message);
    }
    
    public static void main(String[] args) {
        new DecompileExample("Hello").print();
    }
}

