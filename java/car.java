public class car {
    private String make;
    private String model;
    private int year;
    
    public car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    public void displayDetails() {
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
    
    public static void main(String[] args) {
        car myCar = new car("Toyota", "Camry", 2020);
        myCar.displayDetails();
    }
}