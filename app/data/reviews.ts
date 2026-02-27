export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  googleMapsUrl: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely the best dental clinic in Guwahati! Dr. and the entire team are incredibly professional and caring. My root canal was completely painless — I was so nervous before, but they made me feel at ease. The clinic is spotlessly clean and modern. Highly recommend!",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r2",
    name: "Rajesh Borah",
    avatar: "RB",
    rating: 5,
    date: "1 month ago",
    text: "Excellent experience! Got my teeth whitening done here and the results are stunning. The staff is very friendly and the doctor explained every step of the procedure. Very hygienic setup with state-of-the-art equipment. Will definitely come back!",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r3",
    name: "Anita Devi",
    avatar: "AD",
    rating: 5,
    date: "3 weeks ago",
    text: "I had my dental implants done here. The doctor is very skilled and compassionate. I was really scared at first but the team put me completely at ease. The results are beautiful and natural-looking. Best investment I've made for my smile!",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r4",
    name: "Mohammed Ali",
    avatar: "MA",
    rating: 5,
    date: "1 month ago",
    text: "Brought my 7-year-old son here. The pediatric dental care is exceptional! The doctors know exactly how to handle kids — my son wasn't scared at all and even said he wants to come back! Great ambiance, very professional service.",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r5",
    name: "Sunita Gogoi",
    avatar: "SG",
    rating: 5,
    date: "2 months ago",
    text: "Got braces here and the entire orthodontic journey has been smooth. Regular follow-ups, clear communication about progress, and the doctor is always available for queries. The clinic genuinely cares about your oral health. 5 stars all the way!",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r6",
    name: "Dipankar Nath",
    avatar: "DN",
    rating: 5,
    date: "3 months ago",
    text: "Had an emergency dental appointment and they accommodated me same day! The doctor immediately diagnosed the problem and treated it efficiently. Minimal waiting time, transparent pricing, and superb aftercare advice. This is my go-to clinic now.",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r7",
    name: "Kavita Singh",
    avatar: "KS",
    rating: 5,
    date: "3 months ago",
    text: "The smile makeover package is absolutely worth it! From veneers to scaling, everything was done with precision. I can't stop smiling now. The before and after difference is incredible. The team's attention to detail is commendable.",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r8",
    name: "Himanshu Das",
    avatar: "HD",
    rating: 5,
    date: "4 months ago",
    text: "Best dental clinic in Assam without a doubt. I have been visiting for 3 years now for routine check-ups and cleanings. Always consistent quality, always the same warm and welcoming staff. They truly prioritize patient comfort above everything.",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r9",
    name: "Rekha Baruah",
    avatar: "RB",
    rating: 5,
    date: "5 months ago",
    text: "Superb clinic with amazing staff! The doctor is very knowledgeable and honest — didn't recommend any unnecessary procedures. Got my wisdom tooth removed without any pain. The post-op care instructions were very detailed. Truly a world-class experience.",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r10",
    name: "Bikash Kalita",
    avatar: "BK",
    rating: 5,
    date: "6 months ago",
    text: "Top notch dental care at very reasonable prices. I visited for a full mouth restoration and the results exceeded my expectations. The clinic uses the latest technology and sterilization methods. I feel confident smiling again after years of hesitation!",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r11",
    name: "Pallabi Saikia",
    avatar: "PS",
    rating: 5,
    date: "7 months ago",
    text: "I was terrified of dentists but Medicity completely changed my perspective. The team is so gentle, patient, and reassuring. Got a crown fitted and it was a seamless experience. The doctor's expertise is evident in every aspect of the treatment.",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
  {
    id: "r12",
    name: "Gautam Hazarika",
    avatar: "GH",
    rating: 5,
    date: "8 months ago",
    text: "Highly professional team that genuinely cares for patient wellbeing. Visited for Invisalign consultation and the doctor gave an honest assessment without any upselling. Clear treatment plan, excellent facility, and true value for money. Strongly recommended!",
    googleMapsUrl: "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z",
  },
];

export const reviewsPageUrl = "https://www.google.com/maps/place/Medicity+Multispeciality+Dental+Clinic/@26.1676,91.7526,17z/data=!4m8!3m7!1s0x375a5908b1cc7233:0x5d2f3fb5c0e3c15f!8m2!3d26.1676!4d91.7526!9m1!1b1";
