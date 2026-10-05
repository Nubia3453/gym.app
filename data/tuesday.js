// data/tuesday.js

// Ensure the global workout dictionary exists
window.workoutData = window.workoutData || {};

// Register Tuesday (Key: 2)
window.workoutData[2] = {
  day: "Tuesday",
  focus: "Mobility + Cardio",
  
  // Section 1: Aerobic Base & Warm-up
  warmUp: [
    {
      id: "tue_w1",
      name: "Treadmill Brisk Walk",
      notes: "Comfortable brisk walking. You should be able to talk without struggling. Don't turn this into running.",
      images: [
        "https://images.ctfassets.net/1q5z3k4ftwpz/43ltI6uNBC4Hrpx3UEl0u2/0f97d3418450c6a718480d2592a04a34/5-benefits-of-walking-on-a-treadmill-for-fitness-and-wellbeing",
        "https://www.google.com/imgres?q=trade%20mill%20walk&imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fvader-prod.s3.amazonaws.com%2F1731686514-71MyZJ7JUIL.jpg%3Fcrop%3D1xw%3A0.928xh%3Bcenter%2Ctop%26resize%3D980%3A*&imgrefurl=https%3A%2F%2Fwww.womenshealthmag.com%2Ffitness%2Fa63259681%2Findoor-walking-workout%2F&docid=-PwX22M3swc-FM&tbnid=5YUnLQRNIfvmHM&vet=12ahUKEwi-7pPYp6OXAxVImuEIHUmYIcwQnPAOegQIVBAA..i&w=980&h=980&hcb=2&ved=2ahUKEwi-7pPYp6OXAxVImuEIHUmYIcwQnPAOegQIVBAA"
      ],
      sets: "1 continuous bout",
      reps: "15–20 mins",
      time: "15–20 min"
    }
  ],

  // Section 2: Dedicated Mobility Circuit
  mainWorkout: [
    {
      id: "tue_m1",
      name: "Cat-Cow Stretch",
      notes: "Move with your breath. Inhale as you drop your belly and lift your chest; exhale as you round your spine.",
      images: [
        "https://media1.popsugar-assets.com/files/thumbor/FcTiEzA4dpzP5LND0I0csu36jQE=/1456x1456/filters:format_auto():quality(85):extract_cover()/2025/01/10/960/n/1922729/tmp_TSf6dQ_46ee51111cabbf45_PS24_Fitness_CatCow_Horizontal.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/cat-cow-1612960265.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*"
      ],
      sets: "1–2 sets",
      reps: "8–10 reps",
      time: "2 min"
    },
    {
      id: "tue_m2",
      name: "Thoracic Rotation",
      notes: "From quadruped position, open up through the mid-back and chest without twisting your pelvis.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiIkn-UF6HqT5nLKJjJPjcKTeENQH2dNYhg_SxR79qAKwVQYp7xls-PQ&s=10",
        "https://sustainableexercise.wordpress.com/wp-content/uploads/2014/08/side-lying-thoracic-extension-rotation.jpg"
      ],
      sets: "1 set",
      reps: "8 reps / side",
      time: "2 min"
    },
    {
      id: "tue_m3",
      name: "Hip Circles",
      notes: "Perform slow, controlled articular rotations to open up tight hip sockets.",
      images: [
        "https://liftmanual.com/wp-content/uploads/2023/04/standing-hip-circle.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThaHT0n_5kvux_aUy0Fm0mAtzL6aJ7faNQ45FDN5-jdLNTDbtC6uK39JT5&s=10"
      ],
      sets: "1 set",
      reps: "10 reps / side",
      time: "2 min"
    },
    {
      id: "tue_m4",
      name: "Bodyweight Squat",
      notes: "Focus on controlled depth and active hip opening at the bottom position.",
      images: [
        "https://weighttraining.guide/wp-content/uploads/2018/07/Bodyweight-squat-resized.png",
        "https://training.fit/wp-content/uploads/2020/03/kniebeugen-800x448.png"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "3 min"
    },
    {
      id: "tue_m5",
      name: "World's Greatest Stretch",
      notes: "Step into a deep lunge, drop inside elbow toward the instep, and rotate the chest skyward.",
      images: [
        "https://liftmanual.com/wp-content/uploads/2023/04/worlds-greatest-stretch.jpg",
        "https://pbs.twimg.com/media/FkAeGbvaEAEzvXg?format=webp&name=large"
      ],
      sets: "1 set",
      reps: "5 reps / side",
      time: "3 min"
    },
    {
      id: "tue_m6",
      name: "Shoulder Circles",
      notes: "Full controlled rotations: 10 forward, followed immediately by 10 backward.",
      images: [
        "https://liftmanual.com/wp-content/uploads/2023/04/shoulder-circle.jpg",
        "https://liftmanual.com/wp-content/uploads/2023/04/arm-circles.jpg"
      ],
      sets: "1 set",
      reps: "10 fwd + 10 back",
      time: "1 min"
    },
    {
      id: "tue_m7",
      name: "Ankle Mobility (Wall or Floor Rockers)",
      notes: "Keep your heel firmly glued down while driving your knee forward past the toes.",
      images: [
        "https://hips.hearstapps.com/hmg-prod/images/athlete-woman-running-warming-up-royalty-free-image-1741813775.pjpeg?crop=0.583xw:0.873xh;0.184xw,0.127xh&resize=640:*",
        "https://media.post.rvohealth.io/wp-content/uploads/2023/08/DangerousGlaringBuck-size_restricted.gif"
      ],
      sets: "1 set",
      reps: "10 reps / side",
      time: "2 min"
    }
  ],

  // Section 3: Relaxation & Cooldown
  stretch: [
    {
      id: "tue_s1",
      name: "Chest Stretch",
      notes: "Gentle opening across pecs and anterior delts.",
      images: ["https://liftmanual.com/wp-content/uploads/2023/04/above-head-chest-stretch.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94ARwCiFjL7KUZAcisk4we9rUjkZVLltwf1551YXwCEYSxw74ixB4TZvz&s=10"],
      sets: "1 set",
      reps: "30s hold",
      time: "1 min"
    },
    {
      id: "tue_s2",
      name: "Lat / Back Stretch",
      notes: "Lengthen the lats along the side of the ribs.",
      images: ["https://habuildassets.s3.ap-south-1.amazonaws.com/habuildwebsitecms/best-stretching-exercises-for-lower-back-pain-1400x933.webp", "https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_450,h_300/q_auto,f_auto/redbullcom/2026/7/28/qlp70vuqgqvuuiebcmcq/xantheia-pennisi-stretching"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "tue_s3",
      name: "Hip Flexor Stretch",
      notes: "Release tension in the front of the hips.",
      images: ["https://geeksonfeet.com/img/workouts/kneeling-hipflexor-stretch.jpg", "https://backintelligence.com/wp-content/uploads/2018/01/kneeling-hip-flexor-stretch.webp"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "tue_s4",
      name: "Hamstring Stretch",
      notes: "Hinge at hips with a flat back.",
      images: ["https://www.popsci.com/wp-content/uploads/2026/03/best_hamstring_stretches.jpg?quality=85&w=1200", "https://media.self.com/photos/685da187785a35474b496487/1:1/w_4000,h_4000,c_limit/rebecca-hurdler-hamstring-stretch.jpg"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "tue_s5",
      name: "Quad Stretch",
      notes: "Keep knees close together and hips forward.",
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22Gonr7YliiuKdCzGQGbqwYswqzZfSBxltq808rqrris-fJ3fchLQIVc&s=10", "https://hips.hearstapps.com/hmg-prod/images/quad-stretch-66b37d0214ffe.jpg?crop=0.616xw:0.921xh;0.207xw,0.0127xh&resize=640:*"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "tue_s6",
      name: "Calf Stretch",
      notes: "Press heel down gently against the floor.",
      images: ["https://www.jlivingstone.co.uk/wp-content/uploads/2018/03/Calf-Stretch.jpg", "https://cdn.shopify.com/s/files/1/0742/5556/5121/files/CALF-STRETCH-1.jpg"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    }
  ]
};