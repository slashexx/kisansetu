const farmerDetails = [
  {
    "farmerId": 1,
    "name": "Ram Chandra",
    "state": "Maharashtra",
    "cropsGrown": ["Toor Dal", "Moong Dal"],
    "postalCode": "431001",
    "address": "Vill: Wani, Dist: Nanded, Maharashtra",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 2,
    "name": "Seeta Devi",
    "state": "Uttar Pradesh",
    "cropsGrown": ["Chana Dal", "Masoor Dal"],
    "postalCode": "282001",
    "address": "Vill: Fatehabad, Dist: Agra, Uttar Pradesh",
    "image": "femaleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 3,
    "name": "Mohit Singh",
    "state": "Rajasthan",
    "cropsGrown": ["Urad Dal", "Rajma"],
    "postalCode": "303001",
    "address": "Vill: Kotputli, Dist: Jaipur, Rajasthan",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 4,
    "name": "Aarti Kumari",
    "state": "Madhya Pradesh",
    "cropsGrown": ["Lobia", "Moong Dal"],
    "postalCode": "474001",
    "address": "Vill: Morar, Dist: Gwalior, Madhya Pradesh",
    "image": "femaleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 5,
    "name": "Vinay Patil",
    "state": "Karnataka",
    "cropsGrown": ["Rajma", "Moth Beans"],
    "postalCode": "583101",
    "address": "Vill: Hosapete, Dist: Ballari, Karnataka",
    "image": "maleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 6,
    "name": "Anjali Gupta",
    "state": "Gujarat",
    "cropsGrown": ["Urad Dal", "Masoor Dal"],
    "postalCode": "364001",
    "address": "Vill: Bhavnagar, Dist: Bhavnagar, Gujarat",
    "image": "femaleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 7,
    "name": "Rajkumar Yadav",
    "state": "Bihar",
    "cropsGrown": ["Toor Dal", "Lobia"],
    "postalCode": "845001",
    "address": "Vill: Bettiah, Dist: West Champaran, Bihar",
    "image": "maleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 8,
    "name": "Suman Thakur",
    "state": "Haryana",
    "cropsGrown": ["Chana Dal", "Moong Dal"],
    "postalCode": "135001",
    "address": "Vill: Jagadhri, Dist: Yamunanagar, Haryana",
    "image": "femaleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 9,
    "name": "Deepak Choudhary",
    "state": "Punjab",
    "cropsGrown": ["Rajma", "Urad Dal"],
    "postalCode": "151001",
    "address": "Vill: Kotkapura, Dist: Faridkot, Punjab",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 10,
    "name": "Preeti Singh",
    "state": "West Bengal",
    "cropsGrown": ["Lobia", "Moth Beans"],
    "postalCode": "713101",
    "address": "Vill: Raniganj, Dist: Bardhaman, West Bengal",
    "image": "femaleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 11,
    "name": "Amit Patel",
    "state": "Madhya Pradesh",
    "cropsGrown": ["Toor Dal", "Rajma"],
    "postalCode": "465001",
    "address": "Vill: Shajapur, Dist: Shajapur, Madhya Pradesh",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 12,
    "name": "Sunita Yadav",
    "state": "Rajasthan",
    "cropsGrown": ["Moong Dal", "Chana Dal"],
    "postalCode": "313001",
    "address": "Vill: Udaipur, Dist: Udaipur, Rajasthan",
    "image": "femaleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 13,
    "name": "Harish Kumar",
    "state": "Haryana",
    "cropsGrown": ["Urad Dal", "Masoor Dal"],
    "postalCode": "124001",
    "address": "Vill: Rohtak, Dist: Rohtak, Haryana",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 14,
    "name": "Pooja Sharma",
    "state": "Uttar Pradesh",
    "cropsGrown": ["Rajma", "Lobia"],
    "postalCode": "201001",
    "address": "Vill: Dadri, Dist: Gautam Buddha Nagar, Uttar Pradesh",
    "image": "femaleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 15,
    "name": "Vikram Mehta",
    "state": "Maharashtra",
    "cropsGrown": ["Moth Beans", "Toor Dal"],
    "postalCode": "444601",
    "address": "Vill: Murtizapur, Dist: Akola, Maharashtra",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 16,
    "name": "Meena Rathore",
    "state": "Punjab",
    "cropsGrown": ["Chana Dal", "Moong Dal"],
    "postalCode": "140001",
    "address": "Vill: Sarhali, Dist: Amritsar, Punjab",
    "image": "femaleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 17,
    "name": "Naveen Pratap",
    "state": "Gujarat",
    "cropsGrown": ["Lobia", "Masoor Dal"],
    "postalCode": "394107",
    "address": "Vill: Olpad, Dist: Surat, Gujarat",
    "image": "maleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 18,
    "name": "Sarla Rani",
    "state": "Karnataka",
    "cropsGrown": ["Toor Dal", "Urad Dal"],
    "postalCode": "571201",
    "address": "Vill: Maddur, Dist: Mandya, Karnataka",
    "image": "femaleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 19,
    "name": "Vijay Chauhan",
    "state": "Madhya Pradesh",
    "cropsGrown": ["Rajma", "Moong Dal"],
    "postalCode": "457001",
    "address": "Vill: Mhow, Dist: Indore, Madhya Pradesh",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 20,
    "name": "Rani Devi",
    "state": "Bihar",
    "cropsGrown": ["Chana Dal", "Moth Beans"],
    "postalCode": "824101",
    "address": "Vill: Gaya, Dist: Gaya, Bihar",
    "image": "femaleFarmerImage",
    "governmentVerified": false
  },
  {
      "farmerId": 21,
      "name": "Aakash Pandey",
      "state": "Uttar Pradesh",
      "cropsGrown": ["Toor Dal", "Moong Dal"],
      "postalCode": "210001",
      "address": "Vill: Banda, Dist: Banda, Uttar Pradesh",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 22,
      "name": "Shanti Devi",
      "state": "West Bengal",
      "cropsGrown": ["Masoor Dal", "Lobia"],
      "postalCode": "721101",
      "address": "Vill: Tamluk, Dist: Purba Medinipur, West Bengal",
      "image": "femaleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 23,
      "name": "Brijesh Kumar",
      "state": "Rajasthan",
      "cropsGrown": ["Rajma", "Chana Dal"],
      "postalCode": "341001",
      "address": "Vill: Nagaur, Dist: Nagaur, Rajasthan",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 24,
      "name": "Maya Devi",
      "state": "Haryana",
      "cropsGrown": ["Urad Dal", "Moth Beans"],
      "postalCode": "125001",
      "address": "Vill: Sirsa, Dist: Sirsa, Haryana",
      "image": "femaleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 25,
      "name": "Ravi Kishore",
      "state": "Bihar",
      "cropsGrown": ["Toor Dal", "Rajma"],
      "postalCode": "801103",
      "address": "Vill: Bihta, Dist: Patna, Bihar",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 26,
      "name": "Sushma Tiwari",
      "state": "Madhya Pradesh",
      "cropsGrown": ["Moong Dal", "Masoor Dal"],
      "postalCode": "472001",
      "address": "Vill: Tikamgarh, Dist: Tikamgarh, Madhya Pradesh",
      "image": "femaleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 27,
      "name": "Narayan Reddy",
      "state": "Karnataka",
      "cropsGrown": ["Lobia", "Chana Dal"],
      "postalCode": "577101",
      "address": "Vill: Davangere, Dist: Davangere, Karnataka",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 28,
      "name": "Radha Yadav",
      "state": "Uttar Pradesh",
      "cropsGrown": ["Moth Beans", "Rajma"],
      "postalCode": "224001",
      "address": "Vill: Faizabad, Dist: Ayodhya, Uttar Pradesh",
      "image": "femaleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 29,
      "name": "Naveen Kumar",
      "state": "Punjab",
      "cropsGrown": ["Masoor Dal", "Urad Dal"],
      "postalCode": "140401",
      "address": "Vill: Kharar, Dist: Mohali, Punjab",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 30,
      "name": "Sarita Chauhan",
      "state": "Maharashtra",
      "cropsGrown": ["Chana Dal", "Lobia"],
      "postalCode": "413001",
      "address": "Vill: Solapur, Dist: Solapur, Maharashtra",
      "image": "femaleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 31,
      "name": "Vikrant Singh",
      "state": "Rajasthan",
      "cropsGrown": ["Toor Dal", "Moong Dal"],
      "postalCode": "334001",
      "address": "Vill: Bikaner, Dist: Bikaner, Rajasthan",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 32,
      "name": "Neelam Verma",
      "state": "Bihar",
      "cropsGrown": ["Rajma", "Moth Beans"],
      "postalCode": "847211",
      "address": "Vill: Darbhanga, Dist: Darbhanga, Bihar",
      "image": "femaleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 33,
      "name": "Prakash Rao",
      "state": "Karnataka",
      "cropsGrown": ["Lobia", "Masoor Dal"],
      "postalCode": "577551",
      "address": "Vill: Sagar, Dist: Shimoga, Karnataka",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 34,
      "name": "Kalpana Singh",
      "state": "Uttar Pradesh",
      "cropsGrown": ["Moong Dal", "Chana Dal"],
      "postalCode": "221001",
      "address": "Vill: Varanasi, Dist: Varanasi, Uttar Pradesh",
      "image": "femaleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 35,
      "name": "Mahesh Kulkarni",
      "state": "Maharashtra",
      "cropsGrown": ["Toor Dal", "Urad Dal"],
      "postalCode": "416101",
      "address": "Vill: Kolhapur, Dist: Kolhapur, Maharashtra",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 36,
      "name": "Amrita Kaur",
      "state": "Punjab",
      "cropsGrown": ["Rajma", "Lobia"],
      "postalCode": "143001",
      "address": "Vill: Batala, Dist: Gurdaspur, Punjab",
      "image": "femaleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 37,
      "name": "Sanjay Deshmukh",
      "state": "Madhya Pradesh",
      "cropsGrown": ["Moth Beans", "Chana Dal"],
      "postalCode": "450001",
      "address": "Vill: Khandwa, Dist: Khandwa, Madhya Pradesh",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 38,
      "name": "Sunita Gupta",
      "state": "Haryana",
      "cropsGrown": ["Masoor Dal", "Moong Dal"],
      "postalCode": "125055",
      "address": "Vill: Hansi, Dist: Hisar, Haryana",
      "image": "femaleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 39,
      "name": "Rajesh Patel",
      "state": "Gujarat",
      "cropsGrown": ["Toor Dal", "Rajma"],
      "postalCode": "396001",
      "address": "Vill: Navsari, Dist: Navsari, Gujarat",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 40,
      "name": "Lalita Mishra",
      "state": "Uttar Pradesh",
      "cropsGrown": ["Lobia", "Chana Dal"],
      "postalCode": "281001",
      "address": "Vill: Mathura, Dist: Mathura, Uttar Pradesh",
      "image": "femaleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 41,
      "name": "Ashok Nair",
      "state": "Kerala",
      "cropsGrown": ["Moong Dal", "Rajma"],
      "postalCode": "670001",
      "address": "Vill: Kannur, Dist: Kannur, Kerala",
      "image": "maleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 42,
      "name": "Geeta Rani",
      "state": "Punjab",
      "cropsGrown": ["Masoor Dal", "Urad Dal"],
      "postalCode": "140301",
      "address": "Vill: Fatehgarh Sahib, Dist: Fatehgarh Sahib, Punjab",
      "image": "femaleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 43,
      "name": "Suresh Pawar",
      "state": "Maharashtra",
      "cropsGrown": ["Moth Beans", "Chana Dal"],
      "postalCode": "424001",
      "address": "Vill: Jalgaon, Dist: Jalgaon, Maharashtra",
      "image": "maleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 44,
      "name": "Pushpa Devi",
      "state": "Rajasthan",
      "cropsGrown": ["Toor Dal", "Lobia"],
      "postalCode": "302001",
      "address": "Vill: Amer, Dist: Jaipur, Rajasthan",
      "image": "femaleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 45,
      "name": "Karan Singh",
      "state": "Haryana",
      "cropsGrown": ["Rajma", "Masoor Dal"],
      "postalCode": "123401",
      "address": "Vill: Rewari, Dist: Rewari, Haryana",
      "image": "maleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 46,
      "name": "Rakhi Sharma",
      "state": "Uttar Pradesh",
      "cropsGrown": ["Moong Dal", "Chana Dal"],
      "postalCode": "243001",
      "address": "Vill: Bareilly, Dist: Bareilly, Uttar Pradesh",
      "image": "femaleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 47,
      "name": "Subhash Rao",
      "state": "Karnataka",
      "cropsGrown": ["Toor Dal", "Urad Dal"],
      "postalCode": "560001",
      "address": "Vill: Yelahanka, Dist: Bengaluru, Karnataka",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 48,
      "name": "Poonam Verma",
      "state": "Madhya Pradesh",
      "cropsGrown": ["Chana Dal", "Moth Beans"],
      "postalCode": "461001",
      "address": "Vill: Hoshangabad, Dist: Hoshangabad, Madhya Pradesh",
      "image": "femaleFarmerImage",
      "governmentVerified": false
    },
    {
      "farmerId": 49,
      "name": "Ramesh Patel",
      "state": "Gujarat",
      "cropsGrown": ["Rajma", "Moong Dal"],
      "postalCode": "387001",
      "address": "Vill: Nadiad, Dist: Kheda, Gujarat",
      "image": "maleFarmerImage",
      "governmentVerified": true
    },
    {
      "farmerId": 50,
      "name": "Bhavna Singh",
      "state": "Uttar Pradesh",
      "cropsGrown": ["Lobia", "Masoor Dal"],
      "postalCode": "250001",
      "address": "Vill: Meerut, Dist: Meerut, Uttar Pradesh",
      "image": "femaleFarmerImage",
      "governmentVerified": true
    }
];
