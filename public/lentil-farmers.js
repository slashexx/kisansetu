const farmers = [
    {
        "id": 1,
        "name": "Rajesh Kumar",
        "state": "Punjab",
        "cropsGrown": ["Toor Dal", "Chana Dal"],
        "produceAmount": [3000, 1200],
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": true
    },
    {
        "id": 2,
        "name": "Meena Singh",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Moong Dal", "Urad Dal"],
        "produceAmount": [5000, 2500],
        "image": "https://via.placeholder.com/40?text=M",
        "governmentVerified": false
    },
    {
        "id": 3,
        "name": "Amit Sharma",
        "state": "Maharashtra",
        "cropsGrown": ["Chana Dal", "Moong Dal"],
        "produceAmount": [4000, 3200],
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": true
    },
    {
        "id": 4,
        "name": "Sita Devi",
        "state": "Madhya Pradesh",
        "cropsGrown": ["Toor Dal", "Masoor Dal"],
        "produceAmount": [2900, 2100],
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "id": 5,
        "name": "Karan Patel",
        "state": "Gujarat",
        "cropsGrown": ["Moong Dal", "Chana Dal"],
        "produceAmount": [3300, 1500],
        "image": "https://via.placeholder.com/40?text=K",
        "governmentVerified": false
    },
    {
        "id": 6,
        "name": "Sunita Yadav",
        "state": "Haryana",
        "cropsGrown": ["Toor Dal", "Masoor Dal"],
        "produceAmount": [4000, 1700],
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "id": 7,
        "name": "Vikram Singh",
        "state": "Rajasthan",
        "cropsGrown": ["Moong Dal", "Urad Dal"],
        "produceAmount": [2400, 2800],
        "image": "https://via.placeholder.com/40?text=V",
        "governmentVerified": false
    },
    {
        "id": 8,
        "name": "Rohit Gupta",
        "state": "Bihar",
        "cropsGrown": ["Chana Dal", "Masoor Dal"],
        "produceAmount": [3500, 1800],
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": true
    },
    {
        "id": 9,
        "name": "Anita Joshi",
        "state": "West Bengal",
        "cropsGrown": ["Toor Dal", "Moong Dal"],
        "produceAmount": [2800, 2200],
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": true
    },
    {
        "id": 10,
        "name": "Rakesh Verma",
        "state": "Tamil Nadu",
        "cropsGrown": ["Masoor Dal", "Urad Dal"],
        "produceAmount": [3100, 900],
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": false
    },
    {
        "id": 11,
        "name": "Pooja Mehta",
        "state": "Karnataka",
        "cropsGrown": ["Chana Dal", "Moong Dal"],
        "produceAmount": [2600, 1800],
        "image": "https://via.placeholder.com/40?text=P",
        "governmentVerified": true
    },
    {
        "id": 12,
        "name": "Devendra Deshmukh",
        "state": "Maharashtra",
        "cropsGrown": ["Urad Dal", "Masoor Dal"],
        "produceAmount": [4500, 2000],
        "image": "https://via.placeholder.com/40?text=D",
        "governmentVerified": true
    },
    {
        "id": 13,
        "name": "Preeti Singh",
        "state": "Himachal Pradesh",
        "cropsGrown": ["Moong Dal", "Chana Dal"],
        "produceAmount": [1800, 2300],
        "image": "https://via.placeholder.com/40?text=P",
        "governmentVerified": false
    },
    {
        "id": 14,
        "name": "Gopal Naik",
        "state": "Kerala",
        "cropsGrown": ["Masoor Dal", "Toor Dal"],
        "produceAmount": [1700, 900],
        "image": "https://via.placeholder.com/40?text=G",
        "governmentVerified": true
    },
    {
        "id": 15,
        "name": "Lakshmi Reddy",
        "state": "Andhra Pradesh",
        "cropsGrown": ["Chana Dal", "Moong Dal"],
        "produceAmount": [3900, 3200],
        "image": "https://via.placeholder.com/40?text=L",
        "governmentVerified": false
    },
    {
        "id": 16,
        "name": "Abhinav Chauhan",
        "state": "Uttarakhand",
        "cropsGrown": ["Toor Dal", "Masoor Dal"],
        "produceAmount": [2700, 1600],
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": true
    },
    {
        "id": 17,
        "name": "Neha Sahu",
        "state": "Odisha",
        "cropsGrown": ["Chana Dal", "Moong Dal"],
        "produceAmount": [3800, 2200],
        "image": "https://via.placeholder.com/40?text=N",
        "governmentVerified": false
    },
    {
        "id": 18,
        "name": "Harish Bhatt",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Toor Dal", "Chana Dal"],
        "produceAmount": [4100, 2800],
        "image": "https://via.placeholder.com/40?text=H",
        "governmentVerified": true
    },
    {
        "id": 19,
        "name": "Kavita Dixit",
        "state": "Chhattisgarh",
        "cropsGrown": ["Masoor Dal", "Urad Dal"],
        "produceAmount": [2900, 1700],
        "image": "https://via.placeholder.com/40?text=K",
        "governmentVerified": false
    },
    {
        "id": 20,
        "name": "Manish Pandey",
        "state": "Jharkhand",
        "cropsGrown": ["Chana Dal", "Moong Dal"],
        "produceAmount": [3400, 2100],
        "image": "https://via.placeholder.com/40?text=M",
        "governmentVerified": true
    },
    {
        "id": 21,
        "name": "Sushila Thakur",
        "state": "Rajasthan",
        "cropsGrown": ["Masoor Dal", "Chana Dal"],
        "produceAmount": [2900, 3100],
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": false
    },
    {
        "id": 22,
        "name": "Deepak Patil",
        "state": "Maharashtra",
        "cropsGrown": ["Moong Dal", "Toor Dal"],
        "produceAmount": [3900, 3200],
        "image": "https://via.placeholder.com/40?text=D",
        "governmentVerified": true
    },
    {
        "id": 23,
        "name": "Gayatri Rao",
        "state": "Karnataka",
        "cropsGrown": ["Chana Dal", "Masoor Dal"],
        "produceAmount": [2800, 1700],
        "image": "https://via.placeholder.com/40?text=G",
        "governmentVerified": true
    },
    {
        "id": 24,
        "name": "Mahesh Yadav",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Toor Dal", "Chana Dal"],
        "produceAmount": [3200, 4100],
        "image": "https://via.placeholder.com/40?text=M",
        "governmentVerified": true
    },
    {
        "id": 25,
        "name": "Rekha Devi",
        "state": "Bihar",
        "cropsGrown": ["Masoor Dal", "Moong Dal"],
        "produceAmount": [3300, 2500],
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": false
    },
    {
        "id": 26,
        "name": "Rahul Chaturvedi",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Lobia", "Urad Dal"],
        "produceAmount": [3200, 2100],
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": true
    },
    {
        "id": 27,
        "name": "Jyoti Kumari",
        "state": "Madhya Pradesh",
        "cropsGrown": ["Chana dal", "Rajma"],
        "produceAmount": [3600, 2300],
        "image": "https://via.placeholder.com/40?text=J",
        "governmentVerified": false
    },
    {
        "id": 28,
        "name": "Dinesh Kumar",
        "state": "Haryana",
        "cropsGrown": ["Moong Dal", "Toor Dal"],
        "produceAmount": [2900, 2500],
        "image": "https://via.placeholder.com/40?text=D",
        "governmentVerified": true
    },
    {
        "id": 29,
        "name": "Anjali Gupta",
        "state": "West Bengal",
        "cropsGrown": ["Urad dal", "Chana dal"],
        "produceAmount": [3300, 1800],
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": false
    },
    {
        "id": 30,
        "name": "Sanjay Rao",
        "state": "Andhra Pradesh",
        "cropsGrown": ["Moth beans", "Lobia"],
        "produceAmount": [4500, 3200],
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "id": 31,
        "name": "Leela Thakur",
        "state": "Karnataka",
        "cropsGrown": ["Jowar", "Ragi"],
        "produceAmount": [1700, 1200],
        "image": "https://via.placeholder.com/40?text=L",
        "governmentVerified": true
    },
    {
        "id": 32,
        "name": "Vikash Mehta",
        "state": "Punjab",
        "cropsGrown": ["Wheat", "Rice"],
        "produceAmount": [4200, 2600],
        "image": "https://via.placeholder.com/40?text=V",
        "governmentVerified": true
    },
    {
        "id": 33,
        "name": "Neha Reddy",
        "state": "Tamil Nadu",
        "cropsGrown": ["Rice", "Maize"],
        "produceAmount": [3000, 1200],
        "image": "https://via.placeholder.com/40?text=N",
        "governmentVerified": false
    },
    {
        "id": 34,
        "name": "Rajeev Verma",
        "state": "Gujarat",
        "cropsGrown": ["Peas", "Wheat"],
        "produceAmount": [3300, 1700],
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": true
    },
    {
        "id": 35,
        "name": "Manju Devi",
        "state": "Rajasthan",
        "cropsGrown": ["Bajra", "Wheat"],
        "produceAmount": [2600, 1900],
        "image": "https://via.placeholder.com/40?text=M",
        "governmentVerified": false
    },
    {
        "id": 36,
        "name": "Shivam Kapoor",
        "state": "Bihar",
        "cropsGrown": ["Maize", "Rice"],
        "produceAmount": [3500, 2200],
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "id": 37,
        "name": "Sakshi Patel",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Pulses", "Rice"],
        "produceAmount": [3100, 2000],
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": false
    },
    {
        "id": 38,
        "name": "Krishna Rao",
        "state": "Karnataka",
        "cropsGrown": ["Mung bean", "Barley"],
        "produceAmount": [2000, 1800],
        "image": "https://via.placeholder.com/40?text=K",
        "governmentVerified": true
    },
    {
        "id": 39,
        "name": "Geeta Sharma",
        "state": "Himachal Pradesh",
        "cropsGrown": ["Peas", "Chickpeas"],
        "produceAmount": [2200, 1900],
        "image": "https://via.placeholder.com/40?text=G",
        "governmentVerified": true
    },
    {
        "id": 40,
        "name": "Sunil Singh",
        "state": "Uttarakhand",
        "cropsGrown": ["Rice", "Wheat"],
        "produceAmount": [2700, 2300],
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": false
    },
    {
        "id": 41,
        "name": "Priya Desai",
        "state": "Maharashtra",
        "cropsGrown": ["Bajra", "Jowar"],
        "produceAmount": [3200, 4000],
        "image": "https://via.placeholder.com/40?text=P",
        "governmentVerified": true
    },
    {
        "id": 42,
        "name": "Raj Patel",
        "state": "Gujarat",
        "cropsGrown": ["Ragi", "Mung beans"],
        "produceAmount": [2400, 2900],
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": true
    },
    {
        "id": 43,
        "name": "Usha Bhat",
        "state": "Karnataka",
        "cropsGrown": ["Jowar", "Bajra"],
        "produceAmount": [3000, 1300],
        "image": "https://via.placeholder.com/40?text=U",
        "governmentVerified": false
    },
    {
        "id": 44,
        "name": "Suraj Pandey",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Wheat", "Maize"],
        "produceAmount": [2800, 2400],
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
    {
        "id": 45,
        "name": "Rani Sharma",
        "state": "Madhya Pradesh",
        "cropsGrown": ["Rice", "Wheat"],
        "produceAmount": [2300, 2100],
        "image": "https://via.placeholder.com/40?text=R",
        "governmentVerified": true
    },
    {
        "id": 46,
        "name": "Kunal Aggarwal",
        "state": "Punjab",
        "cropsGrown": ["Chickpeas", "Wheat"],
        "produceAmount": [3700, 3300],
        "image": "https://via.placeholder.com/40?text=K",
        "governmentVerified": false
    },
    {
        "id": 47,
        "name": "Aarti Gupta",
        "state": "Haryana",
        "cropsGrown": ["Peas", "Wheat"],
        "produceAmount": [2800, 1700],
        "image": "https://via.placeholder.com/40?text=A",
        "governmentVerified": true
    },
    {
        "id": 48,
        "name": "Vikas Mishra",
        "state": "Uttar Pradesh",
        "cropsGrown": ["Rice", "Wheat"],
        "produceAmount": [3900, 2900],
        "image": "https://via.placeholder.com/40?text=V",
        "governmentVerified": false
    },
    {
        "id": 49,
        "name": "Suman Rao",
        "state": "Andhra Pradesh",
        "cropsGrown": ["Chickpeas", "Mung beans"],
        "produceAmount": [3600, 3100],
        "image": "https://via.placeholder.com/40?text=S",
        "governmentVerified": true
    },
];