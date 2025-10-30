export interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export interface Destination {
  image: string;
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface BookingInquiry {
  destinationTitle: string;
  name: string;
  email: string;
  message: string;
}
