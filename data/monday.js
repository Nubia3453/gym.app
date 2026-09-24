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
      images: ["https://picsum.photos/400/300?treadmill1", "https://picsum.photos/400/300?treadmill2"],
      sets: "1 set",
      reps: "6 min total",
      time: "6 min"
    },
    {
      id: "mon_w2",
      name: "Arm Circles",
      notes: "Smooth, controlled circles.",
      images: ["https://picsum.photos/400/300?armcircles1", "https://picsum.photos/400/300?armcircles2"],
      sets: "1 set",
      reps: "10 each direction",
      time: "1 min"
    },
    {
      id: "mon_w3",
      name: "Bodyweight Squats",
      notes: "Mobilize hips and knees with a comfortable depth.",
      images: ["https://picsum.photos/400/300?squats1", "https://picsum.photos/400/300?squats2"],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    },
    {
      id: "mon_w4",
      name: "Shoulder Rolls",
      notes: "Roll smoothly up, back, and down.",
      images: ["https://picsum.photos/400/300?shoulders1", "https://picsum.photos/400/300?shoulders2"],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    },
    {
      id: "mon_w5",
      name: "Hip Rotations",
      notes: "Loosen the pelvic and lower back region.",
      images: ["https://picsum.photos/400/300?hiprot1", "https://picsum.photos/400/300?hiprot2"],
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
      images: ["https://picsum.photos/400/300?legpress1", "https://picsum.photos/400/300?legpress2"],
      sets: "3 sets",
      reps: "10 reps",
      time: "8 min"
    },
    {
      id: "mon_m2",
      name: "Lat Pulldown",
      notes: "Rest: 60s. Pull toward upper chest. Think 'elbows down' rather than pulling with hands.",
      images: ["https://picsum.photos/400/300?latpulldown1", "https://picsum.photos/400/300?latpulldown2"],
      sets: "3 sets",
      reps: "10 reps",
      time: "7 min"
    },
    {
      id: "mon_m3",
      name: "Chest Press Machine",
      notes: "Rest: 60s. Controlled movement throughout.",
      images: ["https://picsum.photos/400/300?chestpress1", "https://picsum.photos/400/300?chestpress2"],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "mon_m4",
      name: "Seated Leg Curl",
      notes: "Rest: 60s. Controlled contraction; do not throw the weight.",
      images: ["https://picsum.photos/400/300?legcurl1", "https://picsum.photos/400/300?legcurl2"],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "mon_m5",
      name: "Seated Cable / Machine Row",
      notes: "Rest: 60s. Pull shoulder blades back rather than shrugging.",
      images: ["https://picsum.photos/400/300?cablerow1", "https://picsum.photos/400/300?cablerow2"],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "mon_m6",
      name: "Core: Plank",
      notes: "Rest: ~30s. Maintain a rigid, neutral spine.",
      images: ["https://picsum.photos/400/300?plank1", "https://picsum.photos/400/300?plank2"],
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
      images: ["https://picsum.photos/400/300?pecstretch1", "https://picsum.photos/400/300?pecstretch2"],
      sets: "1 set",
      reps: "30s hold",
      time: "1 min"
    },
    {
      id: "mon_s2",
      name: "Lat / Back Stretch",
      notes: "Lengthen the lats along the side of the ribs.",
      images: ["https://picsum.photos/400/300?latstretch1", "https://picsum.photos/400/300?latstretch2"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "mon_s3",
      name: "Hip Flexor Stretch",
      notes: "Release tension in the front of the hips.",
      images: ["https://picsum.photos/400/300?hipstretch1", "https://picsum.photos/400/300?hipstretch2"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "mon_s4",
      name: "Hamstring Stretch",
      notes: "Hinge at hips with a flat back.",
      images: ["https://picsum.photos/400/300?hamstretch1", "https://picsum.photos/400/300?hamstretch2"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "mon_s5",
      name: "Quad Stretch",
      notes: "Keep knees close together and hips forward.",
      images: ["https://picsum.photos/400/300?quadstretch1", "https://picsum.photos/400/300?quadstretch2"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "mon_s6",
      name: "Calf Stretch",
      notes: "Press heel down gently against the floor.",
      images: ["https://picsum.photos/400/300?calfstretch1", "https://picsum.photos/400/300?calfstretch2"],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    }
  ]
};