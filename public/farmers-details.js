const farmerDetails = [
    {
        "farmerId": 1,
        "name": "Rajesh Kumar",
        "state": "Punjab",
        "cropsGrown": ["Wheat", "Rice"],
        "postalCode": "140001",
        "address": "Vill: Sarhali, Dist: Amritsar, Punjab",
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": true
    },
    {
        "farmerId": 2,
        "name": "Meena Singh",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Jowar", "Bajra"],
        "postalCode": "210001",
        "address": "Vill: Aliganj, Dist: Etah, Uttar Pradesh",
        "image": "https://via.placeholder.com/40?text=M",
        "governmentVerified": false
    },
    {
        "farmerfarmerId": 3,
        "name": "Amit Sharma",
        "state": "Maharashtra",
        "cropsGrown": ["Chickpeas", "Mung Beans"],
        "postalCode": "400001",
        "address": "Vill: Karjat, Dist: Raigad, Maharashtra",
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": true
    },
    {
        "farmerfarmerId": 4,
        "name": "Sita Devi",
        "state": "Madhya Pradesh",
        "cropsGrown": ["Wheat", "Peas"],
        "postalCode": "452001",
        "address": "Vill: Depalpur, Dist: Indore, Madhya Pradesh",
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "farmerId": 5,
        "name": "Karan Patel",
        "state": "Gujarat",
        "cropsGrown": ["Ragi", "Chickpeas"],
        "postalCode": "380001",
        "address": "Vill: Mandal, Dist: Ahmedabad, Gujarat",
        "image": "https://via.placeholder.com/40?text=K",
        "governmentVerified": false
    },
    {
        "farmerId": 6,
        "name": "Sunita Yadav",
        "state": "Haryana",
        "cropsGrown": ["Wheat", "Maize"],
        "postalCode": "134001",
        "address": "Vill: Ambala Cantt, Dist: Ambala, Haryana",
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "farmerId": 7,
        "name": "Vikram Singh",
        "state": "Rajasthan",
        "cropsGrown": ["Millets", "Barley"],
        "postalCode": "302001",
        "address": "Vill: Chomu, Dist: Jaipur, Rajasthan",
        "image": "https://via.placeholder.com/40?text=V",
        "governmentVerified": false
    },
    {
        "farmerId": 8,
        "name": "Rohit Gupta",
        "state": "Bihar",
        "cropsGrown": ["Rice", "Maize"],
        "postalCode": "800001",
        "address": "Vill: Masaurhi, Dist: Patna, Bihar",
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": true
    },
    {
        "farmerId": 9,
        "name": "Anita Joshi",
        "state": "West Bengal",
        "cropsGrown": ["Rice", "Jowar"],
        "postalCode": "700001",
        "address": "Vill: Baruipur, Dist: South 24 Parganas, West Bengal",
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": true
    },
    {
        "farmerId": 10,
        "name": "Rakesh Verma",
        "state": "Tamil Nadu",
        "cropsGrown": ["Rice", "Peas"],
        "postalCode": "600001",
        "address": "Vill: Tiruvallur, Dist: Chennai, Tamil Nadu",
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": false
    },
    {
        "farmerId": 11,
        "name": "Pooja Mehta",
        "state": "Karnataka",
        "cropsGrown": ["Chickpeas", "Ragi"],
        "postalCode": "560001",
        "address": "Vill: Anekal, Dist: Bengaluru, Karnataka",
        "image": "https://via.placeholder.com/40?text=P",
        "governmentVerified": true
    },
    {
        "farmerId": 12,
        "name": "Devendra Deshmukh",
        "state": "Maharashtra",
        "cropsGrown": ["Mung Beans", "Grapes"],
        "postalCode": "400002",
        "address": "Vill: Nashik, Dist: Nashik, Maharashtra",
        "image": "https://via.placeholder.com/40?text=D",
        "governmentVerified": true
    },
    {
        "farmerId": 13,
        "name": "Preeti Singh",
        "state": "Himachal Pradesh",
        "cropsGrown": ["Maize", "Ragi"],
        "postalCode": "171001",
        "address": "Vill: Rohru, Dist: Shimla, Himachal Pradesh",
        "image": "https://via.placeholder.com/40?text=P",
        "governmentVerified": false
    },
    {
        "farmerId": 14,
        "name": "Gopal Naik",
        "state": "Kerala",
        "cropsGrown": ["Rice", "Peas"],
        "postalCode": "695001",
        "address": "Vill: Neyyattinkara, Dist: Thiruvananthapuram, Kerala",
        "image": "https://via.placeholder.com/40?text=G",
        "governmentVerified": true
    },
    {
        "farmerId": 15,
        "name": "Lakshmi Reddy",
        "state": "Andhra Pradesh",
        "cropsGrown": ["Chickpeas", "Rice"],
        "postalCode": "500001",
        "address": "Vill: Kadapa, Dist: Kadapa, Andhra Pradesh",
        "image": "https://via.placeholder.com/40?text=L",
        "governmentVerified": false
    },
    {
        "farmerId": 16,
        "name": "Abhinav Chauhan",
        "state": "Uttarakhand",
        "cropsGrown": ["Wheat", "Bajra"],
        "postalCode": "248001",
        "address": "Vill: Doiwala, Dist: Dehradun, Uttarakhand",
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": true
    },
    {
        "farmerId": 17,
        "name": "Neha Sahu",
        "state": "Odisha",
        "cropsGrown": ["Rice", "Jowar"],
        "postalCode": "751001",
        "address": "Vill: Jatni, Dist: Khordha, Odisha",
        "image": "https://via.placeholder.com/40?text=N",
        "governmentVerified": false
    },
    {
        "farmerId": 18,
        "name": "Harish Bhatt",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Wheat", "Ragi"],
        "postalCode": "226001",
        "address": "Vill: Bakshi Ka Talab, Dist: Lucknow, Uttar Pradesh",
        "image": "https://via.placeholder.com/40?text=H",
        "governmentVerified": true
    },
    {
        "farmerId": 19,
        "name": "Kavita Dixit",
        "state": "Chhattisgarh",
        "cropsGrown": ["Rice", "Maize"],
        "postalCode": "492001",
        "address": "Vill: Arang, Dist: Raipur, Chhattisgarh",
        "image": "https://via.placeholder.com/40?text=K",
        "governmentVerified": false
    },
    {
        "farmerId": 20,
        "name": "Manish Pandey",
        "state": "Jharkhand",
        "cropsGrown": ["Rice", "Mung Beans"],
        "postalCode": "834001",
        "address": "Vill: Namkum, Dist: Ranchi, Jharkhand",
        "image": "https://via.placeholder.com/40?text=M",
        "governmentVerified": true
    },
    {
        "farmerId": 21,
        "name": "Sushila Thakur",
        "state": "Rajasthan",
        "cropsGrown": ["Bajra", "Wheat"],
        "postalCode": "302002",
        "address": "Vill: Kalwar, Dist: Jaipur, Rajasthan",
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": false
    },
    {
        "farmerId": 22,
        "name": "Deepak Patil",
        "state": "Maharashtra",
        "cropsGrown": ["Ragi", "Peas"],
        "postalCode": "400003",
        "address": "Vill: Ratnagiri, Dist: Ratnagiri, Maharashtra",
        "image": "https://via.placeholder.com/40?text=D",
        "governmentVerified": true
    },
    {
        "farmerId": 23,
        "name": "Gayatri Rao",
        "state": "Karnataka",
        "cropsGrown": ["Wheat", "Maize"],
        "postalCode": "560002",
        "address": "Vill: Yelahanka, Dist: Bengaluru, Karnataka",
        "image": "https://via.placeholder.com/40?text=G",
        "governmentVerified": false
    },
    {
        "farmerId": 24,
        "name": "Anil Kapoor",
        "state": "Punjab",
        "cropsGrown": ["Rice", "Wheat"],
        "postalCode": "140002",
        "address": "Vill: Rajpura, Dist: Patiala, Punjab",
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": true
    },
    {
        "farmerId": 25,
        "name": "Rina Sharma",
        "state": "Haryana",
        "cropsGrown": ["Rice", "Barley"],
        "postalCode": "134002",
        "address": "Vill: Pehowa, Dist: Kurukshetra, Haryana",
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": true
    },
    {
        "farmerId": 26,
        "name": "Asha Kumari",
        "state": "Bihar",
        "cropsGrown": ["Rice", "Jowar"],
        "postalCode": "800002",
        "address": "Vill: Bishanpur, Dist: Patna, Bihar",
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": true
    },
    {
        "farmerId": 27,
        "name": "Ravindra Yadav",
        "state": "Madhya Pradesh",
        "cropsGrown": ["Wheat", "Maize"],
        "postalCode": "452002",
        "address": "Vill: Simrol, Dist: Indore, Madhya Pradesh",
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": false
    },
    {
        "farmerId": 28,
        "name": "Bhavna Patel",
        "state": "Gujarat",
        "cropsGrown": ["Ragi", "Chickpeas"],
        "postalCode": "380002",
        "address": "Vill: Sanand, Dist: Ahmedabad, Gujarat",
        "image": "https://via.placeholder.com/40?text=B",
        "governmentVerified": true
    },
    {
        "farmerId": 29,
        "name": "Rahul Sharma",
        "state": "Rajasthan",
        "cropsGrown": ["Millets", "Barley"],
        "postalCode": "302003",
        "address": "Vill: Sanganer, Dist: Jaipur, Rajasthan",
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": false
    },
    {
        "farmerId": 30,
        "name": "Divya Singh",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Wheat", "Bajra"],
        "postalCode": "210002",
        "address": "Vill: Tindwari, Dist: Banda, Uttar Pradesh",
        "image": "https://via.placeholder.com/40?text=D",
        "governmentVerified": true
    },
    {
        "farmerId": 31,
        "name": "Prakash Nair",
        "state": "Kerala",
        "cropsGrown": ["Rice", "Peas"],
        "postalCode": "695002",
        "address": "Vill: Neyyattinkara, Dist: Thiruvananthapuram, Kerala",
        "image": "https://via.placeholder.com/40?text=P",
        "governmentVerified": true
    },
    {
        "farmerId": 32,
        "name": "Gita Bhardwaj",
        "state": "Haryana",
        "cropsGrown": ["Wheat", "Maize"],
        "postalCode": "134003",
        "address": "Vill: Raiwala, Dist: Panchkula, Haryana",
        "image": "https://via.placeholder.com/40?text=G",
        "governmentVerified": false
    },
    {
        "farmerId": 33,
        "name": "Vijay Kumar",
        "state": "Himachal Pradesh",
        "cropsGrown": ["Maize", "Ragi"],
        "postalCode": "171002",
        "address": "Vill: Kufri, Dist: Shimla, Himachal Pradesh",
        "image": "https://via.placeholder.com/40?text=V",
        "governmentVerified": true
    },
    {
        "farmerId": 34,
        "name": "Leela Reddy",
        "state": "Andhra Pradesh",
        "cropsGrown": ["Chickpeas", "Rice"],
        "postalCode": "500002",
        "address": "Vill: Ibrahimpatnam, Dist: Krishna, Andhra Pradesh",
        "image": "https://via.placeholder.com/40?text=L",
        "governmentVerified": false
    },
    {
        "farmerId": 35,
        "name": "Rohini Verma",
        "state": "West Bengal",
        "cropsGrown": ["Rice", "Jowar"],
        "postalCode": "700002",
        "address": "Vill: Chandannagar, Dist: Hooghly, West Bengal",
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": true
    },
    {
        "farmerId": 36,
        "name": "Mohit Tiwari",
        "state": "Chhattisgarh",
        "cropsGrown": ["Rice", "Maize"],
        "postalCode": "492002",
        "address": "Vill: Tilda, Dist: Raipur, Chhattisgarh",
        "image": "https://via.placeholder.com/40?text=M",
        "governmentVerified": false
    },
    {
        "farmerId": 37,
        "name": "Anjali Das",
        "state": "Odisha",
        "cropsGrown": ["Rice", "Mung Beans"],
        "postalCode": "751002",
        "address": "Vill: Satyabadi, Dist: Puri, Odisha",
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": true
    },
    {
        "farmerId": 38,
        "name": "Satish Mehta",
        "state": "Maharashtra",
        "cropsGrown": ["Mung Beans", "Grapes"],
        "postalCode": "400004",
        "address": "Vill: Igatpuri, Dist: Nashik, Maharashtra",
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": false
    },
    {
        "farmerId": 39,
        "name": "Kalpana Joshi",
        "state": "Karnataka",
        "cropsGrown": ["Ragi", "Maize"],
        "postalCode": "560003",
        "address": "Vill: Ramanagara, Dist: Bengaluru Rural, Karnataka",
        "image": "https://via.placeholder.com/40?text=K",
        "governmentVerified": true
    },
    {
        "farmerId": 40,
        "name": "Dharmendra Thakur",
        "state": "Jharkhand",
        "cropsGrown": ["Rice", "Chickpeas"],
        "postalCode": "834002",
        "address": "Vill: Ormanjhi, Dist: Ranchi, Jharkhand",
        "image": "https://via.placeholder.com/40?text=D",
        "governmentVerified": false
    },
    {
        "farmerId": 41,
        "name": "Suman Mishra",
        "state": "Uttarakhand",
        "cropsGrown": ["Bajra", "Wheat"],
        "postalCode": "248002",
        "address": "Vill: DevfarmerIdhura, Dist: Champawat, Uttarakhand",
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "farmerId": 42,
        "name": "Deepak Kumar",
        "state": "Tamil Nadu",
        "cropsGrown": ["Rice", "Maize"],
        "postalCode": "600002",
        "address": "Vill: Periyapalayam, Dist: Tiruvallur, Tamil Nadu",
        "image": "https://via.placeholder.com/40?text=D",
        "governmentVerified": false
    },
    {
        "farmerId": 43,
        "name": "Sneha Rathi",
        "state": "Punjab",
        "cropsGrown": ["Wheat", "Rice"],
        "postalCode": "140003",
        "address": "Vill: Kharar, Dist: Mohali, Punjab",
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "farmerId": 44,
        "name": "Jayesh Modi",
        "state": "Rajasthan",
        "cropsGrown": ["Barley", "Millets"],
        "postalCode": "302004",
        "address": "Vill: Laxmangarh, Dist: Alwar, Rajasthan",
        "image": "https://via.placeholder.com/40?text=J",
        "governmentVerified": false
    },
    {
        "farmerId": 45,
        "name": "Shalini Sharma",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Rice", "Peas"],
        "postalCode": "210003",
        "address": "Vill: Chitrakoot, Dist: Banda, Uttar Pradesh",
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "farmerId": 46,
        "name": "Suraj Shetty",
        "state": "Kerala",
        "cropsGrown": ["Rice", "Peas"],
        "postalCode": "695003",
        "address": "Vill: Kattakada, Dist: Thiruvananthapuram, Kerala",
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "farmerId": 47,
        "name": "Nisha Kaur",
        "state": "Punjab",
        "cropsGrown": ["Wheat", "Maize"],
        "postalCode": "140002",
        "address": "Vill: Majri, Dist: Rupnagar, Punjab",
        "image": "https://via.placeholder.com/40?text=N",
        "governmentVerified": false
    },
    {
        "farmerId": 48,
        "name": "Mohan Lal",
        "state": "Chhattisgarh",
        "cropsGrown": ["Rice", "Millets"],
        "postalCode": "492003",
        "address": "Vill: Kharora, Dist: Raipur, Chhattisgarh",
        "image": "https://via.placeholder.com/40?text=M",
        "governmentVerified": false
    },
    {
        "farmerId": 49,
        "name": "Kavita Chandra",
        "state": "Madhya Pradesh",
        "cropsGrown": ["Wheat", "Peas"],
        "postalCode": "452003",
        "address": "Vill: Mhow, Dist: Indore, Madhya Pradesh",
        "image": "https://via.placeholder.com/40?text=K",
        "governmentVerified": true
    },
    {
        "farmerId": 50,
        "name": "Ganesh Rao",
        "state": "Andhra Pradesh",
        "cropsGrown": ["Jowar", "Rice"],
        "postalCode": "500003",
        "address": "Vill: Mangalagiri, Dist: Guntur, Andhra Pradesh",
        "image": "https://via.placeholder.com/40?text=G",
        "governmentVerified": false
    }
];