interface User {
    name: string;
    email: string;
    phone: string;
  }
  
  interface ExtendedUser extends User {
    age: number;
    gender: string;
  }
  
  export default ExtendedUser;