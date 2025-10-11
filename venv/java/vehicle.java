public class vehicle{
        String brand;
        String model;
        int year;
    public vehicle(String brand, String model, int year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    public void displayinfo(){
        System.out.println("brand:"+brand+"model: "+model+"year: "+year);
    }
}
    class car extends vehicle{
        String fueltype;
        int seatingcapacity;
        public car(String brand, String model, int year, String fueltype, int seatingcapacity){
            super(brand,model,year);
            this.fueltype=fueltype;
            this.seatingcapacity=seatingcapacity;
        }
        public void displayinfo(){
            super.displayinfo();
            System.out.println("fueltype: "+fueltype+"seatingcapacity: "+seatingcapacity);
        }

    }
    class bike extends vehicle{
        boolean iselectric;
        public bike(String brand, String model, int year, String fueltype, int seatingcapacity, boolean iselectric){
            super(brand,model,year);
            this.iselectric=iselectric;
        }
            public void displayinfo(){
                super.displayinfo();
                System.out.println("iselectric: "+iselectric);
            }
    }
 class vehiclemanagement{
        public static void main(String[] args) {
            car c=new car("toyota","c45",2020,"petrol",6);
            bike b=new bike("passion pro","p34",2014,"petrol",2,false);
            c.displayinfo();
            b.displayinfo();
        }
    }
