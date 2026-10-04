// data/monday.js

// Ensure the master workout data registry exists
window.workoutData = window.workoutData || {};

// Register Monday (Key: 1)
window.workoutData[1] = {
  day: "Monday",
  focus: "Strength A",
  warmUp: [
    {
      id: "mon_w1",
      name: "Treadmill Walk",
      notes: "4 min comfortable brisk walk, followed by 2 min slightly faster. Feel warmer, not tired.",
      images: ["https://www.lifelongindiaonline.com/cdn/shop/files/61h2sG90b9L._SX679_620x620.jpg?v=1758780989", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMO9mrxZM-vpJRhql0W8hcswUCAjdNS3kro-x7VBHRA&s=10"],
      sets: "1 set",
      reps: "6 min total",
      time: "6 min"
    },
    {
      id: "mon_w2",
      name: "Arm Circles",
      notes: "Smooth, controlled circles.",
      images: ["https://spotebi.com/wp-content/uploads/2014/10/arm-circles-exercise-illustration.jpg", "https://cdni.iconscout.com/illustration/premium/thumb/female-doing-seated-arm-circles-illustration-svg-download-png-9635855.png"],
      sets: "1 set",
      reps: "10 each direction",
      time: "1 min"
    },
    {
      id: "mon_w3",
      name: "Bodyweight Squats",
      notes: "Mobilize hips and knees with a comfortable depth.",
      images: ["https://weighttraining.guide/wp-content/uploads/2018/07/Bodyweight-squat-resized.png", "https://cdn.mos.cms.futurecdn.net/5mscbo68LfJTHnajn7fj63.jpg"],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    },
    {
      id: "mon_w4",
      name: "Shoulder Rolls",
      notes: "Roll smoothly up, back, and down.",
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ua6ygaqdlEGmr5bQ_rSoYmMCnvG56F2DxnUogZT52jMihfcpNroGK2er&s=10", "https://www.drugs.com/cg/images/en3212592.jpg"],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    },
    {
      id: "mon_w5",
      name: "Hip Rotations",
      notes: "Loosen the pelvic and lower back region.",
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL46TXG76ar12TgGDdzZmdwrcZu0ZXXrgCw04J8snYfsC6BVpGNE-cMew&s=10", "https://blog.ocoach.app/wp-content/uploads/2022/11/SS2-4.gif"],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    }
  ],
  mainWorkout: [
    {
      id: "mon_m1",
      name: "Leg Press",
      notes: "Rest: 60–75s. Use a weight with 2–3 reps in reserve. Do not lock your knees.",
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8KdsevZds2jBr9ADwT766sYfJpJ2qAoJroMjnbp_bA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bHdXXvUX3iZj4Xs7qBH1A6usu8Z1_USqJKCjYWAmMA&s=10"],
      sets: "3 sets",
      reps: "10 reps",
      time: "8 min"
    },
    {
      id: "mon_m2",
      name: "Lat Pulldown",
      notes: "Rest: 60s. Pull toward upper chest. Think 'elbows down' rather than pulling with hands.",
      images: ["https://bo.onetoonefit.com/storage/posts/01KC78V457D5PGJNT740M97G2F.png", "https://tecafitness.com/wp-content/uploads/2024/02/SP500-Lat-pulldown-3-1.webp"],
      sets: "3 sets",
      reps: "10 reps",
      time: "7 min"
    },
    {
      id: "mon_m3",
      name: "Chest Press Machine",
      notes: "Rest: 60s. Controlled movement throughout.",
      images: ["https://training.fit/wp-content/uploads/2020/02/butterflys.png", "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif"],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "mon_m4",
      name: "Seated Leg Curl",
      notes: "Rest: 60s. Controlled contraction; do not throw the weight.",
      images: ["https://newlife.com.cy/wp-content/uploads/2019/08/seated-leg-curl-990x557.png", "https://static.strengthlevel.com/images/exercises/seated-leg-curl/howto/seated-leg-curl-howto-1-800.jpg"],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "mon_m5",
      name: "Seated Cable / Machine Row",
      notes: "Rest: 60s. Pull shoulder blades back rather than shrugging.",
      images: ["https://training.fit/wp-content/uploads/2020/02/rudern-kabelzug.png", "https://static.wixstatic.com/media/4d42bf_df36a4412806470b90ccff7b094e8c86~mv2.png/v1/fill/w_528,h_298,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4d42bf_df36a4412806470b90ccff7b094e8c86~mv2.png"],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "mon_m6",
      name: "Core: Plank",
      notes: "Rest: ~30s. Maintain a rigid, neutral spine.",
      images: ["https://fitnessprogramer.com/wp-content/uploads/2022/12/plank-for-bodyweight-exercises.gif", "hhttps://trainingstation.co.uk/cdn/shop/articles/Muscles-used-the-plank-variations_7e89cf37-ff4a-4040-8436-abefb144eb75_1280x.jpg?v=1746470406"],
      sets: "2 sets",
      reps: "30–45 sec hold",
      time: "3 min"
    }
  ],
  stretch: [
    {
      id: "mon_s1",
      name: "Chest Stretch",
      notes: "Gentle opening across pecs and anterior delts.",
      images: ["https://liftmanual.com/wp-content/uploads/2023/04/above-head-chest-stretch.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94ARwCiFjL7KUZAcisk4we9rUjkZVLltwf1551YXwCEYSxw74ixB4TZvz&s=10"],
      sets: "1 set",
      reps: "30s hold",
      time: "1 min"
    },
    {
      id: "mon_s2",
      name: "Lat / Back Stretch",
      notes: "Lengthen the lats along the side of the ribs.",
      images: ["https://habuildassets.s3.ap-south-1.amazonaws.com/habuildwebsitecms/best-stretching-exercises-for-lower-back-pain-1400x933.webp", "https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_450,h_300/q_auto,f_auto/redbullcom/2026/7/28/qlp70vuqgqvuuiebcmcq/xantheia-pennisi-stretching"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "mon_s3",
      name: "Hip Flexor Stretch",
      notes: "Release tension in the front of the hips.",
      images: ["https://geeksonfeet.com/img/workouts/kneeling-hipflexor-stretch.jpg", "https://backintelligence.com/wp-content/uploads/2018/01/kneeling-hip-flexor-stretch.webp"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "mon_s4",
      name: "Hamstring Stretch",
      notes: "Hinge at hips with a flat back.",
      images: ["https://www.popsci.com/wp-content/uploads/2026/03/best_hamstring_stretches.jpg?quality=85&w=1200", "https://media.self.com/photos/685da187785a35474b496487/1:1/w_4000,h_4000,c_limit/rebecca-hurdler-hamstring-stretch.jpg"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "mon_s5",
      name: "Quad Stretch",
      notes: "Keep knees close together and hips forward.",
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22Gonr7YliiuKdCzGQGbqwYswqzZfSBxltq808rqrris-fJ3fchLQIVc&s=10", "https://hips.hearstapps.com/hmg-prod/images/quad-stretch-66b37d0214ffe.jpg?crop=0.616xw:0.921xh;0.207xw,0.0127xh&resize=640:*"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "mon_s6",
      name: "Calf Stretch",
      notes: "Press heel down gently against the floor.",
      images: ["https://www.jlivingstone.co.uk/wp-content/uploads/2018/03/Calf-Stretch.jpg", "https://cdn.shopify.com/s/files/1/0742/5556/5121/files/CALF-STRETCH-1.jpg"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    }
  ]
};