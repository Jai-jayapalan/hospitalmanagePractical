const initialData = [
    {
        "patientName": "John Doe",
        "patientID": "P001",
        "patientAge": 35,
        "patientGender": "Male",
        "patientCity": "Mumbai",
        "patientMobile": "9876543210",
        "patientEmail": "john.doe@mail.com"
      },
      {
        "patientName": "Jane Smith",
        "patientID": "P002",
        "patientAge": 28,
        "patientGender": "Female",
        "patientCity": "Delhi",
        "patientMobile": "9876543211",
        "patientEmail": "jane.smith@mail.com"
      },
      {
        "patientName": "David Johnson",
        "patientID": "P003",
        "patientAge": 42,
        "patientGender": "Male",
        "patientCity": "Chennai",
        "patientMobile": "9876543212",
        "patientEmail": "david.johnson@mail.com"
      },
      {
        "patientName": "Emily Brown",
        "patientID": "P004",
        "patientAge": 31,
        "patientGender": "Female",
        "patientCity": "Kolkata",
        "patientMobile": "9876543213",
        "patientEmail": "emily.brown@mail.com"
      },
      {
        "patientName": "Michael Wilson",
        "patientID": "P005",
        "patientAge": 45,
        "patientGender": "Male",
        "patientCity": "Bengaluru",
        "patientMobile": "9876543214",
        "patientEmail": "michael.wilson@mail.com"
      },
      {
        "patientName": "Olivia Davis",
        "patientID": "P006",
        "patientAge": 22,
        "patientGender": "Female",
        "patientCity": "Hyderabad",
        "patientMobile": "9876543215",
        "patientEmail": "olivia.davis@mail.com"
      },
      {
        "patientName": "William Taylor",
        "patientID": "P007",
        "patientAge": 37,
        "patientGender": "Male",
        "patientCity": "Ahmedabad",
        "patientMobile": "9876543216",
        "patientEmail": "william.taylor@mail.com"
      },
      {
        "patientName": "Sophia Anderson",
        "patientID": "P008",
        "patientAge": 29,
        "patientGender": "Female",
        "patientCity": "Pune",
        "patientMobile": "9876543217",
        "patientEmail": "sophia.anderson@mail.com"
      },
      {
        "patientName": "James Martinez",
        "patientID": "P009",
        "patientAge": 53,
        "patientGender": "Male",
        "patientCity": "Jaipur",
        "patientMobile": "9876543218",
        "patientEmail": "james.martinez@mail.com"
      },
      {
        "patientName": "Ava Thomas",
        "patientID": "P010",
        "patientAge": 26,
        "patientGender": "Female",
        "patientCity": "Lucknow",
        "patientMobile": "9876543219",
        "patientEmail": "ava.thomas@mail.com"
      },
      {
        "patientName": "Daniel Walker",
        "patientID": "P011",
        "patientAge": 41,
        "patientGender": "Male",
        "patientCity": "Chandigarh",
        "patientMobile": "9876543220",
        "patientEmail": "daniel.walker@mail.com"
      },
      {
        "patientName": "Mia Garcia",
        "patientID": "P012",
        "patientAge": 32,
        "patientGender": "Female",
        "patientCity": "Indore",
        "patientMobile": "9876543221",
        "patientEmail": "mia.garcia@mail.com"
      },
      {
        "patientName": "Matthew Martinez",
        "patientID": "P013",
        "patientAge": 37,
        "patientGender": "Male",
        "patientCity": "Coimbatore",
        "patientMobile": "9876543222",
        "patientEmail": "matthew.martinez@mail.com"
      },
      {
        "patientName": "Sofia Rodriguez",
        "patientID": "P014",
        "patientAge": 24,
        "patientGender": "Female",
        "patientCity": "Visakhapatnam",
        "patientMobile": "9876543223",
        "patientEmail": "sofia.rodriguez@mail.com"
      },
      {
        "patientName": "Christopher Clark",
        "patientID": "P015",
        "patientAge": 39,
        "patientGender": "Male",
        "patientCity": "Kochi",
        "patientMobile": "9876543224",
        "patientEmail": "christopher.clark@mail.com"
      },
      {
        "patientName": "Chloe Lee",
        "patientID": "P016",
        "patientAge": 28,
        "patientGender": "Female",
        "patientCity": "Nagpur",
        "patientMobile": "9876543225",
        "patientEmail": "chloe.lee@mail.com"
      },
      {
        "patientName": "Ryan Scott",
        "patientID": "P017",
        "patientAge": 34,
        "patientGender": "Male",
        "patientCity": "Patna",
        "patientMobile": "9876543226",
        "patientEmail": "ryan.scott@mail.com"
      },
      {
        "patientName": "Grace Wright",
        "patientID": "P018",
        "patientAge": 27,
        "patientGender": "Female",
        "patientCity": "Bhopal",
        "patientMobile": "9876543227",
        "patientEmail": "grace.wright@mail.com"
      },
      {
        "patientName": "Ethan Young",
        "patientID": "P019",
        "patientAge": 31,
        "patientGender": "Male",
        "patientCity": "Guwahati",
        "patientMobile": "9876543228",
        "patientEmail": "ethan.young@mail.com"
      },
      {
        "patientName": "Lily Turner",
        "patientID": "P020",
        "patientAge": 29,
        "patientGender": "Female",
        "patientCity": "Dehradun",
        "patientMobile": "9876543229",
        "patientEmail": "lily.turner@mail.com"
      },
      {
        "patientName": "Noah Baker",
        "patientID": "P021",
        "patientAge": 33,
        "patientGender": "Male",
        "patientCity": "Surat",
        "patientMobile": "9876543230",
        "patientEmail": "noah.baker@mail.com"
      },
      {
        "patientName": "Avery Lewis",
        "patientID": "P022",
        "patientAge": 25,
        "patientGender": "Female",
        "patientCity": "Jaipur",
        "patientMobile": "9876543231",
        "patientEmail": "avery.lewis@mail.com"
      },
      {
        "patientName": "Logan Hall",
        "patientID": "P023",
        "patientAge": 38,
        "patientGender": "Male",
        "patientCity": "Ahmedabad",
        "patientMobile": "9876543232",
        "patientEmail": "logan.hall@mail.com"
      },
      {
        "patientName": "Harper Turner",
        "patientID": "P024",
        "patientAge": 29,
        "patientGender": "Female",
        "patientCity": "Mumbai",
        "patientMobile": "9876543233",
        "patientEmail": "harper.turner@mail.com"
      },
      {
        "patientName": "Liam Collins",
        "patientID": "P025",
        "patientAge": 47,
        "patientGender": "Male",
        "patientCity": "Chennai",
        "patientMobile": "9876543234",
        "patientEmail": "liam.collins@mail.com"
      },
      {
        "patientName": "Evelyn Martinez",
        "patientID": "P026",
        "patientAge": 34,
        "patientGender": "Female",
        "patientCity": "Delhi",
        "patientMobile": "9876543235",
        "patientEmail": "evelyn.martinez@mail.com"
      },
      {
        "patientName": "Benjamin Adams",
        "patientID": "P027",
        "patientAge": 42,
        "patientGender": "Male",
        "patientCity": "Kolkata",
        "patientMobile": "9876543236",
        "patientEmail": "benjamin.adams@mail.com"
      },
      {
        "patientName": "Aria Morris",
        "patientID": "P028",
        "patientAge": 31,
        "patientGender": "Female",
        "patientCity": "Bengaluru",
        "patientMobile": "9876543237",
        "patientEmail": "aria.morris@mail.com"
      },
      {
        "patientName": "Henry Rivera",
        "patientID": "P029",
        "patientAge": 39,
        "patientGender": "Male",
        "patientCity": "Hyderabad",
        "patientMobile": "9876543238",
        "patientEmail": "henry.rivera@mail.com"
      },
      {
        "patientName": "Scarlett Ward",
        "patientID": "P030",
        "patientAge": 27,
        "patientGender": "Female",
        "patientCity": "Pune",
        "patientMobile": "9876543239",
        "patientEmail": "scarlett.ward@mail.com"
      },
      {
        "patientName": "Jack Hernandez",
        "patientID": "P031",
        "patientAge": 36,
        "patientGender": "Male",
        "patientCity": "Jaipur",
        "patientMobile": "9876543240",
        "patientEmail": "jack.hernandez@mail.com"
      },
      {
        "patientName": "Amelia Foster",
        "patientID": "P032",
        "patientAge": 26,
        "patientGender": "Female",
        "patientCity": "Lucknow",
        "patientMobile": "9876543241",
        "patientEmail": "amelia.foster@mail.com"
      },
      {
        "patientName": "Owen Ramirez",
        "patientID": "P033",
        "patientAge": 41,
        "patientGender": "Male",
        "patientCity": "Chandigarh",
        "patientMobile": "9876543242",
        "patientEmail": "owen.ramirez@mail.com"
      },
      {
        "patientName": "Mila Simmons",
        "patientID": "P034",
        "patientAge": 29,
        "patientGender": "Female",
        "patientCity": "Indore",
        "patientMobile": "9876543243",
        "patientEmail": "mila.simmons@mail.com"
      },
      {
        "patientName": "Lucas Coleman",
        "patientID": "P035",
        "patientAge": 38,
        "patientGender": "Male",
        "patientCity": "Coimbatore",
        "patientMobile": "9876543244",
        "patientEmail": "lucas.coleman@mail.com"
      },
      {
        "patientName": "Aurora Bell",
        "patientID": "P036",
        "patientAge": 23,
        "patientGender": "Female",
        "patientCity": "Visakhapatnam",
        "patientMobile": "9876543245",
        "patientEmail": "aurora.bell@mail.com"
      },
      {
        "patientName": "Gabriel Ross",
        "patientID": "P037",
        "patientAge": 35,
        "patientGender": "Male",
        "patientCity": "Kochi",
        "patientMobile": "9876543246",
        "patientEmail": "gabriel.ross@mail.com"
      },
      {
        "patientName": "Penelope Murphy",
        "patientID": "P038",
        "patientAge": 28,
        "patientGender": "Female",
        "patientCity": "Nagpur",
        "patientMobile": "9876543247",
        "patientEmail": "penelope.murphy@mail.com"
      },
      {
        "patientName": "Isaac Powell",
        "patientID": "P039",
        "patientAge": 33,
        "patientGender": "Male",
        "patientCity": "Patna",
        "patientMobile": "9876543248",
        "patientEmail": "isaac.powell@mail.com"
      },
      {
        "patientName": "Violet Foster",
        "patientID": "P040",
        "patientAge": 30,
        "patientGender": "Female",
        "patientCity": "Bhopal",
        "patientMobile": "9876543249",
        "patientEmail": "violet.foster@mail.com"
      },
      
]

module.exports = initialData